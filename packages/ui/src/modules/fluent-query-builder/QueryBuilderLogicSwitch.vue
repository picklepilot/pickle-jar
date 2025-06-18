<template>
    <Switch
        v-model="editableModelValue"
        :class="[
            'relative inline-flex h-6 w-16 items-center rounded-full transition-colors focus:outline-none border focus:ring-2 focus:ring-ring focus:ring-offset-2',
            editableModelValue ? 'bg-muted' : 'bg-muted',
        ]"
    >
        <span class="sr-only">Use AND/OR</span>
        <!-- Switch actual-->
        <span
            :class="[
                'inline-block absolute h-4 transform rounded-full bg-primary shadow-xs transition-all duration-300 ease-in-out',
                editableModelValue ? 'left-9 w-5.5' : 'left-1 w-7.5',
            ]"
        />
        <span
            class="absolute left-2 text-[10px] font-medium"
            :class="[editableModelValue ? 'text-primary' : 'text-muted']"
            >AND</span
        >
        <span
            class="absolute right-2 text-[10px] font-medium"
            :class="[editableModelValue ? 'text-muted' : 'text-primary']"
            >OR</span
        >
    </Switch>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { computed } from 'vue'

const props = defineProps<{
    modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])
const editableModelValue = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value),
})
</script>
