import { provide, inject, type InjectionKey, type Ref } from 'vue'
import type { ColumnDefinition } from '../../../types/ColumnDefinition'

export interface ColumnManagerContext {
    theme?: Record<string, string>
    disabled?: string[]
    onColumnSelect?: (column: ColumnDefinition) => void
    searcher?: (query: string) => Promise<ColumnDefinition[]>
    defaultItems?: ColumnDefinition[]
    isDraggingColumn?: Ref<boolean>
    draggedOverGroupId?: Ref<string | null>
    setDraggedOverGroupId?: (groupId: string | null) => void
}

export const ColumnManagerContextKey: InjectionKey<ColumnManagerContext> =
    Symbol('ColumnManagerContext')

export function provideColumnManagerContext(context: ColumnManagerContext) {
    provide(ColumnManagerContextKey, context)
}

export function useColumnManagerContext(): ColumnManagerContext {
    const context = inject(ColumnManagerContextKey)
    if (!context) {
        throw new Error(
            'useColumnManagerContext must be used within a ColumnManager provider'
        )
    }
    return context
}
