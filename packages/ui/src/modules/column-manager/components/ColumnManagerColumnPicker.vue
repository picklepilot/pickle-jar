<template>
    <div class="group flex items-center space-x-2 py-1 px-2">
        <Typeahead
            class="grow"
            :default-items="availableColumns"
            :display-property="() => ''"
            :groups-config="typeaheadGroupsConfig"
            :group-by="typeaheadGroupBy"
            :multiple="false"
            :nullable="true"
            :searcher="searcher"
            :middleware-options="typeaheadMiddlewareOptions"
            :placeholder="'Add a column to group'"
            @update:model-value="onColumnSelected"
        >
            <template #empty>
                <EmptyState
                    icon="fa-exclamation-circle"
                    title="No columns found"
                >
                    <p>
                        There are no columns to show at this time. Try a
                        different search.
                    </p>
                </EmptyState>
            </template>

            <template #static>
                <div>
                    <slot name="typeahead-static" />
                </div>
            </template>

            <template v-if="$slots['typeahead-group']" #group="groupSlotProps">
                <slot name="typeahead-group" v-bind="groupSlotProps" />
            </template>

            <template v-if="$slots['typeahead-searching']" #searching>
                <div>
                    <slot name="typeahead-searching" />
                </div>
            </template>

            <template #item="{ item, selected, active }">
                <slot name="option" v-bind="{ item, selected, active }" />
            </template>
        </Typeahead>
        <Button
            variant="ghost"
            class="text-muted-foreground p-0 w-5 hover:bg-accent/40"
            @click="emit('close')"
        >
            <X class="size-4" />
        </Button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Typeahead from '../../../components/typeahead/Typeahead.vue'
import EmptyState from '../../../components/empty-state/EmptyState.vue'
import type { ColumnDefinition } from '../../../types/ColumnDefinition'
import { useColumnManagerContext } from '../composables/useColumnManagerContext'
import { X } from 'lucide-vue-next'
import { Button } from '../../../components/button/Button'

interface Props {
    groupId: string
    availableColumns: ColumnDefinition[]
}

interface Emits {
    (e: 'column-add', groupId: string, column: ColumnDefinition): void
    (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const context = useColumnManagerContext()

const searcher = context.searcher || (() => Promise.resolve([]))
const typeaheadGroupsConfig = ref({})
const typeaheadGroupBy = ref('')
const typeaheadMiddlewareOptions = ref({
    autoPlacement: {
        allowedPlacements: ['top-start', 'bottom-start'],
    },
    buffer: 20,
    size: {},
})

const onColumnSelected = (column: ColumnDefinition | null) => {
    if (column) {
        emit('column-add', props.groupId, column)
    }
}
</script>
