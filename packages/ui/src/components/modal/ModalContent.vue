<template>
    <div
        ref="modalRef"
        :class="
            m(
                'relative w-full max-w-lg max-h-[90vh] overflow-hidden rounded-lg bg-card shadow-lg border border-ring flex flex-col',
                size === 'sm' && 'max-w-md',
                size === 'lg' && 'max-w-2xl',
                size === 'xl' && 'max-w-4xl',
                size === 'full' && 'max-w-[95vw] max-h-[95vh]',
                theme.container
            )
        "
        :style="{ zIndex: 'var(--z-modal)' }"
        @click.stop
        @keydown="focusTrap"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const props = withDefaults(
    defineProps<{
        /**
         * The size of the modal.
         * @type {'sm' | 'default' | 'lg' | 'xl' | 'full'}
         */
        size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'

        /**
         * Locally customize the component's theme properties.
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            container?: string
        }
    }>(),
    {
        size: 'default',
        theme: () => ({
            container: '',
        }),
    }
)

const modalRef = ref<HTMLElement>()

// Focus management
const focusTrap = (event: KeyboardEvent) => {
    if (!modalRef.value || event.key !== 'Tab') return

    const focusableElements = modalRef.value.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[
        focusableElements.length - 1
    ] as HTMLElement

    if (event.shiftKey) {
        if (document.activeElement === firstElement) {
            event.preventDefault()
            lastElement.focus()
        }
    } else {
        if (document.activeElement === lastElement) {
            event.preventDefault()
            firstElement.focus()
        }
    }
}

// Focus the first focusable element when modal opens
const focusFirstElement = async () => {
    await nextTick()
    const firstFocusable = modalRef.value?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement
    if (firstFocusable) {
        firstFocusable.focus()
    } else if (modalRef.value) {
        modalRef.value.focus()
    }
}

// Expose methods and refs
defineExpose({
    modalRef,
    focusFirstElement,
})
</script>
