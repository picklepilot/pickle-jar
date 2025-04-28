<template>
    <div
        :class="
            m(
                'resizer absolute z-10 bg-transparent hover:bg-zinc-950/5',
                classes
            )
        "
        @mousedown="
            $emit('resize', {
                direction,
                event: $event,
            })
        "
    ></div>
</template>

<script setup lang="ts">
import { m } from '../../utils'

withDefaults(
    defineProps<{
        /**
         * Additional classes to be added to the sortable container
         *
         * @default ''
         * @type {string[]}
         */
        classes?: string

        /**
         * The direction of the resize
         *
         * @type {string}
         */
        direction: string
    }>(),
    {
        classes: '',
    }
)
</script>
