<template>
    <div
        :class="
            m(
                'w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row',
                theme.columnManagerContainer
            )
        "
    >
        <EmptyState
            v-if="Object.values(editableGroupConfiguration).length === 0"
            icon="fa-exclamation-circle"
            title="Nothing here, yet"
        >
            <p>There are no groups here yet. Add a new group to get started.</p>
        </EmptyState>

        <div
            :id="`column-manager-groups-container-${uniqueId}`"
            :class="
                m('overflow-y-auto h-full', theme.columnManagerGroupsContainer)
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
                :class="m('p-3', theme.columnManagerGroupContainer)"
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
                    <div class="mb-4 last:mb-0">
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
                        <div :class="m(theme.columnManagerGroupHeader)">
                            <div
                                class="sortable-drag flex min-w-px grow items-center space-x-2 text-base"
                            >
                                <slot
                                    v-if="!disabled.includes('groups')"
                                    name="drag-handle"
                                />

                                <ColumnManagerGroupMetaForm
                                    v-model="
                                        editableGroupConfiguration[
                                            groupElement.id
                                        ]
                                    "
                                    :default-group-color="defaultGroupColor"
                                    :disabled="disabled"
                                    :group-id="groupElement.id"
                                    @update="onUpdateGroupMeta"
                                />

                                <!-- Group name display-->
                                <span
                                    class="font-semibold"
                                    :class="theme.columnManagerGroupLabel"
                                    >{{
                                        editableGroupConfiguration[
                                            groupElement.id
                                        ].name
                                    }}</span
                                >
                            </div>
                            <span
                                v-if="groupMenuItems"
                                class="shrink-0 text-sm"
                            >
                                <!-- <BaseDropdownMenu
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
                                </BaseDropdownMenu> -->
                            </span>
                        </div>

                        <div
                            v-if="!draggingGroup"
                            :class="
                                m(
                                    'group flex items-center justify-end space-x-2 py-2 ',
                                    theme.typeaheadContainer
                                )
                            "
                        >
                            <Typeahead
                                ref="columnFinderTypeahead"
                                :theme="dropDownClasses"
                                :default-items="defaultItems"
                                :display-property="() => ''"
                                :groups-config="typeaheadGroupsConfig"
                                :group-by="typeaheadGroupBy"
                                :multiple="false"
                                :nullable="true"
                                :searcher="searcher"
                                :middleware-options="typeaheadMiddlewareOptions"
                                :placeholder="'Add a column to group'"
                                @update:model-value="
                                    onPickedNewColumn(
                                        groupElement.id as string,
                                        $event
                                    )
                                "
                            >
                                <template #empty>
                                    <EmptyState
                                        icon="fa-exclamation-circle"
                                        title="No columns found"
                                    >
                                        <p>
                                            There are no columns to show at this
                                            time. Try a different search.
                                        </p>
                                    </EmptyState>
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

                                <template
                                    v-if="$slots['typeahead-searching']"
                                    #searching
                                >
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
                            </Typeahead>
                        </div>

                        <div
                            v-if="
                                !draggingGroup &&
                                (editableColumns[groupElement.id] || [])
                                    .length === 0
                            "
                        >
                            <EmptyState
                                title="No columns"
                                description="There are no columns here yet. Use the picker above to add the first column."
                            >
                                <p>
                                    There are no columns here yet. Use the
                                    picker above to add the first column.
                                </p>
                            </EmptyState>
                        </div>

                        <Sortable
                            v-if="!draggingGroup"
                            :list="editableColumns[groupElement.id]"
                            :key="
                                JSON.stringify(editableColumns[groupElement.id])
                            "
                            item-key="id"
                            tag="div"
                            :class="[`sortable-group-${groupElement.id}`]"
                            :data-group-name="groupElement.id"
                            :options="{
                                animation: 150,
                                group: 'shared-columns',
                                handle: '.drag-handle',
                                // multiDrag: true,
                                selectedClass: 'selected',
                                emptyInsertThreshold: 100,
                            }"
                            @add="onAdded(groupElement.id as string, $event)"
                            @remove="
                                onRemoved(groupElement.id as string, $event)
                            "
                            @update="
                                onUpdatedList(groupElement.id as string, $event)
                            "
                        >
                            <template #item="{ element, index }">
                                <div
                                    class="group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50"
                                    :class="m(theme.columnManagerItem)"
                                    :key="element.id"
                                    :data-sortable-item-id="element.id"
                                    @click="onClickedListItem"
                                >
                                    <slot name="drag-handle">
                                        <Button
                                            variant="ghost"
                                            size="xs"
                                            icon
                                            class="drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5"
                                        >
                                            <GripHorizontal
                                                class="size-3.5 shrink-0"
                                            />
                                        </Button>
                                    </slot>

                                    <slot name="column" v-bind="{ element }" />

                                    <div
                                        class="ml-auto flex items-center space-x-1 p-1"
                                    >
                                        <Button
                                            @click.prevent.stop="
                                                removeColumn(
                                                    groupElement.id as string,
                                                    index
                                                )
                                            "
                                            variant="ghost"
                                            size="xs"
                                            icon
                                            class="shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                                        >
                                            <X class="size-4 shrink-0" />
                                        </Button>

                                        <Button
                                            @click.prevent.stop="
                                                focusedColumn =
                                                    editableColumns[
                                                        groupElement.id
                                                    ][index]
                                            "
                                            variant="ghost"
                                            size="xs"
                                            icon
                                            class="shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                                        >
                                            <EllipsisVertical
                                                class="size-4 shrink-0"
                                            />
                                        </Button>
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
                class="sticky bottom-0 z-2 flex items-center gap-2 p-3 bg-background/90 backdrop-blur-sm"
                :class="m(theme.columnManagerNewGroupContainer)"
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
                        <Input
                            id="column-manager-new-group-name"
                            name="column-manager-new-group-name"
                            placeholder="New group name"
                            v-model="newGroupName"
                            @keyup.enter="addGroup()"
                            :theme="{
                                input: 'w-full py-1.5',
                            }"
                            type="text"
                        />
                        <!-- <Button
                            :theme="{
                                button: m(
                                    theme.columnManagerNewGroupInputButton
                                ),
                            }"
                            @click="addGroup()"
                        >
                            <X class="size-4" />
                        </Button> -->
                    </span>
                </transition>
                <Button
                    @click="addingNewGroup = !addingNewGroup"
                    :theme="{ button: theme.addGroupButton }"
                    size="sm"
                    variant="outline"
                >
                    {{ addingNewGroup ? 'Cancel' : 'Add a group' }}
                </Button>
            </div>
        </div>

        <!-- Default slot: the focused column's details generally will live here -->
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import type { ColumnDefinition } from '../../types/ColumnDefinition'
import { m, type ThemeConfigurator } from '../../utils'
import { computed, inject, ref, watch } from 'vue'
import { Sortable } from 'sortablejs-vue3'
// @ts-ignore
import { default as realSortable } from 'sortablejs'
import { default as Button } from '../../components/button/Button.vue'
import { default as ColorPicker } from '../../components/color-picker/ColorPicker.vue'
import { default as EmptyState } from '../../components/empty-state/EmptyState.vue'
import { default as Input } from '../../components/input/Input.vue'
import Typeahead from '../../components/typeahead/Typeahead.vue'
import { groupColumns, ungroupColumns } from '../../utils/ColumnManagerUtils'
import type { ColumnGroupDefinition } from '../../types'
import { GripHorizontal, X, Cog, EllipsisVertical } from 'lucide-vue-next'
import ColumnManagerGroupMetaForm from './ColumnManagerGroupMetaForm.vue'

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
const editableGroupConfiguration = ref<{
    [key: string]: ColumnGroupDefinition
}>({})
const addingNewGroup = ref(false)
const columnFinderTypeahead = ref<any>()
const focusedColumn = ref<any>()
const newGroupName = ref<string>('')
const addingColumnToGroups = ref<string[]>([])
const uniqueId = ref((Math.random() + 1).toString(36).substring(7))
const draggingGroup = ref(false)
const groupMeta = ref({
    id: '',
    name: '',
    color: '',
})

