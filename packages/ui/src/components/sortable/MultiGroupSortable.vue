<template>
    <div class="multi-group-sortable">
        <slot name="header"></slot>

        <div class="sortable-groups">
            <div
                v-for="group in groups"
                :key="group.id"
                class="sortable-group-container"
            >
                <div class="group-header">
                    <slot name="group-header" :group="group">
                        <h3>{{ group.title }}</h3>
                    </slot>
                </div>

                <div
                    class="sortable-drop-zone"
                    :class="{
                        'drag-over': isDragOver && draggedGroupId !== group.id,
                    }"
                    @drop="event => handleDrop(group.id, event)"
                    @dragover="handleDragOver"
                    @dragleave="handleDragLeave"
                >
                    <Sortable
                        :items="group.items"
                        :group-id="group.id"
                        :shared-group="sharedGroupId"
                        :disabled="disabled"
                        @update:items="
                            items => updateGroupItems(group.id, items)
                        "
                        @drag-start="handleDragStart"
                        @drag-end="handleDragEnd"
                        @item-moved="handleItemMoved"
                        @cross-group-drag="handleCrossGroupDrag"
                    >
                        <template #item="slotProps">
                            <slot
                                name="item"
                                v-bind="slotProps"
                                :group="group"
                            />
                        </template>
                    </Sortable>

                    <!-- Empty state when group has no items -->
                    <div
                        v-if="group.items.length === 0"
                        class="empty-state"
                        :class="{
                            'drag-over':
                                isDragOver && draggedGroupId !== group.id,
                        }"
                    >
                        <slot name="empty-state" :group="group">
                            <div class="empty-content">
                                <div class="empty-icon">📁</div>
                                <p>Drop items here</p>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Sortable from './Sortable.vue'

interface SortableGroup {
    id: string
    title: string
    items: any[]
}

interface Props {
    groups: SortableGroup[]
    disabled?: boolean
    sharedGroupId?: string
}

interface Emits {
    (e: 'update:groups', groups: SortableGroup[]): void
    (
        e: 'item-moved',
        payload: {
            item: any
            fromGroup: string
            toGroup: string
            fromIndex: number
            toIndex: number
        }
    ): void
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    sharedGroupId: 'shared-sortable-group',
})

const emit = defineEmits<Emits>()

const isDragOver = ref(false)
const draggedGroupId = ref<string>('')

const updateGroupItems = (groupId: string, items: any[]) => {
    const updatedGroups = props.groups.map(group =>
        group.id === groupId ? { ...group, items } : group
    )
    emit('update:groups', updatedGroups)
}

const handleDragStart = (payload: {
    item: any
    groupId: string
    index: number
}) => {
    draggedGroupId.value = payload.groupId
}

const handleDragEnd = () => {
    draggedGroupId.value = ''
    isDragOver.value = false
}

const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
    isDragOver.value = true
}

const handleDragLeave = (event: DragEvent) => {
    // Only set drag over to false if we're leaving the drop zone entirely
    const target = event.target as HTMLElement
    if (!target.closest('.sortable-drop-zone')) {
        isDragOver.value = false
    }
}

const handleDrop = (targetGroupId: string, event: DragEvent) => {
    event.preventDefault()
    isDragOver.value = false

    if (draggedGroupId.value === targetGroupId) {
        return // Same group, let Motion Vue handle it
    }

    // Try to get drag data from the event
    let dragData = null
    try {
        const dataTransfer = event.dataTransfer
        if (dataTransfer && dataTransfer.types.includes('application/json')) {
            const jsonData = dataTransfer.getData('application/json')
            dragData = JSON.parse(jsonData)
        }
    } catch (error) {
        console.warn('Failed to parse drag data:', error)
    }

    if (!dragData || dragData.sourceGroupId === targetGroupId) {
        return
    }

    // Handle cross-group movement
    const sourceGroup = props.groups.find(g => g.id === dragData.sourceGroupId)
    const targetGroup = props.groups.find(g => g.id === targetGroupId)

    if (!sourceGroup || !targetGroup) return

    const sourceItems = sourceGroup.items.filter(
        (_, index) => index !== dragData.sourceIndex
    )
    const targetItems = [...targetGroup.items, dragData.item]

    // Update both groups
    const updatedGroups = props.groups.map(group => {
        if (group.id === dragData.sourceGroupId) {
            return { ...group, items: sourceItems }
        }
        if (group.id === targetGroupId) {
            return { ...group, items: targetItems }
        }
        return group
    })

    emit('update:groups', updatedGroups)
    emit('item-moved', {
        item: dragData.item,
        fromGroup: dragData.sourceGroupId,
        toGroup: targetGroupId,
        fromIndex: dragData.sourceIndex,
        toIndex: targetGroup.items.length,
    })
}

const handleItemMoved = (payload: any) => {
    emit('item-moved', payload)
}

const handleCrossGroupDrag = (payload: any) => {
    // This event is emitted when a cross-group drop is detected
    // The actual handling is done in handleDrop
    console.log('Cross-group drag detected:', payload)
}
</script>

<style scoped>
.multi-group-sortable {
    width: 100%;
}

.sortable-groups {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 600px;
    margin: 0 auto;
}

.sortable-group-container {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
}

.group-header {
    background-color: #f9fafb;
    padding: 12px 16px;
    border-bottom: 1px solid #e5e7eb;
}

.group-header h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #374151;
}

.sortable-drop-zone {
    min-height: 100px;
    padding: 8px;
    background-color: #ffffff;
    transition: all 0.2s ease;
    border: 2px dashed transparent;
}

.sortable-drop-zone.drag-over {
    background-color: #f0f9ff;
    border: 2px dashed #3b82f6;
}

.empty-state {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    border: 2px dashed #d1d5db;
    border-radius: 6px;
    background-color: #f9fafb;
    transition: all 0.2s ease;
}

.empty-state.drag-over {
    background-color: #f0f9ff;
    border-color: #3b82f6;
}

.empty-content {
    text-align: center;
    color: #6b7280;
}

.empty-icon {
    font-size: 24px;
    margin-bottom: 8px;
}

.empty-content p {
    margin: 0;
    font-size: 14px;
}

@media (max-width: 768px) {
    .sortable-groups {
        gap: 16px;
    }

    .group-header {
        padding: 10px 12px;
    }

    .sortable-drop-zone {
        padding: 6px;
    }
}
</style>
