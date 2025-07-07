import type { Meta, StoryObj } from '@storybook/vue3'
import Textarea from './Textarea.vue'

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the textarea',
        },
        modelValue: {
            control: 'text',
            description: 'The textarea value (for v-model)',
        },
        value: {
            control: 'text',
            description: 'The textarea value (for named v-model)',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the textarea is disabled',
        },
        theme: {
            control: 'object',
            description: 'Custom theme overrides',
        },
    },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'Enter your message here...',
        modelValue: '',
    },
}

export const WithValue: Story = {
    args: {
        placeholder: 'Enter your message here...',
        modelValue:
            'This is some sample text that demonstrates how the textarea looks with content.',
    },
}

export const LongContent: Story = {
    args: {
        placeholder: 'Enter your message here...',
        modelValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
}

export const WithCustomTheme: Story = {
    args: {
        placeholder: 'Custom themed textarea...',
        modelValue: '',
        theme: {
            textarea:
                'bg-blue-50 border-blue-200 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]',
        },
    },
}

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled textarea...',
        modelValue: 'This textarea is disabled and cannot be edited.',
        disabled: true,
    },
}

export const LargeTextarea: Story = {
    args: {
        placeholder: 'Enter a longer message...',
        modelValue: '',
        theme: {
            textarea: 'min-h-[200px] resize-y',
        },
    },
}

export const CompactTextarea: Story = {
    args: {
        placeholder: 'Short message...',
        modelValue: '',
        theme: {
            textarea: 'min-h-[80px] max-h-[120px]',
        },
    },
}
