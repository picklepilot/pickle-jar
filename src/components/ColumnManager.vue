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
                                class="sortable-drag flex min-w-px grow items-center space-x-2 text-base"
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
                                            'rounded-xs size-6 flex items-center justify-center hover:bg-zinc-100',
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
                                    :class="theme.columnManagerGroupLabel"
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
                                            defaultGroupDropdownMenuItems,
                                        ].filter(Boolean)
                                    "
                                    :context="{ groupName: groupElement.name }"
                                    :theme="theme"
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
                            :class="
                                m(
                                    'group flex items-center justify-end space-x-2 p-2 px-4',
                                    theme.typeaheadContainer
                                )
                            "
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
                                :theme="theme"
                                :middleware-options="typeaheadMiddlewareOptions"
                                placeholder="Add a column to group"
                                @update:model-value="
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

                                    <slot name="column" v-bind="{ element }" />

                                    <div
                                        class="ml-auto flex items-center space-x-1 p-1"
                                    >
                                        <button
                                            @click.prevent.stop="
                                                removeColumn(
                                                    groupElement.name as string,
                                                    index
                                                )
                                            "
                                            class="flex h-6 w-6 items-center justify-center rounded-xs text-xs text-zinc-400 ring-1 ring-transparent transition-all hover:bg-zinc-100 hover:text-zinc-700"
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
                                            class="flex h-6 w-6 items-center justify-center rounded-xs text-xs text-zinc-400 ring-1 ring-transparent transition-all hover:bg-zinc-100 hover:text-zinc-700"
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
                <transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0"
                    enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0"
                >
                    <span v-show="addingNewGroup" class="flex -space-x-px">
                        <InputText
                            :classes="[
                                m(
                                    componentJarTheme.themeParams
                                        .columnManagerNewGroupInput,
                                    theme.columnManagerNewGroupInput
                                ),
                            ]"
                            :theme="{
                                inputText: m(
                                    componentJarTheme.themeParams
                                        .columnManagerNewGroupInput,
                                    theme.columnManagerNewGroupInput
                                ),
                            }"
                            id="column-manager-new-group-name"
                            name="column-manager-new-group-name"
                            placeholder="New group name"
                            v-model="newGroupName"
                            @keyup.enter="addGroup()"
                        />
                        <BaseButton
                            :theme="{
                                baseButton: m(
                                    componentJarTheme.themeParams
                                        .columnManagerNewGroupInputButton,
                                    theme.columnManagerNewGroupInputButton
                                ),
                            }"
                            @click="addGroup()"
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
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </BaseButton>
                    </span>
                </transition>
                <BaseButton
                    @click="addingNewGroup = !addingNewGroup"
                    :theme="{ baseButton: theme.addGroupButton }"
                >
                    {{ addingNewGroup ? 'Cancel' : 'Add a group' }}
                </BaseButton>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import type { ColumnDefinition } from '../types/ColumnDefinition'
import { m, type ThemeConfigurator } from '../utils'
import { computed, inject, ref, watch } from 'vue'
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
import { groupColumns, ungroupColumns } from '../utils/ColumnManagerUtils'
import type { ColumnGroupDefinition } from '../types'

const emit = defineEmits([
    'update:existingColumns',
    'update:groupConfiguration',
])

