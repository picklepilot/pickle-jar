export { default as Sortable } from './Sortable.vue'
export { default as MultiGroupSortable } from './MultiGroupSortable.vue'
export { default as SortableDemo } from './demo.vue'

// Export types for external use
export interface SortableItem {
    id?: string | number
    label?: string
    [key: string]: any
}

export interface SortableGroup {
    id: string
    title: string
    items: SortableItem[]
}

export interface SortableItemSlotProps {
    item: SortableItem
    index: number
    isDragging: boolean
    isDropTarget: boolean
}

export interface MultiGroupSortableItemSlotProps extends SortableItemSlotProps {
    group: SortableGroup
}

export interface SortableProps {
    items: SortableItem[]
    groupId: string
    disabled?: boolean
    sharedGroup?: string
}

export interface SortableEmits {
    'update:items': (items: SortableItem[]) => void
    'item-moved': (payload: {
        item: SortableItem
        fromGroup: string
        toGroup: string
        fromIndex: number
        toIndex: number
    }) => void
    'drag-start': (payload: {
        item: SortableItem
        groupId: string
        index: number
    }) => void
    'drag-end': (payload: {
        item: SortableItem
        groupId: string
        index: number
    }) => void
}

export interface MultiGroupSortableProps {
    groups: SortableGroup[]
    disabled?: boolean
    sharedGroupId?: string
}

export interface MultiGroupSortableEmits {
    'update:groups': (groups: SortableGroup[]) => void
    'item-moved': (payload: {
        item: SortableItem
        fromGroup: string
        toGroup: string
        fromIndex: number
        toIndex: number
    }) => void
}
