<template>
    <div
        :class="
            m(
                'space-y-5 rounded-lg border border-zinc-300/80 px-4 py-5 shadow-2xs sm:px-6',
                classes
            )
        "
    >
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script setup lang="ts">
import { m } from '../utils'

interface Props {
    /**
     * Additional classes to be added to the sortable container
     *
     * @default []
     * @type {string[]}
     */
    classes?: string[]
}

withDefaults(defineProps<Props>(), {
    classes: () => [],
})
</script>
