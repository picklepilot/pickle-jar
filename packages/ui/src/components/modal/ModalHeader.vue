<template>
    <div :class="m('flex items-center justify-between p-6', theme.header)">
        <div class="flex-1 min-w-0">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import ModalClose from './ModalClose.vue'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const emit = defineEmits<{
    close: []
}>()

const props = withDefaults(
    defineProps<{
        /**
         * Whether to show the close button in the header.
         * @type {boolean}
         */
        showCloseButton?: boolean

        /**
         * The aria-label for the close button.
         * @type {string}
         */
        closeButtonLabel?: string

        /**
         * Locally customize the component's theme properties.
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            header?: string
            closeButton?: string
        }
    }>(),
    {
        showCloseButton: true,
        closeButtonLabel: 'Close modal',
        theme: () => ({
            header: '',
            closeButton: '',
        }),
    }
)
</script>
