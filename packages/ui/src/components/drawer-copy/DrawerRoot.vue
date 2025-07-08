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
                :class="m('fixed inset-0 bg-background/50', theme.backdrop)"
                :style="{ zIndex: 'var(--z-modal-backdrop)' }"
            ></div>
        </Transition>

        <!-- Drawer Container -->
        <Transition
            :enter-active-class="enterActiveClass"
            :enter-from-class="enterFromClass"
            :enter-to-class="enterToClass"
            :leave-active-class="leaveActiveClass"
            :leave-from-class="leaveFromClass"
            :leave-to-class="leaveToClass"
        >
            <!-- Fixed Drawer Container -->
            <div
                v-if="open"
                ref="drawerContainerRef"
                @click="handleBackdropClick"
                :class="
                    m(
                        'fixed inset-0 z-50 flex',
                        positionClasses,
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
         * Controls whether the drawer is open or closed.
         * @type {boolean}
         */
        open: boolean

        /**
         * The position of the drawer on the screen.
         * @type {'left' | 'right' | 'top' | 'bottom'}
         */
        position?: 'left' | 'right' | 'top' | 'bottom'

        /**
         * Whether clicking the backdrop closes the drawer.
         * @type {boolean}
         */
        closeOnBackdropClick?: boolean

        /**
         * Whether pressing the Escape key closes the drawer.
         * @type {boolean}
         */
        closeOnEscape?: boolean

        /**
         * Whether to prevent body scroll when drawer is open.
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
        position: 'right',
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        theme: () => ({
            backdrop: '',
        }),
    }
)

const drawerContainerRef = ref<HTMLElement>()
const backdropRef = ref<HTMLElement>()
const isDragging = ref(false)

// Generate unique IDs for accessibility
const titleId = computed(
    () => `drawer-title-${Math.random().toString(36).substr(2, 9)}`
)
const descriptionId = computed(
    () => `drawer-description-${Math.random().toString(36).substr(2, 9)}`
)

// Position-based classes and transitions
const positionClasses = computed(() => {
    switch (props.position) {
        case 'left':
            return 'justify-start'
        case 'right':
            return 'justify-end'
        case 'top':
            return 'items-start'
        case 'bottom':
            return 'items-end'
        default:
            return 'justify-end'
    }
})

const enterActiveClass = computed(() => {
    return 'transition-all duration-300 ease-out'
})

const enterFromClass = computed(() => {
    switch (props.position) {
        case 'left':
            return 'opacity-0 -translate-x-full'
        case 'right':
            return 'opacity-0 translate-x-full'
        case 'top':
            return 'opacity-0 -translate-y-full'
        case 'bottom':
            return 'opacity-0 translate-y-full'
        default:
            return 'opacity-0 translate-x-full'
    }
})

const enterToClass = computed(() => {
    return 'opacity-100 translate-x-0 translate-y-0'
})

const leaveActiveClass = computed(() => {
    return 'transition-all duration-200 ease-in'
})

const leaveFromClass = computed(() => {
    return 'opacity-100 translate-x-0 translate-y-0'
})

const leaveToClass = computed(() => {
    switch (props.position) {
        case 'left':
            return 'opacity-0 -translate-x-full'
        case 'right':
            return 'opacity-0 translate-x-full'
        case 'top':
            return 'opacity-0 -translate-y-full'
        case 'bottom':
            return 'opacity-0 translate-y-full'
        default:
            return 'opacity-0 translate-x-full'
    }
})

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
    // Don't close if we're currently dragging
    if (isDragging.value) return

    emit('close')
    emit('update:open', false)
}

const handleBackdropClick = (event: MouseEvent) => {
    return
    // Don't close if we're currently dragging
    if (isDragging.value) return

    if (
        props.closeOnBackdropClick &&
        event.target === drawerContainerRef.value
    ) {
        handleClose()
    }
}

const handleKeydown = (event: KeyboardEvent) => {
    if (props.closeOnEscape && event.key === 'Escape') {
        event.preventDefault()
        handleClose()
    }
}

// Method to track drag state from child components
const setDragging = (dragging: boolean) => {
    isDragging.value = dragging
}

// Watch for open state changes
watch(
    () => props.open,
    async newValue => {
        if (newValue) {
            preventScroll()
            await nextTick()
            // Focus the drawer container for keyboard events
            if (drawerContainerRef.value) {
                drawerContainerRef.value.focus()
            }
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

    // Add global escape key listener as fallback
    document.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
    restoreScroll()
    document.removeEventListener('keydown', handleGlobalKeydown)
})

// Global keydown handler for escape key
const handleGlobalKeydown = (event: KeyboardEvent) => {
    if (props.open && props.closeOnEscape && event.key === 'Escape') {
        event.preventDefault()
        handleClose()
    }
}

// Expose methods and refs
defineExpose({
    close: handleClose,
    drawerContainerRef,
    backdropRef,
    titleId: titleId.value,
    descriptionId: descriptionId.value,
    setDragging,
})
</script>

<style scoped>
/* Ensure drawer is above other content */
:deep([role='dialog']) {
    z-index: var(--z-modal-backdrop);
}
</style>
