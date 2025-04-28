<template>
    <Menu
        as="div"
        :class="
            m(
                componentJarTheme.themeParams.baseDropdownMenuContainer,
                theme.baseDropdownMenuContainer
            )
        "
        v-slot="{ open }"
    >
        <div>
            <MenuButton
                ref="reference"
                :class="
                    m(
                        componentJarTheme.themeParams
                            .baseDropdownMenuTriggerButton,
                        theme.baseDropdownMenuTriggerButton,
                        open &&
                            componentJarTheme.themeParams
                                .baseDropdownMenuTriggerButtonActive
                    )
                "
                @click.stop.prevent
            >
                <slot name="trigger" />
            </MenuButton>
        </div>

        <Teleport to="body" :disabled="floatingOptions.strategy === 'absolute'">
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
                        v-slot="{ active, focus }"
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
                                    focus &&
                                        componentJarTheme.themeParams
                                            .baseDropdownMenuItemFocusButton,
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
        </Teleport>
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
        floatingOptions?: {
            strategy?: 'absolute' | 'fixed'
            transform?: boolean
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
            baseDropdownMenuTriggerButtonActive?: string
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
        floatingOptions: () => ({
            strategy: 'fixed',
            transform: false,
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
            baseDropdownMenuTriggerButtonActive: '',
        }),
    }
)

const { componentJarTheme } = useThemeConfigurator()

const reference = ref()
const floating = ref()
const BUFFER = ref(props.buffer)

const { floatingStyles } = useFloating(reference, floating, {
    strategy: props.floatingOptions.strategy,
    transform: props.floatingOptions.transform,
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
