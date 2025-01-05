<template>
    <BaseButton
        v-if="!item.children"
        :classes="[
            m(
                'h-9 w-9 border-none flex items-center justify-center rounded-lg font-medium p-2 text-xs leading-none bg-transparent text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 relative',
                item.classes?.button || ''
            ),
        ]"
        :disabled="item.disabled"
        v-tooltip="{
            content: item.tooltip,
            placement: 'top',
        }"
        @click="item.onClick"
    >
        <i :class="['fa-regular', item.icon]"></i>
        <span
            v-if="item.count"
            class="absolute -right-1 -top-1 flex h-3.5 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-medium text-white"
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
import { type DropdownItem, type ToolbarItem } from '../types'
import { computed } from 'vue'
import { m } from '../utils'

const props = withDefaults(
    defineProps<{
        item: ToolbarItem
    }>(),
    {}
)

const items = computed<DropdownItem[][]>(() => props.item.children || [])
</script>
