<template>
    <div class="relative">
        <slot />
    </div>
</template>

<script setup lang="ts">
import {
    provide,
    ref,
    computed,
    reactive,
    onMounted,
    onUnmounted,
    type ComputedRef,
} from 'vue'

interface DropdownContext {
    isOpen: ComputedRef<boolean>
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

const isOpen = ref(false)
const triggerRef = ref<HTMLElement>()
const registeredItems = ref<Map<string, HTMLElement>>(new Map())
const activeItemId = ref<string | null>(null)

// Get items sorted by their DOM position (top to bottom)
const getItemsInDOMOrder = (): [string, HTMLElement][] => {
    const items = Array.from(registeredItems.value.entries())

    // Sort by the element's position in the DOM
    return items.sort(([, elementA], [, elementB]) => {
        const position = elementA.compareDocumentPosition(elementB)

        // If elementA comes before elementB in the document
        if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
            return -1
        }
        // If elementA comes after elementB in the document
        if (position & Node.DOCUMENT_POSITION_PRECEDING) {
            return 1
        }
        return 0
    })
}

const context = reactive<DropdownContext>({
    isOpen: computed(() => isOpen.value),
    triggerRef: triggerRef,
    open: () => {
        isOpen.value = true
    },
    close: () => {
        isOpen.value = false
        activeItemId.value = null
    },
    toggle: () => {
        isOpen.value = !isOpen.value
        if (!isOpen.value) {
            activeItemId.value = null
        }
    },
    setTriggerRef: (ref: HTMLElement) => {
        triggerRef.value = ref
    },
    // Keyboard navigation
    registerItem: (itemRef: HTMLElement, itemId: string) => {
        registeredItems.value.set(itemId, itemRef)
    },
    unregisterItem: (itemId: string) => {
        registeredItems.value.delete(itemId)
        if (activeItemId.value === itemId) {
            activeItemId.value = null
        }
    },
    focusNext: () => {
        const items = getItemsInDOMOrder()
        if (items.length === 0) return

        let currentIndex = -1
        if (activeItemId.value) {
            currentIndex = items.findIndex(([id]) => id === activeItemId.value)
        }

        const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
        const [nextId, nextElement] = items[nextIndex]

        activeItemId.value = nextId
        nextElement?.focus()
    },
    focusPrevious: () => {
        const items = getItemsInDOMOrder()
        if (items.length === 0) return

        let currentIndex = -1
        if (activeItemId.value) {
            currentIndex = items.findIndex(([id]) => id === activeItemId.value)
        }

        const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
        const [prevId, prevElement] = items[prevIndex]

        activeItemId.value = prevId
        prevElement?.focus()
    },
    focusFirst: () => {
        const items = getItemsInDOMOrder()
        if (items.length === 0) return

        const [firstId, firstElement] = items[0]
        activeItemId.value = firstId
        firstElement?.focus()
    },
    focusLast: () => {
        const items = getItemsInDOMOrder()
        if (items.length === 0) return

        const [lastId, lastElement] = items[items.length - 1]
        activeItemId.value = lastId
        lastElement?.focus()
    },
    focusItem: (itemId: string) => {
        const element = registeredItems.value.get(itemId)
        if (element) {
            activeItemId.value = itemId
            element.focus()
        }
    },
    getActiveItemId: () => activeItemId.value,
})

provide('dropdown', context)
provide('triggerRef', triggerRef)

// Handle escape key to close dropdown
const handleKeydown = (event: KeyboardEvent) => {
    if (!isOpen.value) return

    switch (event.key) {
        case 'Escape':
            event.preventDefault()
            isOpen.value = false
            activeItemId.value = null
            break
        // Remove ArrowDown/ArrowUp/Home/End handling - navigation should be handled by the content container
    }
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
})

defineExpose({
    isOpen,
    open: context.open,
    close: context.close,
    toggle: context.toggle,
    triggerRef,
})
</script>
