<template>
    <div>
        <div class="w-full space-y-3">
            <div
                v-for="(colors, color) in tailwindColorDefs"
                :key="`color-${color}`"
                class="flex w-full items-center space-x-3"
            >
                <div
                    v-for="swatch in colors"
                    :key="`${color}-${swatch.name}`"
                    :class="
                        clsx(
                            'flex h-6 w-6 items-center justify-center rounded-full text-xs text-gray-800',
                            'hover:ring-[1.5px] hover:ring-zinc-600 hover:ring-offset-2',
                            swatch.background,
                            swatch.text,
                            {
                                'ring-[1.5px] ring-zinc-900 ring-offset-2':
                                    props.modelValue === swatch.hex,
                            }
                        )
                    "
                    @click="$emit('update:modelValue', swatch.hex)"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import clsx from 'clsx'
import { ref, watch } from 'vue'

interface Props {
    /**
     * A hex color string value
     * @example '#f0fdf4'
     *
     * @default ''
     * @type {string}
     */
    modelValue: string
}

const props = withDefaults(defineProps<Props>(), {})

const tailwindColorDefs = ref({
    green: [
        {
            name: 'green-50',
            background: 'bg-green-50',
            text: 'text-green-800',
            ring: 'ring-green-50',
            hex: '#f0fdf4',
        },
        {
            name: 'green-100',
            background: 'bg-green-100',
            text: 'text-green-800',
            hex: '#dcfce7',
        },
        {
            name: 'green-200',
            background: 'bg-green-200',
            text: 'text-green-800',
            hex: '#bbf7d0',
        },
        {
            name: 'green-300',
            background: 'bg-green-300',
            text: 'text-green-800',
            hex: '#86efac',
        },
        {
            name: 'green-400',
            background: 'bg-green-400',
            text: 'text-green-800',
            hex: '#4ade80',
        },
        {
            name: 'green-500',
            background: 'bg-green-500',
            text: 'text-green-800',
            hex: '#22c55e',
        },
        {
            name: 'green-600',
            background: 'bg-green-600',
            text: 'text-green-200',
            hex: '#16a34a',
        },
        {
            name: 'green-700',
            background: 'bg-green-700',
            text: 'text-green-200',
            hex: '#15803d',
        },
        {
            name: 'green-800',
            background: 'bg-green-800',
            text: 'text-green-200',
            hex: '#166534',
        },
        {
            name: 'green-900',
            background: 'bg-green-900',
            text: 'text-green-200',
            hex: '#14532d',
        },
    ],

    blue: [
        {
            name: 'blue-50',
            background: 'bg-blue-50',
            text: 'text-blue-800',
            hex: '#eff6ff',
        },
        {
            name: 'blue-100',
            background: 'bg-blue-100',
            text: 'text-blue-800',
            hex: '#dbeafe',
        },
        {
            name: 'blue-200',
            background: 'bg-blue-200',
            text: 'text-blue-800',
            hex: '#bfdbfe',
        },
        {
            name: 'blue-300',
            background: 'bg-blue-300',
            text: 'text-blue-800',
            hex: '#93c5fd',
        },
        {
            name: 'blue-400',
            background: 'bg-blue-400',
            text: 'text-blue-800',
            hex: '#60a5fa',
        },
        {
            name: 'blue-500',
            background: 'bg-blue-500',
            text: 'text-blue-800',
            hex: '#3b82f6',
        },
        {
            name: 'blue-600',
            background: 'bg-blue-600',
            text: 'text-blue-200',
            hex: '#2563eb',
        },
        {
            name: 'blue-700',
            background: 'bg-blue-700',
            text: 'text-blue-200',
            hex: '#1d4ed8',
        },
        {
            name: 'blue-800',
            background: 'bg-blue-800',
            text: 'text-blue-200',
            hex: '#1e40af',
        },
        {
            name: 'blue-900',
            background: 'bg-blue-900',
            text: 'text-blue-200',
            hex: '#1e3a8a',
        },
    ],

    yellow: [
        {
            name: 'yellow-50',
            background: 'bg-yellow-50',
            text: 'text-yellow-800',
            hex: '#fefce8',
        },
        {
            name: 'yellow-100',
            background: 'bg-yellow-100',
            text: 'text-yellow-800',
            hex: '#fef9c3',
        },
        {
            name: 'yellow-200',
            background: 'bg-yellow-200',
            text: 'text-yellow-800',
            hex: '#fef08a',
        },
        {
            name: 'yellow-300',
            background: 'bg-yellow-300',
            text: 'text-yellow-800',
            hex: '#fde047',
        },
        {
            name: 'yellow-400',
            background: 'bg-yellow-400',
            text: 'text-yellow-800',
            hex: '#facc15',
        },
        {
            name: 'yellow-500',
            background: 'bg-yellow-500',
            text: 'text-yellow-800',
            hex: '#eab308',
        },
        {
            name: 'yellow-600',
            background: 'bg-yellow-600',
            text: 'text-yellow-200',
            hex: '#ca8a04',
        },
        {
            name: 'yellow-700',
            background: 'bg-yellow-700',
            text: 'text-yellow-200',
            hex: '#a16207',
        },
        {
            name: 'yellow-800',
            background: 'bg-yellow-800',
            text: 'text-yellow-200',
            hex: '#854d0e',
        },
        {
            name: 'yellow-900',
            background: 'bg-yellow-900',
            text: 'text-yellow-200',
            hex: '#713f12',
        },
    ],

    red: [
        {
            name: 'red-50',
            background: 'bg-red-50',
            text: 'text-red-800',
            hex: '#fef2f2',
        },
        {
            name: 'red-100',
            background: 'bg-red-100',
            text: 'text-red-800',
            hex: '#fee2e2',
        },
        {
            name: 'red-200',
            background: 'bg-red-200',
            text: 'text-red-800',
            hex: '#fecaca',
        },
        {
            name: 'red-300',
            background: 'bg-red-300',
            text: 'text-red-800',
            hex: '#fca5a5',
        },
        {
            name: 'red-400',
            background: 'bg-red-400',
            text: 'text-red-800',
            hex: '#f87171',
        },
        {
            name: 'red-500',
            background: 'bg-red-500',
            text: 'text-red-800',
            hex: '#ef4444',
        },
        {
            name: 'red-600',
            background: 'bg-red-600',
            text: 'text-red-200',
            hex: '#dc2626',
        },
        {
            name: 'red-700',
            background: 'bg-red-700',
            text: 'text-red-200',
            hex: '#b91c1c',
        },
        {
            name: 'red-800',
            background: 'bg-red-800',
            text: 'text-red-200',
            hex: '#991b1b',
        },
        {
            name: 'red-900',
            background: 'bg-red-900',
            text: 'text-red-200',
            hex: '#7f1d1d',
        },
    ],

    orange: [
        {
            name: 'orange-50',
            background: 'bg-orange-50',
            text: 'text-orange-800',
            hex: '#fff7ed',
        },
        {
            name: 'orange-100',
            background: 'bg-orange-100',
            text: 'text-orange-800',
            hex: '#ffedd5',
        },
        {
            name: 'orange-200',
            background: 'bg-orange-200',
            text: 'text-orange-800',
            hex: '#fed7aa',
        },
        {
            name: 'orange-300',
            background: 'bg-orange-300',
            text: 'text-orange-800',
            hex: '#fdba74',
        },
        {
            name: 'orange-400',
            background: 'bg-orange-400',
            text: 'text-orange-800',
            hex: '#fb923c',
        },
        {
            name: 'orange-500',
            background: 'bg-orange-500',
            text: 'text-orange-800',
            hex: '#f97316',
        },
        {
            name: 'orange-600',
            background: 'bg-orange-600',
            text: 'text-orange-200',
            hex: '#ea580c',
        },
        {
            name: 'orange-700',
            background: 'bg-orange-700',
            text: 'text-orange-200',
            hex: '#c2410c',
        },
        {
            name: 'orange-800',
            background: 'bg-orange-800',
            text: 'text-orange-200',
            hex: '#9a3412',
        },
        {
            name: 'orange-900',
            background: 'bg-orange-900',
            text: 'text-orange-200',
            hex: '#7c2d12',
        },
    ],

    stone: [
        {
            name: 'stone-50',
            background: 'bg-stone-50',
            text: 'text-stone-800',
            hex: '#f7f7f7',
        },
        {
            name: 'stone-100',
            background: 'bg-stone-100',
            text: 'text-stone-800',
            hex: '#e1e1e1',
        },
        {
            name: 'stone-200',
            background: 'bg-stone-200',
            text: 'text-stone-800',
            hex: '#cfcfcf',
        },
        {
            name: 'stone-300',
            background: 'bg-stone-300',
            text: 'text-stone-800',
            hex: '#b1b1b1',
        },
        {
            name: 'stone-400',
            background: 'bg-stone-400',
            text: 'text-stone-800',
            hex: '#9e9e9e',
        },
        {
            name: 'stone-500',
            background: 'bg-stone-500',
            text: 'text-stone-800',
            hex: '#828282',
        },
        {
            name: 'stone-600',
            background: 'bg-stone-600',
            text: 'text-stone-200',
            hex: '#636363',
        },
        {
            name: 'stone-700',
            background: 'bg-stone-700',
            text: 'text-stone-200',
            hex: '#4c4c4c',
        },
        {
            name: 'stone-800',
            background: 'bg-stone-800',
            text: 'text-stone-200',
            hex: '#333333',
        },
        {
            name: 'stone-900',
            background: 'bg-stone-900',
            text: 'text-stone-200',
            hex: '#1f1f1f',
        },
    ],
})

const editableValue = ref('')

watch(
    () => props.modelValue,
    () => {
        editableValue.value = props.modelValue
    },
    { immediate: true }
)
</script>
