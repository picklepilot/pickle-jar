import type { Meta, StoryObj } from '@storybook/vue3'
import Typeahead from './Typeahead.vue'

// Mock data
const mockItems = [
    { id: 1, name: 'PlayStation 5', category: 'Sony' },
    { id: 2, name: 'Xbox Series X', category: 'Microsoft' },
    { id: 3, name: 'Nintendo Switch', category: 'Nintendo' },
    { id: 4, name: 'PlayStation 4', category: 'Sony' },
    { id: 5, name: 'Xbox One', category: 'Microsoft' },
    { id: 6, name: 'Nintendo Wii U', category: 'Nintendo' },
    { id: 7, name: 'PlayStation 3', category: 'Sony' },
    { id: 8, name: 'Xbox 360', category: 'Microsoft' },
    { id: 9, name: 'Nintendo 3DS', category: 'Nintendo' },
    { id: 10, name: 'PlayStation Vita', category: 'Sony' },
]

// Mock API call function
const mockSearch = async (query: string) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Filter items based on query
    return mockItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    )
}

const meta = {
    title: 'Components/Typeahead',
    component: Typeahead,
    tags: ['autodocs'],
    argTypes: {
        modelValue: { control: 'object' },
        placeholder: { control: 'text' },
        debounce: { control: 'number' },
        groupBy: { control: 'text' },
    },
} satisfies Meta<typeof Typeahead>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'Search games...',
        debounce: 300,
        groupBy: 'category',
        searcher: mockSearch,
        displayProperty: (item: any) => item.name,
        uidProperty: 'id',
        defaultItems: mockItems,
    },
    render: args => ({
        components: { Typeahead },
        setup() {
            return { args }
        },
        template: `
            <Typeahead v-bind="args">
                <template #empty>
                    <div>No results</div>
                </template>
            </Typeahead>
        `,
    }),
}
