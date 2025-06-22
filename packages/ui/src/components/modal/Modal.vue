<!-- 
  Tailwind classes used in this component:
  fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm
  transition-all duration-300 ease-out opacity-0 opacity-100
  transition-all duration-200 ease-in
  opacity-0 scale-95 translate-y-4 opacity-100 scale-100 translate-y-0
  relative w-full max-w-lg max-h-[90vh] overflow-hidden rounded-lg bg-card shadow-lg border border-border
  max-w-md max-w-2xl max-w-4xl max-w-[95vw] max-h-[95vh]
  flex items-center justify-between p-6 border-b border-border
  flex-1 min-w-0 text-lg font-semibold text-foreground
  ml-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors
  w-5 h-5
  flex-1 overflow-auto
  p-6 pt-6 pb-6
  flex items-center justify-end gap-3 bg-muted/30
-->
<template>
    <Teleport to="body">
        <!-- Backdrop -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="isOpen"
                ref="backdropRef"
                @click="handleBackdropClick"
                :class="
                    m(
                        'fixed inset-0 bg-primary/20 backdrop-blur-sm',
                        theme.backdrop
                    )
                "
                :style="{ zIndex: 'var(--z-modal-backdrop)' }"
            ></div>
        </Transition>

        <!-- Modal Container -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-4"
        >
            <!-- Fixed Modal Container -->
            <div
                v-if="isOpen"
                ref="modalContainerRef"
                :class="
                    m(
                        'fixed inset-0 z-50 flex items-center justify-center',
                        theme.backdrop
                    )
                "
                :style="{ zIndex: 'var(--z-modal-backdrop)' }"
                @keydown="handleKeydown"
                tabindex="-1"
                role="dialog"
                :aria-modal="true"
                :aria-labelledby="titleId"
                :aria-describedby="descriptionId"
            >
                <!-- Modal Content -->
                <div
                    ref="modalRef"
                    :class="
                        m(
                            'relative w-full max-w-lg max-h-[90vh] overflow-hidden rounded-lg bg-card shadow-lg border border-border',
                            size === 'sm' && 'max-w-md',
                            size === 'lg' && 'max-w-2xl',
                            size === 'xl' && 'max-w-4xl',
                            size === 'full' && 'max-w-[95vw] max-h-[95vh]',
                            theme.container
                        )
                    "
                    :style="{ zIndex: 'var(--z-modal)' }"
                    @click.stop
                >
                    <!-- Header -->
                    <div
                        v-if="$slots.header || $slots.title"
                        :class="
                            m(
                                'flex items-center justify-between p-6 border-b border-border',
                                theme.header
                            )
                        "
                    >
                        <div class="flex-1 min-w-0">
                            <slot name="header">
                                <h2
                                    v-if="$slots.title"
                                    :id="titleId"
                                    class="text-lg font-semibold text-foreground"
                                >
                                    <slot name="title" />
                                </h2>
                            </slot>
                        </div>
                        <button
                            v-if="showCloseButton"
                            @click="handleClose"
                            :class="
                                m(
                                    'ml-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors',
                                    theme.closeButton
                                )
                            "
                            type="button"
                            :aria-label="closeButtonLabel"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <!-- Content -->
                    <div :class="m('flex-1 overflow-auto', theme.content)">
                        <div
                            :class="
                                m(
                                    'p-6',
                                    !$slots.header && !$slots.title && 'pt-6',
                                    !$slots.footer && 'pb-6'
                                )
                            "
                        >
                            <slot />
                        </div>
                    </div>

                    <!-- Footer -->
                    <div
                        v-if="$slots.footer"
                        :class="
                            m(
                                'flex items-center justify-end gap-3 p-6 border-t border-border bg-muted/30',
                                theme.footer
                            )
                        "
                    >
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const emit = defineEmits<{
    close: []
    'update:open': [value: boolean]
}>()

const props = withDefaults(
    defineProps<{
        /**
         * Controls whether the modal is open or closed.
         * @type {boolean}
         */
        open: boolean

        /**
         * The size of the modal.
         * @type {'sm' | 'default' | 'lg' | 'xl' | 'full'}
         */
        size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'

        /**
         * Whether to show the close button in the header.
         * @type {boolean}
         */
        showCloseButton?: boolean

        /**
         * Whether clicking the backdrop closes the modal.
         * @type {boolean}
         */
        closeOnBackdropClick?: boolean

        /**
         * Whether pressing the Escape key closes the modal.
         * @type {boolean}
         */
        closeOnEscape?: boolean

        /**
         * Whether to prevent body scroll when modal is open.
         * @type {boolean}
         */
        preventBodyScroll?: boolean

        /**
         * The aria-label for the close button.
         * @type {string}
         */
        closeButtonLabel?: string

        /**
         * Locally customize the component's theme properties.
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            backdrop?: string
            container?: string
            header?: string
            content?: string
            footer?: string
            closeButton?: string
        }
    }>(),
    {
        open: false,
        size: 'default',
        showCloseButton: true,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        closeButtonLabel: 'Close modal',
        theme: () => ({
            backdrop: '',
            container: '',
            header: '',
            content: '',
            footer: '',
            closeButton: '',
        }),
    }
)

const modalRef = ref<HTMLElement>()
const modalContainerRef = ref<HTMLElement>()
const backdropRef = ref<HTMLElement>()
const isOpen = computed(() => props.open)

// Generate unique IDs for accessibility
const titleId = computed(
    () => `modal-title-${Math.random().toString(36).substr(2, 9)}`
)
const descriptionId = computed(
    () => `modal-description-${Math.random().toString(36).substr(2, 9)}`
)

// Handle body scroll prevention
let originalBodyStyle: string | null = null

const preventScroll = () => {
    if (!props.preventBodyScroll) return

    originalBodyStyle = document.body.style.overflow
    document.body.style.overflow = 'hidden'
}

const restoreScroll = () => {
    if (!props.preventBodyScroll) return

    if (originalBodyStyle !== null) {
        document.body.style.overflow = originalBodyStyle
        originalBodyStyle = null
    }
}

// Handle close events
const handleClose = () => {
    emit('close')
    emit('update:open', false)
}

const handleBackdropClick = (event: MouseEvent) => {
    if (props.closeOnBackdropClick && event.target === backdropRef.value) {
        handleClose()
    }
}

const handleKeydown = (event: KeyboardEvent) => {
    if (props.closeOnEscape && event.key === 'Escape') {
        event.preventDefault()
        handleClose()
    }
}

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

// Watch for open state changes
watch(isOpen, async newValue => {
    if (newValue) {
        preventScroll()
        await nextTick()
        // Focus the first focusable element or the modal itself
        const firstFocusable = modalRef.value?.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement
        if (firstFocusable) {
            firstFocusable.focus()
        } else if (modalRef.value) {
            modalRef.value.focus()
        }
    } else {
        restoreScroll()
    }
})

// Lifecycle
onMounted(() => {
    if (isOpen.value) {
        preventScroll()
    }
})

onUnmounted(() => {
    restoreScroll()
})

// Expose methods
defineExpose({
    close: handleClose,
})
</script>

<style scoped>
/* Ensure modal is above other content */
:deep([role='dialog']) {
    z-index: var(--z-modal-backdrop);
}
</style>
