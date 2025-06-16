import type { Meta, StoryObj } from '@storybook/vue3'
import BaseBadge from './BaseBadge.vue'

const meta: Meta<typeof BaseBadge> = {
    title: 'Components/BaseBadge',
    component: BaseBadge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'destructive', 'outline'],
            description: 'The visual style of the badge',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg'],
            description: 'The size of the badge',
        },
        classes: {
            control: 'object',
            description: 'Additional classes to be added to the badge',
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
    },
    render: args => ({
        components: { BaseBadge },
        setup() {
            return { args }
        },
        template: '<BaseBadge v-bind="args">Default Badge</BaseBadge>',
    }),
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'default',
    },
    render: args => ({
        components: { BaseBadge },
        setup() {
            return { args }
        },
        template: '<BaseBadge v-bind="args">Secondary Badge</BaseBadge>',
    }),
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        size: 'default',
    },
    render: args => ({
        components: { BaseBadge },
        setup() {
            return { args }
        },
        template: '<BaseBadge v-bind="args">Destructive Badge</BaseBadge>',
    }),
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'default',
    },
    render: args => ({
        components: { BaseBadge },
        setup() {
            return { args }
        },
        template: '<BaseBadge v-bind="args">Outline Badge</BaseBadge>',
    }),
}

export const Small: Story = {
    args: {
        variant: 'default',
        size: 'sm',
    },
    render: args => ({
        components: { BaseBadge },
        setup() {
            return { args }
        },
        template: '<BaseBadge v-bind="args">Small Badge</BaseBadge>',
    }),
}

export const Large: Story = {
    args: {
        variant: 'default',
        size: 'lg',
    },
    render: args => ({
        components: { BaseBadge },
        setup() {
            return { args }
        },
        template: '<BaseBadge v-bind="args">Large Badge</BaseBadge>',
    }),
}

export const AllVariants: Story = {
    render: () => ({
        components: { BaseBadge },
        template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-2">
          <BaseBadge variant="default">Default</BaseBadge>
          <BaseBadge variant="secondary">Secondary</BaseBadge>
          <BaseBadge variant="destructive">Destructive</BaseBadge>
          <BaseBadge variant="outline">Outline</BaseBadge>
        </div>
        <div class="flex gap-2">
          <BaseBadge variant="default" size="sm">Small</BaseBadge>
          <BaseBadge variant="secondary" size="sm">Small</BaseBadge>
          <BaseBadge variant="destructive" size="sm">Small</BaseBadge>
          <BaseBadge variant="outline" size="sm">Small</BaseBadge>
        </div>
        <div class="flex gap-2">
          <BaseBadge variant="default" size="lg">Large</BaseBadge>
          <BaseBadge variant="secondary" size="lg">Large</BaseBadge>
          <BaseBadge variant="destructive" size="lg">Large</BaseBadge>
          <BaseBadge variant="outline" size="lg">Large</BaseBadge>
        </div>
      </div>
    `,
    }),
}
