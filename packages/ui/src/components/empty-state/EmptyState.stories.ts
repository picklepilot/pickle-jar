import type { Meta, StoryObj } from '@storybook/vue3'
import EmptyState from './EmptyState.vue'

const meta = {
    title: 'Components/EmptyState',
    component: EmptyState,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        theme: { control: 'object' },
    },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'No items found',
    },
    render: args => ({
        components: { EmptyState },
        setup() {
            return { args }
        },
        template: `
            <EmptyState v-bind="args">
                There are no items to display at this time.
            </EmptyState>
        `,
    }),
}

export const WithCustomTheme: Story = {
    args: {
        title: 'No items found',
        theme: {
            container: 'bg-blue-50 border-blue-200',
            title: 'text-blue-900',
            description: 'text-blue-700',
        },
    },
    render: args => ({
        components: { EmptyState },
        setup() {
            return { args }
        },
        template: `
            <EmptyState v-bind="args">
                There are no items to display at this time.
            </EmptyState>
        `,
    }),
}

export const WithRichContent: Story = {
    args: {
        title: 'No items found',
    },
    render: args => ({
        components: { EmptyState },
        setup() {
            return { args }
        },
        template: `
            <EmptyState v-bind="args">
                <div class="space-y-2">
                    <p>There are no items to display at this time.</p>
                    <p class="text-sm">Try adjusting your filters or search criteria.</p>
                </div>
            </EmptyState>
        `,
    }),
}
