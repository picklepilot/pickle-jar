<template>
    <div
        :class="
            m(
                flush ? 'rounded-0' : 'rounded-md',
                'relative w-full rounded-lg border border-ring px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current bg-card text-card-foreground',
                theme.alert
            )
        "
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const props = withDefaults(
    defineProps<{
        /**
         * Fluently tell the component to remove rounded corners
         * @type {boolean}
         */
        flush?: boolean

        /**
         * The type of alert to display
         * @type {'info' | 'processing' | 'warning' | 'error' | 'success' | 'muted'}
         */
        variant?:
            | 'info'
            | 'processing'
            | 'warning'
            | 'error'
            | 'success'
            | 'muted'

        /**
         * Locally customize the component's theme properties.
         *
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            alert?: string
        }
    }>(),
    {
        flush: false,
        variant: 'info',
        theme: () => ({
            alert: '',
        }),
    }
)

const bgClasses = computed(() => ({
    'bg-sky-50': props.variant === 'info' || props.variant === 'processing',
    'bg-yellow-50': props.variant === 'warning',
    'bg-red-50': props.variant === 'error',
    'bg-green-50': props.variant === 'success',
    'bg-zinc-50': props.variant === 'muted',
}))

const borderClasses = computed(() => ({
    'border-sky-200':
        props.variant === 'info' || props.variant === 'processing',
    'border-yellow-200': props.variant === 'warning',
    'border-red-200': props.variant === 'error',
    'border-green-200': props.variant === 'success',
    'border-zinc-200': props.variant === 'muted',
}))

const colorClass = computed(() => ({
    'text-sky-800': props.variant === 'info' || props.variant === 'processing',
    'text-yellow-800': props.variant === 'warning',
    'text-red-800': props.variant === 'error',
    'text-green-800': props.variant === 'success',
    'text-zinc-800': props.variant === 'muted',
}))

// Provide context to child components
provide('alert-context', {
    variant: props.variant,
    bgClasses: bgClasses.value,
    borderClasses: borderClasses.value,
    colorClass: colorClass.value,
})
</script>
