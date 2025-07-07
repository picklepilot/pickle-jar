<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
    items: any[]
    groupId: string
    disabled?: boolean
    sharedGroup?: string // For cross-group dragging
}

interface Emits {
    (e: 'update:items', items: any[]): void
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
    (
        e: 'drag-start',
        payload: { item: any; groupId: string; index: number }
    ): void
    (
        e: 'drag-end',
        payload: { item: any; groupId: string; index: number }
    ): void
    (
        e: 'cross-group-drag',
        payload: { item: any; fromGroup: string; fromIndex: number }
    ): void
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    sharedGroup: undefined,
})

const emit = defineEmits<Emits>()

const localItems = ref([...props.items])
const isDragging = ref(false)
const draggedItem = ref<any>(null)
const draggedIndex = ref(-1)
const dropTargetIndex = ref(-1)
const dropProcessed = ref(false)

// Watch for external changes to items
watch(
    () => props.items,
    newItems => {
        localItems.value = [...newItems]
    },
    { deep: true }
)

const handleReorder = (newItems: any[]) => {
    localItems.value = newItems
    // Emit the update event
    emit('update:items', newItems)
}

const handleItemMove = (item: any, fromIndex: number, toIndex: number) => {
    emit('item-moved', {
        item,
        fromGroup: props.groupId,
        toGroup: props.groupId,
        fromIndex,
        toIndex,
    })
}

// Unified drag handling for both within-group and cross-group
const handleDragStart = (event: DragEvent, item: any, index: number) => {
    if (props.disabled) return

    event.stopPropagation()

    console.log('Drag start:', { item, index, groupId: props.groupId })

    isDragging.value = true
    draggedItem.value = item
    draggedIndex.value = index

    // Set drag data for cross-group operations
    if (event.dataTransfer) {
        const dragData = {
            item,
            sourceGroupId: props.groupId,
            sourceIndex: index,
        }
        event.dataTransfer.setData('application/json', JSON.stringify(dragData))
        event.dataTransfer.effectAllowed = 'move'
        console.log('Drag data set:', dragData)
    }

    emit('drag-start', { item, groupId: props.groupId, index })
}

const handleDragEnd = (event: DragEvent, item: any, index: number) => {
    console.log('Drag end:', {
        item,
        groupId: props.groupId,
        index,
        isDragging: isDragging.value,
    })

    // Clear drag state
    isDragging.value = false
    draggedItem.value = null
    draggedIndex.value = -1
    dropTargetIndex.value = -1
    dropProcessed.value = false

    emit('drag-end', { item, groupId: props.groupId, index })
}

// Handle drop events for both within-group and cross-group operations
const handleDrop = (event: DragEvent, targetIndex?: number) => {
    event.preventDefault()

    console.log('Drop event triggered:', {
        isDragging: isDragging.value,
        draggedItem: draggedItem.value,
        draggedIndex: draggedIndex.value,
        targetIndex,
        groupId: props.groupId,
    })

    // Check if this is a cross-group drop first
    const dragData = event.dataTransfer?.getData('application/json')
    let isCrossGroup = false

    if (dragData) {
        try {
            const data = JSON.parse(dragData)
            console.log('Drag data:', data)
            if (data.sourceGroupId !== props.groupId) {
                // This is a cross-group drop - emit event for parent to handle
                console.log('Cross-group drop detected')
                isCrossGroup = true
                emit('cross-group-drag', {
                    item: data.item,
                    fromGroup: data.sourceGroupId,
                    fromIndex: data.sourceIndex,
                })
                return // Exit early for cross-group drops
            }
        } catch (error) {
            console.warn('Failed to parse drag data:', error)
        }
    }

    // Handle within-group reordering
    if (!isDragging.value || !draggedItem.value) {
        console.log('No drag state or item - returning early')
        return
    }

    if (targetIndex !== undefined && targetIndex !== draggedIndex.value) {
        console.log('Within-group reorder:', {
            from: draggedIndex.value,
            to: targetIndex,
        })
        const newItems = [...localItems.value]
        const [removed] = newItems.splice(draggedIndex.value, 1)
        newItems.splice(targetIndex, 0, removed)
        localItems.value = newItems
        emit('update:items', newItems)

        emit('item-moved', {
            item: draggedItem.value,
            fromGroup: props.groupId,
            toGroup: props.groupId,
            fromIndex: draggedIndex.value,
            toIndex: targetIndex,
        })
    }
}

