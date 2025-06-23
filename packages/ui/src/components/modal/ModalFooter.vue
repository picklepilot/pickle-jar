<template>
    <div :class="m('flex items-center justify-end gap-3 p-6', theme.footer)">
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
         * Locally customize the component's theme properties.
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            footer?: string
        }
    }>(),
    {
        theme: () => ({
            footer: '',
        }),
    }
)
</script>
