<template>
    <button
        @click="$emit('close')"
        :class="
            m(
                'absolute top-6 right-6 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors',
                theme.closeButton
            )
        "
        type="button"
        :aria-label="closeButtonLabel"
    >
        <XIcon class="size-4" />
    </button>
</template>

<script setup lang="ts">
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { XIcon } from 'lucide-vue-next'

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
        closeButtonLabel: 'Close modal',
        theme: () => ({
            closeButton: '',
        }),
    }
)
</script>
