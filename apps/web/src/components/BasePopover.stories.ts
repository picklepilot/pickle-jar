import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BasePopover from './BasePopover.vue'
import { ref } from 'vue'

const meta = {
    title: 'Components/BasePopover',
    component: BasePopover,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: 'boolean',
            description: 'Controls whether the popover is open',
        },
        allowedPlacements: {
            control: 'select',
            options: [
                ['top-start', 'bottom-start'],
                ['top', 'bottom'],
                ['top-end', 'bottom-end'],
                ['left-start', 'right-start'],
                ['left', 'right'],
                ['left-end', 'right-end'],
            ],
            description: 'Allowed placement positions for the popover',
        },
        floatingOptions: {
            control: 'object',
            description: 'Configuration options for floating UI',
        },
        theme: {
            control: 'object',
            description: 'Theme configuration for styling the popover',
        },
    },
} satisfies Meta<typeof BasePopover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: args => ({
        components: { BasePopover },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <BasePopover v-bind="args" v-model:open="isOpen">
                <template #trigger>
                    <button class="px-4 py-2 bg-blue-500 text-white rounded-md">
                        Click me
                    </button>
                </template>
                <template #default="{ close }">
                    <div class="p-4" @click="close">
                        <h3 class="text-lg font-semibold mb-2 text-[var(--card-foreground)]">
                            Popover Content
                        </h3>
                        <p class="text-[var(--card-foreground)]/60">This is the default popover content.</p>
                    </div>
                </template>
            </BasePopover>
        `,
    }),
    args: {
        open: false,
        allowedPlacements: ['top-start', 'bottom-start'],
    },
}

export const WithContext: Story = {
    render: args => ({
        components: { BasePopover },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <BasePopover v-bind="args" v-model:open="isOpen">
                <template #trigger>
                    <button class="px-4 py-2 bg-orange-500 text-white rounded-md">
                        With Context
                    </button>
                </template>
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-2">Context Data</h3>
                    <p class="text-zinc-600">Context: {{ args.context }}</p>
                </div>
            </BasePopover>
        `,
    }),
    args: {
        open: false,
        context: { message: 'Hello from context!' },
    },
}
