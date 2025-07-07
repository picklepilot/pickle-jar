<template>
    <div v-if="!draggingGroup" class="w-full relative">
        <Sortable
            :items="columns"
            :group-id="groupId"
            :shared-group="'shared-columns'"
            :disabled="false"
            class="relative z-2"
            @update:items="onColumnReordered"
            @item-moved="onColumnMoved"
            @cross-group-drag="onCrossGroupDrag"
            @drag-start="onDragStart"
            @drag-end="onDragEnd"
        >
            <template #item="{ item: column, index, isDragging, isDropTarget }">
                <ColumnManagerColumn
                    :column="column"
                    :index="index"
                    @remove="onColumnRemove"
                    @edit="onColumnEdit"
                >
                    <template #content="{ column }">
                        <slot name="column-content" :column="column" />
                    </template>

                    <template #actions="{ column, onRemove, onEdit }">
                        <slot
                            name="column-actions"
                            :column="column"
                            :on-remove="onRemove"
                            :on-edit="onEdit"
                        />
                    </template>
                </ColumnManagerColumn>
            </template>
        </Sortable>

        <!-- Empty state message below the droppable area -->
        <div
            v-if="columns.length === 0"
            class="absolute z-1 inset-0 p-3 text-center border border-dashed border-muted rounded-lg bg-muted/30 flex items-center justify-center"
        >
            <p class="text-sm text-muted-foreground">
                There are no columns here yet. Use the picker above to add the
                first column.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Sortable from '../../../components/sortable/Sortable.vue'
import ColumnManagerColumn from './ColumnManagerColumn.vue'
import type { ColumnDefinition } from '../../../types/ColumnDefinition'
import { useColumnManagerContext } from '../composables/useColumnManagerContext'

interface Props {
    columns: ColumnDefinition[]
    groupId: string
    draggingGroup: boolean
}

interface Emits {
    (e: 'column-add', params: any): void
    (e: 'column-remove', params: any): void
    (e: 'column-reordered', params: any): void
    (e: 'column-remove', columnId: string): void
    (e: 'column-edit', column: ColumnDefinition): void
    (e: 'column-click', column: ColumnDefinition): void
    (e: 'column-drag-start', params: any): void
    (e: 'column-drag-end', params: any): void
    (e: 'column-drag-enter', groupId: string, params: any): void
    (e: 'column-drag-leave', groupId: string, params: any): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Get drag state from context (not used in this component but keeping for future use)
const context = useColumnManagerContext()

const onColumnReordered = (newColumns: ColumnDefinition[]) => {
    emit('column-reordered', {
        groupId: props.groupId,
        newColumns,
    })
}

const onColumnMoved = (params: any) => {
    // This is for within-group reordering, emit as column-reordered
    emit('column-reordered', {
        groupId: props.groupId,
        newColumns: params.newColumns || params,
    })
}

const onCrossGroupDrag = (params: any) => {
    // Only emit if this is actually a cross-group drop, not just drag start
    if (params.fromGroup && params.fromGroup !== props.groupId) {
        const eventData = {
            fromGroup: params.fromGroup,
            fromIndex: params.fromIndex,
            item: params.item,
            toGroup: props.groupId,
        }
        emit('column-add', eventData)
    }
}

const onColumnRemove = (columnId: string) => {
    emit('column-remove', columnId)
}

const onColumnEdit = (column: ColumnDefinition) => {
    emit('column-edit', column)
}

const onColumnClick = (column: ColumnDefinition) => {
    emit('column-click', column)
}

// Drag event handlers
const onDragStart = () => {
    emit('column-drag-start', {})
}

const onDragEnd = () => {
    emit('column-drag-end', {})
}
</script>

<style scoped>
/* Component styles */
</style>
