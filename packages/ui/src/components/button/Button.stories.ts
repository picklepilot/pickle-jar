import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
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
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        disabled: {
            control: 'boolean',
        },
        processing: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Button</Button>',
    }),
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Delete</Button>',
    }),
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        theme: {
            Button: 'shadow-sm',
        },
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Outline</Button>',
    }),
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Disabled Button</Button>',
    }),
}

export const Processing: Story = {
    args: {
        processing: true,
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template:
            '<Button v-bind="args">Processing<template #processing><span>...</span></template></Button>',
    }),
}

export const WithCustomTheme: Story = {
    args: {
        theme: {
            Button: 'transition-all bg-secondary hover:bg-blue-400 text-blue-400 hover:text-blue-50 px-2.5 py-2',
            ButtonDisabled: 'bg-gray-300 text-gray-500',
            ButtonIcon: 'text-white',
        },
    },
    render: (args, { globals }) => ({
        components: { Button },
        setup() {
            console.log('theme', globals)
            return { args }
        },
        template: `<span class="${globals.backgrounds.value}"><Button v-bind="args">Custom Theme Button</Button></span>`,
    }),
}
