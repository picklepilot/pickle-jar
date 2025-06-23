<template>
    <span
        :class="
            m(
                'flex size-9 items-center justify-center',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'rounded-sm focus-visible:ring-offset-background',
                theme.ellipsis
            )
        "
        role="presentation"
        tabindex="0"
    >
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
                class="size-4"
            >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
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
        ellipsis?: string
    }
}

withDefaults(defineProps<Props>(), {
    theme: () => ({
        ellipsis: '',
    }),
})
</script>
