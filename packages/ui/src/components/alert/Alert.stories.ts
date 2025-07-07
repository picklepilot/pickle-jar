import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from './Alert.vue'
import AlertTitle from './AlertTitle.vue'
import AlertDescription from './AlertDescription.vue'
import AlertIcon from './AlertIcon.vue'
import { InfoIcon } from 'lucide-vue-next'

const meta = {
    title: 'Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'info',
                'processing',
                'warning',
                'error',
                'success',
                'muted',
            ],
        },
        dismissable: {
            control: 'boolean',
        },
        flush: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'info',
    },
    render: args => ({
        components: {
            Alert,
            AlertTitle,
            AlertDescription,
            AlertIcon,
            InfoIcon,
        },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <InfoIcon class="size-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is an informational alert message.</AlertDescription>
            </Alert>
        `,
    }),
}
