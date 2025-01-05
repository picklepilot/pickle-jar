<template>
    <input
        type="text"
        v-model="effectiveValue"
        :name="name"
        :placeholder="placeholder"
        :class="
            m(
                'block w-full rounded-md border border-solid border-zinc-300/80 px-3 py-2.5 text-sm leading-none text-zinc-900 ring-[3px] ring-transparent placeholder:text-zinc-400 focus-within:border-zinc-500 focus-within:ring-[3px] focus-within:ring-zinc-200/60',
                ...classes
            )
        "
        @blur="$emit('blur', $event)"
        @keyup.enter="$emit('enter', $event)"
        @focus="$emit('focus', $event)"
    />
</template>

<script setup lang="ts">
import { m } from '../utils'
import { ref, watch } from 'vue'

interface Props {
    classes?: string[]
    modelValue: string | null
    name: string
    placeholder?: string
}

const emit = defineEmits(['blur', 'enter', 'focus', 'update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
    classes: () => [],
    modelValue: '',
    name: '',
    placeholder: '',
})

const effectiveValue = ref(props.modelValue || '')

watch(
    () => props.modelValue,
    () => {
        effectiveValue.value = props.modelValue || ''
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