const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
    }
}

const handleItemDrop = (event: DragEvent, index: number) => {
    console.log(
        'Item drop at index:',
        index,
        'dragged from:',
        draggedIndex.value
    )
    handleDrop(event, index)
}

const handleItemDragOver = (event: DragEvent, index: number) => {
    event.preventDefault()
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
    }

    // Update drop target
    if (index !== draggedIndex.value) {
        dropTargetIndex.value = index
    }
}

const handleItemDragLeave = (event: DragEvent) => {
    const target = event.currentTarget as HTMLElement
    if (target) {
        target.style.opacity = '1'
    }
}

const handleGroupDragLeave = () => {
    dropTargetIndex.value = -1
}

const handleContainerDrop = (event: DragEvent) => {
    console.log('Container drop event')
    handleDrop(event)
}
</script>

<template>
    <div
        class="w-full rounded-lg relative transition-colors"
        :class="{
            'min-h-[100px]': localItems.length === 0,
            'ring-2 ring-primary/20 bg-primary/5':
                localItems.length === 0 && isDragging,
        }"
        :data-group-id="groupId"
        :data-shared-group="sharedGroup"
        @drop="event => handleContainerDrop(event)"
        @dragover="handleDragOver"
        @dragleave="handleGroupDragLeave"
    >
        <div class="flex flex-col">
            <div
                v-for="(item, index) in localItems"
                :key="`${groupId}-${item.id || item}`"
                class="cursor-grab select-none transition-all duration-200 ease-in-out relative"
                :class="{
                    'opacity-50 rotate-1 z-10 shadow-none':
                        isDragging && index === draggedIndex,
                    'translate-y-1':
                        false &&
                        isDragging &&
                        index === dropTargetIndex &&
                        index !== draggedIndex,
                }"
                draggable="true"
                @dragstart="
                    (event: DragEvent) => handleDragStart(event, item, index)
                "
                @dragend="
                    (event: DragEvent) => handleDragEnd(event, item, index)
                "
                @dragover="
                    (event: DragEvent) => handleItemDragOver(event, index)
                "
                @drop="(event: DragEvent) => handleItemDrop(event, index)"
                @dragleave="handleItemDragLeave"
            >
                <div
                    class="w-full rounded-md transition-all duration-200 ease-in-out flex items-center justify-between gap-3"
                    :class="{
                        'ring-1 ring-ring shadow-md shadow-ring':
                            isDragging && index === draggedIndex,
                        'ring-1 ring-accent shadow-md':
                            isDragging &&
                            index === dropTargetIndex &&
                            index !== draggedIndex,
                    }"
                >
                    <!-- Default item content -->
                    <template v-if="$slots.item">
                        <slot
                            name="item"
                            :item="item"
                            :index="index"
                            :is-dragging="isDragging && index === draggedIndex"
                            :is-drop-target="
                                isDragging &&
                                index === dropTargetIndex &&
                                index !== draggedIndex
                            "
                        />
                    </template>

                    <!-- Fallback to default item display -->
                    <template v-else>
                        <div class="">
                            <div class="flex-1 min-w-0">
                                {{ item.label || item }}
                            </div>
                            <div
                                class="text-muted-foreground text-sm font-bold opacity-60 transition-opacity duration-200 select-none"
                                :class="{
                                    'opacity-100 text-muted-foreground':
                                        isDragging && index === draggedIndex,
                                    'opacity-100 text-muted': !isDragging,
                                }"
                            >
                                ⋮⋮
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Component styles */
</style>
