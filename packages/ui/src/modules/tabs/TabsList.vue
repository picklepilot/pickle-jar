<template>
    <div
        ref="containerRef"
        :class="
            m(
                'flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3',
                orientation.value === 'vertical' ? 'flex-col space-y-1' : ''
            )
        "
    >
        <slot name="before" />

        <!-- Main tabs container with overflow detection -->
        <div ref="tabsContainerRef" class="flex-1 min-w-0">
            <Sortable
                :list="visibleTabs"
                :key="'tabs-nav'"
                item-key="id"
                tag="div"
                :class="
                    m(
                        'flex flex-wrap space-x-0.5 sm:space-x-1 md:space-x-1.5 lg:space-x-2',
                        orientation.value === 'vertical'
                            ? 'flex-col space-y-1'
                            : '',
                        theme.value.sortableContainer
                    )
                "
                :options="{
                    animation: 300,
                    chosenClass: 'sortable-chosen',
                    dragClass: 'sortable-drag',
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    fallbackClass: 'sortable-fallback',
                    fallbackOnBody: true,
                    ghostClass: 'sortable-ghost',
                    group: 'shared-tabs-nav',
                    horizontal: orientation.value === 'horizontal',
                    scroll: true,
                    scrollSensitivity: 30,
                    scrollSpeed: 10,
                    selectedClass: 'selected',
                }"
                @update="onUpdatedList"
                @start="onDragStart"
                @end="onDragEnd"
            >
                <template v-slot:item="{ element }">
                    <slot name="trigger" :tab="element" />
                </template>
            </Sortable>
        </div>

        <!-- Overflow dropdown using Dropdown component -->
        <Dropdown v-if="overflowTabs.length > 0" class="flex items-center">
            <DropdownTrigger as-child>
                <button
                    ref="moreButtonRef"
                    :class="
                        m(
                            'flex items-center justify-center rounded-t-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out transform border border-border bg-card hover:bg-accent hover:text-accent-foreground sm:px-4 sm:py-2 md:px-5 md:py-2.5'
                        )
                    "
                    aria-label="More tabs"
                >
                    <span class="hidden sm:inline">More</span>
                    <span class="sm:hidden">⋯</span>
                    <ChevronDown
                        class="ml-1 h-4 w-4 transition-transform duration-200"
                    />
                </button>
            </DropdownTrigger>

            <DropdownContent
                :align="'end'"
                :side-offset="8"
                class="min-w-[8rem]"
            >
                <DropdownItem
                    v-for="tab in overflowTabs"
                    :key="tab.id"
                    @click="handleDropdownTabClick(tab.id)"
                    :class="
                        m(
                            'flex items-center',
                            tab.active ? 'bg-accent text-accent-foreground' : ''
                        )
                    "
                >
                    <slot name="overflow-trigger" :tab="tab" />
                </DropdownItem>
            </DropdownContent>
        </Dropdown>

        <slot name="after" />
    </div>

    <hr
        v-if="style.value === 'classic' && !disabled.value.includes('border')"
        :class="m('border-t', theme.value.tabsNavLine)"
    />
</template>

<script setup lang="ts">
import { m } from '../../utils'
import {
    ref,
    watch,
    computed,
    onMounted,
    onUnmounted,
    nextTick,
    inject,
} from 'vue'
import { Sortable } from 'sortablejs-vue3'
import { type Tab } from '../../types'
import { ChevronDown } from 'lucide-vue-next'
import Dropdown from '../../components/dropdown/Dropdown.vue'
import DropdownTrigger from '../../components/dropdown/DropdownTrigger.vue'
import DropdownContent from '../../components/dropdown/DropdownContent.vue'
import DropdownItem from '../../components/dropdown/DropdownItem.vue'

// Define the tabs context type
interface TabsContext {
    value: { value: string | number }
    orientation: { value: 'horizontal' | 'vertical' }
    style: { value: 'classic' | 'modern' }
    disabled: { value: string[] }
    theme: { value: any }
    tabs: { value: Tab[] }
    onValueChange: (value: string | number) => void
    onTabsUpdate: (tabs: Tab[]) => void
}

// Inject tabs context
const tabsContext = inject('tabs') as TabsContext

if (!tabsContext) {
    throw new Error('TabsList must be used within a Tabs component')
}

const { value, orientation, style, disabled, theme, tabs, onTabsUpdate } =
    tabsContext

// Refs
const containerRef = ref<HTMLElement>()
const tabsContainerRef = ref<HTMLElement>()
const moreButtonRef = ref<HTMLElement>()
const allTabRefs = ref<HTMLElement[]>([])
const visibleTabsCount = ref(tabs.value.length)
const isDragging = ref(false)

// Computed properties for responsive tab management
const visibleTabs = computed(() => {
    return tabs.value.slice(0, visibleTabsCount.value)
})

