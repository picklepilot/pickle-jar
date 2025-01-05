<template>
    <Popover :class="m('relative inline-block text-left', classes.menu)">
        <div>
            <PopoverButton ref="reference" :class="m('', classes.menuButton)">
                <slot name="trigger"></slot>
            </PopoverButton>
        </div>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <PopoverPanel
                ref="floating"
                :class="
                    m(
                        'fixed left-0 z-10 overflow-y-auto overflow-x-hidden rounded-lg bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm',
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
import { autoPlacement, autoUpdate, size, useFloating } from '@floating-ui/vue'

type AllowedPlacement =
    | 'top-start'
    | 'bottom-start'
    | 'top-end'
    | 'bottom-end'
    | 'left'
    | 'right'

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
    }
)

const reference = ref()
const floating = ref()
const BUFFER = ref(props.buffer)

const { floatingStyles } = useFloating(reference, floating, {
    strategy: 'fixed',
    transform: false,
    middleware: [
        autoPlacement({
            allowedPlacements: props.allowedPlacements,
        }),
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
