import { computed, ref, watch, readonly, type Ref } from 'vue'
import type { ColumnDefinition } from '../../../types/ColumnDefinition'
import type { ColumnGroupDefinition } from '../../../types'
import { groupColumns, ungroupColumns } from '../../../utils/ColumnManagerUtils'

interface UseColumnManagerOptions {
    columns: Ref<ColumnDefinition[]>
    groups: Ref<ColumnGroupDefinition[]>
    focusedColumn?: Ref<ColumnDefinition | null>
    onUpdate?: (
        columns: ColumnDefinition[],
        groups: ColumnGroupDefinition[]
    ) => void
    onFocusedColumnChange?: (column: ColumnDefinition | null) => void
}

export function useColumnManager(options: UseColumnManagerOptions) {
    const {
        columns,
        groups,
        focusedColumn: externalFocusedColumn,
        onUpdate,
        onFocusedColumnChange,
    } = options

    // Internal state
    const groupedColumns = ref<{ [key: string]: ColumnDefinition[] }>({})
    const internalFocusedColumn = ref<ColumnDefinition | null>(null)

    // Use external focusedColumn if provided, otherwise use internal
    const focusedColumn = externalFocusedColumn || internalFocusedColumn

    // Helper function to generate unique group IDs
    const generateGroupId = () =>
        `group_${Math.random().toString(36).substring(2, 9)}`

    // Watch for changes in columns and update grouped structure
    watch(
        () => columns.value,
        newColumns => {
            groupedColumns.value =
                newColumns.length === 0
                    ? { Default: [] }
                    : groupColumns([...newColumns])
        },
        { immediate: true }
    )

    // Watch for changes in groups and ensure they have IDs
    watch(
        () => groups.value,
        newGroups => {
            const groupsWithIds = newGroups.map(group => ({
                ...group,
                id: group.id || generateGroupId(),
            }))
            groups.value = groupsWithIds
        },
        { immediate: true, deep: true }
    )

    // Computed properties
    const availableColumns = computed(() => {
        const usedColumnIds = new Set()
        Object.values(groupedColumns.value).forEach(groupColumns => {
            groupColumns.forEach(col => usedColumnIds.add(col.id))
        })
        return columns.value.filter(col => !usedColumnIds.has(col.id))
    })

    const groupsWithColumns = computed(() => {
        return groups.value.map(group => ({
            ...group,
            columns: groupedColumns.value[group.id] || [],
        }))
    })

    // Actions
    const addColumn = (groupId: string, column: ColumnDefinition) => {
        const columnWithGroup = { ...column, group: groupId }
        groupedColumns.value = {
            ...groupedColumns.value,
            [groupId]: [
                ...(groupedColumns.value[groupId] || []),
                columnWithGroup,
            ],
        }
        emitUpdate()
    }

    const removeColumn = (groupId: string, columnId: string) => {
        const groupColumns = groupedColumns.value[groupId] || []
        const updatedColumns = groupColumns.filter(col => col.id !== columnId)

        groupedColumns.value = {
            ...groupedColumns.value,
            [groupId]: updatedColumns,
        }

        // Clear focused column if it was removed
        if (focusedColumn.value?.id === columnId) {
            setFocusedColumn(null)
        }

        emitUpdate()
    }

    const moveColumn = (
        fromGroupId: string,
        toGroupId: string,
        columnId: string,
        newIndex?: number
    ) => {
        const fromGroup = groupedColumns.value[fromGroupId] || []
        const toGroup = groupedColumns.value[toGroupId] || []

        const columnIndex = fromGroup.findIndex(col => col.id === columnId)

        if (columnIndex === -1) {
            return
        }

        const [column] = fromGroup.splice(columnIndex, 1)
        const updatedColumn = { ...column, group: toGroupId }

        const insertIndex = newIndex ?? toGroup.length
        toGroup.splice(insertIndex, 0, updatedColumn)

        groupedColumns.value = {
            ...groupedColumns.value,
            [fromGroupId]: fromGroup,
            [toGroupId]: toGroup,
        }

        emitUpdate()
    }

    const addGroup = (groupData: Partial<ColumnGroupDefinition>) => {
        const newGroup: ColumnGroupDefinition = {
            id: generateGroupId(),
            name: groupData.name || 'New Group',
            color: groupData.color || '#e7e5e4',
            ...groupData,
        }

        groups.value = [...groups.value, newGroup]
        groupedColumns.value[newGroup.id] = []
        emitUpdate()

        return newGroup
    }

    const removeGroup = (groupId: string) => {
        // Move all columns from the group to the first available group or create a default
        const columnsToMove = groupedColumns.value[groupId] || []

        if (columnsToMove.length > 0) {
            const otherGroups = groups.value.filter(g => g.id !== groupId)
            const targetGroup = otherGroups[0]

            if (targetGroup) {
                // Move columns to the first available group
                groupedColumns.value[targetGroup.id] = [
                    ...(groupedColumns.value[targetGroup.id] || []),
                    ...columnsToMove.map(col => ({
                        ...col,
                        group: targetGroup.id,
                    })),
                ]
            } else {
                // Create a default group if no other groups exist
                const defaultGroup: ColumnGroupDefinition = {
                    id: generateGroupId(),
                    name: 'Default',
                    color: '#e7e5e4',
                }
                groups.value = [defaultGroup]
                groupedColumns.value[defaultGroup.id] = columnsToMove.map(
                    col => ({
                        ...col,
                        group: defaultGroup.id,
                    })
                )
            }
        }

        // Remove the group
        groups.value = groups.value.filter(g => g.id !== groupId)
        delete groupedColumns.value[groupId]
        emitUpdate()
    }

    const updateGroup = (
        groupId: string,
        updates: Partial<ColumnGroupDefinition>
    ) => {
        const groupIndex = groups.value.findIndex(g => g.id === groupId)
        if (groupIndex === -1) return

        const updatedGroup = { ...groups.value[groupIndex], ...updates }
        groups.value[groupIndex] = updatedGroup

        // If name changed, update column group references
        if (updates.name && updates.name !== groups.value[groupIndex].name) {
            const groupColumns = groupedColumns.value[groupId] || []
            groupedColumns.value[groupId] = groupColumns.map(col => ({
                ...col,
                group: updates.name!,
            }))
        }

        emitUpdate()
    }

    const setFocusedColumn = (column: ColumnDefinition | null) => {
        focusedColumn.value = column
        // Notify external listeners if callback provided
        if (onFocusedColumnChange) {
            onFocusedColumnChange(column)
        }
    }

    const reorderColumns = (groupId: string, newOrder: ColumnDefinition[]) => {
        groupedColumns.value[groupId] = newOrder.map(col => ({
            ...col,
            group: groupId,
        }))
        emitUpdate()
    }

    const clearGroup = (groupId: string) => {
        groupedColumns.value[groupId] = []
        emitUpdate()
    }

    // Helper function to emit updates
    const emitUpdate = () => {
        if (onUpdate) {
            onUpdate(ungroupColumns(groupedColumns.value), groups.value)
        }
    }

    return {
        // State
        groupedColumns: readonly(groupedColumns),
        focusedColumn: readonly(focusedColumn),

        // Computed
        availableColumns,
        groupsWithColumns,

        // Actions
        addColumn,
        removeColumn,
        moveColumn,
        addGroup,
        removeGroup,
        updateGroup,
        setFocusedColumn,
        reorderColumns,
        clearGroup,

        // Utilities
        generateGroupId,
    }
}
