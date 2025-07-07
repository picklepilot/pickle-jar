<template>
    <DrawerRoot
        ref="drawerRootRef"
        :open="open"
        :position="position"
        :close-on-backdrop-click="closeOnBackdropClick"
        :close-on-escape="closeOnEscape"
        :prevent-body-scroll="preventBodyScroll"
        :theme="theme"
        @close="$emit('close')"
        @update:open="$emit('update:open', $event)"
    >
        <DrawerContent
            ref="drawerContentRef"
            :open="open"
            :position="position"
            :size="size"
            :drag-to-close="dragToClose"
            :drag-threshold="dragThreshold"
            :velocity-threshold="velocityThreshold"
            :theme="theme"
            @close="$emit('close')"
            @update:open="$emit('update:open', $event)"
            @drag-start="handleDragStart"
            @drag-end="handleDragEnd"
        >
            <slot />
        </DrawerContent>
    </DrawerRoot>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DrawerRoot from './DrawerRoot.vue'
import DrawerContent from './DrawerContent.vue'

const emit = defineEmits<{
    close: []
    'update:open': [value: boolean]
}>()

const drawerContentRef = ref<InstanceType<typeof DrawerContent>>()
const drawerRootRef = ref<InstanceType<typeof DrawerRoot>>()

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
         * The size of the drawer.
         * @type {'sm' | 'default' | 'lg' | 'xl' | 'full'}
         */
        size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'

        /**
         * Whether to show the close button in the header.
         * @type {boolean}
         */
        showCloseButton?: boolean

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
            content?: string
            closeButton?: string
        }
    }>(),
    {
        open: false,
        position: 'right',
        size: 'default',
        showCloseButton: true,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        dragToClose: true,
        dragThreshold: 100,
        velocityThreshold: 0.5,
        closeButtonLabel: 'Close drawer',
        theme: () => ({
            backdrop: '',
            container: '',
            content: '',
            closeButton: '',
        }),
    }
)

// Handle drag state changes
const handleDragStart = () => {
    if (drawerRootRef.value) {
        drawerRootRef.value.setDragging(true)
    }
}

const handleDragEnd = () => {
    if (drawerRootRef.value) {
        drawerRootRef.value.setDragging(false)
    }
}

// Generate unique IDs for accessibility
const titleId = `drawer-title-${Math.random().toString(36).substr(2, 9)}`

// Expose methods
defineExpose({
    close: () => emit('close'),
})
</script>

<style scoped>
/* Ensure drawer is above other content */
:deep([role='dialog']) {
    z-index: var(--z-modal-backdrop);
}
</style>
