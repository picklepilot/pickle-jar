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
            :id="`column-manager-groups-container-${uniqueId}`"
            :class="
                m(
                    componentJarTheme.themeParams.columnManagerGroupsContainer,
                    theme.columnManagerGroupsContainer
                )
            "
        >
            <Sortable
                :list="
                    Object.values(editableGroupConfiguration).filter(
                        (_: any) => _.name
                    )
                "
                :key="'groups'"
                item-key="id"
                tag="div"
                :class="
                    m(
                        componentJarTheme.themeParams
                            .columnManagerGroupContainer,
                        theme.columnManagerGroupContainer
                    )
                "
                :data-group-name="'groups'"
                :options="{
                    animation: 150,
                    group: 'shared-groups',
                    handle: '.drag-handle',
                    selectedClass: 'selected',
                }"
                @start="draggingGroup = true"
                @end="draggingGroup = false"
                @update="onUpdatedGroupOrder($event)"
            >
                <template #item="{ element: groupElement }">
                    <div>
                        <!--                <div-->
                        <!--                    v-for="(_group, groupName, idx) in editableColumns"-->
                        <!--                    :key="`column-management-group-${idx}`"-->
                        <!--                    :class="-->
                        <!--                        m(-->
                        <!--                            componentJarTheme.themeParams-->
                        <!--                                .columnManagerGroupContainer,-->
                        <!--                            theme.columnManagerGroupContainer-->
                        <!--                        )-->
                        <!--                    "-->
                        <!--                >-->
                        <div
                            :class="
                                m(
                                    componentJarTheme.themeParams
                                        .columnManagerGroupHeader,
                                    theme.columnManagerGroupHeader
                                )
                            "
                        >
                            <div
                                class="sortable-drag flex items-center space-x-2 text-base"
                            >
                                <slot
                                    v-if="!disabled.includes('groups')"
                                    name="drag-handle"
                                />

                                <BasePopover
                                    v-if="
                                        !disabled.includes('groups') &&
                                        editableGroupConfiguration[
                                            groupElement.name
                                        ]
                                    "
                                    :classes="{
                                        menu: 'leading-none',
                                        menuButton:
                                            'rounded-xs p-1 hover:bg-zinc-200/80',
                                    }"
                                >
                                    <template #trigger>
                                        <span
                                            class="block h-3 w-3 rounded-full"
                                            :style="`background-color: ${editableGroupConfiguration[groupElement.name].color || defaultGroupColor};`"
                                        ></span>
                                    </template>

                                    <div class="flex flex-col space-y-4">
                                        <div class="space-y-2">
                                            <div
                                                class="block text-sm font-medium text-zinc-900"
                                            >
                                                Group name
                                            </div>
                                            <input
                                                type="text"
                                                :class="
                                                    componentJarTheme
                                                        .themeParams.inputText
                                                "
                                                v-model="groupMeta.name"
                                                :placeholder="`${groupElement.name}`"
                                            />
                                        </div>
                                        <div class="space-y-2">
                                            <div
                                                class="block text-sm font-medium text-zinc-900"
                                            >
                                                Group color
                                            </div>
                                            <ColorPicker
                                                :model-value="
                                                    editableGroupConfiguration[
                                                        groupElement.name
                                                    ].color
                                                "
                                                @update:modelValue="
                                                    groupMeta.color = $event
                                                "
                                            />
                                        </div>
                                        <div class="flex justify-end">
                                            <BaseButton
                                                @click="
                                                    onUpdateGroupMeta(
                                                        groupElement.name
                                                    )
                                                "
                                            >
                                                Save
                                            </BaseButton>
                                        </div>
                                    </div>
                                </BasePopover>

                                <span
                                    class="font-semibold"
                                    :class="[
                                        disabled.includes('groups')
                                            ? 'ml-4'
                                            : '',
                                    ]"
                                    >{{
                                        editableGroupConfiguration[
                                            groupElement.name
                                        ].name
                                    }}</span
                                >
                            </div>
                            <span
                                v-if="groupMenuItems"
                                class="shrink-0 text-sm"
                            >
                                <BaseDropdownMenu
                                    :allowed-placements="[
                                        'bottom-end',
                                        'top-end',
                                    ]"
                                    :items="
                                        [
                                            ...groupMenuItems,
                                            !disabled.includes('groups') &&
                                                defaultGroupDropdownMenuItems,
                                        ].filter(Boolean)
                                    "
                                    :context="{ groupName: groupElement.name }"
                                >
                                    <template #trigger>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                            />
                                        </svg>
                                    </template>
                                </BaseDropdownMenu>
                            </span>
                        </div>

                        <div
                            v-if="!draggingGroup"
                            class="group flex items-center justify-end space-x-2 p-2 px-4"
                        >
                            <BaseTypeahead
                                ref="columnFinderTypeahead"
                                :classes="dropDownClasses"
                                :default-items="defaultItems"
                                :display-property="() => ''"
                                :groups-config="typeaheadGroupsConfig"
                                :group-by="typeaheadGroupBy"
                                :multiple="false"
                                :nullable="true"
                                :searcher="searcher"
                                :middleware-options="typeaheadMiddlewareOptions"
                                placeholder="Add a column to group"
                                @update:modelValue="
                                    onPickedNewColumn(
                                        groupElement.name as string,
                                        $event
                                    )
                                "
                            >
                                <template #empty>
                                    <EmptyState
                                        icon="fa-exclamation-circle"
                                        title="No columns found"
                                        description="There are no columns to show at this time. Try a different search."
                                        :classes="{
                                            container:
                                                'flex flex-col items-center justify-center p-6 text-center',
                                            icon: 'text-zinc-500',
                                        }"
                                    />
                                </template>

                                <template #static>
                                    <div>
                                        <slot name="typeahead-static" />
                                    </div>
                                </template>

                                <template
                                    v-if="$slots['typeahead-group']"
                                    #group="groupSlotProps"
                                >
                                    <slot
                                        name="typeahead-group"
                                        v-bind="groupSlotProps"
                                    />
                                </template>

                                <template #searching>
                                    <div>
                                        <slot name="typeahead-searching" />
                                    </div>
                                </template>

                                <template #item="{ item, selected, active }">
                                    <slot
                                        name="option"
                                        v-bind="{ item, selected, active }"
                                    />
                                </template>
                            </BaseTypeahead>
                        </div>

                        <div
                            v-if="
                                !draggingGroup &&
                                (editableColumns[groupElement.name] || [])
                                    .length === 0
                            "
                            class="flex flex-col items-center justify-center p-4"
                        >
                            <EmptyState
                                title="No columns"
                                description="There are no columns here yet. Use the picker above to add the first column."
                                :classes="{
                                    container:
                                        'flex flex-col items-center justify-center border-2 border-dashed border-zinc-300/60 rounded-xl p-6',
                                    icon: 'text-zinc-500',
                                    description: 'text-center',
                                }"
                            />
                        </div>

                        <Sortable
                            v-if="!draggingGroup"
                            :list="editableColumns[groupElement.name]"
                            :key="
                                JSON.stringify(
                                    editableColumns[groupElement.name]
                                )
                            "
                            item-key="id"
                            tag="div"
                            :class="[`sortable-group-${groupElement.name}`]"
                            :data-group-name="groupElement.name"
                            :options="{
                                animation: 150,
                                group: 'shared-columns',
                                handle: '.drag-handle',
                                multiDrag: true,
                                selectedClass: 'selected',
                                emptyInsertThreshold: 100,
                            }"
                            @add="onAdded(groupElement.name as string, $event)"
                            @remove="
                                onRemoved(groupElement.name as string, $event)
                            "
                            @update="
                                onUpdatedList(
                                    groupElement.name as string,
                                    $event
                                )
                            "
                        >
                            <template #item="{ element, index }">
                                <div
                                    class="group flex w-full [&.selected]:bg-blue-100"
                                    :class="
                                        m(
                                            componentJarTheme.themeParams
                                                .columnManagerItem,
                                            theme.columnManagerItem
                                        )
                                    "
                                    :key="element.id"
                                    :data-sortable-item-id="element.id"
                                    @click="onClickedListItem"
                                >
                                    <slot name="drag-handle"></slot>

                                    <slot
                                        name="column"
                                        :slotProps="element"
                                    ></slot>

                                    <div
                                        class="ml-auto flex items-center space-x-1.5 p-1"
                                    >
                                        <button
                                            @click.prevent.stop="
                                                removeColumn(
                                                    groupElement.name as string,
                                                    index
                                                )
                                            "
                                            class="flex h-6 w-6 items-center justify-center rounded-xs text-xs text-zinc-400 ring-1 ring-transparent transition-all hover:bg-zinc-200 hover:text-zinc-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            @click.prevent.stop="
                                                focusedColumn =
                                                    editableColumns[
                                                        groupElement.name
                                                    ][index]
                                            "
                                            class="flex h-6 w-6 items-center justify-center rounded-xs text-xs text-zinc-400 ring-1 ring-transparent transition-all hover:bg-zinc-200 hover:text-zinc-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                class="h-4 w-4"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </template>
                        </Sortable>
                        <!--                </div>-->
                    </div>
                </template>
            </Sortable>

            <div
                v-if="!disabled.includes('groups')"
                class="sticky bottom-0 z-10"
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
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
    // mergeColumnGroupsWithDefaults,
    ungroupColumns,
} from '../utils/ColumnManagerUtils'

