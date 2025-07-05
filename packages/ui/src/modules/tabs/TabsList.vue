<template>
    <div
        ref="tabsListRef"
        :class="[
            'relative flex rounded-md text-muted-foreground',
            orientation === 'vertical' ? 'flex-col' : 'flex-row',
            disabled && 'opacity-50 pointer-events-none',
        ]"
        role="tablist"
        :aria-orientation="orientation"
    >
        <!-- Animated background -->
        <div
            ref="backgroundRef"
            class="absolute bg-primary/5 rounded-md transition-all duration-200 ease-out pointer-events-none z-0 -top-px"
            :style="backgroundStyle"
        />

        <!-- Animated underline -->
        <div
            ref="underlineRef"
            class="absolute bg-primary h-[2px] transition-all duration-200 ease-out pointer-events-none z-0 -bottom-2"
            :style="underlineStyle"
        />

        <slot />
    </div>
</template>

<script setup lang="ts">
import { inject, computed, ref, onMounted, nextTick, provide } from 'vue'
import type { TabsListProps, TabsListEmits, TabsContext } from './types'

interface Props extends TabsListProps {}

interface Emits extends TabsListEmits {}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    disabled: false,
})

const emit = defineEmits<Emits>()

// Template refs
const tabsListRef = ref<HTMLElement>()
const backgroundRef = ref<HTMLElement>()
const underlineRef = ref<HTMLElement>()

// State for background animation
const backgroundStyle = ref({
    transform: 'translateX(0px)',
    width: '0',
    height: '0',
    opacity: '0',
})

const underlineStyle = ref({
    transform: 'translateX(0px)',
    width: '0',
    opacity: '0',
})

// Define the tabs context type
// interface TabsContext {
//     selectedValue: Ref<string>
//     orientation: Ref<'horizontal' | 'vertical'>
//     disabled: Ref<boolean>
//     selectTab: (value: string) => void
//     registerTab: (value: string) => void
//     unregisterTab: (value: string) => void
// }

// Inject tabs context with proper typing
const tabsContext = inject<TabsContext>('tabs')

// Use context orientation if not provided
const orientation = computed(
    () => props.orientation || tabsContext?.orientation?.value || 'horizontal'
)
const disabled = computed(
    () => props.disabled || tabsContext?.disabled?.value || false
)

// Track tab elements and their positions
const tabElements = ref<Map<string, HTMLElement>>(new Map())
const isHovering = ref(false)
const hoveredTab = ref<string>('')

// Methods for tab registration
const registerTabElement = (value: string, element: HTMLElement) => {
    tabElements.value.set(value, element)

    // // If this is the first tab or the selected tab, position the background
    // if (
    //     tabElements.value.size === 1 ||
    //     value === tabsContext?.selectedValue?.value
    // ) {
    //     nextTick(() => updateBackgroundPosition(value))
    // }
}

const unregisterTabElement = (value: string) => {
    tabElements.value.delete(value)
}

const updateBackgroundPosition = (targetValue: string) => {
    const targetElement = tabElements.value.get(targetValue)
    const containerElement = tabsListRef.value

    if (!targetElement || !containerElement) return

    const targetRect = targetElement.getBoundingClientRect()
    const containerRect = containerElement.getBoundingClientRect()

    const isVertical = orientation.value === 'vertical'

    if (isVertical) {
        const translateY = targetRect.top - containerRect.top
        backgroundStyle.value = {
            transform: `translateY(${translateY}px)`,
            width: `${targetRect.width}px`,
            height: `${targetRect.height}px`,
            opacity: '1',
        }
    } else {
        const translateX = targetRect.left - containerRect.left
        backgroundStyle.value = {
            transform: `translateX(${translateX}px)`,
            width: `${targetRect.width}px`,
            height: `${targetRect.height}px`,
            opacity: '1',
        }
        // underlineStyle.value = {
        //     transform: `translateX(${translateX}px)`,
        //     width: `${targetRect.width}px`,
        //     opacity: '1',
        // }
    }
}

const updateUnderlinePosition = (targetValue: string) => {
    const targetElement = tabElements.value.get(targetValue)
    const containerElement = tabsListRef.value

    if (!targetElement || !containerElement) return

    const targetRect = targetElement.getBoundingClientRect()
    const containerRect = containerElement.getBoundingClientRect()

    const translateX = targetRect.left - containerRect.left
    underlineStyle.value = {
        transform: `translateX(${translateX}px)`,
        width: `${targetRect.width}px`,
        opacity: '1',
    }
}

const handleTabSelect = (value: string) => {
    // updateBackgroundPosition(value)
    updateUnderlinePosition(value)
}

const handleTabHover = (value: string) => {
    isHovering.value = true
    hoveredTab.value = value
    updateBackgroundPosition(value)
}

const handleTabLeave = () => {
    isHovering.value = false
    hoveredTab.value = ''
    backgroundStyle.value = {
        ...backgroundStyle.value,
        opacity: '0',
    }

    // Return to selected tab position
    // const selectedValue = tabsContext?.selectedValue?.value
    // if (selectedValue && tabElements.value.has(selectedValue)) {
    //     updateBackgroundPosition(selectedValue)
    // }
}

// Provide context to child TabsTrigger components
provide('tabsList', {
    registerTabElement,
    unregisterTabElement,
    handleTabHover,
    handleTabLeave,
    handleTabSelect,
    orientation: computed(() => orientation.value),
})

// Initialize background position when component mounts
onMounted(() => {
    nextTick(() => {
        const selectedValue = tabsContext?.selectedValue?.value
        if (selectedValue && tabElements.value.has(selectedValue)) {
            // updateBackgroundPosition(selectedValue)
            updateUnderlinePosition(selectedValue)
        }
    })
})

// Watch for selected value changes
// if (tabsContext?.selectedValue) {
//     watch(
//         () => tabsContext.selectedValue.value,
//         newValue => {
//             if (
//                 !isHovering.value &&
//                 newValue &&
//                 tabElements.value.has(newValue)
//             ) {
//                 updateBackgroundPosition(newValue)
//             }
//         }
//     )
// }
</script>
