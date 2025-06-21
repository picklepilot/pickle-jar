<template>
    <div
        ref="triggerRef"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @focus="handleFocus"
        @blur="handleBlur"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted, type Ref } from 'vue'

interface TooltipContext {
    isVisible: any
    triggerRef: any
    show: () => void
    hide: () => void
    setTriggerRef: (ref: HTMLElement) => void
}

interface Props {
    delay?: number
    hideDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
    delay: 300,
    hideDelay: 0,
})

const tooltip = inject<TooltipContext>('tooltip')
const triggerRef = ref<HTMLElement>()
let showTimeout: number | null = null
let hideTimeout: number | null = null

const handleMouseEnter = () => {
    if (hideTimeout) {
        clearTimeout(hideTimeout)
        hideTimeout = null
    }

    if (props.delay > 0) {
        showTimeout = window.setTimeout(() => {
            tooltip?.show()
        }, props.delay)
    } else {
        tooltip?.show()
    }
}

const handleMouseLeave = () => {
    if (showTimeout) {
        clearTimeout(showTimeout)
        showTimeout = null
    }

    if (props.hideDelay > 0) {
        hideTimeout = window.setTimeout(() => {
            tooltip?.hide()
        }, props.hideDelay)
    } else {
        tooltip?.hide()
    }
}

const handleFocus = () => {
    if (props.delay > 0) {
        showTimeout = window.setTimeout(() => {
            tooltip?.show()
        }, props.delay)
    } else {
        tooltip?.show()
    }
}

const handleBlur = () => {
    if (showTimeout) {
        clearTimeout(showTimeout)
        showTimeout = null
    }
    tooltip?.hide()
}

onMounted(() => {
    if (triggerRef.value) {
        tooltip?.setTriggerRef(triggerRef.value)
        if (process.env.NODE_ENV === 'development') {
            console.log('TooltipTrigger mounted:', {
                triggerRef: triggerRef.value,
                tooltip: tooltip,
            })
        }
    }
})

onUnmounted(() => {
    if (showTimeout) {
        clearTimeout(showTimeout)
    }
    if (hideTimeout) {
        clearTimeout(hideTimeout)
    }
})
</script>
