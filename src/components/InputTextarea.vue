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
            :disabled="disabled"
            @blur="emit('blur-xs', $event)"
            @focus="emit('focus', $event)"
            @input="handleInput"
        />
    </div>
</template>

<script setup lang="ts">
import { m } from '../utils'
import { useDebouncedInput } from '../composables'

interface Props {
    autocomplete?: string
    classes?: string[]
    debounce?: number
    disabled?: boolean
    id?: string
    inputClasses?: string[]
    modelValue: string
    name: string
    placeholder?: string
    readonly?: boolean
    rows?: string | number
}

const emit = defineEmits(['blur-xs', 'focus', 'update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
    autocomplete: 'off',
    classes: () => [],
    debounce: 0,
    inputClasses: () => [],
    modelValue: '',
    name: '',
    placeholder: '',
    readonly: false,
    rows: 3,
})

// const { componentJarTheme } = useThemeConfigurator()

const { effectiveValue, handleInput } = useDebouncedInput(props, emit)
</script>
