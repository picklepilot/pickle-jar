<template>
    <div
        ref="triggerRef"
        role="menuitem"
        tabindex="-1"
        :class="[
            'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
            'focus:bg-gray-100 focus:text-gray-900',
            'dark:focus:bg-gray-700 dark:focus:text-gray-100',
            'hover:bg-gray-100 hover:text-gray-900',
            'dark:hover:bg-gray-700 dark:hover:text-gray-100',
            'data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900',
            'dark:data-[state=open]:bg-gray-700 dark:data-[state=open]:text-gray-100',
        ]"
        :data-state="dropdown?.isOpen ? 'open' : 'closed'"
        @click="handleClick"
        @keydown="handleKeydown"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <slot />
        <svg
            class="ml-auto h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <polyline points="6,9 12,15 18,9" />
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'

const emit = defineEmits<{
    click: [event: MouseEvent]
    keydown: [event: KeyboardEvent]
}>()

interface DropdownContext {
    isOpen: any
    triggerRef: any
    open: () => void
    close: () => void
    toggle: () => void
    setTriggerRef: (ref: HTMLElement) => void
}

const dropdown = inject<DropdownContext>('dropdown')
const triggerRef = ref<HTMLElement>()

onMounted(() => {
    if (dropdown && triggerRef.value) {
        dropdown.setTriggerRef(triggerRef.value)
    }
})

const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    dropdown?.toggle()
    emit('click', event)
}

const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault()
            dropdown?.toggle()
            break
        case 'ArrowRight':
            event.preventDefault()
            dropdown?.open()
            break
        case 'ArrowLeft':
            event.preventDefault()
            dropdown?.close()
            break
    }
    emit('keydown', event)
}

const handleMouseEnter = () => {
    dropdown?.open()
}

const handleMouseLeave = () => {
    // Optional: close on mouse leave
    // dropdown?.close()
}

defineExpose({
    triggerRef,
})
</script>