const props = withDefaults(
    defineProps<{
        /**
         * CSS classes for various container elements
         * @deprecated
         * @type {Object}
         */
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

        /**
         * Default items to display in the typeahead component
         * @type {Array<ColumnDefinition>}
         */
        defaultItems?: ColumnDefinition[]

        /**
         * Array of disabled features/functionalities
         * @type {Array<string>}
         */
        disabled?: string[]

        /**
         * CSS classes for the dropdown component
         * @type {Object}
         */
        dropDownClasses?: {
            container?: string
            inputContainer?: string
            inputElement?: string
            comboboxOptionsContainer?: string
        }

        /**
         * Default color for new groups
         * @type {string}
         */
        defaultGroupColor?: string

        /**
         * Array of existing columns to display in the manager
         * @type {Array<ColumnDefinition>}
         */
        existingColumns?: ColumnDefinition[]

        /**
         * Configuration for group settings like name and color
         * @type {Object}
         */
        groupConfiguration?: { [key: string]: ColumnGroupDefinition }

        /**
         * Custom menu items for group actions
         * @type {Array<any>}
         */
        groupMenuItems?: any[]

        /**
         * Callback function when a column is picked for a group
         * @type {Function}
         * @param {string} groupName - The name of the group
         * @param {any} column - The selected column
         * @returns {any}
         */
        // onPickedColumn: (groupName: string, column: any) => any

        /**
         * Function to search for columns
         * @type {Function}
         * @param {string} query - The search query
         * @returns {Promise<Array<any>>}
         */
        searcher: (query: string) => Promise<any[]>

        /**
         * Theme configuration for various container elements
         * @type {Object}
         */
        theme?: {
            addGroupButton?: string
            baseDropdownInputText?: string
            baseDropdownMenuContainer?: string
            baseDropdownMenuHeader?: string
            baseDropdownMenuItem?: string
            baseDropdownMenuItemButton?: string
            baseDropdownMenuItemGroup?: string
            baseDropdownMenuItemIcon?: string
            baseDropdownMenuItems?: string
            baseDropdownMenuTriggerButton?: string
            baseDropdownMenuTriggerButtonActive?: string
            columnManagerContainer?: string
            columnManagerGroupContainer?: string
            columnManagerGroupHeader?: string
            columnManagerGroupLabel?: string
            columnManagerGroupsContainer?: string
            columnManagerItem?: string
            columnManagerNewGroupContainer?: string
            columnManagerNewGroupInput?: string
            columnManagerNewGroupInputButton?: string
            typeaheadContainer?: string
        }

        /**
         * Property to group by in the typeahead component
         * @type {string}
         */
        typeaheadGroupBy?: string

        /**
         * Configuration for typeahead groups
         * @type {Object}
         */
        typeaheadGroupsConfig?: any

        /**
         * Options for typeahead middleware positioning and sizing
         * @type {Object}
         */
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
                    'h-7 w-7 rounded-lg flex items-center justify-center hover:bg-zinc-100',
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
            addGroupButton: '',
            baseDropdownInputText: '',
            baseDropdownMenuContainer: '',
            baseDropdownMenuHeader: '',
            baseDropdownMenuItem: '',
            baseDropdownMenuItemButton: '',
            baseDropdownMenuItemGroup: '',
            baseDropdownMenuItemIcon: '',
            baseDropdownMenuItems: '',
            baseDropdownMenuTriggerButton: '',
            baseDropdownMenuTriggerButtonActive: '',
            columnManagerContainer: '',
            columnManagerGroupContainer: '',
            columnManagerGroupHeader: '',
            columnManagerGroupLabel: '',
            columnManagerGroupsContainer: '',
            columnManagerItem: '',
            columnManagerNewGroupContainer: '',
            columnManagerNewGroupInput: '',
            columnManagerNewGroupInputButton: '',
            typeaheadContainer: '',
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

const addingNewGroup = ref(false)
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

/**
 * Handles the click event on a list item to toggle its selection state.
 * @param {Event} evt - The click event object
 */
function onClickedListItem(evt: any) {
    if (evt.currentTarget.classList.contains('selected')) {
        realSortable.utils.deselect(evt.currentTarget)
    } else {
        realSortable.utils.select(evt.currentTarget)
    }
}

/**
 * Updates the metadata (name and color) of a group.
 * @param {string} oldGroupName - The current name of the group to update
 */
function onUpdateGroupMeta(oldGroupName: string) {
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

/**
 * Removes a column from a specific group at the given index.
 * @param {string} groupName - The name of the group containing the column
 * @param {number} idx - The index of the column to remove
 */
function removeColumn(groupName: string, idx: number) {
    editableColumns.value = {
        ...editableColumns.value,
        [groupName]: editableColumns.value[groupName].filter(
            (_column: any, colIdx: number) => colIdx !== idx
        ),
    }

    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

/**
 * Adds a new group to the column manager.
 * Creates a new empty group with the specified name and default color.
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
    addingNewGroup.value = false

    setTimeout(() => {
        const objDiv = document.getElementById(
            `column-manager-groups-container-${uniqueId.value}`
        )

        if (objDiv) {
            objDiv.scrollTo({
                top: objDiv.scrollHeight,
                behavior: 'smooth',
            })
        }
    }, 250)
}

/**
 * Removes a group and all its columns from the column manager.
 * @param {string} groupName - The name of the group to remove
 */
function removeGroup(groupName: string) {
    editableColumns.value = Object.entries(editableColumns.value)
        .filter(([key]) => key !== groupName)
        .reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: value,
            }),
            {}
        )

    editableGroupConfiguration.value = Object.entries(
        editableGroupConfiguration.value
    )
        .filter(([key]) => key !== groupName)
        .reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: value,
            }),
            {}
        )

    emit('update:existingColumns', ungroupColumns(editableColumns.value))
    emit('update:groupConfiguration', editableGroupConfiguration.value)
}