// Helper function to generate a unique ID
function generateGroupId() {
    return `group_${Math.random().toString(36).substring(2, 9)}`
}

watch(
    () => props.existingColumns,
    newVal => {
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
        // Convert the incoming configuration to use IDs as keys
        const newConfig: { [key: string]: ColumnGroupDefinition } = {}
        Object.entries(props.groupConfiguration).forEach(([key, group]) => {
            // If the group already has an ID, use it, otherwise use the key as ID
            const groupId = group.id || key
            newConfig[groupId] = {
                ...group,
                id: groupId, // Ensure ID is set
            }
        })
        editableGroupConfiguration.value = newConfig
    },
    { immediate: true, deep: true }
)

// Add a watch for the editableGroupConfiguration to ensure it stays in sync
watch(
    () => editableGroupConfiguration.value,
    newConfig => {
        // Ensure all groups have IDs
        Object.entries(newConfig).forEach(([key, group]) => {
            if (!group.id) {
                group.id = key
            }
        })
    },
    { deep: true }
)

/**
 * Handles the click event on a list item to toggle its selection state.
 * @param {Event} evt - The click event object
 */
function onClickedListItem(evt: any) {
    // const sortable = realSortable.get(evt.currentTarget.parentNode)
    // if (!sortable) return

    // if (evt.currentTarget.classList.contains('selected')) {
    //     sortable.utils.deselect(evt.currentTarget)
    // } else {
    //     sortable.utils.select(evt.currentTarget)
    // }

    console.log('clicked list item', evt.currentTarget)
}

