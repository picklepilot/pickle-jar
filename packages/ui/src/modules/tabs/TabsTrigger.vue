<template>
    <button
        ref="tabsTriggerRef"
        :class="[
            'relative flex items-center justify-center px-3 py-1.5 bg-transparent border-b-2 border-transparent text-foreground text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out',
            'data-[state=inactive]:rounded-md',
            // 'data-[state=active]:after:absolute data-[state=active]:after:-bottom-2.5 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-[2px] data-[state=active]:after:bg-primary',
            selected && 'text-foreground bg-blue-400',
            disabled && 'opacity-50 cursor-not-allowed',
            'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2',
        ]"
        :disabled="disabled"
        :aria-selected="selected"
        :aria-controls="`panel-${value}`"
        :data-state="selected ? 'active' : 'inactive'"
        role="tab"
        @click="handleClick"
        @mouseenter="tabsListContext?.handleTabHover(value)"
        @mouseleave="tabsListContext?.handleTabLeave()"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { inject, computed, onMounted, onUnmounted, type Ref, ref } from 'vue'
import type {
    TabsTriggerProps,
    TabsTriggerEmits,
    TabsContext,
    TabsListContext,
} from './types'

interface Props extends TabsTriggerProps {}

interface Emits extends TabsTriggerEmits {}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const tabsTriggerRef = ref<HTMLElement>()

// Define the tabs context type
// interface TabsContext {
//     selectedValue: Ref<string>
//     orientation: Ref<'horizontal' | 'vertical'>
//     disabled: Ref<boolean>
//     selectTab: (value: string) => void
//     registerTab: (value: string) => void
//     unregisterTab: (value: string) => void
// }

// Inject tabs context with proper typing
const tabsContext = inject<TabsContext>('tabs')
const tabsListContext = inject<TabsListContext>('tabsList')

// Computed
const selected = computed(
    () => tabsContext?.selectedValue?.value === props.value
)
const disabled = computed(
    () => props.disabled || tabsContext?.disabled?.value || false
)

// Methods
const handleClick = (event: MouseEvent) => {
    if (disabled.value) return

    emit('click', event)
    emit('select', props.value)

    if (tabsContext?.selectTab) {
        tabsContext.selectTab(props.value)
        tabsListContext?.handleTabSelect(props.value)
    }
}

// Lifecycle
onMounted(() => {
    if (tabsContext?.registerTab) {
        tabsContext.registerTab(props.value)
        tabsListContext?.registerTabElement(
            props.value,
            tabsTriggerRef.value as HTMLElement
        )
    }
})

onUnmounted(() => {
    if (tabsContext?.unregisterTab) {
        tabsContext.unregisterTab(props.value)
        tabsListContext?.unregisterTabElement(props.value)
    }
})

// const handleMouseEnter = () => {
//     emit('mouseenter', props.value)
// }

// const handleMouseLeave = () => {
//     emit('mouseleave', props.value)
// }
</script>

<style scoped>
.tabs-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    min-width: 0;
    flex: 1;
}

.tabs-trigger:hover:not(.tabs-trigger-disabled) {
    color: hsl(var(--foreground));
    background: hsl(var(--muted) / 0.5);
}

.tabs-trigger-selected {
    color: hsl(var(--foreground));
    border-bottom-color: hsl(var(--primary));
}

.tabs-trigger-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.tabs-trigger:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
}
</style>
