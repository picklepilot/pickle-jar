<template>
    <Popover :class="m('relative inline-block text-left', classes.menu)">
        <div>
            <PopoverButton ref="reference" :class="m('', classes.menuButton)">
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
                        'fixed z-10 transform overflow-y-auto overflow-x-hidden rounded-lg bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm',
                        classes.menuItems
                    )
                "
                :style="floatingStyles"
            >
                <slot></slot>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { m } from '../utils'
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

const props = withDefaults(
    defineProps<{
        buffer?: number
        classes?: {
            menu?: string
            menuButton?: string
            menuItems?: string
            menuItem?: string
            menuItemIcon?: string
        }
        context?: any
        allowedPlacements?: AllowedPlacement[]
        middlewareOptions?: {
            autoPlacement?: {
                allowedPlacements?: AllowedPlacement[]
            }
            buffer?: number
            offset?: number
            size?: {
                minWidth?: number
                maxWidth?: number
            }
        }
    }>(),
    {
        buffer: 20,
        classes: () => ({
            menu: '',
            menuButton: '',
            menuItems: '',
            menuItem: '',
            menuItemIcon: '',
        }),
        context: () => ({}),
        allowedPlacements: () => ['top-start', 'bottom-start'],
        middlewareOptions: () => ({
            autoPlacement: {
                allowedPlacements: ['top-start', 'bottom-start'],
            },
            buffer: 20,
            offset: 10,
            size: {},
        }),
    }
)

const reference = ref()
const floating = ref()
const BUFFER = ref(props.buffer)

const { floatingStyles } = useFloating(reference, floating, {
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
            allowedPlacements:
                props.middlewareOptions.autoPlacement?.allowedPlacements ||
                props.allowedPlacements,
        }),
        offset(props.middlewareOptions.offset),
        size({
            apply({ availableHeight, elements }) {
                const minMaxWidth =
                    elements.reference.getBoundingClientRect().width

                Object.assign(elements.floating.style, {
                    minWidth: `${minMaxWidth}px`,
                    maxHeight: `${availableHeight - BUFFER.value}px`,
                })
            },
        }),
    ],
    whileElementsMounted: autoUpdate,
})

defineExpose({ open: floating })
</script>
