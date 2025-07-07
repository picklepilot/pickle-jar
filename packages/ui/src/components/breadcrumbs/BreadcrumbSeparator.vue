<template>
    <span :class="m('size-3.5', theme.separator)" role="presentation">
        <slot>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-3.5"
            >
                <path d="m9 18 6-6-6-6" />
            </svg>
        </slot>
    </span>
</template>

<script setup lang="ts">
import { m } from '../../utils'

interface Props {
    /**
     * Locally customize the component's theme properties
     */
    theme?: {
        separator?: string
    }
}

withDefaults(defineProps<Props>(), {
    theme: () => ({
        separator: '',
    }),
})
</script>
