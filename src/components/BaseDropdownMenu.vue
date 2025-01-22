<template>
    <Menu
        as="div"
        :class="
            m(
                componentJarTheme.themeParams.baseDropdownMenuContainer,
                theme.baseDropdownMenuContainer
            )
        "
    >
        <div>
            <MenuButton
                ref="reference"
                :class="
                    m(
                        componentJarTheme.themeParams
                            .baseDropdownMenuTriggerButton,
                        theme.baseDropdownMenuTriggerButton
                    )
                "
                @click.stop.prevent
            >
                <slot name="trigger"></slot>
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <MenuItems
                ref="floating"
                :class="
                    m(
                        componentJarTheme.themeParams.baseDropdownMenuItems,
                        theme.baseDropdownMenuItems
                    )
                "
                :style="floatingStyles"
            >
                <slot name="top" />
                <div
                    v-for="(group, i) in items"
                    :key="`dropdown-menu-${i}`"
                    :class="
                        m(
                            componentJarTheme.themeParams
                                .baseDropdownMenuItemGroup,
                            theme.baseDropdownMenuItemGroup
                        )
                    "
                >
                    <MenuItem
                        v-for="(item, j) in group"
                        :key="`dropdown-menu-${i}-${j}`"
                        v-slot="{ active }"
                    >
                        <button
                            :class="
                                m(
                                    componentJarTheme.themeParams
                                        .baseDropdownMenuItemButton,
                                    theme.baseDropdownMenuItemButton,
                                    active &&
                                        componentJarTheme.themeParams
                                            .baseDropdownMenuItemActiveButton,
                                    item.classes?.button
                                )
                            "
                            @click="handleClick(item, $event)"
                        >
                            <span
                                v-if="item.icon"
                                :class="
                                    m(
                                        componentJarTheme.themeParams
                                            .baseDropdownMenuItemIcon,
                                        theme.baseDropdownMenuItemIcon,
                                        item.classes?.buttonIcon
                                    )
                                "
                            >
                                <i :class="m('fa-regular', item.icon)"></i>
                            </span>
                            <span class="grow text-left">{{ item.label }}</span>
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup lang="ts">
import {
    autoPlacement,
    autoUpdate,
    offset,
    size,
    useFloating,
} from '@floating-ui/vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { m } from '../utils'
import { onMounted, ref, watch } from 'vue'
import { type DropdownItem } from '../types'
import { useThemeConfigurator } from '../composables'

type AllowedPlacement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'

const props = withDefaults(
    defineProps<{
        allowedPlacements?: AllowedPlacement[]
        buffer?: number
        offset?: number
        classes?: {
            menu?: string
            menuButton?: string
            menuItems?: string
            menuItem?: string
            menuItemButton?: string
            menuItemIcon?: string
        }
        context?: any
        items: DropdownItem[][]
        theme?: {
            baseDropdownMenuContainer?: string
            baseDropdownMenuHeader?: string
            baseDropdownMenuItem?: string
            baseDropdownMenuItemButton?: string
            baseDropdownMenuItemGroup?: string
            baseDropdownMenuItemIcon?: string
            baseDropdownMenuItems?: string
            baseDropdownMenuTriggerButton?: string
        }
    }>(),
    {
        allowedPlacements: () => ['top-start', 'bottom-start'],
        buffer: 20,
        classes: () => ({
            menu: '',
            menuButton: '',
            menuItems: '',
            menuItem: '',
            menuItemButton: '',
            menuItemIcon: '',
        }),
        context: () => ({}),
        offset: 8,
        theme: () => ({
            baseDropdownMenuContainer: '',
            baseDropdownMenuHeader: '',
            baseDropdownMenuItem: '',
            baseDropdownMenuItemButton: '',
            baseDropdownMenuItemGroup: '',
            baseDropdownMenuItemIcon: '',
            baseDropdownMenuItems: '',
            baseDropdownMenuTriggerButton: '',
        }),
    }
)

const { componentJarTheme } = useThemeConfigurator()

const reference = ref()
const floating = ref()
const BUFFER = ref(props.buffer)

const { floatingStyles } = useFloating(reference, floating, {
    strategy: 'fixed',
    transform: false,
    middleware: [
        offset(props.offset),
        autoPlacement({
            allowedPlacements: props.allowedPlacements,
        }),
        size({
            apply({ availableHeight, elements }) {
                const minMaxWidth =
                    elements.reference.getBoundingClientRect().width

                Object.assign(elements.floating.style, {
                    minWidth: `${minMaxWidth}px`,
                    // maxWidth: `${minMaxWidth - BUFFER}px`,
                    maxHeight: `${availableHeight - BUFFER.value}px`,
                })
            },
        }),
    ],
    whileElementsMounted: autoUpdate,
})

function handleClick(item: any, evt: any) {
    if (item.onClick) {
        item.onClick(props.context, evt)
    }
}

watch(
    () => props.buffer,
    (value) => {
        BUFFER.value = value
    }
)

onMounted(() => {
    BUFFER.value = props.buffer
})
</script>