const overflowTabs = computed(() => {
    return tabs.value.slice(visibleTabsCount.value)
})

const MORE_BUTTON_WIDTH_ESTIMATE = 80 // A safe estimate for the "More..." button

// Calculate which tabs fit in the available space
const calculateVisibleTabs = () => {
    if (!tabsContainerRef.value || allTabRefs.value.length === 0) {
        visibleTabsCount.value = tabs.value.length
        return
    }

    const containerWidth = tabsContainerRef.value.offsetWidth

    let totalWidth = 0
    let allTabsFit = true

    // Check if all tabs can fit
    for (let i = 0; i < allTabRefs.value.length; i++) {
        const tabEl = allTabRefs.value[i]
        const spacing = i > 0 ? getTabSpacing() : 0
        totalWidth += tabEl.offsetWidth + spacing
        if (totalWidth > containerWidth) {
            allTabsFit = false
            break
        }
    }

    if (allTabsFit) {
        visibleTabsCount.value = tabs.value.length
        return
    }

    // If they don't all fit, calculate how many can fit along with the "More" button.
    const availableWidthWithMore = containerWidth - MORE_BUTTON_WIDTH_ESTIMATE
    let visibleCount = 0
    totalWidth = 0

    for (let i = 0; i < allTabRefs.value.length; i++) {
        const tabEl = allTabRefs.value[i]
        const spacing = i > 0 ? getTabSpacing() : 0
        if (
            totalWidth + tabEl.offsetWidth + spacing <=
            availableWidthWithMore
        ) {
            totalWidth += tabEl.offsetWidth + spacing
            visibleCount++
        } else {
            break
        }
    }

    if (
        visibleCount === 0 &&
        allTabRefs.value.length > 0 &&
        allTabRefs.value[0].offsetWidth <= availableWidthWithMore
    ) {
        visibleCount = 1
    }

    visibleTabsCount.value = visibleCount
}

// Get the spacing between tabs based on current breakpoint
const getTabSpacing = (): number => {
    const width = window.innerWidth
    if (width < 640) return 4 // space-x-1 = 0.25rem = 4px
    if (width < 768) return 6 // space-x-1.5 = 0.375rem = 6px
    if (width < 1024) return 8 // space-x-2 = 0.5rem = 8px
    if (width < 1280) return 10 // space-x-2.5 = 0.625rem = 10px
    return 12 // space-x-3 = 0.75rem = 12px
}

let resizeTimeout: number
const debouncedCalculate = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = window.setTimeout(calculateVisibleTabs, 150)
}

// Lifecycle hooks
onMounted(() => {
    nextTick(calculateVisibleTabs)
    window.addEventListener('resize', debouncedCalculate)
})

onUnmounted(() => {
    window.removeEventListener('resize', debouncedCalculate)
    clearTimeout(resizeTimeout)
})

watch(
    () => tabs.value,
    () => {
        nextTick(calculateVisibleTabs)
    },
    { deep: true }
)

function handleDropdownTabClick(tabId: string | number) {
    const clickedTabIndex = tabs.value.findIndex(tab => tab.id === tabId)

    // Safeguard: if not found or already visible, just emit click
    if (clickedTabIndex < visibleTabsCount.value && clickedTabIndex !== -1) {
        return
    }

    // Move the clicked tab to be the last visible tab
    const newTabs = [...tabs.value]
    const item = newTabs.splice(clickedTabIndex, 1)[0]
    newTabs.splice(visibleTabsCount.value - 1, 0, item)

    // Notify parent about the new order
    onTabsUpdate(newTabs)
}

function onUpdatedList(params: any) {
    const newVisible = [...visibleTabs.value]
    const item = newVisible.splice(params.oldIndex, 1)[0]
    newVisible.splice(params.newIndex, 0, item)

    const newEffective = [...newVisible, ...overflowTabs.value]
    onTabsUpdate(newEffective)
}

function onDragStart() {
    isDragging.value = true
}

function onDragEnd() {
    isDragging.value = false
}

// Expose methods for parent components
defineExpose({
    calculateVisibleTabs,
    getVisibleTabs: () => visibleTabs.value,
    getOverflowTabs: () => overflowTabs.value,
})
</script>

<style scoped>
/* Smooth transitions for drag and drop */
.sortable-ghost {
    opacity: 0.5;
    transform: rotate(5deg) scale(0.95);
    transition: all 0.2s ease-in-out;
}

.sortable-drag {
    transform: rotate(5deg) scale(1.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    z-index: 1001;
}

.sortable-fallback {
    transform: rotate(5deg) scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
}

/* Smooth spacing transitions */
.sortable-container {
    transition: all 0.3s ease-in-out;
}

/* Container animations */
.sortable-container {
    transition: padding 0.3s ease-in-out;
}

/* Tab spacing animations */
.pj-tab + .pj-tab {
    transition: margin-left 0.3s ease-in-out;
}
</style>
