<template>
    <Teleport to="body">
        <transition
            enter-active-class="transition-all duration-200 ease-out"
            leave-active-class="transition-all duration-150 ease-in"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <div
                v-show="dropdown?.isOpen"
                ref="contentRef"
                role="menu"
                :class="[
                    'fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-lg',
                    'dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700',
                ]"
                :style="{
                    ...floatingStyles,
                    transformOrigin: `${transformOrigin} center`,
                }"
                @click="handleClick"
            >
                <slot />
            </div>
        </transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted, getCurrentInstance } from 'vue'

interface DropdownContext {
    isOpen: any
    triggerRef: any
    open: () => void
    close: () => void
    toggle: () => void
    setTriggerRef: (ref: HTMLElement) => void
}

const dropdown = inject<DropdownContext>('dropdown')
const contentRef = ref<HTMLElement>()

// Get the floating styles and placement from the parent DropdownSub
const floatingStyles = ref({})
const transformOrigin = ref('left')

onMounted(() => {
    if (contentRef.value) {
        // Access the parent DropdownSub component and get its exposed properties
        const parentComponent = getCurrentInstance()?.parent
        if (parentComponent && parentComponent.exposed) {
            // Set the content ref in the parent
            parentComponent.exposed.contentRef = contentRef.value

            // Get floating styles and transform origin from parent
            if (parentComponent.exposed.floatingStyles) {
                floatingStyles.value =
                    parentComponent.exposed.floatingStyles.value
            }
            if (parentComponent.exposed.transformOrigin) {
                transformOrigin.value =
                    parentComponent.exposed.transformOrigin.value
            }
        }
    }
})

const handleClick = (event: Event) => {
    event.stopPropagation()
}

// Handle click outside to close submenu
const handleClickOutside = (event: MouseEvent) => {
    if (!dropdown?.isOpen || !contentRef.value) return

    const target = event.target as Element
    const triggerElement = dropdown.triggerRef?.value

    if (
        triggerElement &&
        !triggerElement.contains(target) &&
        !contentRef.value.contains(target)
    ) {
        dropdown.close()
    }
}

onMounted(() => {
    // Use a small delay to ensure the event listener is added after the submenu opens
    setTimeout(() => {
        document.addEventListener('click', handleClickOutside, true)
    }, 0)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside, true)
})
</script>
