<template>
    <div class="flex items-center gap-2">
        <!-- <Combobox
            v-if="showLogicalOperator"
            :model-value="logicalOperator"
            :items="logicalOperatorOptions"
            :display-property="item => item.label"
            placeholder="AND/OR"
            class="self-start w-18 shrink-0"
        /> -->

        <!-- <QueryBuilderLogicSwitch
            v-if="showLogicalOperator"
            v-model="logicalOrOperator"
        /> -->

        <Typeahead
            v-model="field"
            :default-items="availableFields"
            :displayProperty="displayFieldLabel"
            placeholder="Select a field..."
            class="self-start w-64 shrink-0"
            :nullable="true"
            :theme="{
                baseDropdownInputText: '',
            }"
        />

        <Combobox
            v-model="operator"
            :items="operatorOptions"
            :display-property="item => item.label"
            placeholder="Select operator..."
            class="self-start w-32 shrink-0"
        />

        <Combobox
            v-model="comparison"
            :items="comparisonOptions"
            :display-property="item => item.label"
            placeholder="Select comparison..."
            class="self-start w-32 shrink-0"
        />

        <Combobox
            v-model="value"
            :items="field?.defaultValuesGetter()"
            :display-property="displayValueLabel"
            :disabled-items="disabledItems"
            placeholder="Select values..."
            class="self-start grow min-w-64"
            :multiple="true"
            :nullable="true"
        />

        <Button
            v-if="showRemove"
            @click="$emit('remove')"
            class="text-destructive hover:bg-destructive/80 hover:text-white rounded shrink-0"
            variant="ghost"
            size="xs"
        >
            <X class="size-4" />
        </Button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { X } from 'lucide-vue-next'
import Typeahead from '@/components/typeahead/Typeahead.vue'
import Combobox from '@/components/combobox/Combobox.vue'
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
    value: QueryValue[] | null
    logicalOrOperator: boolean
}

const props = defineProps<{
    modelValue: QueryCondition
    availableFields: QueryField[]
    showRemove?: boolean
    showLogicalOperator?: boolean
}>()

const emit = defineEmits(['update:modelValue', 'remove'])

const displayFieldLabel = (item: QueryField) => item?.label
const displayValueLabel = (item: QueryValue) => item?.label

const field = computed({
    get: () => props.modelValue.field,
    set: (value: any) => {
        // If value is an object with id, extract the id and find the full field object
        if (value && typeof value === 'object' && 'id' in value) {
            const fieldObject = props.availableFields.find(
                f => f.id === value.id
            )
            emit('update:modelValue', {
                ...props.modelValue,
                field: fieldObject || null,
            })
        } else {
            emit('update:modelValue', { ...props.modelValue, field: value })
        }
    },
})

const operator = computed({
    get: () => operatorOptions.find(o => o.id === props.modelValue.operator),
    set: (value: any) => {
        // If value is an object with id, extract the id
        const operatorValue =
            value && typeof value === 'object' && 'id' in value
                ? value.id
                : value
        emit('update:modelValue', {
            ...props.modelValue,
            operator: operatorValue,
        })
    },
})

const comparison = computed({
    get: () =>
        comparisonOptions.find(c => c.id === props.modelValue.comparison),
    set: (value: any) => {
        // If value is an object with id, extract the id
        const comparisonValue =
            value && typeof value === 'object' && 'id' in value
                ? value.id
                : value
        emit('update:modelValue', {
            ...props.modelValue,
            comparison: comparisonValue,
        })
    },
})

const value = computed({
    get: () => props.modelValue.value,
    set: value => emit('update:modelValue', { ...props.modelValue, value }),
})

const logicalOrOperator = computed({
    get: () => props.modelValue.logicalOrOperator,
    set: value =>
        emit('update:modelValue', {
            ...props.modelValue,
            logicalOrOperator: value,
        }),
})

const disabledItems = computed(() => {
    return [...(value.value || [])]
})

const fieldValues = computed(() => {
    if (!field.value)
        return [
            { id: 'value1', label: 'Value 1' },
            { id: 'value2', label: 'Value 2' },
            { id: 'value3', label: 'Value 3' },
        ]

    switch (field.value.type) {
        case 'boolean':
            return [
                { id: 'true', label: 'Yes' },
                { id: 'false', label: 'No' },
            ]
        case 'number':
            return [
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
            ]
        default:
            return [
                { id: 'value1', label: 'Value 1' },
                { id: 'value2', label: 'Value 2' },
                { id: 'value3', label: 'Value 3' },
            ]
    }
})

const logicalOperatorOptions = [
    { id: 'AND', label: 'AND' },
    { id: 'OR', label: 'OR' },
]
const operatorOptions = [
    { id: 'does', label: 'does' },
    { id: 'doesnt', label: "doesn't" },
]
const comparisonOptions = [
    { id: 'equal', label: 'equal' },
    { id: 'contain', label: 'contain' },
]
</script>
