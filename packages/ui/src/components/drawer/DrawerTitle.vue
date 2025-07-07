<template>
    <h2
        :id="titleId"
        :class="
            m(
                'text-lg font-semibold leading-none tracking-tight text-foreground'
            )
        "
    >
        <slot />
    </h2>
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
         * The ID for the title element.
         * @type {string}
         */
        titleId?: string
    }>(),
    {
        titleId: '',
    }
)
</script>
