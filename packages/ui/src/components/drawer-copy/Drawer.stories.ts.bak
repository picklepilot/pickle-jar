import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Drawer from './Drawer.vue'
import DrawerHeader from './DrawerHeader.vue'
import DrawerTitle from './DrawerTitle.vue'
import DrawerBody from './DrawerBody.vue'
import DrawerFooter from './DrawerFooter.vue'
import Button from '../button/Button.vue'

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: { type: 'select' },
            options: ['left', 'right', 'top', 'bottom'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'default', 'lg', 'xl', 'full'],
        },
        open: {
            control: { type: 'boolean' },
        },
        closeOnBackdropClick: {
            control: { type: 'boolean' },
        },
        closeOnEscape: {
            control: { type: 'boolean' },
        },
        preventBodyScroll: {
            control: { type: 'boolean' },
        },
        showCloseButton: {
            control: { type: 'boolean' },
        },
        dragToClose: {
            control: { type: 'boolean' },
        },
        dragThreshold: {
            control: { type: 'number' },
        },
        velocityThreshold: {
            control: { type: 'number', min: 0.1, max: 2, step: 0.1 },
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Drawer Title</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p class="mb-4">This is the drawer content. You can put any content here.</p>
                        <p class="mb-4">The drawer slides in from the right by default and includes a backdrop.</p>
                        <p>You can close it by clicking the X button, pressing Escape, or clicking the backdrop.</p>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" @click="isOpen = false">Cancel</Button>
                        <Button @click="isOpen = false">Save</Button>
                    </DrawerFooter>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        size: 'default',
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        showCloseButton: true,
        dragToClose: true,
        dragThreshold: 100,
        velocityThreshold: 0.5,
    },
}

export const LeftPosition: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Left Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Left Drawer</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>This drawer slides in from the left side.</p>
                    </DrawerBody>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'left',
        size: 'default',
    },
}

export const TopPosition: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Top Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Top Drawer</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>This drawer slides in from the top.</p>
                    </DrawerBody>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'top',
        size: 'default',
    },
}

export const BottomPosition: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Bottom Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Bottom Drawer</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>This drawer slides in from the bottom.</p>
                    </DrawerBody>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'bottom',
        size: 'default',
    },
}

