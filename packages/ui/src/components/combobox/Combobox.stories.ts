import type { Meta, StoryObj } from '@storybook/vue3'
import Combobox from './Combobox.vue'
import { computed, ref } from 'vue'

const meta = {
    title: 'Components/Combobox',
    component: Combobox,
    tags: ['autodocs'],
    argTypes: {
        modelValue: { control: 'object' },
        items: { control: { type: 'object' } },
        displayProperty: { control: false },
        groupBy: { control: 'text' },
        multiple: { control: 'boolean' },
        nullable: { control: 'boolean' },
        placeholder: { control: 'text' },
        isStatic: { control: 'boolean' },
    },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const items = [
    { id: 1, name: 'Apple', category: 'Fruits' },
    { id: 2, name: 'Banana', category: 'Fruits' },
    { id: 3, name: 'Carrot', category: 'Vegetables' },
    { id: 4, name: 'Broccoli', category: 'Vegetables' },
    { id: 5, name: 'Orange', category: 'Fruits' },
    { id: 6, name: 'Spinach', category: 'Vegetables' },
]

export const Default: Story = {
    args: {
        items,
        placeholder: 'Select an item...',
    },
}

export const WithGroups: Story = {
    args: {
        items,
        groupBy: 'category',
        placeholder: 'Select an item...',
    },
}

export const Multiple: Story = {
    render: args => ({
        components: { Combobox },
        setup() {
            const selectedItems = ref([])

            const disabledItems = computed(() => {
                return [...selectedItems.value]
            })

            return { args, disabledItems, selectedItems }
        },
        template: `
            <div class="space-y-4">
                <Combobox
                    v-model="selectedItems"
                    v-bind="args"
                    :disabled-items="disabledItems"
                />
                <div class="text-sm text-muted-foreground">
                    Selected items: {{ selectedItems.map(item => item.name).join(', ') }}
                </div>
            </div>
        `,
    }),
    args: {
        items,
        multiple: true,
        placeholder: 'Select multiple items...',
        disabledItems: [items[0]],
    },
}

export const MultipleWithGroups: Story = {
    render: args => ({
        components: { Combobox },
        setup() {
            const selectedItems = ref([])
            return { args, selectedItems }
        },
        template: `
            <div class="space-y-4">
                <Combobox
                    v-model="selectedItems"
                    v-bind="args"
                />
                <div class="text-sm text-muted-foreground">
                    Selected items: {{ selectedItems.map(item => item.name).join(', ') }}
                </div>
            </div>
        `,
    }),
    args: {
        items,
        multiple: true,
        groupBy: 'category',
        placeholder: 'Select multiple items...',
    },
}

export const CustomItemTemplate: Story = {
    args: {
        items,
        placeholder: 'Select an item...',
    },
    render: args => ({
        components: { Combobox },
        setup() {
            return { args }
        },
        template: `
            <Combobox v-bind="args">
                <template #item="{ item, active, selected }">
                    <div class="flex items-center gap-2">
                        <span class="size-2 rounded-full" :class="item.category === 'Fruits' ? 'bg-green-500' : 'bg-orange-500'"></span>
                        <span :class="{ 'font-bold': selected }">{{ item.name }}</span>
                        <span class="text-sm text-muted-foreground">({{ item.category }})</span>
                    </div>
                </template>
            </Combobox>
        `,
    }),
}

export const CustomGroupTemplate: Story = {
    args: {
        items,
        groupBy: 'category',
        placeholder: 'Select an item...',
    },
    render: args => ({
        components: { Combobox },
        setup() {
            return { args }
        },
        template: `
            <Combobox v-bind="args">
                <template #group="{ groupName }">
                    <div class="flex items-center gap-2">
                        <span class="size-2 rounded-full" :class="groupName === 'Fruits' ? 'bg-green-500' : 'bg-orange-500'"></span>
                        <span>{{ groupName }}</span>
                    </div>
                </template>
            </Combobox>
        `,
    }),
}

export const EmptyState: Story = {
    args: {
        items: [],
        placeholder: 'Select an item...',
    },
    render: args => ({
        components: { Combobox },
        setup() {
            return { args }
        },
        template: `
            <Combobox v-bind="args">
                <template #empty>
                    <div class="text-center py-4 text-muted-foreground">
                        No items available
                    </div>
                </template>
            </Combobox>
        `,
    }),
}
