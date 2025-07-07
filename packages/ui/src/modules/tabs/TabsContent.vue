<template>
    <div :class="m('tabs-content pt-1.5', props.class)">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { TabsContentProps, TabsContentEmits } from './types'
import { m } from '../../utils'

interface Props extends TabsContentProps {}

interface Emits extends TabsContentEmits {}

const props = withDefaults(defineProps<Props>(), {
    class: '',
})

const emit = defineEmits<Emits>()
</script>
