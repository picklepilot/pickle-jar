import type { Meta, StoryObj } from '@storybook/vue3'
import ConfirmationDialog from './ConfirmationDialog.vue'
import BaseButton from '../../components/BaseButton.vue'
import { ref } from 'vue'

const meta: Meta<typeof ConfirmationDialog> = {
    title: 'Modules/ConfirmationDialog',
    component: ConfirmationDialog,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: 'boolean',
            description: 'Controls the visibility of the dialog',
        },
        title: {
            control: 'text',
            description: 'The title of the dialog',
        },
        description: {
            control: 'text',
            description: 'The description text shown in the dialog',
        },
        confirmButtonText: {
            control: 'text',
            description: 'Text for the confirm button',
        },
        cancelButtonText: {
            control: 'text',
            description: 'Text for the cancel button',
        },
        processing: {
            control: 'boolean',
            description: 'Whether the dialog is in processing state',
        },
    },
    decorators: [
        story => ({
            components: { story },
            template: '<div style="min-height: 400px;"><story /></div>',
        }),
    ],
} satisfies Meta<typeof ConfirmationDialog>

export default meta
type Story = StoryObj<typeof meta>

// Basic story with default values
export const Default: Story = {
    render: args => ({
        components: { BaseButton, ConfirmationDialog },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <BaseButton
                    variant="default"
                    @click="isOpen = true"
                >
                    Open Dialog
                </BaseButton>
                <ConfirmationDialog
                    v-model="isOpen"
                    v-bind="args"
                />
            </div>
        `,
    }),
    args: {
        title: 'Confirm Action',
        description: 'Are you sure you want to proceed with this action?',
        onConfirm: () => {
            console.log('Confirmed')
            setTimeout(() => {
                console.log('Confirmed')
            }, 1000)
        },
        onCancel: () => console.log('Cancelled'),
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        processing: false,
    },
}

// Story with custom button text and theme
export const CustomButtons: Story = {
    render: args => ({
        components: { ConfirmationDialog },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <button
                    class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    @click="isOpen = true"
                >
                    Delete Item
                </button>
                <ConfirmationDialog
                    v-model="isOpen"
                    v-bind="args"
                />
            </div>
        `,
    }),
    args: {
        title: 'Delete Item',
        description:
            'This action cannot be undone. Are you sure you want to delete this item?',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Keep',
        onConfirm: () => console.log('Deleted'),
        onCancel: () => console.log('Cancelled'),
    },
}

// Story with processing state
export const Processing: Story = {
    render: args => ({
        components: { ConfirmationDialog },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <button
                    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    @click="isOpen = true"
                >
                    Process Item
                </button>
                <ConfirmationDialog
                    v-model="isOpen"
                    v-bind="args"
                >
                    <template #processing>
                        <div class="flex items-center space-x-2">
                            <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-zinc-900"></div>
                            <span class="text-zinc-600">Processing...</span>
                        </div>
                    </template>
                </ConfirmationDialog>
            </div>
        `,
    }),
    args: {
        title: 'Processing Action',
        description: 'Please wait while we process your request...',
        processing: true,
        onConfirm: () => console.log('Processing'),
        onCancel: () => console.log('Cancelled'),
    },
}