const emit = defineEmits([
    'update:existingColumns',
    'update:groupConfiguration',
])

const props = withDefaults(
    defineProps<{
        theme?: {
            columnManagerContainer?: string
            columnManagerGroupContainer?: string
            columnManagerGroupHeader?: string
            columnManagerGroupsContainer?: string
            columnManagerItem?: string
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
        disabled?: string[]
        dropDownClasses?: {
            container?: string
            inputContainer?: string
            inputElement?: string
            comboboxOptionsContainer?: string
        }
        defaultGroupColor?: string
        existingColumns?: any[]
        groupConfiguration?: any
        groupMenuItems?: any[]
        onPickedColumn: (groupName: string, column: any) => any
        searcher: (query: string) => Promise<any[]>
        typeaheadGroupBy?: string
        typeaheadGroupsConfig?: any
        typeaheadMiddlewareOptions: {
            autoPlacement?: {
                allowedPlacements?: string[]
            }
            buffer?: number
            size?: {
                minWidth?: number
                maxWidth?: number
            }
        }
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
        disabled: () => [],
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
            columnManagerItem: '',
            columnManagerNewGroupContainer: '',
            columnManagerNewGroupInput: '',
            columnManagerNewGroupInputButton: '',
        }),
        typeaheadGroupBy: '',
        typeaheadGroupsConfig: () => ({}),
        typeaheadMiddlewareOptions: () => ({
            autoPlacement: {
                allowedPlacements: ['top-start', 'bottom-start'],
            },
            buffer: 20,
            size: {},
        }),
    }
)

