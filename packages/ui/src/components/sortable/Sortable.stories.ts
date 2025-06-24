import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Sortable from './Sortable.vue'
import MultiGroupSortable from './MultiGroupSortable.vue'
import SortableDemo from './demo.vue'

const meta: Meta<typeof Sortable> = {
    title: 'Components/Sortable',
    component: Sortable,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'A sortable component built with Motion Vue that supports dragging between multiple instances.',
            },
        },
    },
    argTypes: {
        items: {
            control: 'object',
            description: 'Array of items to display in the sortable list',
        },
        groupId: {
            control: 'text',
            description: 'Unique identifier for this sortable group',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the sortable is disabled',
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic story with simple items
export const Basic: Story = {
    args: {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        groupId: 'basic-group',
        disabled: false,
    },
    render: args => ({
        components: { Sortable },
        setup() {
            const items = ref([...args.items])
            const handleUpdate = (newItems: any[]) => {
                items.value = [...newItems]
            }
            return { args, items, handleUpdate }
        },
        template: `
            <div class="p-4">
                <h3 class="text-lg font-medium mb-4">Basic Sortable</h3>
                <Sortable 
                    :items="items" 
                    :group-id="args.groupId"
                    :disabled="args.disabled"
                    @update:items="handleUpdate"
                />
            </div>
        `,
    }),
}

// Story with object items
export const WithObjects: Story = {
    args: {
        items: [
            {
                id: 1,
                label: 'First Item',
                description: 'This is the first item',
            },
            {
                id: 2,
                label: 'Second Item',
                description: 'This is the second item',
            },
            {
                id: 3,
                label: 'Third Item',
                description: 'This is the third item',
            },
            {
                id: 4,
                label: 'Fourth Item',
                description: 'This is the fourth item',
            },
        ],
        groupId: 'objects-group',
        disabled: false,
    },
    render: args => ({
        components: { Sortable },
        setup() {
            const items = ref([...args.items])
            const handleUpdate = (newItems: any[]) => {
                items.value = [...newItems]
            }
            return { args, items, handleUpdate }
        },
        template: `
            <div class="p-4">
                <h3 class="text-lg font-medium mb-4">Sortable with Objects</h3>
                <Sortable 
                    :items="items" 
                    :group-id="args.groupId"
                    :disabled="args.disabled"
                    @update:items="handleUpdate"
                />
            </div>
        `,
    }),
}

// Disabled state
export const Disabled: Story = {
    args: {
        items: ['Item 1', 'Item 2', 'Item 3'],
        groupId: 'disabled-group',
        disabled: true,
    },
    render: args => ({
        components: { Sortable },
        setup() {
            const items = ref([...args.items])
            const handleUpdate = (newItems: any[]) => {
                items.value = [...newItems]
            }
            return { args, items, handleUpdate }
        },
        template: `
            <div class="p-4">
                <h3 class="text-lg font-medium mb-4">Disabled Sortable</h3>
                <Sortable 
                    :items="items" 
                    :group-id="args.groupId"
                    :disabled="args.disabled"
                    @update:items="handleUpdate"
                />
            </div>
        `,
    }),
}

// Multi-group demo with actual cross-group functionality
export const MultiGroupDemo: Story = {
    render: () => ({
        components: { MultiGroupSortable },
        setup() {
            const createItem = (id: string, label: string) => ({ id, label })

            const groups = ref([
                {
                    id: 'group-1',
                    title: 'To Do',
                    items: [
                        createItem('todo-1', 'Learn Vue 3'),
                        createItem('todo-2', 'Build a component library'),
                        createItem('todo-3', 'Write documentation'),
                    ],
                },
                {
                    id: 'group-2',
                    title: 'In Progress',
                    items: [createItem('progress-1', 'Design system setup')],
                },
                {
                    id: 'group-3',
                    title: 'Done',
                    items: [
                        createItem('done-1', 'Project initialization'),
                        createItem('done-2', 'Basic structure'),
                    ],
                },
            ])

            const handleUpdateGroups = (newGroups: any[]) => {
                groups.value = newGroups
            }

            const handleItemMoved = (payload: any) => {
                console.log('Item moved between groups:', payload)
            }

            return { groups, handleUpdateGroups, handleItemMoved }
        },
        template: `
            <div class="p-4">
                <h3 class="text-lg font-medium mb-4">Cross-Group Sortable Demo</h3>
                <p class="text-sm text-gray-600 mb-6">Drag items between groups to see cross-group functionality in action!</p>
                <MultiGroupSortable
                    :groups="groups"
                    @update:groups="handleUpdateGroups"
                    @item-moved="handleItemMoved"
                >
                    <template #item="{ item }">
                        <div class="flex items-center justify-between">
                            <div class="text-sm font-medium">{{ item.label }}</div>
                            <div class="text-xs text-muted-foreground">{{ item.description }}</div>
                        </div>
                    </template>
                </MultiGroupSortable>
            </div>
        `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'This demo shows how to use the MultiGroupSortable component with actual cross-group dragging functionality.',
            },
        },
    },
}

// Interactive story with controls
export const Interactive: Story = {
    args: {
        items: ['Apple', 'Banana', 'Cherry', 'Date'],
        groupId: 'interactive-group',
        disabled: false,
    },
    render: args => ({
        components: { Sortable },
        setup() {
            const items = ref([...args.items])
            const handleUpdate = (newItems: any[]) => {
                items.value = [...newItems]
            }
            const addItem = () => {
                const newItem = `Item ${items.value.length + 1}`
                items.value = [...items.value, newItem]
            }
            const removeItem = () => {
                if (items.value.length > 0) {
                    items.value = items.value.slice(0, -1)
                }
            }
            const resetItems = () => {
                items.value = ['Apple', 'Banana', 'Cherry', 'Date']
            }

            return {
                args,
                items,
                handleUpdate,
                addItem,
                removeItem,
                resetItems,
            }
        },
        template: `
            <div class="p-4 space-y-4">
                <div class="flex items-center justify-between">
                    <h3 class="text-lg font-medium">Interactive Sortable</h3>
                    <div class="flex gap-2">
                        <button 
                            @click="addItem"
                            class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                        >
                            Add Item
                        </button>
                        <button 
                            @click="removeItem"
                            class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                        >
                            Remove Item
                        </button>
                        <button 
                            @click="resetItems"
                            class="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                        >
                            Reset
                        </button>
                    </div>
                </div>
                <Sortable 
                    :items="items" 
                    :group-id="args.groupId"
                    :disabled="args.disabled"
                    @update:items="handleUpdate"
                />
                <div class="text-sm text-gray-600">
                    Items: {{ items.join(', ') }}
                </div>
            </div>
        `,
    }),
}
