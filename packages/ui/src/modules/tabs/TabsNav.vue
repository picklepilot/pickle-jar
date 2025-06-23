<template>
    <div
        ref="containerRef"
        :class="m('relative z-10 mx-auto', classes.container, theme.container)"
    >
        <!-- Hidden container for measurement -->
        <div class="absolute top-0 left-0 invisible -z-10 flex flex-nowrap">
            <a
                v-for="element in effectiveTabs"
                :key="`measure-${element.id}`"
                ref="allTabRefs"
                :class="
                    m(
                        'pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3',
                        style === 'classic'
                            ? 'px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4'
                            : 'flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4',
                        element.classes || '',
                        tabClasses,
                        classes.tab,
                        theme.tabsNavTab
                    )
                "
            >
                <slot name="left" v-bind="element" />
                <span v-if="!$slots.label" v-html="element.label" />
                <slot name="label" v-bind="element" />
                <slot name="right" v-bind="element" />
            </a>
        </div>

        <div
            class="flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3"
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
                            theme.sortableContainer
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
                        horizontal: true,
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
                        <a
                            :key="element.id"
                            href="#"
                            @click.prevent="
                                evt => {
                                    evt.preventDefault()
                                    $emit('clicked', element.id)
                                }
                            "
                            :class="
                                m(
                                    'pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3',
                                    style === 'classic'
                                        ? 'px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4'
                                        : 'flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4',
                                    element.classes || '',
                                    tabClasses,
                                    classes.tab,
                                    theme.tabsNavTab
                                )
                            "
                            :data-active="(element?.active ?? false).toString()"
                        >
                            <slot name="left" v-bind="element" />
                            <span v-if="!$slots.label" v-html="element.label" />
                            <slot name="label" v-bind="element" />
                            <slot name="right" v-bind="element" />
                        </a>
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
                                tab.active
                                    ? 'bg-accent text-accent-foreground'
                                    : ''
                            )
                        "
                    >
                        <slot name="left" v-bind="tab" />
                        <span v-if="!$slots.label" v-html="tab.label" />
                        <slot name="label" v-bind="tab" />
                        <slot name="right" v-bind="tab" />
                    </DropdownItem>
                </DropdownContent>
            </Dropdown>

            <slot name="after" />
        </div>

        <hr
            v-if="true || (style === 'classic' && !disabled.includes('border'))"
            :class="m('border-t', theme.tabsNavLine)"
        />
    </div>
</template>

