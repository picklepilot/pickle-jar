import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './Input.vue'

const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url'],
            description: 'The type of input field',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the input',
        },
        modelValue: {
            control: 'text',
            description: 'The input value (for v-model)',
        },
        value: {
            control: 'text',
            description: 'The input value (for named v-model)',
        },
        theme: {
            control: 'object',
            description: 'Custom theme overrides',
        },
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        type: 'text',
        placeholder: 'Enter text here...',
        modelValue: '',
    },
}

export const WithValue: Story = {
    args: {
        type: 'text',
        placeholder: 'Enter text here...',
        modelValue: 'Hello World',
    },
}

export const Email: Story = {
    args: {
        type: 'email',
        placeholder: 'Enter your email...',
        modelValue: '',
    },
}

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter your password...',
        modelValue: '',
    },
}

export const WithCustomTheme: Story = {
    args: {
        type: 'text',
        placeholder: 'Custom themed input...',
        modelValue: '',
        theme: {
            input: 'bg-blue-50 border-blue-200 focus:ring-blue-500 focus:border-blue-500',
        },
    },
}

export const Disabled: Story = {
    args: {
        type: 'text',
        placeholder: 'Disabled input...',
        modelValue: '',
        disabled: true,
    },
}
