import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseButton from './BaseButton.vue'

const meta = {
    title: 'Components/BaseButton',
    component: BaseButton,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        processing: {
            control: 'boolean',
            description: 'Whether the button is in a processing state',
        },
        classes: {
            control: 'object',
            description: 'Extra classes to apply to the button element',
        },
        theme: {
            control: 'object',
            description: 'Custom theme properties for the button',
        },
    },
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        disabled: false,
        processing: false,
    },
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Click me</BaseButton>',
    }),
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Disabled Button</BaseButton>',
    }),
}

export const Processing: Story = {
    args: {
        processing: true,
    },
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template:
            '<BaseButton v-bind="args">Processing<template #processing><span>...</span></template></BaseButton>',
    }),
}

export const WithCustomTheme: Story = {
    args: {
        theme: {
            baseButton:
                'transition-all bg-blue-50 hover:bg-blue-400 text-blue-400 hover:text-blue-50 px-2.5 py-2',
            baseButtonDisabled: 'bg-gray-300 text-gray-500',
            baseButtonIcon: 'text-white',
        },
    },
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Custom Theme Button</BaseButton>',
    }),
}
