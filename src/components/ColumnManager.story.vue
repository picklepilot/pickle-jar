<template>
    <Story title="Column manager">
        <div class="p-4">
            <ColumnManager
                :default-items="state.columns"
                :disabled="state.disabled"
                :existingColumns="state.pickedColumns"
                :groupConfiguration="state.groupConfiguration"
                :searcher="searcher"
                :theme="state.theme"
                :typeaheadMiddlewareOptions="state.typeaheadMiddlewareOptions"
                @update:existing-columns="onUpdatedColumns"
                @update:group-configuration="onUpdatedGroups"
            >
                <template #option="{ item, active }">
                    <span
                        :class="[
                            'flex items-center rounded px-2.5 py-1.5',
                            active && 'bg-zinc-100',
                        ]"
                        >{{ item.name }}</span
                    >
                </template>

                <template #column="{ element }">
                    <span>{{ element.name }}</span>
                </template>

                <template #drag-handle>
                    <span
                        class="drag-handle mr-2 flex size-6 items-center justify-center rounded-xs hover:cursor-pointer hover:bg-zinc-100"
                        >⊫</span
                    >
                </template>
            </ColumnManager>
        </div>
    </Story>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { ColumnDefinition, ColumnGroupDefinition } from '../types'
import ColumnManager from './ColumnManager.vue'
import { logEvent } from 'histoire/client'

const state = reactive<{
    columns: ColumnDefinition[]
    disabled: string[]
    groupConfiguration: { [key: string]: ColumnGroupDefinition }
    pickedColumns: ColumnDefinition[]
    theme: {
        addGroupButton: string
        baseDropdownMenuTriggerButton: string
        baseDropdownInputText: string
        baseDropdownMenuItemGroup: string
        baseDropdownMenuItems: string
        baseDropdownMenuItemButton: string
        columnManagerContainer: string
        columnManagerGroupHeader: string
        columnManagerGroupLabel: string
        columnManagerItem: string
        columnManagerGroupsContainer: string
        columnManagerNewGroupInput: string
        columnManagerNewGroupInputButton: string
        columnManagerNewGroupContainer: string
        typeaheadContainer: string
    }
    typeaheadMiddlewareOptions: Record<string, any>
}>({
    columns: [
        { id: 1, name: 'ID', group: 'Default' },
        { id: 2, name: 'First Name', group: 'Default' },
        { id: 3, name: 'Last Name', group: 'Default' },
        { id: 4, name: 'Email', group: 'Default' },
        { id: 5, name: 'Phone', group: 'Default' },
        { id: 6, name: 'Address', group: 'Default' },
        { id: 7, name: 'City', group: 'Default' },
        { id: 8, name: 'State', group: 'Default' },
        { id: 9, name: 'Zip Code', group: 'Default' },
        { id: 10, name: 'Country', group: 'Default' },
    ],
    disabled: [],
    groupConfiguration: {
        Default: {
            name: 'Default',
            color: '#ff9900',
        },
    },
    pickedColumns: [
        { id: 2, name: 'First Name', group: 'Default' },
        { id: 3, name: 'Last Name', group: 'Default' },
    ],
    theme: {
        addGroupButton:
            'rounded text-sm h-9 border-none bg-zinc-100 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 ml-auto',

        baseDropdownMenuTriggerButton:
            'size-6 flex items-center justify-center rounded-xs hover:bg-zinc-100',
        baseDropdownInputText: 'rounded py-2',
        baseDropdownMenuItemGroup: 'p-1',
        baseDropdownMenuItems: 'border border-zinc-200',
        baseDropdownMenuItemButton:
            'text-sm px-2 py-1 text-left rounded hover:bg-zinc-100',

        columnManagerContainer: 'rounded-lg border border-zinc-200',
        columnManagerGroupHeader: 'border-b p-2 flex items-center',
        columnManagerGroupLabel: 'first:ml-1',
        columnManagerItem: 'flex items-center text-sm px-2',
        columnManagerGroupsContainer: 'w-[350px]',
        columnManagerNewGroupInput:
            'rounded-l rounded-r-none px-3 py-2 relative h-9 focus:z-[2]',
        columnManagerNewGroupInputButton:
            'rounded-r flex items-center justify-center rounded-l-none p-0 size-9 relative border-zinc-300/80 shrink-0 focus:z-[2] text-zinc-500 hover:text-zinc-900',
        columnManagerNewGroupContainer: 'p-2 flex items-center -space-x-px',

        typeaheadContainer: 'p-2',
    },
    typeaheadMiddlewareOptions: {
        autoPlacement: {
            allowedPlacements: ['top-start', 'bottom-start'],
        },
        buffer: 20,
        size: {},
    },
})

async function searcher(query: string) {
    if (!query) {
        return state.columns
    }

    return state.columns.filter((column) =>
        column.name.toLowerCase().includes(query.toLowerCase())
    )
}

function onUpdatedColumns(columns: ColumnDefinition[]) {
    logEvent('onUpdatedColumns', columns)
    state.pickedColumns = columns
}

function onUpdatedGroups(groups: { [key: string]: ColumnGroupDefinition }) {
    logEvent('onUpdatedGroups', groups)
    state.groupConfiguration = groups
}
</script>
