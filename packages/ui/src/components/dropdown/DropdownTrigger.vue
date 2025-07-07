<template>
    <div
        ref="triggerRef"
        role="button"
        tabindex="0"
        :class="[
            'inline-flex items-center justify-center',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        ]"
        @click="handleClick"
        @keydown="handleKeydown"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'

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

console.log('DropdownTrigger context:', {
    dropdown,
    isOpen: dropdown?.isOpen?.value,
})

onMounted(() => {
    console.log('DropdownTrigger mounted')
    if (dropdown && triggerRef.value) {
        dropdown.setTriggerRef(triggerRef.value)
    }
})

const handleClick = (event: MouseEvent) => {
    console.log('Trigger clicked')
    event.preventDefault()
    event.stopPropagation()
    dropdown?.toggle()
}

const handleKeydown = (event: KeyboardEvent) => {
    console.log('Trigger keydown', event.key)
    switch (event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault()
            dropdown?.toggle()
            break
    }
}

defineExpose({
    triggerRef,
})
</script>
