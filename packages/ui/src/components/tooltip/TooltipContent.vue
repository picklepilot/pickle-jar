<!-- 
  Tailwind classes used in this component:
  relative max-w-xs rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow-lg 
  bottom-[-4px] left-1/2 transform -translate-x-1/2 
  absolute w-2 h-2 bg-primary rotate-45 
  transition-all duration-200 ease-out opacity-0 scale-95 translate-y-1 
  opacity-100 scale-100 translate-y-0 
  opacity-0 scale-95 translate-y-1 transition-all duration-150 ease-in 
  top-[-4px] left-1/2 transform -translate-x-1/2
  left-4 right-4 top-4 bottom-4
  transform-gpu pointer-events-none pointer-events-auto
  fixed z-[9999]
-->

<template>
    <Teleport :to="tooltip?.portalTarget || 'body'">
        <div
            ref="contentRef"
            class="fixed z-[9999] pointer-events-none"
            :style="floatingStyles"
        >
            <transition
                enter-active-class="transition-all duration-200 ease-out"
                leave-active-class="transition-all duration-150 ease-in"
                enter-from-class="opacity-0 scale-95 translate-y-1"
                enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-from-class="opacity-100 scale-100 translate-y-0"
                leave-to-class="opacity-0 scale-95 translate-y-1"
            >
                <div
                    v-show="tooltip?.isVisible"
                    role="tooltip"
                    class="relative max-w-xs rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow-lg pointer-events-auto transform-gpu"
                >
                    <slot />
                    <!-- Tooltip arrow -->
                    <div
                        ref="arrowRef"
                        class="absolute w-2 h-2 bg-primary rotate-45"
                        :class="arrowClasses"
                        :style="arrowStyles"
                    />
                </div>
            </transition>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import {
    ref,
    inject,
    computed,
    type Ref,
    onMounted,
    nextTick,
    watch,
} from 'vue'
import { useFloating, offset, flip, shift, arrow } from '@floating-ui/vue'

interface Props {
    side?: 'top' | 'right' | 'bottom' | 'left'
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    alignOffset?: number
    avoidCollisions?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    side: 'top',
    align: 'center',
    sideOffset: 8,
    alignOffset: 0,
    avoidCollisions: true,
})

interface TooltipContext {
    isVisible: any
    triggerRef: any
    show: () => void
    hide: () => void
    setTriggerRef: (ref: HTMLElement) => void
    portalTarget: any
}

const tooltip = inject<TooltipContext>('tooltip')
const triggerRef = inject<Ref<HTMLElement>>('triggerRef')
const contentRef = ref<HTMLElement>()
const arrowRef = ref<HTMLElement>()

const effectiveTriggerRef = computed(
    () => triggerRef?.value || tooltip?.triggerRef?.value
)

// Create reactive placement based on props
const placement = computed(() => `${props.side}-${props.align}` as any)

const { floatingStyles, middlewareData, update } = useFloating(
    effectiveTriggerRef || ref(null),
    contentRef,
    {
        strategy: 'fixed',
        placement,
        middleware: [
            offset({
                mainAxis: props.sideOffset,
                crossAxis: props.alignOffset,
            }),
            ...(props.avoidCollisions ? [flip()] : []),
            ...(props.avoidCollisions ? [shift()] : []),
            arrow({ element: arrowRef }),
        ],
    }
)

// Get the actual placement after middleware processing
const actualPlacement = computed(() => {
    const flipData = middlewareData.value?.flip
    if (flipData && flipData.overflows && flipData.overflows.length > 0) {
        return flipData.overflows[0].placement
    }
    return props.side
})

// Watch for prop changes and update positioning
watch(
    [
        () => props.side,
        () => props.align,
        () => props.sideOffset,
        () => props.alignOffset,
    ],
    () => {
        nextTick(() => {
            update()
        })
    }
)

// Watch for tooltip visibility changes to update positioning
watch(
    () => tooltip?.isVisible,
    isVisible => {
        if (isVisible) {
            // Use a longer delay to ensure DOM is ready
            nextTick(() => {
                update()
            })
        }
    },
    { immediate: true }
)

// Debug positioning (remove in production)
watch(floatingStyles, styles => {
    if (process.env.NODE_ENV === 'development') {
        console.log('Tooltip positioning:', {
            requestedPlacement: placement.value,
            actualPlacement: actualPlacement.value,
            styles,
            triggerRef: effectiveTriggerRef.value,
            contentRef: contentRef.value,
        })
    }
})

// Calculate arrow position based on actual placement
const arrowClasses = computed(() => {
    const placement = actualPlacement.value

    // Extract side and alignment from placement
    const [side, align] = placement.split('-')
    const alignment = align || 'center'

    switch (side) {
        case 'top':
            // Arrow points down from top of tooltip
            switch (alignment) {
                case 'start':
                    return 'bottom-[-4px] left-4'
                case 'end':
                    return 'bottom-[-4px] right-4'
                default: // center
                    return 'bottom-[-4px] left-1/2 transform -translate-x-1/2'
            }
        case 'bottom':
            // Arrow points up from bottom of tooltip
            switch (alignment) {
                case 'start':
                    return 'top-[-4px] left-4'
                case 'end':
                    return 'top-[-4px] right-4'
                default: // center
                    return 'top-[-4px] left-1/2 transform -translate-x-1/2'
            }
        case 'left':
            // Arrow points right from left side of tooltip
            switch (alignment) {
                case 'start':
                    return 'right-[-4px] top-4'
                case 'end':
                    return 'right-[-4px] bottom-4'
                default: // center
                    return 'right-[-4px] top-1/2 transform -translate-y-1/2'
            }
        case 'right':
            // Arrow points left from right side of tooltip
            switch (alignment) {
                case 'start':
                    return 'left-[-4px] top-4'
                case 'end':
                    return 'left-[-4px] bottom-4'
                default: // center
                    return 'left-[-4px] top-1/2 transform -translate-y-1/2'
            }
        default:
            return 'bottom-[-4px] left-1/2 transform -translate-x-1/2'
    }
})

// Get arrow styles from floating UI
const arrowStyles = computed(() => {
    return middlewareData.value?.arrow || {}
})

onMounted(async () => {
    await nextTick()
    // Use a longer delay to ensure everything is mounted
    setTimeout(() => {
        update()
    }, 100)
})
</script>
