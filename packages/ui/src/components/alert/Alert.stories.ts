import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from './Alert.vue'

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
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Information</template>
                <template #body>This is an informational alert message.</template>
            </Alert>
        `,
    }),
}

export const Info: Story = {
    args: {
        variant: 'info',
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Information</template>
                <template #body>This is an informational alert message.</template>
            </Alert>
        `,
    }),
}

export const Processing: Story = {
    args: {
        variant: 'processing',
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Processing</template>
                <template #body>Please wait while we process your request.</template>
            </Alert>
        `,
    }),
}

export const Warning: Story = {
    args: {
        variant: 'warning',
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Warning</template>
                <template #body>Please review your input before proceeding.</template>
            </Alert>
        `,
    }),
}

export const Error: Story = {
    args: {
        variant: 'error',
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Error</template>
                <template #body>Something went wrong. Please try again.</template>
            </Alert>
        `,
    }),
}

export const Success: Story = {
    args: {
        variant: 'success',
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Success</template>
                <template #body>Your action was completed successfully.</template>
            </Alert>
        `,
    }),
}

export const Muted: Story = {
    args: {
        variant: 'muted',
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Note</template>
                <template #body>This is a muted informational message.</template>
            </Alert>
        `,
    }),
}

export const Dismissable: Story = {
    args: {
        variant: 'info',
        dismissable: true,
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args" @close="handleClose">
                <template #title>Dismissable Alert</template>
                <template #body>This alert can be dismissed by clicking the X button.</template>
            </Alert>
        `,
        methods: {
            handleClose(value: boolean) {
                console.log('Alert closed:', value)
            },
        },
    }),
}

export const WithIcon: Story = {
    args: {
        variant: 'success',
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #icon>
                    <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </template>
                <template #title>Success with Icon</template>
                <template #body>This alert includes a custom icon.</template>
            </Alert>
        `,
    }),
}

export const WithAction: Story = {
    args: {
        variant: 'warning',
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Warning with Action</template>
                <template #body>This alert includes an action button.</template>
                <template #action>
                    <button class="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700">
                        Take Action
                    </button>
                </template>
            </Alert>
        `,
    }),
}

export const Flush: Story = {
    args: {
        variant: 'info',
        flush: true,
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Flush Alert</template>
                <template #body>This alert has no rounded corners.</template>
            </Alert>
        `,
    }),
}

export const AllVariants: Story = {
    render: () => ({
        components: { Alert },
        template: `
            <div class="space-y-4">
                <Alert variant="info">
                    <template #title>Information</template>
                    <template #body>This is an informational alert message.</template>
                </Alert>
                <Alert variant="processing">
                    <template #title>Processing</template>
                    <template #body>Please wait while we process your request.</template>
                </Alert>
                <Alert variant="warning">
                    <template #title>Warning</template>
                    <template #body>Please review your input before proceeding.</template>
                </Alert>
                <Alert variant="error">
                    <template #title>Error</template>
                    <template #body>Something went wrong. Please try again.</template>
                </Alert>
                <Alert variant="success">
                    <template #title>Success</template>
                    <template #body>Your action was completed successfully.</template>
                </Alert>
                <Alert variant="muted">
                    <template #title>Note</template>
                    <template #body>This is a muted informational message.</template>
                </Alert>
            </div>
        `,
    }),
}

export const WithCustomTheme: Story = {
    args: {
        theme: {
            alert: 'shadow-lg border-l-4 border-blue-500 bg-blue-50',
        },
    },
    render: args => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
            <Alert v-bind="args">
                <template #title>Custom Theme</template>
                <template #body>This alert uses a custom theme with enhanced styling.</template>
            </Alert>
        `,
    }),
}
