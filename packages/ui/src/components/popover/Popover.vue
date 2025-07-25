<template>
    <Popover
        :class="m('relative inline-block text-left', theme.popoverMenu)"
        v-slot="{ open: isOpen }"
        :open="isOpen"
        @update:open="handleOpenUpdate"
    >
        <div>
            <PopoverButton
                ref="reference"
                :class="
                    m(isOpen ? 'is-open' : 'is-closed', theme.popoverMenuButton)
                "
            >
                <slot name="trigger"></slot>
            </PopoverButton>
        </div>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <PopoverPanel
                ref="floating"
                :class="
                    m(
                        'fixed z-50 transform overflow-x-hidden overflow-y-auto rounded-lg bg-background p-3 text-base shadow-lg ring-1 ring-ring focus:outline-hidden sm:text-sm',
                        theme.popoverMenuItems
                    )
                "
                :style="floatingStyles"
                v-slot="{ close }"
            >
                <slot v-bind="{ close }"></slot>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { m } from '../../utils'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {
    autoPlacement,
    autoUpdate,
    limitShift,
    offset,
    shift,
    size,
    useFloating,
} from '@floating-ui/vue'

type AllowedPlacement =
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
    | 'top'
    | 'top-end'
    | 'top-start'

/**
 * Props for the BasePopover component
 */
const props = withDefaults(
    defineProps<{
        /**
         * Locally customize the component's theme properties.
         *
         * @type {Object}
         */
        theme?: {
            /** Theme classes for the menu container */
            popoverMenu?: string
            /** Theme classes for the menu button */
            popoverMenuButton?: string
            /** Theme classes for the menu items container */
            popoverMenuItems?: string
            /** Theme classes for individual menu items */
            popoverMenuItem?: string
            /** Theme classes for menu item icons */
            popoverMenuItemIcon?: string
        }

        /**
         * Additional context data to be passed to the popover.
         *
         * @type {any}
         */
        context?: any

        /**
         * Allowed placement positions for the popover.
         *
         * @type {Array<AllowedPlacement>}
         */
        allowedPlacements?: AllowedPlacement[]

        /**
         * Configuration options for floating UI.
         *
         * @type {Object}
         */
        floatingOptions?: {
            /** The positioning strategy to use */
            strategy?: 'absolute' | 'fixed'
            /** Whether to transform the floating element */
            transform?: boolean
            /** The placement of the floating element */
            placement?: AllowedPlacement
            /** The middleware to use for positioning */
            middleware?: any[]
            /** Whether to update the position on scroll */
            open?: boolean
            /** The function to call when elements are mounted */
            whileElementsMounted?: (
                reference: HTMLElement,
                floating: HTMLElement,
                update: () => void
            ) => () => void
        }

        /**
         * Controls whether the popover is open.
         *
         * @type {boolean}
         */
        open?: boolean
    }>(),
    {
        buffer: 20,
        theme: () => ({
            popoverMenu: '',
            popoverMenuButton: '',
            popoverMenuItems: '',
            popoverMenuItem: '',
            popoverMenuItemIcon: '',
        }),
        context: () => ({}),
        allowedPlacements: () => ['top-start', 'bottom-start'],
        floatingOptions: () => ({
            strategy: 'fixed',
            transform: false,
            middleware: [
                shift({
                    padding: 10,
                    limiter: limitShift({
                        offset: 10,
                    }),
                }),
                autoPlacement({
                    allowedPlacements: ['top-start', 'bottom-start'],
                }),
                offset(10),
                size({
                    apply({ availableHeight, elements }) {
                        const minMaxWidth =
                            elements.reference.getBoundingClientRect().width
                        Object.assign(elements.floating.style, {
                            minWidth: `${minMaxWidth}px`,
                            maxHeight: `${availableHeight - 20}px`,
                        })
                    },
                }),
            ],
            whileElementsMounted: autoUpdate,
        }),
        open: undefined,
    }
)

/**
 * Emits for the BasePopover component
 */
const emit = defineEmits<{
    /** Emitted when the open state changes */
    (e: 'update:open', value: boolean): void
}>()

const reference = ref()
const floating = ref()
const isOpen = ref(props.open ?? false)

watch(
    () => props.open,
    newValue => {
        if (newValue !== undefined) {
            isOpen.value = newValue
        }
    },
    { immediate: true }
)

const handleOpenUpdate = (value: boolean) => {
    isOpen.value = value
    emit('update:open', value)
}

const { floatingStyles } = useFloating(reference, floating, {
    strategy: props.floatingOptions.strategy,
    transform: props.floatingOptions.transform,
    placement: props.floatingOptions.placement,
    middleware: props.floatingOptions.middleware,
    open: isOpen.value,
    whileElementsMounted: props.floatingOptions.whileElementsMounted,
})

/**
 * Closes the popover and emits the update event
 */
const close = () => {
    handleOpenUpdate(false)
}

/**
 * Exposed methods and refs for the component
 */
defineExpose({
    /** Reference to the floating element */
    floating,
    /** Reference to the trigger element */
    reference,
    /** Method to close the popover */
    close,
    /** Current open state of the popover */
    isOpen,
})
</script>
