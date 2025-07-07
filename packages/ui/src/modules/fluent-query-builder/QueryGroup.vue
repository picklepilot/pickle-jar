<template>
    <div class="relative group-container border rounded-lg p-4 mb-4">
        <!-- Logical Operator Selector -->
        <div class="flex items-center gap-2 mb-2">
            <QueryBuilderLogicSwitch v-model="logicalOrOperator" />
            <span v-if="!isRoot">
                <Button
                    variant="ghost"
                    size="sm"
                    @click="$emit('remove')"
                    class="text-destructive hover:text-destructive/80"
                >
                    <Trash2 class="size-4" />
                </Button>
            </span>
        </div>

        <!-- Conditions -->
        <div class="space-y-2">
            <QueryCondition
                v-for="(condition, conditionIndex) in conditions"
                :key="condition.id"
                v-model="conditions[conditionIndex]"
                :available-fields="availableFields"
                :show-remove="conditions.length > 1"
                @remove="removeCondition(conditionIndex)"
            />
        </div>

        <!-- Nested Groups -->
        <div v-if="modelValue.nestedGroups?.length" class="pl-6 mt-4 border-l">
            <QueryGroup
                v-for="(nestedGroup, nestedIndex) in modelValue.nestedGroups"
                :key="nestedGroup.id"
                v-model="modelValue.nestedGroups[nestedIndex]"
                :available-fields="availableFields"
                :is-root="false"
                @remove="removeNestedGroup(nestedIndex)"
            />
        </div>

        <!-- Actions -->
        <div class="flex gap-2 mt-4">
            <Button variant="outline" size="sm" @click="addCondition"
                >Add Condition</Button
            >
            <Button variant="outline" size="sm" @click="addNestedGroup"
                >Add Group</Button
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Trash2 } from 'lucide-vue-next'
import QueryCondition from './QueryCondition.vue'
import { v4 as uuidv4 } from 'uuid'
import Button from '@/components/button/Button.vue'
import QueryBuilderLogicSwitch from './QueryBuilderLogicSwitch.vue'

interface QueryField {
    id: string
    label: string
    type: 'string' | 'number' | 'boolean' | 'date'
    display: string
    defaultValuesGetter: () => QueryValue[]
    valuesSearcher: (
        query: string,
        controller?: AbortController
    ) => Promise<QueryValue[]>
}

interface QueryValue {
    id: string
    label: string
}

interface QueryCondition {
    id: string
    field: QueryField | null
    operator: 'does' | 'doesnt'
    comparison: 'equal' | 'contain'
    value: any[] | null
    logicalOperator?: 'AND' | 'OR'
    logicalOrOperator: boolean
}

interface QueryGroup {
    id: string
    conditions: QueryCondition[]
    nestedGroups?: QueryGroup[]
    logicalOrOperator: boolean
}

const props = defineProps<{
    modelValue: QueryGroup
    availableFields: QueryField[]
    isRoot?: boolean
}>()

const emit = defineEmits(['update:modelValue', 'remove'])

const conditions = computed({
    get: () => props.modelValue.conditions,
    set: value =>
        emit('update:modelValue', { ...props.modelValue, conditions: value }),
})

const logicalOrOperator = computed({
    get: () => props.modelValue.logicalOrOperator,
    set: value =>
        emit('update:modelValue', {
            ...props.modelValue,
            logicalOrOperator: value,
        }),
})

function createInitialCondition(): QueryCondition {
    return {
        id: uuidv4(),
        field: null,
        operator: 'does',
        comparison: 'equal',
        value: [],
        logicalOperator: 'AND',
        logicalOrOperator: false,
    }
}

function addCondition() {
    conditions.value.push(createInitialCondition())
}

function removeCondition(index: number) {
    if (conditions.value.length > 1) {
        conditions.value.splice(index, 1)
    }
}

function addNestedGroup() {
    const newGroup: QueryGroup = {
        id: uuidv4(),
        conditions: [createInitialCondition()],
        nestedGroups: [],
        logicalOrOperator: false,
    }
    if (!props.modelValue.nestedGroups) {
        emit('update:modelValue', {
            ...props.modelValue,
            nestedGroups: [newGroup],
        })
    } else {
        emit('update:modelValue', {
            ...props.modelValue,
            nestedGroups: [...props.modelValue.nestedGroups, newGroup],
        })
    }
}

function removeNestedGroup(index: number) {
    if (!props.modelValue.nestedGroups) return
    const newGroups = props.modelValue.nestedGroups.filter(
        (_, i) => i !== index
    )
    emit('update:modelValue', { ...props.modelValue, nestedGroups: newGroups })
}
</script>
