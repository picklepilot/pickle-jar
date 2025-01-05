<template>
    <span
        :class="
            m(
                [
                    'inline-flex items-center justify-center rounded-full bg-zinc-100 px-2.5 py-1 text-sm font-medium leading-none text-zinc-600',
                ],
                classes,
                [
                    bordered
                        ? '!ring-1 ring-[color-mix(in_srgb,_currentColor_20%,_transparent)]'
                        : '',
                ]
            )
        "
    >
        <slot></slot>
    </span>
</template>

<script setup lang="ts">
import { m } from '../utils'

interface Props {
    /**
     * Whether the badge should have a border
     *
     * @default false
     * @type {boolean}
     */
    bordered?: boolean

    /**
     * Additional classes to be added to the container
     *
     * @default []
     * @type {string[]}
     */
    classes?: string[]
}

withDefaults(defineProps<Props>(), {
    bordered: false,
    classes: () => [],
})
</script>