<script setup lang="ts">
import { m } from '../../utils'
import { ref, watch, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { Sortable } from 'sortablejs-vue3'
import { type Tab } from '../../types'
import { ChevronDown } from 'lucide-vue-next'
import Dropdown from '../../components/dropdown/Dropdown.vue'
import DropdownTrigger from '../../components/dropdown/DropdownTrigger.vue'
import DropdownContent from '../../components/dropdown/DropdownContent.vue'
import DropdownItem from '../../components/dropdown/DropdownItem.vue'

// define props using withDefaults from vue api
const props = withDefaults(
    defineProps<{
        classes?: {
            container?: string
            line?: string
            tab?: string
        }
        style?: 'classic' | 'modern'
        idField?: string
        disabled?: string[]
        tabClasses?: string[]
        tabs: Tab[]
        theme?: {
            container?: string
            sortableContainer?: string
            tabsNavTab?: string
            tabsNavLine?: string
        }
    }>(),
    {
        idField: 'id',
        style: 'classic',
        classes: () => ({
            container: '',
            line: '',
            tab: '',
        }),
        disabled: () => [],
        tabClasses: () => [],
        theme: () => ({
            container: '',
            sortableContainer: '',
            tabsNavTab: '',
            tabsNavLine: '',
        }),
    }
)

const emit = defineEmits(['clicked', 'update'])

const effectiveTabs = ref(props.tabs)
const sortableRef = ref()
const isDragging = ref(false)
const containerRef = ref<HTMLElement>()
const tabsContainerRef = ref<HTMLElement>()
const moreButtonRef = ref<HTMLElement>()
const allTabRefs = ref<HTMLElement[]>([])
const visibleTabsCount = ref(props.tabs.length)

// Computed properties for responsive tab management
const visibleTabs = computed(() => {
    return effectiveTabs.value.slice(0, visibleTabsCount.value)
})

const overflowTabs = computed(() => {
    return effectiveTabs.value.slice(visibleTabsCount.value)
})

const MORE_BUTTON_WIDTH_ESTIMATE = 80 // A safe estimate for the "More..." button

// Calculate which tabs fit in the available space
const calculateVisibleTabs = () => {
    if (!tabsContainerRef.value || allTabRefs.value.length === 0) {
        visibleTabsCount.value = props.tabs.length
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
        visibleTabsCount.value = props.tabs.length
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
    () => props.tabs,
    newTabs => {
        effectiveTabs.value = newTabs
        nextTick(calculateVisibleTabs)
    },
    { deep: true }
)

function handleDropdownTabClick(tabId: string | number) {
    const clickedTabIndex = effectiveTabs.value.findIndex(
        tab => tab.id === tabId
    )

    // Safeguard: if not found or already visible, just emit click
    if (clickedTabIndex < visibleTabsCount.value && clickedTabIndex !== -1) {
        emit('clicked', tabId)
        return
    }

    // Move the clicked tab to be the last visible tab
    const item = effectiveTabs.value.splice(clickedTabIndex, 1)[0]
    effectiveTabs.value.splice(visibleTabsCount.value - 1, 0, item)

    // Notify parent about the new order and the click
    emit('update', effectiveTabs.value)
    emit('clicked', tabId)
}

function onUpdateOrder(newTabs: Tab[]) {
    console.log('onUpdateOrder', newTabs)
    effectiveTabs.value = newTabs
    emit('update', newTabs)
}

/**
 * Handles the update event from the sortable component for a specific group.
 * @param {string} groupName - The name of the group being updated
 * @param {any} params - The sortable update parameters
 */
function onUpdatedList(params: any) {
    const newVisible = [...visibleTabs.value]
    const item = newVisible.splice(params.oldIndex, 1)[0]
    newVisible.splice(params.newIndex, 0, item)

    const newEffective = [...newVisible, ...overflowTabs.value]

    effectiveTabs.value = newEffective
    emit('update', effectiveTabs.value)
}

/**
 * Updates an array after a sortable event by moving elements.
 * @template T
 * @param {any} e - The sortable event object
 * @param {T[]} arr - The array to update
 * @returns {T[]} The updated array with elements in their new positions
 */
function sortableUpdate<T>(e: any, arr: T[]) {
    const el = arr.splice(e.oldIndex!, 1)[0]
    arr.splice(Math.min(e.newIndex!, arr.length), 0, el)
    return arr
}

function onDragStart() {
    isDragging.value = true
}

function onDragEnd() {
    isDragging.value = false
}
</script>

<style scoped>
/* Smooth transitions for drag and drop */
.sortable-ghost {
    opacity: 0.5;
    transform: rotate(5deg) scale(0.95);
    transition: all 0.2s ease-in-out;
}

/* .sortable-chosen {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
    z-index: 1000;
} */

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

/* Hover animations */
/* .pj-tab:hover {
    transform: translateY(-1px);
    transition: all 0.2s ease-in-out;
} */

/* .pj-tab:active {
    transform: translateY(0px);
    transition: all 0.1s ease-in-out;
} */

/* Active tab animations */
/* .pj-tab[data-active='true'] {
    animation: tabActivate 0.3s ease-out;
}

@keyframes tabActivate {
    0% {
        transform: scale(0.95);
        opacity: 0.8;
    }
    50% {
        transform: scale(1.02);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
} */

/* Smooth spacing transitions */
.sortable-container {
    transition: all 0.3s ease-in-out;
}

/* Drag handle styling (if needed) */
.drag-handle {
    cursor: grab;
    transition: all 0.2s ease-in-out;
}

.drag-handle:active {
    cursor: grabbing;
    transform: scale(1.1);
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
