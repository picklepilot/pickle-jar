<template>
    <div
        :class="
            m(
                'relative flex items-center rounded-md shadow-2xs',
                theme.buttonGroupContainer
            )
        "
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { m } from '../utils'

withDefaults(
    defineProps<{
        theme?: {
            buttonGroupContainer?: string
            buttonGroupButton?: string
        }
    }>(),
    {
        theme: () => ({
            buttonGroupContainer: '',
            buttonGroupButton: '',
        }),
    }
)
</script>
