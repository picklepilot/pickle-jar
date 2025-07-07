<template>
    <div
        class="mb-2 w-full space-y-2"
        :class="{
            'ring-2 rounded-md ring-primary/20 bg-primary/5':
                isBeingDraggedOver,
        }"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
    >
        <div
            class="sortable-drag flex min-w-px grow items-center space-x-2 text-base"
        >
            <slot name="drag-handle" />

            <ColumnManagerGroupHeader
                :group="group"
                :default-group-color="defaultGroupColor"
                @group-update="onGroupUpdate"
                @add-column="showColumnPicker = true"
                @edit-group="onEditGroup"
                @delete-group="onDeleteGroup"
            >
                <template #dropdown-content="{ group, groupData, emit }">
                    <slot
                        name="dropdown-content"
                        :group="group"
                        :group-data="groupData"
                        :emit="emit"
                    />
                </template>
            </ColumnManagerGroupHeader>
        </div>

        <ColumnManagerColumnPicker
            v-if="!draggingGroup && showColumnPicker"
            :group-id="group.id"
            :available-columns="availableColumns"
            @column-add="onColumnAdd"
            @close="showColumnPicker = false"
        >
            <template #option="{ item, selected, active }">
                <slot name="option" v-bind="{ item, selected, active }" />
            </template>
        </ColumnManagerColumnPicker>

        <ColumnManagerColumnList
            :columns="columns"
            :group-id="group.id"
            :dragging-group="draggingGroup"
            @column-add="onColumnAdded"
            @column-remove="onColumnRemoved"
            @column-reorder="onColumnReordered"
            @column-edit="onColumnEdit"
            @column-drag-start="onColumnDragStart"
            @column-drag-end="onColumnDragEnd"
            @column-drag-enter="onColumnDragEnter"
            @column-drag-leave="onColumnDragLeave"
        >
            <template #column-content="{ column }">
                <slot name="column-content" :column="column" />
            </template>

            <template #column-actions="{ column, onRemove, onEdit }">
                <slot
                    name="column-actions"
                    :column="column"
                    :on-remove="onRemove"
                    :on-edit="onEdit"
                />
            </template>
        </ColumnManagerColumnList>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ColumnManagerGroupHeader from './ColumnManagerGroupHeader.vue'
import ColumnManagerColumnList from './ColumnManagerColumnList.vue'
import ColumnManagerColumnPicker from './ColumnManagerColumnPicker.vue'
import { useColumnManagerContext } from '../composables/useColumnManagerContext'
import type { ColumnDefinition } from '../../../types/ColumnDefinition'
import type { ColumnGroupDefinition } from '../../../types'

interface Props {
    group: ColumnGroupDefinition
    columns: ColumnDefinition[]
    availableColumns: ColumnDefinition[]
    draggingGroup: boolean
    defaultGroupColor?: string
}

interface Emits {
    (e: 'group-update', group: ColumnGroupDefinition): void
    (e: 'column-add', groupId: string, column: ColumnDefinition): void
    (e: 'column-added', params: any): void
    (e: 'column-removed', params: any): void
    (e: 'column-reordered', params: any): void
    (e: 'column-edit', column: ColumnDefinition): void
    (e: 'column-drag-start', params: any): void
    (e: 'column-drag-end', params: any): void
    (e: 'column-drag-enter', groupId: string, params: any): void
    (e: 'column-drag-leave', groupId: string, params: any): void
    (e: 'edit-group', group: ColumnGroupDefinition): void
    (e: 'delete-group', group: ColumnGroupDefinition): void
}

const props = withDefaults(defineProps<Props>(), {
    defaultGroupColor: '#e7e5e4',
})
const emit = defineEmits<Emits>()

// Get context for drag state management
const context = useColumnManagerContext()
const draggedOverGroupId = context.draggedOverGroupId
const setDraggedOverGroupId = context.setDraggedOverGroupId
const showColumnPicker = ref(false)
const isDraggingColumn = context.isDraggingColumn

// Computed property to check if this group is being dragged over
const isBeingDraggedOver = computed(() => {
    return (
        isDraggingColumn?.value && draggedOverGroupId?.value === props.group.id
    )
})

// Drag event handlers for the group container
const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
    }

    // Only set dragged over state if we're actually dragging a column
    if (isDraggingColumn?.value && setDraggedOverGroupId) {
        setDraggedOverGroupId(props.group.id)
    }
}

const handleDragLeave = (event: DragEvent) => {
    // Check if we're actually leaving the group container, not just moving to a child element
    const target = event.currentTarget as HTMLElement
    const relatedTarget = event.relatedTarget as HTMLElement

    if (target && relatedTarget && !target.contains(relatedTarget)) {
        if (setDraggedOverGroupId) {
            setDraggedOverGroupId(null)
        }
    }
}

const handleDrop = (event: DragEvent) => {
    // Clear the dragged over state
    if (setDraggedOverGroupId) {
        setDraggedOverGroupId(null)
    }

    // The actual drop handling is done by the Sortable component
    // This is just for cleanup
}

const onGroupUpdate = (group: ColumnGroupDefinition) => {
    emit('group-update', group)
}

const onColumnAdd = (groupId: string, column: ColumnDefinition) => {
    emit('column-add', groupId, column)
    showColumnPicker.value = false
}

const onColumnAdded = (params: any) => {
    emit('column-added', params)
}

const onColumnRemoved = (params: any) => {
    emit('column-removed', params)
}

const onColumnReordered = (params: any) => {
    emit('column-reordered', params)
}

const onColumnEdit = (column: ColumnDefinition) => {
    emit('column-edit', column)
}

const onColumnDragStart = (params: any) => {
    emit('column-drag-start', params)
}

const onColumnDragEnd = (params: any) => {
    emit('column-drag-end', params)
}

const onColumnDragEnter = (groupId: string, params: any) => {
    emit('column-drag-enter', groupId, params)
}

const onColumnDragLeave = (groupId: string, params: any) => {
    emit('column-drag-leave', groupId, params)
}

const onEditGroup = (group: ColumnGroupDefinition) => {
    emit('edit-group', group)
}

const onDeleteGroup = (group: ColumnGroupDefinition) => {
    emit('delete-group', group)
}
</script>
