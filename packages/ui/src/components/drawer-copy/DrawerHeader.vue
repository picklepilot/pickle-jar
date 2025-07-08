<template>
    <div
        :class="
            m(
                'flex items-center justify-between p-4 border-b border-border relative',
                theme.header
            )
        "
    >
        <div class="flex items-center space-x-2">
            <slot name="title">
                <slot name="default" />
            </slot>
        </div>
        <DrawerClose
            v-if="showCloseButton"
            :close-button-label="closeButtonLabel"
            :theme="{ closeButton: theme.closeButton }"
            @close="handleClose"
        />
    </div>
    <DrawerHandle
        v-if="showDragHandle"
        :position="position"
        :class="handlePositionClasses"
        :theme="{ handle: theme.handle, indicator: theme.indicator }"
    />
</template>

<script setup lang="ts">
import clsx, { type ClassValue } from 'clsx'
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import DrawerClose from './DrawerClose.vue'
import DrawerHandle from './DrawerHandle.vue'

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
         * The position of the drawer on the screen.
         * @type {'left' | 'right' | 'top' | 'bottom'}
         */
        position?: 'left' | 'right' | 'top' | 'bottom'

        /**
         * Whether to show the close button in the header.
         * @type {boolean}
         */
        showCloseButton?: boolean

        /**
         * Whether to show the drag handle.
         * @type {boolean}
         */
        showDragHandle?: boolean

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
            header?: string
            closeButton?: string
            handle?: string
            indicator?: string
        }
    }>(),
    {
        position: 'right',
        showCloseButton: true,
        showDragHandle: true,
        closeButtonLabel: 'Close drawer',
        theme: () => ({
            header: '',
            closeButton: '',
            handle: '',
            indicator: '',
        }),
    }
)

// Position classes for the handle
const handlePositionClasses = computed(() => {
    switch (props.position) {
        case 'left':
            return 'absolute right-0 top-0 bottom-0' // Handle on right side for left drawer
        case 'right':
            return 'absolute left-0 top-0 bottom-0' // Handle on left side for right drawer
        case 'top':
            return 'absolute left-0 right-0 bottom-0' // Handle on bottom for top drawer
        case 'bottom':
            return 'absolute left-0 right-0 top-0' // Handle on top for bottom drawer
        default:
            return 'absolute left-0 top-0 bottom-0'
    }
})

const handleClose = () => {
    emit('close')
    emit('update:open', false)
}
</script>
