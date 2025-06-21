<template>
    <div
        :class="[
            'px-2 py-1.5 text-sm font-semibold text-gray-900',
            'dark:text-gray-100',
        ]"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
// No props or logic needed for label
</script>
