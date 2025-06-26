import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'
import InputText from '../components/InputText.vue'

const meta: Meta<typeof InputText> = {
    title: 'Components/InputText',
    component: InputText,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'Input name attribute',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
        },
        debounce: {
            control: 'number',
            description: 'Debounce delay in milliseconds (0 = no debouncing)',
            min: 0,
            max: 2000,
            step: 100,
        },
        classes: {
            control: 'object',
            description: 'Additional CSS classes',
        },
        theme: {
            control: 'object',
            description: 'Theme overrides',
        },
        modelValue: {
            control: 'text',
            description: 'Input value (v-model)',
        },
    },
    args: {
        name: 'example-input',
        placeholder: 'Enter text here...',
        debounce: 0,
        classes: [],
        theme: {
            inputText: '',
        },
        modelValue: '',
        'onBlur-xs': fn(),
        onEnter: fn(),
        onFocus: fn(),
        'onUpdate:modelValue': fn(),
    },
    parameters: {
        docs: {
            description: {
                component:
                    'A text input component with optional debouncing, theming support, and event handling.',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'default-input',
        placeholder: 'Type something...',
    },
}

export const WithPlaceholder: Story = {
    args: {
        name: 'placeholder-input',
        placeholder: 'Enter your full name',
    },
}

export const WithDebouncing: Story = {
    args: {
        name: 'debounced-input',
        placeholder: 'Type with 500ms debounce...',
        debounce: 500,
    },
    parameters: {
        docs: {
            description: {
                story: 'This input has a 500ms debounce delay. The value will only update after you stop typing for 500ms.',
            },
        },
    },
}

export const WithCustomClasses: Story = {
    args: {
        name: 'custom-classes-input',
        placeholder: 'Custom styled input',
        classes: ['bg-blue-50', 'border-blue-300', 'focus:border-blue-500'],
    },
    parameters: {
        docs: {
            description: {
                story: 'This input has custom CSS classes applied for different styling.',
            },
        },
    },
}

export const WithValue: Story = {
    args: {
        name: 'value-input',
        placeholder: 'This input has a default value',
        modelValue: 'Hello, World!',
    },
}

export const Disabled: Story = {
    args: {
        name: 'disabled-input',
        placeholder: 'This input is disabled',
        modelValue: 'Disabled value',
        classes: ['opacity-50', 'cursor-not-allowed'],
    },
    parameters: {
        docs: {
            description: {
                story: 'This input appears disabled with reduced opacity and a not-allowed cursor.',
            },
        },
    },
}

export const WithEvents: Story = {
    args: {
        name: 'events-input',
        placeholder: 'Check the Actions panel for events',
    },
    parameters: {
        docs: {
            description: {
                story: 'This input will trigger events that you can see in the Actions panel. Try focusing, typing, pressing Enter, and blurring the input.',
            },
        },
    },
}

export const Interactive: Story = {
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args }
        },
        template: `
            <div class="space-y-4 p-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Interactive Input with Live Preview
                    </label>
                    <InputText v-bind="args" />
                </div>
                <div class="text-sm text-gray-600">
                    <p><strong>Current value:</strong> {{ args.modelValue || '(empty)' }}</p>
                    <p><strong>Debounce:</strong> {{ args.debounce }}ms</p>
                </div>
            </div>
        `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'This interactive example shows the current value and debounce setting. Try changing the controls in the Controls panel to see how the input behaves.',
            },
        },
    },
}

export const MultipleInputs: Story = {
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args }
        },
        template: `
            <div class="space-y-4 p-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <InputText 
                        name="name" 
                        placeholder="Enter your name"
                        :debounce="0"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email (with debouncing)</label>
                    <InputText 
                        name="email" 
                        placeholder="Enter your email"
                        :debounce="300"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Search (with debouncing)</label>
                    <InputText 
                        name="search" 
                        placeholder="Search with 500ms debounce..."
                        :debounce="500"
                    />
                </div>
            </div>
        `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Multiple inputs showing different debounce behaviors. The email and search inputs have debouncing enabled.',
            },
        },
    },
}
