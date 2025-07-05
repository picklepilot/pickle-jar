<template>
    <div :class="['tabs-content pt-1.5']">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { TabsContentProps, TabsContentEmits } from './types'

interface Props extends TabsContentProps {}

interface Emits extends TabsContentEmits {}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()
</script>
