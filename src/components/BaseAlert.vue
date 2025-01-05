<template>
    <div
        :class="
            m(
                flush ? 'rounded-0' : 'rounded-md',
                'relative border-y border-l-4 border-r p-4',
                bgClasses,
                borderClasses,
                colorClass,
                classes
            )
        "
    >
        <div class="flex">
            <div v-if="$slots.icon" class="shrink-0">
                <slot name="icon"></slot>
            </div>
            <div class="ml-3 grow">
                <h3 v-if="$slots.title" :class="['font-medium']">
                    <slot name="title"></slot>
                </h3>
                <div v-if="$slots.body" :class="['mt-1 text-sm']">
                    <slot name="body"></slot>
                </div>
            </div>
            <div v-if="$slots.action" class="flex items-center">
                <slot name="action"></slot>
            </div>
            <div v-if="dismissable">
                <button
                    @click="$emit('close', false)"
                    class="absolute right-4 top-4 text-zinc-400 hover:text-zinc-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-x h-6 w-6"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { m } from '../utils'

interface Props {
    /**
     * Additional classes to be added to the component container
     *
     * @default []
     * @type {string[]}
     */
    classes?: string[]

    /**
     * Can the alert be dismissed by clicking an 'x' button?
     */
    dismissable?: boolean

    /**
     * Fluently tell the component to remove rounded corners
     */
    flush?: boolean

    /**
     * The type of alert to display
     *
     * @default 'info'
     * @type {'info' | 'processing' | 'warning' | 'error' | 'success' | 'muted'}
     */
    variant?: 'info' | 'processing' | 'warning' | 'error' | 'success' | 'muted'
}

const props = withDefaults(defineProps<Props>(), {
    classes: () => [''],
    dismissable: false,
    flush: false,
    variant: 'info',
})

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
</script>
