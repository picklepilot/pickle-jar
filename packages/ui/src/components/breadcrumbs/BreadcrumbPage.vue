<template>
    <span
        :class="
            m(
                'font-normal text-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'rounded-sm focus-visible:ring-offset-background',
                theme.page
            )
        "
        tabindex="0"
    >
        <slot />
    </span>
</template>

<script setup lang="ts">
import { m } from '../../utils'

interface Props {
    /**
     * Locally customize the component's theme properties
     */
    theme?: {
        page?: string
    }
}

withDefaults(defineProps<Props>(), {
    theme: () => ({
        page: '',
    }),
})
</script>
