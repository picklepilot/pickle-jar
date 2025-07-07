<template>
    <ModalRoot
        :open="open"
        :close-on-backdrop-click="closeOnBackdropClick"
        :close-on-escape="closeOnEscape"
        :prevent-body-scroll="preventBodyScroll"
        :theme="theme"
        @close="$emit('close')"
        @update:open="$emit('update:open', $event)"
    >
        <ModalContent :size="size" :theme="theme">
            <ModalClose
                :close-button-label="closeButtonLabel"
                :theme="theme"
                @close="$emit('close')"
            />
            <slot />
        </ModalContent>
    </ModalRoot>
</template>

<script setup lang="ts">
import ModalRoot from './ModalRoot.vue'
import ModalContent from './ModalContent.vue'
import ModalClose from './ModalClose.vue'

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

// Generate unique IDs for accessibility
const titleId = `modal-title-${Math.random().toString(36).substr(2, 9)}`

// Expose methods
defineExpose({
    close: () => emit('close'),
})
</script>

<style scoped>
/* Ensure modal is above other content */
:deep([role='dialog']) {
    z-index: var(--z-modal-backdrop);
}
</style>
