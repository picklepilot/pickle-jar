<script setup lang="ts">
import { reactive } from 'vue'
import BaseButton from './BaseButton.vue'

const state = reactive({
    processing: false,
})
</script>

<template>
    <Story title="Button">
        <Variant title="Default">
            <BaseButton
                :theme="{
                    baseButton:
                        'flex space-x-1.5 rounded-none border border-black bg-white px-2.5 py-2 font-normal transition-all hover:bg-zinc-100',
                    baseButtonIcon: 'size-4',
                }"
                :processing="state.processing"
            >
                {{ state.processing ? 'Processing' : 'Click me' }}
            </BaseButton>
        </Variant>

        <Variant title="Rounded">
            <BaseButton
                :theme="{
                    baseButton:
                        'flex space-x-1.5 rounded border border-blue-200/80 bg-blue-50 px-2.5 py-2 font-normal text-blue-400 transition-all hover:border-blue-500/40 hover:bg-blue-400 hover:text-blue-50 active:ring-2 active:ring-blue-400 active:ring-offset-2',
                    baseButtonIcon: 'size-4',
                }"
                :processing="state.processing"
            >
                {{ state.processing ? 'Processing' : 'Click me' }}
            </BaseButton>
        </Variant>
    </Story>
</template>
