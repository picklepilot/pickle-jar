<template>
    <div
        :class="
            m(
                componentJarTheme.themeParams.columnManagerContainer,
                theme.columnManagerContainer
            )
        "
    >
        <div
            :class="
                m(
                    componentJarTheme.themeParams.columnManagerGroupsContainer,
                    theme.columnManagerGroupsContainer
                )
            "
        >
            <div
                v-for="(_group, groupName, idx) in editableColumns"
                :key="`column-management-group-${idx}`"
                :class="
                    m(
                        componentJarTheme.themeParams
                            .columnManagerGroupContainer,
                        theme.columnManagerGroupContainer
                    )
                "
            >
                <h2
                    :class="
                        m(
                            componentJarTheme.themeParams
                                .columnManagerGroupHeader,
                            theme.columnManagerGroupHeader
                        )
                    "
                >
                    <span
                        class="flex items-center space-x-2 text-base font-semibold"
                    >
                        <BasePopover
                            v-if="editableGroupConfiguration[groupName]"
                            :classes="{
                                menu: 'leading-none',
                                menuButton: 'rounded p-1 hover:bg-zinc-200/80',
                            }"
                        >
                            <template #trigger>
                                <span
                                    class="block h-3 w-3 rounded-full"
                                    :style="`background-color: ${editableGroupConfiguration[groupName].color || defaultGroupColor};`"
                                ></span>
                            </template>
                            <ColorPicker
                                v-model="
                                    editableGroupConfiguration[groupName].color
                                "
                                @update:modelValue="
                                    editableGroupConfiguration[
                                        groupName
                                    ].color = $event
                                "
                            />
                        </BasePopover>

                        <span>{{ groupName }}</span>
                    </span>
                    <span v-if="groupMenuItems" class="text-sm">
                        <BaseDropdownMenu
                            :allowed-placements="['bottom-end']"
                            :items="[
                                ...groupMenuItems,
                                defaultGroupDropdownMenuItems,
                            ]"
                            :context="{ groupName }"
                        >
                            <template #trigger>
                                <i class="fa-regular fa-ellipsis-v"></i>
                            </template>
                        </BaseDropdownMenu>
                    </span>
                </h2>

                <div
                    v-if="addingColumnToGroup === groupName"
                    class="group flex items-center justify-end space-x-2 border-b border-zinc-200 p-2"
                >
                    <BaseTypeahead
                        :classes="dropDownClasses"
                        :default-items="defaultItems"
                        :display-property="() => ''"
                        :multiple="false"
                        :nullable="true"
                        :searcher="searcher"
                        placeholder="Add a column to group"
                        @update:modelValue="
                            onPickedNewColumn(groupName, $event)
                        "
                    >
                        <template #empty>
                            <EmptyState
                                icon="fa-exclamation-circle"
                                title="No columns found"
                                description="There are no columns to show at this time. Try a different search."
                                :classes="{
                                    container:
                                        'flex flex-col items-center justify-center border-2 border-dashed border-zinc-300/60 rounded-xl p-6',
                                    icon: 'text-zinc-500',
                                }"
                            />
                        </template>
                        <template #options="{ filteredItems }">
                            <div class="grid grid-cols-1 gap-2">
                                <ComboboxOption
                                    v-for="item in filteredItems"
                                    as="template"
                                    :key="item._id"
                                    :value="item"
                                    v-slot="{ selected, active }"
                                >
                                    <slot
                                        name="option"
                                        v-bind="{ item, selected, active }"
                                    />
                                </ComboboxOption>
                            </div>
                        </template>
                    </BaseTypeahead>

                    <BaseButton
                        @click="addingColumnToGroup = ''"
                        :classes="[
                            'text-sm flex items-center justify-center w-10 h-10 rounded-lg border-none bg-transparent hover:bg-zinc-100 text-zinc-400 group-hover:text-zinc-500 group-hover:hover:text-zinc-800',
                        ]"
                    >
                        <i class="fa-regular fa-xmark"></i>
                    </BaseButton>
                </div>

                <div
                    v-if="editableColumns[groupName].length === 0"
                    class="flex flex-col items-center justify-center p-4"
                >
                    <EmptyState
                        title="No columns"
                        description="There are no columns here yet. Use the picker below to add the first column."
                        :classes="{
                            container:
                                'flex flex-col items-center justify-center border-2 border-dashed border-zinc-300/60 rounded-xl p-6',
                            icon: 'text-zinc-500',
                            description: 'text-center',
                        }"
                    />
                </div>

                <Sortable
                    :list="editableColumns[groupName]"
                    :key="JSON.stringify(editableColumns[groupName])"
                    item-key="id"
                    tag="div"
                    :class="[`sortable-group-${groupName}`]"
                    :data-group-name="groupName"
                    :options="{
                        animation: 150,
                        group: 'shared-columns',
                        handle: '.drag-handle',
                        multiDrag: true,
                        selectedClass: 'selected',
                        emptyInsertThreshold: 100,
                    }"
                    @add="onAdded(groupName as string, $event)"
                    @remove="onRemoved(groupName as string, $event)"
                    @update="onUpdatedList(groupName as string, $event)"
                >
                    <template #item="{ element, index }">
                        <div
                            class="group flex w-full [&.selected]:bg-blue-100"
                            :key="element.id"
                            :data-sortable-item-id="element.id"
                            @click="onClickedListItem"
                        >
                            <slot name="drag-handle"></slot>

                            <slot name="column" :slotProps="element"></slot>

                            <div
                                class="ml-auto flex items-center space-x-1.5 p-1"
                            >
                                <button
                                    @click.prevent.stop="
                                        removeColumn(groupName as string, index)
                                    "
                                    class="flex h-6 w-6 items-center justify-center rounded text-xs text-zinc-400 ring-1 ring-transparent transition-all hover:bg-zinc-200 hover:text-zinc-700"
                                >
                                    <i class="fa-regular fa-minus-circle"></i>
                                </button>
                                <button
                                    @click.prevent.stop="
                                        focusedColumn =
                                            editableColumns[groupName][index]
                                    "
                                    class="flex h-6 w-6 items-center justify-center rounded text-xs text-zinc-400 ring-1 ring-transparent transition-all hover:text-zinc-700 hover:shadow-md hover:ring-zinc-200 group-hover:bg-white group-hover:shadow-sm group-hover:ring-zinc-300/80"
                                >
                                    <i class="fa-regular fa-cog"></i>
                                </button>
                            </div>
                        </div>
                    </template>
                </Sortable>
            </div>

            <div
                :class="
                    m(
                        componentJarTheme.themeParams
                            .columnManagerNewGroupContainer,
                        theme.columnManagerNewGroupContainer
                    )
                "
            >
                <InputText
                    :classes="[
                        m(
                            componentJarTheme.themeParams
                                .columnManagerNewGroupInput,
                            theme.columnManagerNewGroupInput
                        ),
                    ]"
                    id="column-manager-new-group-name"
                    name="column-manager-new-group-name"
                    placeholder="New group name"
                    v-model="newGroupName"
                />
                <BaseButton
                    :theme="{
                        baseButton:
                            componentJarTheme.themeParams
                                .columnManagerNewGroupInputButton,
                    }"
                    @click="addGroup()"
                >
                    <i class="fa-regular fa-plus" aria-hidden="true"></i>
                </BaseButton>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { m, type ThemeConfigurator } from '../utils'
