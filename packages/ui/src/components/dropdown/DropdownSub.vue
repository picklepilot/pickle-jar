<template>
    <div class="relative">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { provide, ref, computed, watch } from 'vue'
import {
    useFloating,
    offset,
    flip,
    shift,
    autoPlacement,
    autoUpdate,
} from '@floating-ui/vue'

interface Props {
    side?: 'top' | 'right' | 'bottom' | 'left'
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    alignOffset?: number
    avoidCollisions?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    side: 'right',
    align: 'start',
    sideOffset: 0,
    alignOffset: 0,
    avoidCollisions: true,
})

const emit = defineEmits<{
    open: []
    close: []
}>()

const isOpen = ref(false)
const triggerRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()

// Create submenu context
const submenuContext = {
    isOpen: computed(() => isOpen.value),
    triggerRef: triggerRef,
    open: () => {
        isOpen.value = true
        emit('open')
    },
    close: () => {
        isOpen.value = false
        emit('close')
    },
    toggle: () => {
        if (isOpen.value) {
            isOpen.value = false
            emit('close')
        } else {
            isOpen.value = true
            emit('open')
        }
    },
    setTriggerRef: (ref: HTMLElement) => {
        triggerRef.value = ref
    },
}

// Provide submenu context
provide('dropdown', submenuContext)

// Use floating UI for positioning
const { floatingStyles, placement } = useFloating(triggerRef, contentRef, {
    placement: `${props.side}-${props.align}` as any,
    middleware: [
        offset({ mainAxis: props.sideOffset, crossAxis: props.alignOffset }),
        ...(props.avoidCollisions ? [flip()] : []),
        ...(props.avoidCollisions ? [shift()] : []),
        autoPlacement(),
    ],
    whileElementsMounted: autoUpdate,
})

// Extract the actual side from the computed placement
const actualSide = computed(() => {
    if (!placement.value) return props.side
    return placement.value.split('-')[0] as 'top' | 'right' | 'bottom' | 'left'
})

// Get the transform origin based on the side
const transformOrigin = computed(() => {
    switch (actualSide.value) {
        case 'top':
            return 'bottom'
        case 'bottom':
            return 'top'
        case 'left':
            return 'right'
        case 'right':
            return 'left'
        default:
            return 'top'
    }
})

// Expose refs and context for use in other components
defineExpose({
    isOpen,
    open: submenuContext.open,
    close: submenuContext.close,
    toggle: submenuContext.toggle,
    triggerRef,
    contentRef,
    floatingStyles,
    actualSide,
    transformOrigin,
})
</script>
