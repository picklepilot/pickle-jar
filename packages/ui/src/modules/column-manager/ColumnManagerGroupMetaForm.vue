<template>
    <Popover
        v-if="!disabled.includes('groups') && !!groupMeta"
        ref="popover"
        :theme="{
            popoverMenu: 'leading-none',
            popoverMenuButton:
                'rounded-md size-6 flex items-center justify-center hover:bg-zinc-100',
        }"
    >
        <template #trigger>
            <span
                class="block h-3 w-3 rounded-full"
                :style="`background-color: ${groupMeta.color || defaultGroupColor};`"
            ></span>
        </template>

        <template #default="{ close }">
            <div class="flex flex-col space-y-4">
                <div class="space-y-2">
                    <div class="block text-sm font-medium text-foreground">
                        Group name
                    </div>
                    <Input
                        v-model="groupMeta.name"
                        type="text"
                        :placeholder="`${groupMeta.name}`"
                        :theme="{
                            input: 'py-1.5',
                        }"
                    />
                </div>
                <div class="space-y-2">
                    <div class="block text-sm font-medium text-foreground">
                        Group color
                    </div>
                    <ColorPicker
                        :model-value="groupMeta.color"
                        @update:model-value="groupMeta.color = $event"
                    />
                </div>
                <div class="flex justify-end">
                    <Button
                        @click="onUpdateGroupMeta(close)"
                        size="sm"
                        variant="outline"
                    >
                        Save
                    </Button>
                </div>
            </div>
        </template>
    </Popover>
</template>

<script setup lang="ts">
import { type ColumnGroupDefinition } from '@/types/ColumnGroupDefinition'
import { ref, watch } from 'vue'
import Input from '@/components/input/Input.vue'
import ColorPicker from '@/components/color-picker/ColorPicker.vue'
import Popover from '@/components/popover/Popover.vue'
import Button from '@/components/button/Button.vue'

const props = defineProps<{
    defaultGroupColor: string
    disabled: string[]
    modelValue: ColumnGroupDefinition
    groupId: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: ColumnGroupDefinition): void
    (e: 'update', groupId: string): void
}>()

const isOpen = ref(false)
const groupMeta = ref<ColumnGroupDefinition>({
    ...props.modelValue,
    id: props.groupId,
})

const popover = ref<InstanceType<typeof Popover>>()

watch(
    () => props.modelValue,
    newValue => {
        groupMeta.value = {
            ...newValue,
            id: props.groupId,
        }
    },
    { deep: true }
)

const onUpdateGroupMeta = (closeFn: () => void) => {
    closeFn()
    const updatedMeta = {
        ...groupMeta.value,
        id: props.groupId,
    }
    emit('update:modelValue', updatedMeta)
    emit('update', props.groupId)
}
</script>
