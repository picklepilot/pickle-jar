<template>
    <div
        class="absolute bottom-2 left-2 z-100 h-[calc(100%-100px)] w-[350px] rounded-lg bg-white p-4 shadow-lg"
    >
        <div>[Picked items]</div>
        <ul>
            <li v-for="item in treeData" :key="item.item">
                <div>{{ item.item }}</div>
                <ul>
                    <li></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const treeData = ref([
    {
        id: 0,
        key: 'first_level',
        doc_count: 21307706,
        item: 'First Level - Item One',
    },
    {
        key: 'first_level',
        doc_count: 2752,
        item: 'First Level - Item Two',
        children: [
            {
                key: 'second_level',
                doc_count: 21306,
                item: 'Second Level - Item One',
            },
            {
                key: 'second_level',
                doc_count: 11300,
                item: 'Second Level - Item Two',
            },
        ],
    },
    {
        key: 'first_level',
        doc_count: 3168,
        item: 'First Level - Item Three',
    },
    {
        key: 'first_level',
        doc_count: 15887399,
        item: 'First Level - Item Four',
    },
    { key: 'first_level', doc_count: 32648, item: 'First Level - Item Five' },
])
</script>