const componentJarTheme = inject(
    'componentJarTheme'
) as unknown as ThemeConfigurator

// const editableColumns = ref<{ [key: string]: any }>(
//     groupColumns([...props.existingColumns])
// )

const editableColumns = ref<{ [key: string]: any }>({ Default: [] })

const columnFinderTypeahead = ref<any>()
const focusedColumn = ref<any>()
const newGroupName = ref<string>('')
// const addingColumnToGroup = ref<string>('')
const addingColumnToGroups = ref<string[]>([])
const editableGroupConfiguration = ref<any>({ ...props.groupConfiguration }) // toRef(props, 'groupConfiguration')
const uniqueId = ref((Math.random() + 1).toString(36).substring(7))
const draggingGroup = ref(false)
const groupMeta = ref({
    name: '',
    color: '',
})

watch(
    () => props.existingColumns,
    (newVal) => {
        editableColumns.value =
            newVal.length === 0
                ? {
                      Default: [],
                  }
                : groupColumns([...newVal])
    },
    { immediate: true }
)

watch(
    () => props.groupConfiguration,
    () => {
        editableGroupConfiguration.value = { ...props.groupConfiguration }
    },
    { immediate: false }
)

// watch(
//     () => editableGroupConfiguration.value,
//     () => {
//         console.log(
//             'GROUP CONFIG UPDATED IN COL MAN',
//             editableGroupConfiguration.value
//         )
//         emit('update:groupConfiguration', editableGroupConfiguration.value)
//     },
//     { deep: false }
// )

