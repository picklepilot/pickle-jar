import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './Button.js'

const meta: Meta = {
    title: 'Components/Button',
    component: 'pj-button',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'default',
                'destructive',
                'outline',
                'secondary',
                'ghost',
                'link',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        disabled: {
            control: { type: 'boolean' },
        },
        type: {
            control: { type: 'select' },
            options: ['button', 'submit', 'reset'],
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'md',
        disabled: false,
        type: 'button',
    },
    render: args => html`
        <pj-button
            variant="${args.variant}"
            size="${args.size}"
            ?disabled="${args.disabled}"
            type="${args.type}"
        >
            Default Button
        </pj-button>
    `,
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        disabled: false,
    },
    render: args => html`
        <pj-button
            variant="${args.variant}"
            size="${args.size}"
            ?disabled="${args.disabled}"
        >
            Secondary Button
        </pj-button>
    `,
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        size: 'md',
        disabled: false,
    },
    render: args => html`
        <pj-button
            variant="${args.variant}"
            size="${args.size}"
            ?disabled="${args.disabled}"
        >
            Destructive Button
        </pj-button>
    `,
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'md',
        disabled: false,
    },
    render: args => html`
        <pj-button
            variant="${args.variant}"
            size="${args.size}"
            ?disabled="${args.disabled}"
        >
            Outline Button
        </pj-button>
    `,
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'md',
        disabled: false,
    },
    render: args => html`
        <pj-button
            variant="${args.variant}"
            size="${args.size}"
            ?disabled="${args.disabled}"
        >
            Ghost Button
        </pj-button>
    `,
}

export const Link: Story = {
    args: {
        variant: 'link',
        size: 'md',
        disabled: false,
    },
    render: args => html`
        <pj-button
            variant="${args.variant}"
            size="${args.size}"
            ?disabled="${args.disabled}"
        >
            Link Button
        </pj-button>
    `,
}

export const Sizes: Story = {
    render: () => html`
        <div class="flex flex-col gap-4 items-start">
            <pj-button size="xs">Extra Small</pj-button>
            <pj-button size="sm">Small</pj-button>
            <pj-button size="md">Medium</pj-button>
            <pj-button size="lg">Large</pj-button>
            <pj-button size="xl">Extra Large</pj-button>
        </div>
    `,
}

export const Disabled: Story = {
    render: () => html`
        <div class="flex gap-4">
            <pj-button variant="default" disabled>Disabled Default</pj-button>
            <pj-button variant="secondary" disabled
                >Disabled Secondary</pj-button
            >
            <pj-button variant="destructive" disabled
                >Disabled Destructive</pj-button
            >
            <pj-button variant="outline" disabled>Disabled Outline</pj-button>
            <pj-button variant="ghost" disabled>Disabled Ghost</pj-button>
            <pj-button variant="link" disabled>Disabled Link</pj-button>
        </div>
    `,
}

export const AllVariants: Story = {
    render: () => html`
        <div>
            <h3 class="text-sm font-semibold mb-2">Variants</h3>
            <div class="flex flex-wrap gap-4">
                <pj-button variant="default">Default</pj-button>
                <pj-button variant="secondary">Secondary</pj-button>
                <pj-button variant="destructive">Destructive</pj-button>
                <pj-button variant="outline">Outline</pj-button>
                <pj-button variant="ghost">Ghost</pj-button>
                <pj-button variant="link">Link</pj-button>
            </div>
            <h3 class="text-sm font-semibold mb-2 mt-8">Sizes</h3>
            <div class="flex flex-wrap gap-4">
                <pj-button variant="default" size="xs">Extra Small</pj-button>
                <pj-button variant="default" size="sm">Small</pj-button>
                <pj-button variant="default" size="md">Medium</pj-button>
                <pj-button variant="default" size="lg">Large</pj-button>
                <pj-button variant="default" size="xl">Extra Large</pj-button>
            </div>
        </div>
    `,
}
