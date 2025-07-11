<template>
    <div
        v-show="selected"
        :class="m('tabs-panel', selected && 'tabs-panel-selected', props.class)"
        :id="`panel-${value}`"
        role="tabpanel"
        :aria-labelledby="`tab-${value}`"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { inject, computed, type Ref } from 'vue'
import type { TabsPanelProps, TabsPanelEmits } from './types'
import { m } from '../../utils'

interface Props extends TabsPanelProps {}

interface Emits extends TabsPanelEmits {}

const props = withDefaults(defineProps<Props>(), {
    class: '',
})

const emit = defineEmits<Emits>()

// Define the tabs context type
interface TabsContext {
    selectedValue: Ref<string>
    orientation: Ref<'horizontal' | 'vertical'>
    disabled: Ref<boolean>
    selectTab: (value: string) => void
    registerTab: (value: string) => void
    unregisterTab: (value: string) => void
}

// Inject tabs context with proper typing
const tabsContext = inject<TabsContext>('tabs')

// Computed
const selected = computed(
    () => tabsContext?.selectedValue?.value === props.value
)
</script>

<style scoped>
.tabs-panel {
    display: none;
}

.tabs-panel-selected {
    display: block;
}
</style>
