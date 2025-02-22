<template>
    <div class="flex items-center text-[13px]">
        <span
            class="grow cursor-pointer"
            :id="labelledBy"
            @click="checked = !checked"
        >
            <slot></slot>
        </span>
        <button
            type="button"
            :class="
                m(
                    'relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-solid border-transparent bg-zinc-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-hidden aria-checked:bg-zinc-800',
                    classes,
                    componentJarTheme.themeParams.inputSwitch
                )
            "
            role="switch"
            :aria-checked="checked"
            :aria-labelledby="labelledBy"
            @click="checked = !checked"
        >
            <span
                aria-hidden="true"
                :aria-checked="checked"
                :class="
                    m(
                        'pointer-events-none inline-block h-4 w-4 translate-x-0 transform rounded-full bg-white ring-0 shadow-xs transition duration-200 ease-in-out aria-checked:translate-x-4'
                    )
                "
            ></span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { m } from '../utils'
import { computed, watch } from 'vue'
import { useThemeConfigurator } from '../composables'

interface Props {
    classes?: string[]
    labelledBy?: string
    modelValue: boolean
}

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
    classes: () => [],
    labelledBy: '',
    modelValue: false,
})

const { componentJarTheme } = useThemeConfigurator()

const checked = computed<boolean>({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue),
})

watch(
    () => checked.value,
    () => {
        emit('update:modelValue', checked.value)
    }
)
</script>
