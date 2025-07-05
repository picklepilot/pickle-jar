<template>
    <div v-if="isActive" :class="m('p-4', customTheme)">
        <slot />
    </div>
</template>

<script setup lang="ts">
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { computed, onMounted, onUnmounted } from 'vue'
import { useCodeBlockContext, type CodeBlockTab } from './useCodeBlockContext'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface Props {
    id: string
    label: string
    icon?: string
    disabled?: boolean
    customTheme?: string
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    customTheme: '',
})

const { activeTab, registerTab, unregisterTab } = useCodeBlockContext()

const isActive = computed(() => activeTab.value === props.id)

const tab: CodeBlockTab = {
    id: props.id,
    label: props.label,
    icon: props.icon,
    disabled: props.disabled,
}

onMounted(() => {
    registerTab(tab)
})

onUnmounted(() => {
    unregisterTab(props.id)
})
</script>
