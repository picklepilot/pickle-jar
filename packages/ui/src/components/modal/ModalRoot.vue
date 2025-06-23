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
                v-if="open"
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
            enter-active-class="transition-all duration-150 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-4"
        >
            <!-- Fixed Modal Container -->
            <div
                v-if="open"
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
                <slot />
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
         * Locally customize the component's theme properties.
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            backdrop?: string
        }
    }>(),
    {
        open: false,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        theme: () => ({
            backdrop: '',
        }),
    }
)

const modalContainerRef = ref<HTMLElement>()
const backdropRef = ref<HTMLElement>()

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

// Watch for open state changes
watch(
    () => props.open,
    async newValue => {
        if (newValue) {
            preventScroll()
            await nextTick()
        } else {
            restoreScroll()
        }
    }
)

// Lifecycle
onMounted(() => {
    if (props.open) {
        preventScroll()
    }
})

onUnmounted(() => {
    restoreScroll()
})

// Expose methods and refs
defineExpose({
    close: handleClose,
    modalContainerRef,
    backdropRef,
    titleId: titleId.value,
    descriptionId: descriptionId.value,
})
</script>

<style scoped>
/* Ensure modal is above other content */
:deep([role='dialog']) {
    z-index: var(--z-modal-backdrop);
}
</style>
