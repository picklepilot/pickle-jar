<template>
    <button
        @click="handleClick"
        :class="
            m(
                'flex items-center rounded-md font-medium leading-none',
                disabled && 'pointer-events-none opacity-50',
                bgClasses,
                borderClasses,
                colorClasses,
                sizeClasses,
                ...classes
            )
        "
    >
        <span v-if="processing" class="mr-2">
            <span v-if="$slots.processing">
                <slot name="processing"></slot>
            </span>
            <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="mi-solid mi-circle-notch animate-spin"
                viewBox="0 0 24 24"
            >
                <path
                    d="M16.79 4.66c-.37.5-.28 1.19.18 1.59a7.61 7.61 0 0 1 .48 11.05c-2.08 2.18-5.38 2.91-8.19 1.79a7.613 7.613 0 0 1-3.67-11.2 7.6 7.6 0 0 1 5.36-3.43c.59-.08 1.03-.57 1.03-1.17v-.04c0-.71-.63-1.27-1.33-1.18C5.69 2.75 1.86 7.08 2 12.28s4.49 9.57 9.71 9.71c5.65.16 10.28-4.38 10.28-10 0-2.92-1.29-5.67-3.49-7.54-.52-.44-1.32-.35-1.72.21Z"
                />
            </svg>
        </span>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { m } from '../utils'

interface Props {
    classes?: string[]
    disabled?: boolean
    size?: string
    variant?: string
    stop?: number
    processing?: boolean
}

const emit = defineEmits(['click'])

const props = withDefaults(defineProps<Props>(), {
    classes: () => [''],
    disabled: false,
    processing: false,
    size: 'md',
    stop: 500,
    variant: 'zinc',
})

const bgClasses = computed(() => {
    return {
        'bg-blue-700': props.variant === 'blue',
        'bg-green-700': props.variant === 'green',
        'bg-red-700': props.variant === 'red',
        'bg-yellow-700': props.variant === 'yellow',
        'bg-zinc-900': props.variant === 'zinc',
    }
})

const borderClasses = computed(() => {
    return {
        'border border-blue-700': props.variant === 'blue',
        'border border-green-700': props.variant === 'green',
        'border border-red-700': props.variant === 'red',
        'border border-yellow-700': props.variant === 'yellow',
        'border border-zinc-700': props.variant === 'zinc',
    }
})

const colorClasses = computed(() => {
    return {
        'text-blue-700': props.variant === 'blue',
        'text-green-700': props.variant === 'green',
        'text-red-700': props.variant === 'red',
        'text-yellow-700': props.variant === 'yellow',
        'text-white': props.variant === 'zinc',
    }
})

const sizeClasses = computed(() => {
    return {
        'px-2 py-1 text-xs': props.size === 'xs',
        'px-2.5 py-1.5 text-sm': props.size === 'sm',
        'px-3 py-2.5 text-sm': props.size === 'md',
        'px-4 py-2': props.size === 'lg',
        'px-4 py-2 text-lg': props.size === 'xl',
    }
})

function handleClick(evt: any) {
    emit('click', evt)
}
</script>
