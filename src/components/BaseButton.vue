<template>
    <button
        @click="handleClick"
        :class="
            m(
                componentJarTheme.themeParams.baseButton,
                theme.baseButton,
                disabled && componentJarTheme.themeParams.baseButtonDisabled,
                disabled && theme.baseButtonDisabled,
                classes
            )
        "
    >
        <span v-if="processing" class="mr-2">
            <span v-if="$slots.processing">
                <slot name="processing"></slot>
            </span>
            <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="mi-solid mi-circle-notch animate-spin"
                viewBox="0 0 24 24"
            >
                <path
                    d="M16.79 4.66c-.37.5-.28 1.19.18 1.59a7.61 7.61 0 0 1 .48 11.05c-2.08 2.18-5.38 2.91-8.19 1.79a7.613 7.613 0 0 1-3.67-11.2 7.6 7.6 0 0 1 5.36-3.43c.59-.08 1.03-.57 1.03-1.17v-.04c0-.71-.63-1.27-1.33-1.18C5.69 2.75 1.86 7.08 2 12.28s4.49 9.57 9.71 9.71c5.65.16 10.28-4.38 10.28-10 0-2.92-1.29-5.67-3.49-7.54-.52-.44-1.32-.35-1.72.21Z"
                />
            </svg>
        </span>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { m, ThemeConfigurator } from '../utils'

const emit = defineEmits(['click'])

withDefaults(
    defineProps<{
        classes?: string[]
        disabled?: boolean
        processing?: boolean
        theme?: {
            baseButton?: string
            baseButtonDisabled?: string
        }
    }>(),
    {
        classes: () => [''],
        disabled: false,
        processing: false,
        theme: () => ({
            baseButton: '',
            baseButtonDisabled: '',
        }),
    }
)

function handleClick(evt: any) {
    evt.preventDefault()
    emit('click', evt)
}

const componentJarTheme = inject(
    'componentJarTheme'
) as unknown as ThemeConfigurator
</script>
