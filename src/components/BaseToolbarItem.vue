<template>
    <BaseButton
        v-if="!item.children"
        :classes="[
            m(
                'h-8 w-8 border-none flex items-center justify-center rounded-md font-medium p-2 text-xs leading-none bg-transparent text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 relative',
                item.classes?.button || '',
                componentJarTheme.themeParams.baseButton,
                componentJarTheme.themeParams.toolbarButton
            ),
        ]"
        :disabled="item.disabled"
        v-tooltip="{
            content: item.tooltip,
            placement: 'top',
            classes: 'text-center',
        }"
        @click="item.onClick"
    >
        <i :class="['fa-regular', item.icon]"></i>
        <span
            v-if="item.count"
            class="absolute -top-1 -right-1 flex h-3.5 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-medium text-white"
            :style="{ backgroundColor: item.statusColor || '#ef4444' }"
            >{{ item.count }}</span
        >
    </BaseButton>

    <BaseDropdownMenu
        v-else
        :classes="{
            menu: m(
                'h-8 w-8 border-none flex items-center justify-center rounded-md font-medium p-2 text-xs leading-none bg-transparent text-zinc-700 hover:text-zinc-900 hover:bg-zinc-900/10',
                item.classes?.button || ''
            ),
            menuButton: '',
            menuItems: item.classes?.menuItems || '',
            menuItem: '',
        }"
        :items="items"
        :allowed-placements="
            item.menuConfig?.allowedPlacements || ['bottom-start']
        "
        :buffer="item.menuConfig?.buffer || 20"
        :offset="item.menuConfig?.offset || 8"
        :theme="{
            baseDropdownMenuItems: theme.baseDropdownMenuItems,
            baseDropdownMenuTriggerButton: theme.baseDropdownMenuTriggerButton,
            baseDropdownMenuItemGroup: theme.baseDropdownMenuItemGroup,
            baseDropdownMenuItemButton: theme.baseDropdownMenuItemButton,
        }"

    >
        <template #trigger>
            <span
                v-if="item.icon"
                class="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
            >
                <i :class="['fa-regular', item.icon]"></i>
            </span>
        </template>
    </BaseDropdownMenu>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import BaseDropdownMenu from './BaseDropdownMenu.vue'
import { computed } from 'vue'
import { m } from '../utils'
import { type DropdownItem, type ToolbarItem } from '../types'
import { useThemeConfigurator } from '../composables'

const props = withDefaults(
    defineProps<{
        item: ToolbarItem
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

const items = computed<DropdownItem[][]>(() => props.item.children || [])
</script>