export const DifferentSizes: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            const currentSize = ref('default')
            const sizes = ['sm', 'default', 'lg', 'xl', 'full']

            const openDrawer = (size: string) => {
                currentSize.value = size
                isOpen.value = true
            }

            return { args, isOpen, currentSize, sizes, openDrawer }
        },
        template: `
            <div class="space-y-2">
                <div class="flex flex-wrap gap-2">
                    <Button v-for="size in sizes" :key="size" @click="openDrawer(size)">
                        Open {{ size }} Drawer
                    </Button>
                </div>
                <Drawer v-bind="args" :open="isOpen" :size="currentSize" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>{{ currentSize }} Drawer</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>This is a {{ currentSize }} sized drawer.</p>
                        <p>Try different sizes to see how the drawer adapts.</p>
                    </DrawerBody>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        showCloseButton: true,
    },
}

export const WithoutCloseButton: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>No Close Button</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>This drawer doesn't have a close button in the header.</p>
                        <p>You can still close it with Escape or backdrop click.</p>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button @click="isOpen = false">Close</Button>
                    </DrawerFooter>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        size: 'default',
        showCloseButton: false,
        closeOnBackdropClick: true,
        closeOnEscape: true,
    },
}

export const CustomTheme: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Custom Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Custom Theme</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>This drawer has custom theme styling applied.</p>
                    </DrawerBody>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        size: 'default',
        theme: {
            backdrop: 'bg-blue-500/20',
            container: 'bg-blue-50 border-blue-200',
            content: 'text-blue-900',
            closeButton: 'text-blue-600 hover:bg-blue-100',
        },
    },
}

export const DragToClose: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Draggable Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Drag to Close</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p class="mb-4">This drawer supports drag-to-close functionality!</p>
                        <p class="mb-4">Try dragging the handle at the top to close the drawer.</p>
                        <p class="mb-4">You can also adjust the drag threshold and disable drag-to-close if needed.</p>
                        <div class="space-y-2">
                            <p><strong>Features:</strong></p>
                            <ul class="list-disc list-inside space-y-1 text-sm">
                                <li>Grab the handle and drag to close</li>
                                <li>Smooth animations with resistance</li>
                                <li>Haptic feedback on mobile devices</li>
                                <li>Configurable drag threshold</li>
                                <li>Works with all drawer positions</li>
                            </ul>
                        </div>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" @click="isOpen = false">Cancel</Button>
                        <Button @click="isOpen = false">Save</Button>
                    </DrawerFooter>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        size: 'default',
        dragToClose: true,
        dragThreshold: 100,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        showCloseButton: true,
    },
}

export const DragToCloseDisabled: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Non-Draggable Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Drag Disabled</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p class="mb-4">This drawer has drag-to-close disabled.</p>
                        <p>You can only close it using the X button, Escape key, or backdrop click.</p>
                    </DrawerBody>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        size: 'default',
        dragToClose: false,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        showCloseButton: true,
    },
}

export const CustomDragThreshold: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open High Threshold Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>High Drag Threshold</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p class="mb-4">This drawer requires a longer drag distance to close.</p>
                        <p class="mb-4">You need to drag at least 200px to trigger the close action.</p>
                        <p>Try dragging the handle - you'll notice it requires more effort to close.</p>
                    </DrawerBody>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        size: 'default',
        dragToClose: true,
        dragThreshold: 200,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        showCloseButton: true,
    },
}

export const MomentumDrag: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Momentum Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Momentum Drag Demo</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <div class="space-y-4">
                            <p class="text-sm text-muted-foreground">
                                Try these drag interactions:
                            </p>
                            <ul class="text-sm space-y-2">
                                <li>• <strong>Slow drag:</strong> Drag slowly to the right to close</li>
                                <li>• <strong>Quick flick:</strong> Flick quickly to close with momentum</li>
                                <li>• <strong>Opposite direction:</strong> Try dragging left - notice the dampening</li>
                                <li>• <strong>Snap behavior:</strong> Always snaps to fully open or closed</li>
                            </ul>
                            <div class="p-4 bg-muted rounded-lg">
                                <p class="text-xs text-muted-foreground mb-2">Current settings:</p>
                                <p class="text-xs">Drag Threshold: {{ args.dragThreshold }}px</p>
                                <p class="text-xs">Velocity Threshold: {{ args.velocityThreshold }}</p>
                            </div>
                        </div>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" @click="isOpen = false">Close</Button>
                    </DrawerFooter>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        size: 'default',
        dragToClose: true,
        dragThreshold: 80,
        velocityThreshold: 0.3,
    },
}

export const SensitiveDrag: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Sensitive Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Sensitive Drag</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p class="mb-4">This drawer is very sensitive to drag gestures.</p>
                        <p class="text-sm text-muted-foreground">
                            Low drag threshold (50px) and velocity threshold (0.2) make it easy to close with small gestures.
                        </p>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" @click="isOpen = false">Close</Button>
                    </DrawerFooter>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        size: 'default',
        dragToClose: true,
        dragThreshold: 50,
        velocityThreshold: 0.2,
    },
}

export const ResistantDrag: Story = {
    render: args => ({
        components: {
            Drawer,
            DrawerHeader,
            DrawerTitle,
            DrawerBody,
            DrawerFooter,
            Button,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true">Open Resistant Drawer</Button>
                <Drawer v-bind="args" :open="isOpen" @update:open="isOpen = $event">
                    <DrawerHeader @close="isOpen = false" @update:open="isOpen = $event">
                        <DrawerTitle>Resistant Drag</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p class="mb-4">This drawer requires more deliberate gestures to close.</p>
                        <p class="text-sm text-muted-foreground">
                            High drag threshold (150px) and velocity threshold (0.8) require intentional gestures.
                        </p>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" @click="isOpen = false">Close</Button>
                    </DrawerFooter>
                </Drawer>
            </div>
        `,
    }),
    args: {
        position: 'right',
        size: 'default',
        dragToClose: true,
        dragThreshold: 150,
        velocityThreshold: 0.8,
    },
}
