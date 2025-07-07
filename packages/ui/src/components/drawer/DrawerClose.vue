<template>
    <button
        type="button"
        :class="
            m(
                'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0',
                theme.closeButton
            )
        "
        :aria-label="closeButtonLabel"
        @click="handleClose"
    >
        <X class="h-4 w-4" />
        <span class="sr-only">{{ closeButtonLabel }}</span>
    </button>
</template>

<script setup lang="ts">
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { X } from 'lucide-vue-next'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const emit = defineEmits<{
    close: []
}>()

const props = withDefaults(
    defineProps<{
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
            closeButton?: string
        }
    }>(),
    {
        closeButtonLabel: 'Close drawer',
        theme: () => ({
            closeButton: '',
        }),
    }
)

const handleClose = () => {
    emit('close')
}
</script>
