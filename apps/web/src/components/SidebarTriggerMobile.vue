<script setup lang="ts">
const emit = defineEmits<{
    (e: 'toggle'): void
}>()
</script>

<template>
    <button
        type="button"
        class="text-neutral-500 hover:text-neutral-600 lg:hidden"
        @click="emit('toggle')"
    >
        <span class="sr-only">Open sidebar</span>
        <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
    </button>
</template>
