<template>
    <div class="w-full">
        <QueryGroup
            v-model="rootGroup"
            :available-fields="props.availableFields"
            :is-root="true"
            @update:model-value="updateRootGroup"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import QueryGroup from './QueryGroup.vue'
import { v4 as uuidv4 } from 'uuid'

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
    logicalOperator?: 'AND' | 'OR' // @deprecated
    logicalOrOperator: boolean
}

interface QueryGroup {
    id: string
    conditions: QueryCondition[]
    nestedGroups?: QueryGroup[]
    logicalOperator?: 'AND' | 'OR' // @deprecated
    logicalOrOperator: boolean
}

const props = defineProps<{
    modelValue?: QueryGroup
    availableFields: QueryField[]
}>()

const emit = defineEmits(['update:modelValue'])

const rootGroup = ref<QueryGroup>(props.modelValue || createInitialGroup())

watch(
    rootGroup,
    newValue => {
        emit('update:modelValue', [newValue])
    },
    { deep: true }
)

function createInitialGroup(): QueryGroup {
    return {
        id: uuidv4(),
        conditions: [createInitialCondition()],
        nestedGroups: [],
        logicalOrOperator: false,
    }
}

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

function updateRootGroup(newValue: QueryGroup) {
    rootGroup.value = newValue
}

defineExpose({
    rootGroup,
})
</script>
