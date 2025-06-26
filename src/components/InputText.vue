<template>
    <input
        type="text"
        :value="modelValue"
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
import { useThemeConfigurator } from '../composables'
import { defineModel, ref } from 'vue'

interface Props {
    classes?: string[]
    debounce?: number
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
    name: '',
    placeholder: '',
    theme: () => ({
        inputText: '',
    }),
})

const { componentJarTheme } = useThemeConfigurator()

const modelValue = defineModel<string>({ required: true })

// Simple debouncing logic
const timeoutId = ref<number>()

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value

    if (props.debounce > 0) {
        // Apply debouncing
        clearTimeout(timeoutId.value)
        timeoutId.value = setTimeout(() => {
            modelValue.value = value
        }, props.debounce) as unknown as number
    } else {
        // Update immediately
        modelValue.value = value
    }
}
</script>
