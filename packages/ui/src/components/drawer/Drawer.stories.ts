import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '../button/Button.ts'
import { Drawer, DrawerContent, DrawerTrigger } from './index'

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A customizable checkbox component with accessibility features and theme support.',
            },
        },
    },
    argTypes: {},
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Basic checkbox
export const Default: Story = {
    args: {},
    render: args => ({
        components: { Button, Drawer, DrawerContent, DrawerTrigger },
        setup() {
            return { args }
        },
        template: `
            <Drawer>
                <template #trigger>
                    <DrawerTrigger>
                        <Button>Open</Button>
                    </DrawerTrigger>
                </template>
                <DrawerContent class="max-h-[50%]">
                    <div class="mx-auto w-full max-w-md border rounded-lg p-4">
                        <p>Content</p>
                    </div>
                </DrawerContent>
            </Drawer>
        `,
    }),
}