/**
 * Clears all columns from a specific group.
 * @param {string} groupName - The name of the group to clear
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
 * Updates an array after a sortable event by moving elements.
 * @template T
 * @param {realSortable.SortableEvent} e - The sortable event object
 * @param {T[]} arr - The array to update
 * @returns {T[]} The updated array with elements in their new positions
 */
function sortableUpdate<T>(e: realSortable.SortableEvent, arr: T[]) {
    const el = arr.splice(e.oldIndex!, 1)[0]
    arr.splice(Math.min(e.newIndex!, arr.length), 0, el)
    return arr
}

/**
 * Handles the update event from the sortable component for a specific group.
 * @param {string} groupName - The name of the group being updated
 * @param {any} params - The sortable update parameters
 */
function onUpdatedList(groupName: string, params: any) {
    editableColumns.value[groupName] = sortableUpdate(
        params,
        editableColumns.value[groupName]
    )
    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

/**
 * Handles the group order update event from the sortable component.
 * @param {any} _params - The sortable update parameters (currently unused)
 */
function onUpdatedGroupOrder(_params: any) {
    // Implementation for group order updates
}

/**
 * Handles the event when columns are added to a group.
 * @param {string} groupName - The name of the target group
 * @param {any} params - The sortable add event parameters
 */
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

/**
 * Handles the event when columns are removed from a group.
 * @param {string} groupName - The name of the source group
 * @param {any} params - The sortable remove event parameters
 */
function onRemoved(groupName: string, params: any) {
    editableColumns.value[groupName].splice(params.oldIndex, 1)
    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

/**
 * Extracts and formats indices parameters from a sortable event.
 * @param {realSortable.SortableEvent} e - The sortable event object
 * @returns {Object} An object containing DOM elements and indices arrays
 */
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
 * Handles the event when a new column is picked for a group.
 * @param {string} groupName - The name of the target group
 * @param {any} value - The selected column to add
 */
function onPickedNewColumn(groupName: string, value: any) {
    value.group = groupName
    editableColumns.value = {
        ...editableColumns.value,
        [groupName]: [...editableColumns.value[groupName], value],
    }

    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

const defaultGroupDropdownMenuItems = computed(() =>
    [
        // {
        //     icon: 'fa-plus',
        //     label: 'Add column to group',
        //     onClick: (context: any) => {
        //         // addingColumnToGroup.value = context.groupName
        //         addingColumnToGroups.value.push(context.groupName)
        //     },
        // },
        {
            icon: 'fa-empty-set',
            label: 'Empty group',
            onClick: (context: any) => {
                clearAllColumns(context.groupName)
            },
        },
        !props.disabled.includes('groups')
            ? {
                  icon: 'fa-trash',
                  label: 'Remove group',
                  onClick: (context: any) => {
                      // Only remove if there's more than one group with columns
                      const groupsWithColumns = Object.entries(
                          editableColumns.value
                      ) // .filter(([_, columns]) => columns.length > 0)

                      if (groupsWithColumns.length <= 1) {
                          return
                      }

                      removeGroup(context.groupName)
                  },
              }
            : false,
    ].filter(Boolean)
)

defineExpose({
    clearAllColumns,
    focusedColumn,
    onPickedNewColumn,
    removeGroup,
})
</script>
