<template>
    <div
        :class="
            m(
                'flex',
                orientation === 'vertical' ? 'flex-col' : 'flex-row',
                disabled && 'opacity-50 pointer-events-none',
                props.class
            )
        "
        role="tablist"
        :aria-orientation="orientation"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { provide, ref, watch, computed, readonly } from 'vue'
import type { TabsProps, TabsEmits } from './types'
import { m } from '../../utils'

interface Props extends TabsProps {}

interface Emits extends TabsEmits {}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    disabled: false,
    class: '',
})

const emit = defineEmits<Emits>()

// Internal state
const selectedValue = ref(props.value || props.defaultValue || '')
const tabs = ref<Set<string>>(new Set())

// Computed
const isControlled = computed(() => props.value !== undefined)

// Watch for external value changes
watch(
    () => props.value,
    newValue => {
        if (newValue !== undefined && newValue !== selectedValue.value) {
            selectedValue.value = newValue
        }
    }
)

// Methods
const selectTab = (value: string) => {
    if (props.disabled || !tabs.value.has(value)) return

    selectedValue.value = value

    if (!isControlled.value) {
        emit('update:value', value)
    }

    emit('valueChange', value)
}

const registerTab = (value: string) => {
    tabs.value.add(value)

    // If no tab is selected and this is the first tab, select it
    if (!selectedValue.value) {
        selectedValue.value = value
    }
}

const unregisterTab = (value: string) => {
    tabs.value.delete(value)

    // If the selected tab is removed, select the first available tab
    if (selectedValue.value === value && tabs.value.size > 0) {
        const firstTab = Array.from(tabs.value)[0]
        selectTab(firstTab)
    }
}

// Provide context to child components
provide('tabs', {
    selectedValue: readonly(selectedValue),
    orientation: readonly(computed(() => props.orientation)),
    disabled: readonly(computed(() => props.disabled)),
    selectTab,
    registerTab,
    unregisterTab,
})
</script>
