<template>
    <div
        ref="handleRef"
        :class="
            m(
                'flex items-center justify-center cursor-grab touch-none select-none',
                positionClasses,
                theme.handle
            )
        "
    >
        <div
            :class="
                m(
                    'rounded-full bg-muted-foreground/20 transition-colors',
                    indicatorClasses,
                    theme.indicator
                )
            "
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const props = withDefaults(
    defineProps<{
        /**
         * The position of the drawer on the screen.
         * @type {'left' | 'right' | 'top' | 'bottom'}
         */
        position?: 'left' | 'right' | 'top' | 'bottom'

        /**
         * Locally customize the component's theme properties.
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            handle?: string
            indicator?: string
        }
    }>(),
    {
        position: 'right',
        theme: () => ({
            handle: '',
            indicator: '',
        }),
    }
)

const handleRef = ref<HTMLElement>()

// Position-based classes for handle container
const positionClasses = computed(() => {
    switch (props.position) {
        case 'left':
            return 'w-6 h-full' // Vertical handle on left side
        case 'right':
            return 'w-6 h-full' // Vertical handle on left side of right drawer
        case 'top':
            return 'w-full h-6' // Horizontal handle on top
        case 'bottom':
            return 'w-full h-6' // Horizontal handle on bottom
        default:
            return 'w-6 h-full'
    }
})

// Position-based classes for indicator
const indicatorClasses = computed(() => {
    switch (props.position) {
        case 'left':
        case 'right':
            return 'w-1.5 h-12' // Vertical indicator
        case 'top':
        case 'bottom':
            return 'w-12 h-1.5' // Horizontal indicator
        default:
            return 'w-1.5 h-12'
    }
})

// Expose ref
defineExpose({
    handleRef,
})
</script>
