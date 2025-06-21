<template>
    <div
        ref="itemRef"
        role="menuitem"
        tabindex="-1"
        :class="[
            'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground',
            isFocused
                ? 'text-accent-foreground bg-accent'
                : 'text-foreground/70 hover:text-accent-foreground',
            disabled && 'pointer-events-none opacity-50',
        ]"
        @click="handleClick"
        @keydown="handleKeydown"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @focus="handleFocus"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted, computed } from 'vue'

interface Props {
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
})

const emit = defineEmits<{
    click: [event: MouseEvent]
    select: []
}>()

interface DropdownContext {
    isOpen: any
    triggerRef: any
    open: () => void
    close: () => void
    toggle: () => void
    setTriggerRef: (ref: HTMLElement) => void
    // Keyboard navigation
    registerItem: (itemRef: HTMLElement, itemId: string) => void
    unregisterItem: (itemId: string) => void
    focusNext: () => void
    focusPrevious: () => void
    focusFirst: () => void
    focusLast: () => void
    focusItem: (itemId: string) => void
    getActiveItemId: () => string | null
}

const dropdown = inject<DropdownContext>('dropdown')
const itemRef = ref<HTMLElement>()
const itemId = ref<string>()

// Generate a unique ID for this item
onMounted(() => {
    itemId.value = `dropdown-item-${Math.random().toString(36).substr(2, 9)}`
    if (dropdown && itemRef.value && itemId.value) {
        dropdown.registerItem(itemRef.value, itemId.value)
    }
})

onUnmounted(() => {
    if (dropdown && itemId.value) {
        dropdown.unregisterItem(itemId.value)
    }
})

// Check if this item is currently focused
const isFocused = computed(() => {
    return dropdown?.getActiveItemId() === itemId.value
})

const handleClick = (event: MouseEvent) => {
    if (props.disabled) return

    event.preventDefault()
    event.stopPropagation()
    emit('click', event)
    emit('select')
    dropdown?.close()
}

const handleKeydown = (event: KeyboardEvent) => {
    if (props.disabled) return

    switch (event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault()
            emit('select')
            dropdown?.close()
            break
    }
}

const handleMouseEnter = () => {
    if (props.disabled) return
    if (dropdown && itemId.value) {
        dropdown.focusItem(itemId.value)
    }
}

const handleMouseLeave = () => {
    if (props.disabled) return
    // Don't blur on mouse leave to maintain keyboard navigation state
}

const handleFocus = () => {
    if (props.disabled) return
    if (dropdown && itemId.value) {
        dropdown.focusItem(itemId.value)
    }
}

defineExpose({
    itemRef,
})
</script>
