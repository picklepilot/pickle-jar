<template>
    <button
        @click="handleClick"
        :disabled="disabled"
        :class="
            m(
                'px-4 py-2 text-sm font-medium transition-colors flex items-center',
                isActive
                    ? 'bg-background text-foreground border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                disabled && 'opacity-50 cursor-not-allowed',
                customTheme
            )
        "
    >
        <component v-if="icon" :is="icon" class="mr-2 size-4" />
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import { useCodeBlockContext } from './useCodeBlockContext'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface Props {
    id: string
    label: string
    icon?: any
    disabled?: boolean
    customTheme?: string
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    customTheme: '',
})

const { activeTab, setActiveTab } = useCodeBlockContext()

const isActive = computed(() => activeTab.value === props.id)

const handleClick = () => {
    if (!props.disabled) {
        setActiveTab(props.id)
    }
}
</script>
