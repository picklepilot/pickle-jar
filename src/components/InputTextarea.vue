<template>
    <div
        :id="`input-textarea-${id}-container`"
        :class="
            m(
                'block h-full w-full overflow-hidden rounded-md border border-solid border-zinc-300/80 text-sm text-zinc-900 ring-[3px] ring-transparent placeholder:text-zinc-400 focus-within:border-zinc-500 focus-within:ring-[3px] focus-within:ring-zinc-200/60',
                ...classes
            )
        "
    >
        <textarea
            v-model="effectiveValue"
            :id="id"
            :name="name"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            :rows="rows"
            :class="[
                'h-full w-full bg-transparent px-3 py-2.5',
                ...inputClasses,
            ]"
            :readonly="readonly"
            @blur="$emit('blur', $event)"
            @focus="$emit('focus', $event)"
        />
    </div>
</template>

<script setup lang="ts">
import { m } from '../utils'
import { ref, watch } from 'vue'

interface Props {
    autocomplete?: string
    classes?: string[]
    id?: string
    inputClasses?: string[]
    modelValue: string | null
    name: string
    placeholder?: string
    readonly?: boolean
    rows?: string | number
}

const emit = defineEmits(['blur', 'focus', 'update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
    autocomplete: 'off',
    classes: () => [],
    inputClasses: () => [],
    modelValue: '',
    name: '',
    placeholder: '',
    readonly: false,
    rows: 3,
})

const effectiveValue = ref(props.modelValue)

watch(
    () => props.modelValue,
    () => {
        effectiveValue.value = props.modelValue
    },
    { immediate: true }
)

watch(
    () => effectiveValue.value,
    () => {
        emit('update:modelValue', effectiveValue.value)
    }
)
</script>
