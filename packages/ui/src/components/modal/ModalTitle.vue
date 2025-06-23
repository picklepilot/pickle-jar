<template>
    <h2 :id="titleId" class="text-lg font-semibold text-foreground">
        <slot />
    </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
    /**
     * The ID for the title element (for accessibility).
     * @type {string}
     */
    titleId?: string
}>()
</script>
