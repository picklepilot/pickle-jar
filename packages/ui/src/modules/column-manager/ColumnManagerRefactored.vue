<template>
    <div
        class="w-full overflow-hidden h-full rounded-lg flex flex-col md:flex-row"
    >
        <EmptyState
            v-if="groups.length === 0"
            icon="fa-exclamation-circle"
            title="Nothing here, yet"
        >
            <p>There are no groups here yet. Add a new group to get started.</p>
        </EmptyState>

        <div
            v-else
            class="overflow-y-auto h-full w-full p-1 pt-4 md:w-[350px] md:shrink-0"
        >
            <Sortable
                :items="groups"
                :group-id="'groups'"
                :shared-group="'shared-groups'"
                :disabled="false"
                @update:items="onGroupOrderUpdate"
                @item-moved="onGroupMoved"
                @cross-group-drag="onGroupCrossGroupDrag"
                @drag-start="onGroupDragStart"
                @drag-end="onGroupDragEnd"
            >
                <template
                    #item="{ item: group, index, isDragging, isDropTarget }"
                >
                    <ColumnManagerGroup
                        :group="group"
                        :columns="getGroupColumns(group.id)"
                        :available-columns="availableColumns"
                        :dragging-group="localDraggingGroup"
                        :default-group-color="defaultGroupColor"
                        @group-update="onGroupUpdate"
                        @column-add="onColumnAdd"
                        @column-added="onColumnAdded"
                        @column-removed="onColumnRemoved"
                        @column-reordered="onColumnReordered"
                        @column-edit="onColumnEdit"
                        @column-drag-start="onColumnDragStart"
                        @column-drag-end="onColumnDragEnd"
                        @column-drag-enter="onColumnDragEnter"
                        @column-drag-leave="onColumnDragLeave"
                        @edit-group="onEditGroup"
                        @delete-group="onDeleteGroup"
                    >
                        <template #drag-handle>
                            <slot name="drag-handle" />
                        </template>

                        <template #option="{ item, selected, active }">
                            <slot
                                name="option"
                                v-bind="{ item, selected, active }"
                            />
                        </template>

                        <template #column-content="{ column }">
                            <slot name="column-content" :column="column" />
                        </template>

                        <template
                            #column-actions="{ column, onRemove, onEdit }"
                        >
                            <slot
                                name="column-actions"
                                :column="column"
                                :on-remove="onRemove"
                                :on-edit="onEdit"
                            />
                        </template>

                        <template
                            #dropdown-content="{ group, groupData, emit }"
                        >
                            <slot
                                name="dropdown-content"
                                :group="group"
                                :group-data="groupData"
                                :emit="emit"
                            />
                        </template>
                    </ColumnManagerGroup>
                </template>
            </Sortable>

            <ColumnManagerAddGroup
                v-if="!disabled.includes('groups')"
                @group-add="onGroupAdd"
            />
        </div>

        <!-- Default slot: the focused column's details generally will live here -->
        <slot />
    </div>
</template>

<script setup lang="ts">
import { toRef, readonly, ref, watch } from 'vue'
import Sortable from '../../components/sortable/Sortable.vue'
import EmptyState from '../../components/empty-state/EmptyState.vue'
import ColumnManagerGroup from './components/ColumnManagerGroup.vue'
import ColumnManagerAddGroup from './components/ColumnManagerAddGroup.vue'
import { useColumnManager } from './composables/useColumnManager'
import { provideColumnManagerContext } from './composables/useColumnManagerContext'
import type { ColumnDefinition } from '../../types/ColumnDefinition'
import type { ColumnGroupDefinition } from '../../types'

interface Props {
    columns: ColumnDefinition[]
    groups: ColumnGroupDefinition[]
    focusedColumn?: ColumnDefinition | null
    disabled?: string[]
    defaultGroupColor?: string
    theme?: Record<string, string>
    searcher?: (query: string) => Promise<ColumnDefinition[]>
    defaultItems?: ColumnDefinition[]
    onColumnSelect?: (column: ColumnDefinition) => void
}

interface Emits {
    (e: 'update:columns', columns: ColumnDefinition[]): void
    (e: 'update:groups', groups: ColumnGroupDefinition[]): void
    (e: 'update:focusedColumn', column: ColumnDefinition | null): void
    (e: 'column-select', column: ColumnDefinition): void
    (e: 'edit-group', group: ColumnGroupDefinition): void
    (e: 'delete-group', group: ColumnGroupDefinition): void
    (e: 'group-add', group: Partial<ColumnGroupDefinition>): void
}

const props = withDefaults(defineProps<Props>(), {
    focusedColumn: null,
    disabled: () => [],
    defaultGroupColor: '#e7e5e4',
    theme: () => ({}),
    searcher: () => Promise.resolve([]),
    defaultItems: () => [],
})

const emit = defineEmits<Emits>()

// Create reactive refs for the composable
const columnsRef = toRef(props, 'columns')
const groupsRef = toRef(props, 'groups')

// Create a local ref for focusedColumn that can be updated externally
const localFocusedColumn = ref<ColumnDefinition | null>(
    props.focusedColumn || null
)

// Watch for external changes to focusedColumn prop
watch(
    () => props.focusedColumn,
    newFocusedColumn => {
        localFocusedColumn.value = newFocusedColumn || null
    },
    { immediate: true }
)

