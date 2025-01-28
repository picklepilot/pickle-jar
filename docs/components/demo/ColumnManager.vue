<template>
    <div class="h-[800px] overflow-auto bg-zinc-100">
        <ColumnManager
            ref="columnManager"
            :drop-down-classes="{
                comboboxOptionsContainer: 'z-51',
            }"
            :default-items="defaultItems"
            :existing-columns="existingColumns"
            :searcher="searcher"
            :onPickedColumn="(item) => item"
            :group-configuration="groupConfiguration"
            :group-menu-items="groupMenuItems"
            @update:existingColumns="onUpdatedColumns"
        >
            <template v-slot:option="{ item, selected, active }">
                <div :class="active ? 'bg-green-500' : ''">
                    {{ item.name }}
                </div>
            </template>

            <template v-slot:column="{ slotProps }">
                <div class="ml-2 grow self-center truncate">
                    {{ slotProps.name }}
                </div>
            </template>

            <template #drag-handle>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="drag-handle size-3 shrink-0 self-center text-zinc-200 group-hover:text-zinc-500"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                </svg>
            </template>

            <div v-if="columnManager" class="w-1/2 rounded-xl bg-zinc-100 p-6">
                <pre>{{ updatedColumns }}</pre>
            </div>
        </ColumnManager>
    </div>
</template>

<script setup lang="ts">
import { ColumnManager } from 'component-jar'
import DemoContainer from '../../.vitepress/components/DemoContainer.vue'
import { ref } from 'vue'

const columnManager = ref()

const groupConfiguration = ref({
    Default: {
        color: '#f97316',
    },
    'Second Group': {
        color: '#f97316',
    },
})

const defaultItems = ref([
    {
        id: 1,
        name: 'Alpha',
        description: 'This is the first item in the list.',
    },
    {
        id: 2,
        name: 'Beta',
        description: 'This item is the second one, often used for testing.',
    },
    {
        id: 3,
        name: 'Gamma',
        description: 'The third item, represents an advanced concept.',
    },
    {
        id: 4,
        name: 'Delta',
        description: 'This item is frequently associated with change.',
    },
    {
        id: 5,
        name: 'Epsilon',
        description: 'The fifth item, never the final step in a sequence.',
    },
    {
        id: 6,
        name: 'Pickles',
        description: 'The sixth item, often the final step in a sequence.',
    },
])

const existingColumns = [
    {
        id: 3,
        name: 'Gamma',
        description: 'The third item, represents an advanced concept.',
        tag: 'advanced',
        group: 'Default',
    },
    {
        id: 4,
        name: 'Delta',
        description: 'This item is frequently associated with change.',
        tag: 'expert',
        group: 'Default',
    },
    {
        id: 5,
        name: 'Epsilon',
        description: 'The fifth item, often the final step in a sequence.',
        tag: 'final',
        group: 'Second Group',
    },
    {
        id: 6,
        name: 'Default',
        description: 'The sixth item, often the final step in a sequence.',
        group: 'Second Group',
    },

    {
        id: 7,
        name: 'One more column',
        description: 'The sixth item, often the final step in a sequence.',
        group: 'Second Group',
    },

    {
        id: 8,
        name: 'This one has a longer name to truncate',
        description: 'The sixth item, often the final step in a sequence.',
        group: 'Second Group',
    },
]

const groupMenuItems = [
    [
        {
            icon: 'fa-robot',
            label: 'AI some stuff',
            onClick: (context: any) => {
                // console.log('AI some stuff', context)
            },
        },
    ],
]

async function searcher(query: string) {
    return Promise.resolve(
        defaultItems.value.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        )
    )
}

const updatedColumns = ref(existingColumns)
function onUpdatedColumns(columns: any) {
    updatedColumns.value = columns
}
</script>
