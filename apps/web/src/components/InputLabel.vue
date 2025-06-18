<template>
    <label
        :for="forId"
        :class="m('block text-sm font-medium text-zinc-900', ...classes)"
    >
        <slot />
    </label>
</template>

<script setup lang="ts">
import { m } from '../utils'

interface Props {
    classes?: string[]
    forId?: string
}

withDefaults(defineProps<Props>(), {
    classes: () => [],
    forId: '',
})
</script>
