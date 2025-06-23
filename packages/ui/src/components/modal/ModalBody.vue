<template>
    <div :class="m('flex-1 grow overflow-auto px-6', theme.content)">
        <slot />
    </div>
</template>

<script setup lang="ts">
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const props = withDefaults(
    defineProps<{
        /**
         * Whether the modal has a header.
         * @type {boolean}
         */
        hasHeader?: boolean

        /**
         * Whether the modal has a footer.
         * @type {boolean}
         */
        hasFooter?: boolean

        /**
         * Locally customize the component's theme properties.
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            content?: string
        }
    }>(),
    {
        hasHeader: false,
        hasFooter: false,
        theme: () => ({
            content: '',
        }),
    }
)
</script>