import { inject, ref, watch } from 'vue'
import { Sortable } from 'sortablejs-vue3'
// @ts-ignore
import { default as realSortable } from 'sortablejs'

import BaseButton from './BaseButton.vue'
import BaseDropdownMenu from './BaseDropdownMenu.vue'
import BasePopover from './BasePopover.vue'
import BaseTypeahead from './BaseTypeahead.vue'
import ColorPicker from './ColorPicker.vue'
import EmptyState from './EmptyState.vue'
import InputText from './InputText.vue'

// @ts-ignore
import { ComboboxOption } from '@headlessui/vue'

import {
    groupColumns,
    mergeColumnGroupsWithDefaults,
    ungroupColumns,
} from '../utils/ColumnManagerUtils'

const emit = defineEmits(['update:existingColumns'])

const props = withDefaults(
    defineProps<{
        theme?: {
            columnManagerContainer?: string
            columnManagerGroupContainer?: string
            columnManagerGroupHeader?: string
            columnManagerGroupsContainer?: string
            columnManagerNewGroupContainer?: string
            columnManagerNewGroupInput?: string
            columnManagerNewGroupInputButton?: string
        }
        classes?: {
            container?: string
            groupContainer?: string
            groupHeader?: string
            groupsContainer?: string
            newGroupContainer?: string
            groupMenuClasses?: {
                menu?: string
                menuButton?: string
                menuItems?: string
                menuItem?: string
                menuItemIcon?: string
            }
        }
        defaultItems?: any[]
        dropDownClasses?: {
            container?: string
            inputContainer?: string
            inputElement?: string
            comboboxOptionsContainer?: string
        }
        existingColumns?: any[]
        onPickedColumn: (groupName: string, column: any) => any
        searcher: (query: string) => Promise<any[]>
        groupMenuItems?: any[]
        groupConfiguration?: any
        defaultGroupColor?: string
    }>(),
    {
        classes: () => ({
            container: '',
            groupContainer: '',
            groupHeader: '',
            groupsContainer: '',
            newGroupContainer: '',
            groupMenuClasses: {
                menu: '',
                menuButton:
                    'h-7 w-7 rounded-lg flex items-center justify-center hover:bg-zinc-200',
                menuItems: 'z-50',
                menuItem: 'rounded-xl',
                menuItemIcon: 'group-hover:bg-indigo-300',
            },
        }),
        defaultItems: () => [],
        dropDownClasses: () => ({
            container: '',
            inputContainer: '',
            inputeElement: '',
            comboboxOptionsContainer: '',
        }),
        existingColumns: () => [],
        groupMenuItems: () => [],
        groupConfiguration: () => ({}),
        defaultGroupColor: '#e7e5e4',
        theme: () => ({
            columnManagerContainer: '',
            columnManagerGroupContainer: '',
            columnManagerGroupHeader: '',
            columnManagerGroupsContainer: '',
            columnManagerNewGroupContainer: '',
            columnManagerNewGroupInput: '',
            columnManagerNewGroupInputButton: '',
        }),
    }
)

