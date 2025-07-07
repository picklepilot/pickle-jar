<template>
    <div class="sortable-demo">
        <h2 class="demo-title">Multi-Group Sortable Demo</h2>
        <p class="demo-description">
            Drag items between the different groups below:
        </p>

        <MultiGroupSortable
            :groups="sortableGroups"
            @update:groups="updateGroups"
            @item-moved="handleItemMoved"
        />

        <div class="demo-controls">
            <button @click="resetItems" class="reset-button">
                Reset Items
            </button>
            <button @click="addRandomItem" class="add-button">
                Add Random Item
            </button>
        </div>

        <div class="demo-info">
            <h4>Current State:</h4>
            <div class="state-display">
                <div
                    v-for="group in sortableGroups"
                    :key="group.id"
                    class="state-group"
                >
                    <strong>{{ group.title }}:</strong>
                    {{ group.items.map(item => item.label || item).join(', ') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MultiGroupSortable from './MultiGroupSortable.vue'

// Sample data with objects that have labels
const createItem = (id: string, label: string) => ({ id, label })

const sortableGroups = ref([
    {
        id: 'group-a',
        title: 'Group A',
        items: [
            createItem('a1', 'Item A1'),
            createItem('a2', 'Item A2'),
            createItem('a3', 'Item A3'),
        ],
    },
    {
        id: 'group-b',
        title: 'Group B',
        items: [createItem('b1', 'Item B1'), createItem('b2', 'Item B2')],
    },
    {
        id: 'group-c',
        title: 'Group C',
        items: [
            createItem('c1', 'Item C1'),
            createItem('c2', 'Item C2'),
            createItem('c3', 'Item C3'),
            createItem('c4', 'Item C4'),
        ],
    },
])

const updateGroups = (groups: any[]) => {
    sortableGroups.value = groups
}

const handleItemMoved = (payload: any) => {
    console.log('Item moved:', payload)
    // Cross-group move has been handled by the component
}

const resetItems = () => {
    sortableGroups.value = [
        {
            id: 'group-a',
            title: 'Group A',
            items: [
                createItem('a1', 'Item A1'),
                createItem('a2', 'Item A2'),
                createItem('a3', 'Item A3'),
            ],
        },
        {
            id: 'group-b',
            title: 'Group B',
            items: [createItem('b1', 'Item B1'), createItem('b2', 'Item B2')],
        },
        {
            id: 'group-c',
            title: 'Group C',
            items: [
                createItem('c1', 'Item C1'),
                createItem('c2', 'Item C2'),
                createItem('c3', 'Item C3'),
                createItem('c4', 'Item C4'),
            ],
        },
    ]
}

const addRandomItem = () => {
    const groups = sortableGroups.value
    const randomGroup = groups[Math.floor(Math.random() * groups.length)]
    const randomId = Math.random().toString(36).substr(2, 9)
    const randomLabel = `Random ${randomId}`

    randomGroup.items.push(createItem(randomId, randomLabel))
}
</script>

<style scoped>
.sortable-demo {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.demo-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1f2937;
}

.demo-description {
    color: #6b7280;
    margin-bottom: 24px;
}

.demo-controls {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    justify-content: center;
}

.reset-button,
.add-button {
    padding: 8px 16px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background-color: white;
    color: #374151;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.reset-button:hover,
.add-button:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
}

.add-button {
    background-color: #3b82f6;
    color: white;
    border-color: #3b82f6;
}

.add-button:hover {
    background-color: #2563eb;
    border-color: #2563eb;
}

.demo-info {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 16px;
}

.demo-info h4 {
    margin: 0 0 12px 0;
    font-size: 16px;
    font-weight: 500;
    color: #374151;
}

.state-display {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.state-group {
    font-size: 14px;
    color: #6b7280;
}

.state-group strong {
    color: #374151;
}

@media (max-width: 768px) {
    .demo-controls {
        flex-direction: column;
        align-items: center;
    }

    .reset-button,
    .add-button {
        width: 200px;
    }
}
</style>
