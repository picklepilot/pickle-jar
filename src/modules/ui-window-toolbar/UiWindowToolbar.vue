<template>
    <div :class="[!windows.length && '', 'shrink-0 bg-zinc-100']">
        <UiWindow
            v-for="windowDef in windows"
            :key="`ui-window-${windowDef.id}`"
            v-bind="windowDef"
            :effective-component="
                componentMapping[windowDef.effectiveComponent]
            "
            @close="$emit('close', $event)"
        />
    </div>
</template>

<script setup lang="ts">
import UiWindow from './UiWindow.vue'

withDefaults(
    defineProps<{
        componentMapping?: any
        windows?: any[]
    }>(),
    {
        componentMapping: () => ({}),
        windows: () => [],
    }
)
</script>
