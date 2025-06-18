<template>
    <li v-for="item in items" :key="item.id">
        <div>{{ item.label }}</div>
        <ul v-if="item.children">
            <TreeNavItem :items="item.children" />
        </ul>
    </li>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        items: any[]
    }>(),
    {}
)
</script>
