import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseTypeahead from './BaseTypeahead.vue'
import { action } from 'storybook/actions'

const meta = {
    title: 'Components/BaseTypeahead',
    component: BaseTypeahead,
    tags: ['autodocs'],
    argTypes: {
        modelValue: { control: 'object' },
        items: { control: 'object' },
        groupBy: { control: 'text' },
        multiple: { control: 'boolean' },
        nullable: { control: 'boolean' },
        placeholder: { control: 'text' },
        debounce: { control: 'number' },
        isStatic: { control: 'boolean' },
    },
} satisfies Meta<typeof BaseTypeahead>

export default meta
type Story = StoryObj<typeof meta>

// Sample data
const sampleItems = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Banana', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' },
    { id: 4, name: 'Broccoli', category: 'Vegetable' },
    { id: 5, name: 'Chicken', category: 'Meat' },
    { id: 6, name: 'Beef', category: 'Meat' },
]

// With async search
export const WithAsyncSearch: Story = {
    args: {
        placeholder: 'Search with async results...',
        searcher: async (query: string) => {
            console.log('query', query)
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return sampleItems.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            )
        },
        defaultItems: sampleItems,
    },
    render: (args) => ({
        components: { BaseTypeahead },
        setup() {
            const handleUpdate = action('update:model-value')
            return { args, handleUpdate }
        },
        template: `
            <BaseTypeahead v-bind="args" @update:model-value="handleUpdate">
                <template #item="{ item, active, selected }">
                    <div class="grid grid-cols-1 gap-2 ">
                        <div class="flex items-center rounded px-2.5 py-1.5" :class="{ 'bg-gray-100': active, 'bg-gray-200': selected }">
                            <span class="mr-2">⏳</span>
                            {{ item.name }}
                        </div>
                    </div>
                </template>
            </BaseTypeahead>
        `,
    }),
}
