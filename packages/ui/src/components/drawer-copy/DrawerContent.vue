<template>
    <div
        ref="drawerRef"
        :class="
            m(
                'relative bg-card shadow-lg border rounded-l-lg border-ring flex flex-col',
                positionClasses,
                sizeClasses,
                theme.container
            )
        "
        :style="dragStyle"
        @mousedown="handleMouseDown"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click.stop
        @keydown="focusTrap"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const emit = defineEmits<{
    close: []
    'update:open': [value: boolean]
    'drag-start': []
    'drag-end': []
}>()

const props = withDefaults(
    defineProps<{
        /**
         * Controls whether the drawer is open or closed.
         * @type {boolean}
         */
        open?: boolean

        /**
         * The position of the drawer on the screen.
         * @type {'left' | 'right' | 'top' | 'bottom'}
         */
        position?: 'left' | 'right' | 'top' | 'bottom'

        /**
         * The size of the drawer.
         * @type {'sm' | 'default' | 'lg' | 'xl' | 'full'}
         */
        size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'

        /**
         * Whether drag-to-close is enabled.
         * @type {boolean}
         */
        dragToClose?: boolean

        /**
         * The threshold distance to trigger close on drag end.
         * @type {number}
         */
        dragThreshold?: number

        /**
         * The velocity threshold to trigger close on flick.
         * @type {number}
         */
        velocityThreshold?: number

        /**
         * Locally customize the component's theme properties.
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            container?: string
            content?: string
        }
    }>(),
    {
        open: false,
        position: 'right',
        size: 'default',
        dragToClose: true,
        dragThreshold: 100,
        velocityThreshold: 0.5,
        theme: () => ({
            container: '',
            content: '',
        }),
    }
)

const drawerRef = ref<HTMLElement>()
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })
const startPos = ref({ x: 0, y: 0 })
const lastPos = ref({ x: 0, y: 0 })
const velocity = ref({ x: 0, y: 0 })
const lastTime = ref(0)
const dragStartTime = ref(0)
const shouldAnimateWidthBack = ref(false)

// Position-based classes
const positionClasses = computed(() => {
    switch (props.position) {
        case 'left':
            return 'h-full'
        case 'right':
            return 'h-full'
        case 'top':
            return 'w-full'
        case 'bottom':
            return 'w-full'
        default:
            return 'h-full'
    }
})

// Size-based classes
const sizeClasses = computed(() => {
    switch (props.position) {
        case 'left':
        case 'right':
            switch (props.size) {
                case 'sm':
                    return 'w-80'
                case 'default':
                    return 'w-96'
                case 'lg':
                    return 'w-[28rem]'
                case 'xl':
                    return 'w-[32rem]'
                case 'full':
                    return 'w-full'
                default:
                    return 'w-96'
            }
        case 'top':
        case 'bottom':
            switch (props.size) {
                case 'sm':
                    return 'h-64'
                case 'default':
                    return 'h-80'
                case 'lg':
                    return 'h-96'
                case 'xl':
                    return 'h-[28rem]'
                case 'full':
                    return 'h-full'
                default:
                    return 'h-80'
            }
        default:
            return 'w-96'
    }
})

// Compute the base width in px for the right drawer
const baseWidthPx = computed(() => {
    switch (props.size) {
        case 'sm':
            return 320 // w-80
        case 'default':
            return 384 // w-96
        case 'lg':
            return 448 // w-[28rem]
        case 'xl':
            return 512 // w-[32rem]
        case 'full':
            return window.innerWidth
        default:
            return 384
    }
})

// Compute the drag style for the right-anchored drawer
const dragStyle = computed(() => {
    if (props.position === 'right') {
        if (dragOffset.value.x >= 0) {
            // Normal drag-to-close (right)
            return {
                zIndex: 'var(--z-modal)',
                transform: `translateX(${dragOffset.value.x}px)`,
                width: `${baseWidthPx.value}px`,
                right: '0',
                transition:
                    isDragging.value || shouldAnimateWidthBack.value
                        ? 'none'
                        : 'transform 0.7s cubic-bezier(0.32,0.72,0,1)',
            }
        } else {
            // Opposite direction: stretch width, keep right edge anchored
            return {
                zIndex: 'var(--z-modal)',
                width: `${baseWidthPx.value - dragOffset.value.x}px`,
                right: '0',
                transform: 'none',
                transition:
                    shouldAnimateWidthBack.value || !isDragging.value
                        ? 'width 0.7s cubic-bezier(0.32,0.72,0,1)'
                        : 'none',
            }
        }
    } else {
        // Fallback for other positions (not implemented yet)
        return {
            zIndex: 'var(--z-modal)',
            transform: `translate(${dragOffset.value.x}px, ${dragOffset.value.y}px)`,
            transition: isDragging.value
                ? 'none'
                : 'transform 0.7s cubic-bezier(0.32,0.72,0,1)',
        }
    }
})

// Get the primary drag axis and direction for the current position
const getDragConfig = () => {
    switch (props.position) {
        case 'right':
            return { axis: 'x', closeDirection: 1, openDirection: -1 }
        case 'left':
            return { axis: 'x', closeDirection: -1, openDirection: 1 }
        case 'top':
            return { axis: 'y', closeDirection: -1, openDirection: 1 }
        case 'bottom':
            return { axis: 'y', closeDirection: 1, openDirection: -1 }
        default:
            return { axis: 'x', closeDirection: 1, openDirection: -1 }
    }
}

// Drag handlers
const handleMouseDown = (event: MouseEvent) => {
    if (!props.dragToClose || event.button !== 0) return

    event.preventDefault()
    startDrag(event.clientX, event.clientY, Date.now())

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging.value) return
        handleDrag(e.clientX, e.clientY, Date.now())
    }

    const handleMouseUp = (e: MouseEvent) => {
        if (!isDragging.value) return
        endDrag(Date.now())
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
}

const handleTouchStart = (event: TouchEvent) => {
    if (!props.dragToClose || event.touches.length !== 1) return

    event.preventDefault()
    const touch = event.touches[0]
    startDrag(touch.clientX, touch.clientY, Date.now())
}

const handleTouchMove = (event: TouchEvent) => {
    if (!isDragging.value || event.touches.length !== 1) return

    event.preventDefault()
    const touch = event.touches[0]
    handleDrag(touch.clientX, touch.clientY, Date.now())
}

const handleTouchEnd = (event: TouchEvent) => {
    if (!isDragging.value) return
    endDrag(Date.now())
}

const startDrag = (clientX: number, clientY: number, timestamp: number) => {
    isDragging.value = true
    startPos.value = { x: clientX, y: clientY }
    lastPos.value = { x: clientX, y: clientY }
    lastTime.value = timestamp
    dragStartTime.value = timestamp
    velocity.value = { x: 0, y: 0 }

    // Emit drag start event
    emit('drag-start')

    // Add haptic feedback on mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(10)
    }
}

const handleDrag = (clientX: number, clientY: number, timestamp: number) => {
    const deltaX = clientX - lastPos.value.x
    const deltaY = clientY - lastPos.value.y
    const deltaTime = timestamp - lastTime.value

    // Calculate velocity (pixels per millisecond)
    if (deltaTime > 0) {
        velocity.value = {
            x: deltaX / deltaTime,
            y: deltaY / deltaTime,
        }
    }

    const config = getDragConfig()
    let newOffset = { x: dragOffset.value.x, y: dragOffset.value.y }

    if (props.position === 'right') {
        // Calculate total drag from anchor
        const dragFromAnchor = clientX - startPos.value.x
        if (dragFromAnchor < 0) {
            // Stretch (opposite direction)
            // Use progressive dampening as before
            const oppositeDirectionMovement = Math.abs(dragFromAnchor)
            const resistanceFactor = Math.min(
                0.95,
                oppositeDirectionMovement / 20
            )
            const dampeningFactor = Math.max(0.05, 1 - resistanceFactor)
            newOffset.x = dragFromAnchor * dampeningFactor
        } else {
            // Drag-to-close (move drawer closed)
            newOffset.x = dragFromAnchor
        }
    } else if (config.axis === 'x') {
        // Existing logic for other positions (left)
        if (deltaX * config.closeDirection > 0) {
            newOffset.x += deltaX
        } else {
            const oppositeDirectionMovement = Math.abs(
                dragOffset.value.x * config.openDirection
            )
            const resistanceFactor = Math.min(
                0.95,
                oppositeDirectionMovement / 20
            )
            const dampeningFactor = Math.max(0.05, 1 - resistanceFactor)
            newOffset.x += deltaX * dampeningFactor
        }
    } else if (config.axis === 'y') {
        if (deltaY * config.closeDirection > 0) {
            newOffset.y += deltaY
        } else {
            const oppositeDirectionMovement = Math.abs(
                dragOffset.value.y * config.openDirection
            )
            const resistanceFactor = Math.min(
                0.95,
                oppositeDirectionMovement / 20
            )
            const dampeningFactor = Math.max(0.05, 1 - resistanceFactor)
            newOffset.y += deltaY * dampeningFactor
        }
    }

    // Apply bounds to prevent extreme positions, but allow opposite direction movement
    const maxOffset = Math.max(window.innerWidth, window.innerHeight)
    switch (props.position) {
        case 'right':
            newOffset.x = Math.max(
                -maxOffset * 0.3,
                Math.min(newOffset.x, maxOffset)
            )
            break
        case 'left':
            newOffset.x = Math.max(
                -maxOffset,
                Math.min(newOffset.x, maxOffset * 0.3)
            )
            break
        case 'top':
            newOffset.y = Math.max(
                -maxOffset,
                Math.min(newOffset.y, maxOffset * 0.3)
            )
            break
        case 'bottom':
            newOffset.y = Math.max(
                -maxOffset * 0.3,
                Math.min(newOffset.y, maxOffset)
            )
            break
    }

    dragOffset.value = newOffset
    lastPos.value = { x: clientX, y: clientY }
    lastTime.value = timestamp
}

const endDrag = (timestamp: number) => {
    isDragging.value = false

    // Emit drag end event
    emit('drag-end')

    const config = getDragConfig()
    const dragDuration = timestamp - dragStartTime.value

    // Calculate total drag distance and velocity
    const totalDragDistance =
        config.axis === 'x'
            ? Math.abs(dragOffset.value.x)
            : Math.abs(dragOffset.value.y)

    const currentVelocity =
        config.axis === 'x'
            ? Math.abs(velocity.value.x)
            : Math.abs(velocity.value.y)

    // Determine if we should close based on:
    // 1. Distance threshold
    // 2. Velocity threshold (momentum-based)
    // 3. Direction of drag
    let shouldClose = false

    if (config.axis === 'x') {
        const isDraggingInCloseDirection =
            dragOffset.value.x * config.closeDirection > 0
        const distanceThreshold =
            dragOffset.value.x * config.closeDirection >
            (props.dragThreshold ?? 100)
        const velocityThreshold =
            currentVelocity > (props.velocityThreshold ?? 0.5)

        shouldClose =
            isDraggingInCloseDirection &&
            (distanceThreshold || velocityThreshold)
    } else {
        const isDraggingInCloseDirection =
            dragOffset.value.y * config.closeDirection > 0
        const distanceThreshold =
            dragOffset.value.y * config.closeDirection >
            (props.dragThreshold ?? 100)
        const velocityThreshold =
            currentVelocity > (props.velocityThreshold ?? 0.5)

        shouldClose =
            isDraggingInCloseDirection &&
            (distanceThreshold || velocityThreshold)
    }

    if (shouldClose) {
        // Animate to closed position with momentum
        animateToClosed()
    } else {
        // Always snap back to open position
        animateToOpen()
    }
}

const animateToClosed = () => {
    // Calculate final closed position
    let finalOffset = { x: 0, y: 0 }
    const maxOffset = Math.max(window.innerWidth, window.innerHeight)

    switch (props.position) {
        case 'right':
            finalOffset = { x: maxOffset, y: 0 }
            break
        case 'left':
            finalOffset = { x: -maxOffset, y: 0 }
            break
        case 'top':
            finalOffset = { x: 0, y: -maxOffset }
            break
        case 'bottom':
            finalOffset = { x: 0, y: maxOffset }
            break
    }

    dragOffset.value = finalOffset

    setTimeout(() => {
        emit('close')
        emit('update:open', false)
        resetDragState()
    }, 500) // Match the CSS transition duration
}

const animateToOpen = async () => {
    // For right-anchored drawer, if stretched (dragOffset.x < 0), animate width back
    if (props.position === 'right' && dragOffset.value.x < 0) {
        // Keep the negative offset for one tick to allow transition
        await nextTick()
        dragOffset.value = { x: 0, y: 0 }
    } else {
        // Always animate back to (0,0) - fully open position
        dragOffset.value = { x: 0, y: 0 }
    }
}

const resetDragState = () => {
    isDragging.value = false
    dragOffset.value = { x: 0, y: 0 }
    startPos.value = { x: 0, y: 0 }
    lastPos.value = { x: 0, y: 0 }
    velocity.value = { x: 0, y: 0 }
    lastTime.value = 0
    dragStartTime.value = 0
}

// Reset drag state when drawer opens/closes
watch(
    () => props.open,
    newValue => {
        if (newValue) {
            resetDragState()
        }
    }
)

// Focus management
const focusTrap = (event: KeyboardEvent) => {
    if (!drawerRef.value || event.key !== 'Tab') return

    const focusableElements = drawerRef.value.querySelectorAll(
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

// Expose for parent
defineExpose({
    drawerRef,
})
</script>
