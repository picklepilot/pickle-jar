import type { Meta, StoryObj } from '@storybook/vue3'
import BaseDropdownMenu from '../components/BaseDropdownMenu.vue'

const meta = {
    title: 'Components/BaseDropdownMenu',
    component: BaseDropdownMenu,
    tags: ['autodocs'],
    argTypes: {
        allowedPlacements: {
            control: 'select',
            options: [
                ['top-start', 'bottom-start'],
                ['top-end', 'bottom-end'],
                ['right-start', 'left-start'],
                ['right-end', 'left-end'],
            ],
            description: 'Allowed placement positions for the dropdown menu',
        },
        buffer: {
            control: 'number',
            description: 'Buffer space around the dropdown menu',
        },
        offset: {
            control: 'number',
            description: 'Offset from the trigger element',
        },
        items: {
            control: 'object',
            description: 'Array of menu item groups',
        },
    },
} satisfies Meta<typeof BaseDropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        floatingOptions: {
            strategy: 'fixed',
        },
        items: [
            [
                {
                    label: 'Edit',
                    icon: 'fa-pen',
                    onClick: () => console.log('Edit clicked'),
                },
                {
                    label: 'Duplicate',
                    icon: 'fa-copy',
                    onClick: () => console.log('Duplicate clicked'),
                },
            ],
            [
                {
                    label: 'Archive',
                    icon: 'fa-box-archive',
                    onClick: () => console.log('Archive clicked'),
                },
                {
                    label: 'Delete',
                    icon: 'fa-trash',
                    onClick: () => console.log('Delete clicked'),
                },
            ],
        ],
    },
    render: (args) => ({
        components: { BaseDropdownMenu },
        setup() {
            return { args }
        },
        template: `
            <div class="p-4">
                <BaseDropdownMenu v-bind="args">
                    <template #trigger>
                        <button class="px-4 py-2 bg-blue-500 text-white rounded">
                            Open Menu
                        </button>
                    </template>
                </BaseDropdownMenu>
            </div>
        `,
    }),
}