const componentJarTheme = inject(
    'componentJarTheme'
) as unknown as ThemeConfigurator

const editableColumns = ref<{ [key: string]: any }>(
    groupColumns(props.existingColumns)
)
const focusedColumn = ref<any>()
const newGroupName = ref<string>('')
const addingColumnToGroup = ref<string>('')
const editableGroupConfiguration = ref<any>(
    mergeColumnGroupsWithDefaults(props.groupConfiguration)
)

watch(
    () => props.existingColumns,
    (newVal) => {
        editableColumns.value = groupColumns(newVal)
    },
    { immediate: false }
)

watch(
    () => props.groupConfiguration,
    () => {
        editableGroupConfiguration.value = mergeColumnGroupsWithDefaults(
            props.groupConfiguration
        )
    },
    { immediate: false }
)

function onClickedListItem(evt: any) {
    if (evt.currentTarget.classList.contains('selected')) {
        realSortable.utils.deselect(evt.currentTarget)
    } else {
        realSortable.utils.select(evt.currentTarget)
    }
}

/**
 * Handler for the remove column button click event.
 * @param {string} groupName - The group name of the column
 * @param {number} idx - The index of the column
 */
function removeColumn(groupName: string, idx: number) {
    editableColumns.value[groupName] = editableColumns.value[groupName].filter(
        (_column: any, colIdx: number) => colIdx !== idx
    )
    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

/**
 * Handler for the add group button click event.
 */
function addGroup() {
    editableColumns.value = {
        ...editableColumns.value,
        [newGroupName.value]: [],
    }
}

/**
 * Handler for the remove group button click event.
 * @param {string} groupName - The group name of the column
 */
function removeGroup(groupName: string) {
    delete editableColumns.value[groupName]
    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

/**
 * Handler for the reset to default columns button click event.
 * @param {string} groupName - The group name of the column
 */
function clearAllColumns(groupName: string) {
    editableColumns.value = {
        ...editableColumns.value,
        [groupName]: [],
    }
}

/**
 * Updates the array after a sortable event.
 * @param e
 * @param arr
 */
function sortableUpdate<T>(e: realSortable.SortableEvent, arr: T[]) {
    const el = arr.splice(e.oldIndex!, 1)[0]
    arr.splice(Math.min(e.newIndex!, arr.length), 0, el)
    return arr
}

/**
 * Handler for the sortable component update event.
 * @param {string} groupName - The group name of the column
 * @param {any} params - The updated column list
 */
function onUpdatedList(groupName: string, params: any) {
    editableColumns.value[groupName] = sortableUpdate(
        params,
        editableColumns.value[groupName]
    )
    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

/* function syncArrayElements<T>(
    listItems: any,
    domElements: HTMLElement[],
    from: number[],
    to: number[],
) {
    const originalArray = [...listItems]

    // Credits: https://stackoverflow.com/a/69574526
    const swapIndex = (array: T[], from: number, to: number) =>
        from < to
            ? [
                  ...array.slice(0, from), // Chunk from beginning of array up to original position
                  ...array.slice(from + 1, to + 1), // Chunk from after original position up to new position
                  array[from], // Target element gets inserted here
                  ...array.slice(to + 1), // Chunk from after new position to end of array
              ]
            : [
                  ...array.slice(0, to),
                  array[from],
                  ...array.slice(to, from),
                  ...array.slice(from + 1),
              ]

    let newArray = originalArray
    let currentTo = to[0]
    const targetElements = from.map((idx) => originalArray[idx])

    let lastMovedElement: any = null
    targetElements.forEach((element, idx) => {
        lastMovedElement = element
        currentTo = to[idx] // newArray.findIndex(item => item.id === lastMovedElement.id)
        if (currentTo === -1) currentTo = to[idx]
        const fromIndex = newArray.findIndex((item) => item.id === element.id)
        newArray = swapIndex(newArray, fromIndex, currentTo)
    })

    nextTick(() => {
        // When list is ref, assign array to list
        list.value = newArray

        // If multiDrag is enabled, deselect all elements
        if (Sortable.MultiDrag) {
            domElements.forEach((element) => {
                Sortable.utils.deselect(element)
            })
        }

        emit('update:existingColumns', ungroupColumns(editableColumns.value))
    })
} */

function onAdded(groupName: string, params: any) {
    const fromGroupName = params.from.dataset.groupName || 'Default'
    const targetValues = indicesParams(params)
        .from.map(
            (index: number) => editableColumns.value[fromGroupName][index]
        )
        .map((column: any) => ({ ...column, group: groupName }))

    editableColumns.value[groupName].splice(
        indicesParams(params).to[0],
        0,
        ...targetValues
    )

    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

function onRemoved(groupName: string, params: any) {
    editableColumns.value[groupName].splice(params.oldIndex, 1)
    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

function indicesParams(e: realSortable.SortableEvent): {
    domElements: HTMLElement[]
    from: number[]
    to: number[]
} {
    return {
        domElements: e.items?.length ? e.items : [e.item!],
        from: e.oldIndicies?.length
            ? e.oldIndicies.map((oldIndex: any) => oldIndex.index)
            : [e.oldIndex!],
        to: e.newIndicies?.length
            ? e.newIndicies.map((newIndex: any) => newIndex.index)
            : [e.newIndex!],
    }
}

/**
 * Handler for the column picker component update event.
 * @param {string} groupName - The group name of the column
 * @param {any} value - The selected column
 */
function onPickedNewColumn(groupName: string, value: any) {
    value.group = groupName
    editableColumns.value = {
        ...editableColumns.value,
        [groupName]: [...editableColumns.value[groupName], value],
    }

    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

const defaultGroupDropdownMenuItems = [
    {
        icon: 'fa-plus',
        label: 'Add column to group',
        onClick: (context: any) => {
            addingColumnToGroup.value = context.groupName
        },
    },
    {
        icon: 'fa-empty-set',
        label: 'Clear all columns',
        onClick: (context: any) => {
            clearAllColumns(context.groupName)
        },
    },
    {
        icon: 'fa-trash',
        label: 'Remove group',
        onClick: (context: any) => {
            removeGroup(context.groupName)
        },
    },
]

defineExpose({
    clearAllColumns,
    focusedColumn,
    onPickedNewColumn,
    removeGroup,
})
</script>
