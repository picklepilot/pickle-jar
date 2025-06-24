<template>
    <div
        class="sticky bottom-0 z-2 flex items-center gap-2 p-3 bg-background/90 backdrop-blur-sm"
    >
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <span v-show="addingNewGroup" class="flex -space-x-px">
                <Input
                    id="column-manager-new-group-name"
                    name="column-manager-new-group-name"
                    placeholder="New group name"
                    v-model="newGroupName"
                    @keyup.enter="addGroup"
                    :theme="{
                        input: 'w-full py-1.5',
                    }"
                    type="text"
                />
            </span>
        </transition>
        <Button
            @click="addingNewGroup = !addingNewGroup"
            size="sm"
            variant="outline"
        >
            {{ addingNewGroup ? 'Cancel' : 'Add a group' }}
        </Button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../../../components/button/Button.vue'
import Input from '../../../components/input/Input.vue'
import type { ColumnGroupDefinition } from '../../../types'

interface Emits {
    (e: 'group-add', group: Partial<ColumnGroupDefinition>): void
}

const emit = defineEmits<Emits>()

const addingNewGroup = ref(false)
const newGroupName = ref('')

const addGroup = () => {
    if (newGroupName.value.trim()) {
        emit('group-add', {
            name: newGroupName.value.trim(),
            color: '#e7e5e4',
        })
        newGroupName.value = ''
        addingNewGroup.value = false
    }
}
</script>
