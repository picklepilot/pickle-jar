<template>
    <button
        @click="$emit('close', false)"
        class="absolute right-4 top-4 text-zinc-400 hover:text-zinc-800"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x h-6 w-6"
            viewBox="0 0 16 16"
        >
            <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
            />
        </svg>
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    close: [value: boolean]
}>()
</script>
