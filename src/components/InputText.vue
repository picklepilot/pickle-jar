<template>
    <input
        type="text"
        v-model="effectiveValue"
        :name="name"
        :placeholder="placeholder"
        :class="
            m(
                'block w-full rounded-md border border-solid border-zinc-300/80 px-3 py-2.5 text-sm leading-none text-zinc-900 ring-[3px] ring-transparent placeholder:text-zinc-400 focus-within:border-zinc-500 focus-within:ring-[3px] focus-within:ring-zinc-200/60',
                ...classes,
                componentJarTheme.themeParams.inputText,
                theme.inputText
            )
        "
        @blur="$emit('blur-xs', $event)"
        @keyup.enter="$emit('enter', $event)"
        @focus="$emit('focus', $event)"
        @input="handleInput"
    />
</template>

<script setup lang="ts">
import { m } from '../utils'
import { useDebouncedInput, useThemeConfigurator } from '../composables'

interface Props {
    classes?: string[]
    debounce?: number
    modelValue: string
    name: string
    placeholder?: string
    theme?: {
        inputText?: string
    }
}

const emit = defineEmits(['blur-xs', 'enter', 'focus', 'update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
    classes: () => [],
    debounce: 0,
    modelValue: '',
    name: '',
    placeholder: '',
    theme: () => ({
        inputText: '',
    }),
})

const { componentJarTheme } = useThemeConfigurator()

const { effectiveValue, handleInput } = useDebouncedInput(props, emit)
</script>
