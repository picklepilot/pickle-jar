<template>
    <div
        class="group flex w-full hover:bg-accent/40 p-1 rounded-md items-center gap-2 [&.selected]:bg-accent/50"
        :data-sortable-item-id="column.id"
        @click="$emit('click', $event)"
    >
        <!-- Drag Handle -->
        <slot name="drag-handle">
            <Button
                variant="ghost"
                size="xs"
                icon
                class="drag-handle shrink-0 size-6 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5"
            >
                <GripHorizontal class="size-3.5 shrink-0" />
            </Button>
        </slot>

        <!-- Column Content -->
        <slot name="content" :column="column">
            <div class="flex-1 min-w-px flex text-sm">
                {{ column.name }}
            </div>
        </slot>

        <!-- Actions -->
        <div class="ml-auto flex items-center space-x-0.5">
            <slot
                name="actions"
                :column="column"
                :on-remove="onRemove"
                :on-edit="onEdit"
            >
                <Button
                    @click.prevent.stop="onRemove"
                    variant="ghost"
                    size="xs"
                    icon
                    class="shrink-0 size-6 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                >
                    <X class="size-3.5 shrink-0" />
                </Button>

                <Button
                    @click.prevent.stop="onEdit"
                    variant="ghost"
                    size="xs"
                    icon
                    class="shrink-0 size-6 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                >
                    <EllipsisVertical class="size-3.5 shrink-0" />
                </Button>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GripHorizontal, X, EllipsisVertical } from 'lucide-vue-next'
import Button from '../../../components/button/Button.vue'
import type { ColumnDefinition } from '../../../types/ColumnDefinition'

interface Props {
    column: ColumnDefinition
    index: number
}

interface Emits {
    (e: 'remove', columnId: string): void
    (e: 'edit', column: ColumnDefinition): void
    (e: 'click', event: Event): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const onRemove = () => {
    emit('remove', String(props.column.id))
}

const onEdit = () => {
    emit('edit', props.column)
}
</script>
