<template>
    <textarea
        :disabled="disabled"
        :placeholder="placeholder"
        :value="modelValue ?? value"
        @input="onInput"
        :class="
            m(
                'flex w-full rounded-md border border-ring bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50',
                theme?.textarea || ''
            )
        "
    />
</template>

<script setup lang="ts">
import { m } from '../../utils'

defineProps<{
    disabled?: boolean
    placeholder: string
    value?: string
    modelValue?: string
    theme?: {
        textarea?: string
    }
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'update:value', value: string): void
    (e: 'input', value: string): void
}>()

const onInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement
    emit('update:modelValue', target.value)
    emit('update:value', target.value)
    emit('input', target.value)
}
</script>