function onClickedListItem(evt: any) {
    if (evt.currentTarget.classList.contains('selected')) {
        realSortable.utils.deselect(evt.currentTarget)
    } else {
        realSortable.utils.select(evt.currentTarget)
    }
}

function onUpdateGroupMeta(oldGroupName: string) {
    console.log('UPDATING META', groupMeta.value, oldGroupName)
    // delete editableGroupConfiguration.value[oldGroupName]
    // editableGroupConfiguration.value = {
    //     ...editableGroupConfiguration.value,
    //     [groupMeta.value.name]: {
    //         name: groupMeta.value.name,
    //         color: groupMeta.value.color || props.defaultGroupColor,
    //     },
    // }

    const filtered = Object.values(editableGroupConfiguration.value).filter(
        (group: any) => group.name !== oldGroupName
    )
    filtered.push({ ...groupMeta.value })
    const newGroupConfig = filtered.reduce((acc: any, group: any) => {
        acc[group.name] = group
        return acc
    }, {})

    emit('update:groupConfiguration', newGroupConfig)
}

// function onUpdateGroupName(groupName: string, evt: any) {
//     console.log('UPDATING GROUP NAME', groupName, evt.target.value)
//     editableGroupConfiguration.value = {
//         ...editableGroupConfiguration.value,
//         [groupName]: {
//             ...editableGroupConfiguration.value[groupName],
//             name: groupName,
//         },
//     }
// }
//
// function onUpdateGroupColor(groupName: string | number, hexColor: string) {
//     editableGroupConfiguration.value[groupName].color = hexColor
//     /* editableGroupConfiguration.value = {
//         ...editableGroupConfiguration.value,
//         [groupName]: {
//             ...editableGroupConfiguration.value[groupName],
//             color: hexColor,
//         },
//     } */
//
//     console.log('COLOR', hexColor, editableGroupConfiguration.value)
//     emit('update:groupConfiguration', editableGroupConfiguration.value)
// }

/**
 * Handler for the remove column button click event.
 * @param {string} groupName - The group name of the column
 * @param {number} idx - The index of the column
 */
function removeColumn(groupName: string, idx: number) {
    /* editableColumns.value[groupName] = editableColumns.value[groupName].filter(
        (_column: any, colIdx: number) => colIdx !== idx
    ) */

    editableColumns.value = {
        ...editableColumns.value,
        [groupName]: editableColumns.value[groupName].filter(
            (_column: any, colIdx: number) => colIdx !== idx
        ),
    }

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

    editableGroupConfiguration.value[newGroupName.value] = {
        name: newGroupName.value,
        color: props.defaultGroupColor,
    }

    newGroupName.value = ''

    setTimeout(() => {
        const objDiv = document.getElementById(
            `column-manager-groups-container-${uniqueId.value}`
        )

        if (objDiv) {
            // objDiv.scrollTop = objDiv.scrollHeight
            objDiv.scrollTo({
                top: objDiv.scrollHeight,
                behavior: 'smooth',
            })
        }
    }, 250)
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

    if (!addingColumnToGroups.value.includes(groupName)) {
        addingColumnToGroups.value.push(groupName)
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

function onUpdatedGroupOrder(_params: any) {
    // editableColumns.value = sortableUpdate(
    //     params,
    //     editableColumns.value
    // )
    // emit('update:existingColumns', ungroupColumns(editableColumns.value))
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
    console.log('ADDED TO GROUP', groupName, params)
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

    console.log('update:existingColumns', editableColumns.value)

    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

const defaultGroupDropdownMenuItems = [
    {
        icon: 'fa-plus',
        label: 'Add column to group',
        onClick: (context: any) => {
            // addingColumnToGroup.value = context.groupName
            addingColumnToGroups.value.push(context.groupName)
        },
    },
    {
        icon: 'fa-empty-set',
        label: 'Empty group',
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