// Use the composable with external focusedColumn management
const {
    groupedColumns,
    availableColumns,
    addColumn,
    removeColumn,
    moveColumn,
    addGroup,
    removeGroup,
    updateGroup,
    setFocusedColumn,
    reorderColumns,
    clearGroup,
} = useColumnManager({
    columns: columnsRef,
    groups: groupsRef,
    focusedColumn: localFocusedColumn,
    onUpdate: (columns, groups) => {
        emit('update:columns', columns)
        emit('update:groups', groups)
    },
    onFocusedColumnChange: column => {
        localFocusedColumn.value = column
        emit('update:focusedColumn', column)
    },
})

// Drag state tracking for column dragging
const isDraggingColumn = ref(false)
const draggedOverGroupId = ref<string | null>(null)
const localDraggingGroup = ref(false)

// Provide context for child components
provideColumnManagerContext({
    theme: props.theme,
    disabled: props.disabled,
    onColumnSelect: props.onColumnSelect,
    searcher: props.searcher,
    defaultItems: props.defaultItems,
    isDraggingColumn: readonly(isDraggingColumn),
    draggedOverGroupId: readonly(draggedOverGroupId),
    setDraggedOverGroupId: (groupId: string | null) => {
        draggedOverGroupId.value = groupId
    },
})

// Helper function to get columns for a specific group
const getGroupColumns = (groupId: string) => {
    const columns = [...(groupedColumns.value[groupId] || [])]
    return columns
}

// Event handlers
const onGroupUpdate = (group: ColumnGroupDefinition) => {
    updateGroup(group.id, group)
}

const onColumnAdd = (groupId: string, column: ColumnDefinition) => {
    addColumn(groupId, column)
}

const onColumnAdded = (params: any) => {
    // Handle cross-group drag event from new Sortable component
    const fromGroup = params.fromGroup
    const toGroup = params.toGroup
    const item = params.item

    // Only process if this is actually a cross-group operation
    if (!fromGroup || !toGroup || fromGroup === toGroup) {
        return
    }

    if (!item) {
        return
    }

    // Use the column manager's moveColumn method for proper handling
    moveColumn(fromGroup, toGroup, String(item.id))
}

const onColumnRemoved = (params: any) => {
    // Handle column removal from action buttons
    if (typeof params === 'string') {
        // Direct column ID passed
        const columnId = params
        // Find which group contains this column
        for (const [groupId, columns] of Object.entries(groupedColumns.value)) {
            const column = columns.find(col => col.id === columnId)
            if (column) {
                removeColumn(groupId, columnId)
                return
            }
        }
    } else if (params.columnId) {
        // Object with columnId
        const columnId = params.columnId
        const groupId = params.groupId
        if (groupId) {
            removeColumn(groupId, columnId)
        } else {
            // Find which group contains this column
            for (const [gId, columns] of Object.entries(groupedColumns.value)) {
                const column = columns.find(col => col.id === columnId)
                if (column) {
                    removeColumn(gId, columnId)
                    return
                }
            }
        }
    }
}

const onColumnReordered = (params: any) => {
    // Handle column reordering within the same group
    // Handle new event structure from our Sortable component
    if (params.groupId && Array.isArray(params.newColumns)) {
        const groupId = params.groupId
        const newColumns = params.newColumns
        reorderColumns(groupId, newColumns)
    }
}

const onColumnEdit = (column: ColumnDefinition) => {
    setFocusedColumn(column)
    emit('column-select', column)
}

const onGroupAdd = (groupData: Partial<ColumnGroupDefinition>) => {
    // Add the group and get the created group back
    const newGroup = addGroup(groupData)
    emit('group-add', newGroup)
}

const onGroupOrderUpdate = (newGroups: ColumnGroupDefinition[]) => {
    // Handle group reordering
    emit('update:groups', newGroups)
}

const onGroupMoved = () => {
    // Handle within-group reordering if needed
}

const onGroupCrossGroupDrag = () => {
    // Handle cross-group drag for groups if needed
}

const onGroupDragStart = () => {
    localDraggingGroup.value = true
}

const onGroupDragEnd = () => {
    localDraggingGroup.value = false
}

// Column drag event handlers
const onColumnDragStart = () => {
    isDraggingColumn.value = true
}

const onColumnDragEnd = () => {
    isDraggingColumn.value = false
    draggedOverGroupId.value = null
}

const onColumnDragEnter = (groupId: string) => {
    if (getGroupColumns(groupId).length === 0) {
        draggedOverGroupId.value = groupId
    }
}

const onColumnDragLeave = (groupId: string) => {
    if (draggedOverGroupId.value === groupId) {
        draggedOverGroupId.value = null
    }
}

// Expose methods for external use
defineExpose({
    addColumn,
    removeColumn,
    moveColumn,
    addGroup,
    removeGroup,
    updateGroup,
    setFocusedColumn,
    clearGroup,
    focusedColumn: readonly(localFocusedColumn),
    groupedColumns: readonly(groupedColumns),
})

// Watch for changes in columns and update grouped structure
watch(
    () => groupedColumns.value,
    newGroupedColumns => {
        // Grouped columns updated
    },
    { deep: true }
)

// Watch for changes in groups
watch(
    () => groupsRef.value,
    newGroups => {
        // Groups updated
    },
    { deep: true }
)

const onEditGroup = (group: ColumnGroupDefinition) => {
    emit('edit-group', group)
}

const onDeleteGroup = (group: ColumnGroupDefinition) => {
    emit('delete-group', group)
}
</script>