/**
 * Updates the metadata (name and color) of a group.
 * @param {string} groupId - The ID of the group to update
 */
function onUpdateGroupMeta(groupId: string) {
    const group = editableGroupConfiguration.value[groupId]
    if (!group) return

    // Get the updated metadata from the form
    const updatedGroup = editableGroupConfiguration.value[groupId]
    if (!updatedGroup) return

    // Update the group configuration while preserving the ID
    editableGroupConfiguration.value[groupId] = {
        ...updatedGroup,
        id: groupId, // Ensure we keep the original ID
    }

    // Update the columns to use the new group name
    if (group.name !== updatedGroup.name) {
        const columns = editableColumns.value[group.name] || []
        delete editableColumns.value[group.name]
        editableColumns.value[updatedGroup.name] = columns.map((col: any) => ({
            ...col,
            group: updatedGroup.name,
        }))
    }

    emit('update:groupConfiguration', editableGroupConfiguration.value)
    emit('update:existingColumns', ungroupColumns(editableColumns.value))
}

/**
 * Removes a column from a specific group at the given index.
 * @param {string} groupName - The name of the group containing the column
 * @param {number} idx - The index of the column to remove
 */
function removeColumn(groupName: string, idx: number) {
    // Check if the column being removed is the focused one
    const columnToRemove = editableColumns.value[groupName][idx]
    if (focusedColumn.value && focusedColumn.value.id === columnToRemove.id) {
        focusedColumn.value = null
    }

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
    const groupId = generateGroupId()
    const groupName = newGroupName.value

    editableColumns.value = {
        ...editableColumns.value,
        [groupId]: [],
    }

    editableGroupConfiguration.value[groupId] = {
        id: groupId,
        name: groupName,
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
 * @param {string} groupId - The ID of the group to remove
 */
function removeGroup(groupId: string) {
    const group = editableGroupConfiguration.value[groupId]
    if (!group) return

    // Remove from columns
    delete editableColumns.value[group.name]

    // Remove from configuration
    delete editableGroupConfiguration.value[groupId]

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
function onPickedNewColumn(groupId: string, value: any) {
    console.log('onPickedNewColumn', editableColumns.value, groupId, value)
    if (value) {
        value.group = groupId
        editableColumns.value = {
            ...editableColumns.value,
            [groupId]: [...editableColumns.value[groupId], value],
        }

        emit('update:existingColumns', ungroupColumns(editableColumns.value))
    }
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

                      removeGroup(context.groupId)
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
