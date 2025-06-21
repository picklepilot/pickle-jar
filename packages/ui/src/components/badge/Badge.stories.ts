import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from './Badge.vue'

const meta = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'destructive', 'outline'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg'],
        },
    },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
    },
    render: args => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
    render: args => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Secondary</Badge>',
    }),
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
    },
    render: args => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Destructive</Badge>',
    }),
}

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
    render: args => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Outline</Badge>',
    }),
}

export const Small: Story = {
    args: {
        size: 'sm',
    },
    render: args => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Small</Badge>',
    }),
}

export const Large: Story = {
    args: {
        size: 'lg',
    },
    render: args => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Large</Badge>',
    }),
}

export const AllVariants: Story = {
    render: () => ({
        components: { Badge },
        template: `
            <div class="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
            </div>
        `,
    }),
}

export const AllSizes: Story = {
    render: () => ({
        components: { Badge },
        template: `
            <div class="flex flex-wrap items-center gap-2">
                <Badge size="sm">Small</Badge>
                <Badge size="default">Default</Badge>
                <Badge size="lg">Large</Badge>
            </div>
        `,
    }),
}

export const WithCustomTheme: Story = {
    args: {
        theme: {
            badge: 'bg-blue-500 text-white hover:bg-blue-600 shadow-md',
        },
    },
    render: args => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Custom Theme</Badge>',
    }),
}

export const StatusBadges: Story = {
    render: () => ({
        components: { Badge },
        template: `
            <div class="flex flex-wrap gap-2">
                <Badge variant="default">Active</Badge>
                <Badge variant="secondary">Pending</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge variant="outline">Draft</Badge>
            </div>
        `,
    }),
}
