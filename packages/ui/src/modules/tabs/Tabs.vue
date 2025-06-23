<template>
    <div
        ref="containerRef"
        :class="m('relative z-10 mx-auto', classes.container, theme.container)"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { m } from '../../utils'
import {
    ref,
    provide,
    computed,
    watch,
    onMounted,
    onUnmounted,
    nextTick,
} from 'vue'
import { type Tab } from '../../types'

interface Props {
    modelValue?: string | number
    defaultValue?: string | number
    orientation?: 'horizontal' | 'vertical'
    classes?: {
        container?: string
        line?: string
        tab?: string
    }
    style?: 'classic' | 'modern'
    disabled?: string[]
    tabClasses?: string[]
    tabs?: Tab[]
    theme?: {
        container?: string
        sortableContainer?: string
        tabsNavTab?: string
        tabsNavLine?: string
    }
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    style: 'classic',
    classes: () => ({
        container: '',
        line: '',
        tab: '',
    }),
    disabled: () => [],
    tabClasses: () => [],
    theme: () => ({
        container: '',
        sortableContainer: '',
        tabsNavTab: '',
        tabsNavLine: '',
    }),
})

const emit = defineEmits<{
    'update:modelValue': [value: string | number]
    clicked: [tabId: string | number]
    update: [tabs: Tab[]]
}>()

// Internal state
const activeValue = ref(props.defaultValue || props.modelValue || '')
const effectiveTabs = ref(props.tabs || [])
const containerRef = ref<HTMLElement>()

// Computed
const currentValue = computed({
    get: () => activeValue.value,
    set: value => {
        activeValue.value = value
        emit('update:modelValue', value)
    },
})

// Provide context to child components
provide('tabs', {
    value: currentValue,
    orientation: computed(() => props.orientation),
    style: computed(() => props.style),
    classes: computed(() => props.classes),
    disabled: computed(() => props.disabled),
    tabClasses: computed(() => props.tabClasses),
    theme: computed(() => props.theme),
    tabs: effectiveTabs,
    onValueChange: (value: string | number) => {
        currentValue.value = value
        emit('clicked', value)
    },
    onTabsUpdate: (tabs: Tab[]) => {
        effectiveTabs.value = tabs
        emit('update', tabs)
    },
})

// Watch for external changes
watch(
    () => props.modelValue,
    newValue => {
        if (newValue !== undefined) {
            activeValue.value = newValue
        }
    }
)

watch(
    () => props.tabs,
    newTabs => {
        if (newTabs) {
            effectiveTabs.value = newTabs
        }
    },
    { deep: true }
)

// Expose methods for parent components
defineExpose({
    setValue: (value: string | number) => {
        currentValue.value = value
    },
    getValue: () => currentValue.value,
    getTabs: () => effectiveTabs.value,
    setTabs: (tabs: Tab[]) => {
        effectiveTabs.value = tabs
    },
})
</script>
