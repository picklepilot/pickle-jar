<template>
    <div class="flex min-w-px grow items-center space-x-2 text-base pl-1 pr-2">
        <!-- Drag Handle -->
        <slot name="drag-handle" />

        <!-- Group Meta Form -->
        <ColumnManagerGroupMetaForm
            v-model="groupData"
            :default-group-color="defaultGroupColor"
            :disabled="disabled"
            :group-id="group.id"
            @update="onGroupUpdate"
        />

        <!-- Group Name Display -->
        <span class="font-semibold grow">
            {{ groupData.name }}
        </span>

        <Dropdown>
            <DropdownTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    class="size-6 text-muted-foreground p-0"
                >
                    <ChevronDown class="size-3.5" />
                </Button>
            </DropdownTrigger>
            <DropdownContent class="w-40" side="bottom" align="end">
                <!-- Custom dropdown content slot -->
                <slot
                    name="dropdown-content"
                    :group="group"
                    :group-data="groupData"
                    :emit="emit"
                >
                    <!-- Default dropdown items (only if no custom content provided) -->
                    <DropdownItem @select="emit('add-column')">
                        Add column
                    </DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem @select="emit('edit-group', groupData)">
                        Edit group
                    </DropdownItem>
                    <DropdownItem @select="emit('delete-group', groupData)">
                        Delete group
                    </DropdownItem>
                </slot>
            </DropdownContent>
        </Dropdown>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ColumnManagerGroupMetaForm from '../ColumnManagerGroupMetaForm.vue'
import type { ColumnGroupDefinition } from '../../../types'
import { useColumnManagerContext } from '../composables/useColumnManagerContext'
import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    DropdownSeparator,
} from '../../../components/dropdown'
import { Button } from '../../../components/button/Button'
import { ChevronDown } from 'lucide-vue-next'

interface Props {
    group: ColumnGroupDefinition
    defaultGroupColor?: string
}

export interface Emits {
    (e: 'group-update', group: ColumnGroupDefinition): void
    (e: 'add-column'): void
    (e: 'edit-group', group: ColumnGroupDefinition): void
    (e: 'delete-group', group: ColumnGroupDefinition): void
}

const props = withDefaults(defineProps<Props>(), {
    defaultGroupColor: '#e7e5e4',
})
const emit = defineEmits<Emits>()

const context = useColumnManagerContext()
const disabled = context.disabled || []

const groupData = ref<ColumnGroupDefinition>({ ...props.group })

watch(
    () => props.group,
    newGroup => {
        groupData.value = { ...newGroup }
    },
    { deep: true }
)

const onGroupUpdate = (groupId: string) => {
    emit('group-update', groupData.value)
}
</script>
