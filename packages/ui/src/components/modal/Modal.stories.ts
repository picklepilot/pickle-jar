import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Modal from './Modal.vue'
import Button from '../button/Button.vue'
import ModalHeader from './ModalHeader.vue'
import ModalTitle from './ModalTitle.vue'
import ModalBody from './ModalBody.vue'
import ModalFooter from './ModalFooter.vue'

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A modal dialog component with smooth animations and accessibility features.',
            },
        },
    },
    argTypes: {
        open: {
            control: 'boolean',
            description: 'Controls whether the modal is open or closed',
        },
        size: {
            control: 'select',
            options: ['sm', 'default', 'lg', 'xl', 'full'],
            description: 'The size of the modal',
        },
        showCloseButton: {
            control: 'boolean',
            description: 'Whether to show the close button in the header',
        },
        closeOnBackdropClick: {
            control: 'boolean',
            description: 'Whether clicking the backdrop closes the modal',
        },
        closeOnEscape: {
            control: 'boolean',
            description: 'Whether pressing the Escape key closes the modal',
        },
        preventBodyScroll: {
            control: 'boolean',
            description: 'Whether to prevent body scroll when modal is open',
        },
        closeButtonLabel: {
            control: 'text',
            description: 'The aria-label for the close button',
        },
    },
    args: {
        open: false,
        size: 'default',
        showCloseButton: true,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        preventBodyScroll: true,
        closeButtonLabel: 'Close modal',
    },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Modal Story
export const Basic: Story = {
    render: args => ({
        components: {
            Modal,
            Button,
        },
        setup() {
            const isOpen = ref(args.open)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true" variant="outline">
                    Open Modal
                </Button>
                    
                <Modal v-bind="args" v-model:open="isOpen" @close="isOpen = false">
                    <div class="p-6">
                        <div class="mb-4">
                            <h2 class="text-lg font-semibold text-foreground">Basic Modal</h2>
                        </div>
                        <div class="mb-6">
                            <p class="text-muted-foreground text-sm">
                                This is a basic modal dialog. You can close it by clicking the X button, 
                                pressing Escape, or clicking outside the modal.
                            </p>
                        </div>
                        <div class="flex justify-end gap-3">
                            <Button variant="ghost" @click="isOpen = false">
                                Cancel
                            </Button>
                            <Button @click="isOpen = false">
                                Confirm
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
        `,
    }),
}

// Modal with Custom Header
export const CustomHeader: Story = {
    render: args => ({
        components: {
            Modal,
            Button,
            ModalHeader,
            ModalTitle,
            ModalBody,
            ModalFooter,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true" variant="default">
                    Open Modal with Custom Header
                </Button>
                
                <Modal v-bind="args" v-model:open="isOpen" @close="isOpen = false">
                    <ModalHeader>
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <ModalTitle>Custom Header</ModalTitle>
                                <p class="text-sm text-muted-foreground">With icon and subtitle</p>
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <p class="text-muted-foreground">
                            This modal has a custom header with an icon and subtitle. The header slot 
                            allows you to completely customize the header content.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" @click="isOpen = false">
                            Cancel
                        </Button>
                        <Button @click="isOpen = false">
                            Save Changes
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        `,
    }),
}

// Modal Sizes
export const Sizes: Story = {
    render: args => ({
        components: {
            Modal,
            Button,
            ModalHeader,
            ModalTitle,
            ModalBody,
            ModalFooter,
        },
        setup() {
            const currentSize = ref<'sm' | 'default' | 'lg' | 'xl' | 'full'>(
                'default'
            )
            const isOpen = ref(false)

            const openModal = (size: typeof currentSize.value) => {
                currentSize.value = size
                isOpen.value = true
            }

            return { args, isOpen, currentSize, openModal }
        },
        template: `
            <div class="flex flex-wrap gap-3">
                <Button @click="openModal('sm')" variant="outline">
                    Small Modal
                </Button>
                <Button @click="openModal('default')" variant="outline">
                    Default Modal
                </Button>
                <Button @click="openModal('lg')" variant="outline">
                    Large Modal
                </Button>
                <Button @click="openModal('xl')" variant="outline">
                    Extra Large Modal
                </Button>
                <Button @click="openModal('full')" variant="outline">
                    Full Screen Modal
                </Button>
                
                <Modal 
                    v-bind="args" 
                    :size="currentSize"
                    v-model:open="isOpen" 
                    @close="isOpen = false"
                >
                    <ModalHeader>
                        <ModalTitle>{{ currentSize.charAt(0).toUpperCase() + currentSize.slice(1) }} Modal</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <p class="text-muted-foreground">
                            This is a <strong>{{ currentSize }}</strong> modal. The size prop controls the maximum width 
                            and height of the modal.
                        </p>
                        <div class="mt-4 p-4 bg-muted rounded-md">
                            <p class="text-sm text-muted-foreground">
                                Modal sizes:
                            </p>
                            <ul class="text-sm text-muted-foreground mt-2 space-y-1">
                                <li><strong>sm:</strong> max-w-md</li>
                                <li><strong>default:</strong> max-w-lg</li>
                                <li><strong>lg:</strong> max-w-2xl</li>
                                <li><strong>xl:</strong> max-w-4xl</li>
                                <li><strong>full:</strong> max-w-[95vw] max-h-[95vh]</li>
                            </ul>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" @click="isOpen = false">
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        `,
    }),
}

// Modal without Close Button
export const NoCloseButton: Story = {
    render: args => ({
        components: {
            Modal,
            Button,
            ModalHeader,
            ModalTitle,
            ModalBody,
            ModalFooter,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <Button @click="isOpen = true" variant="default">
                    Open Modal (No Close Button)
                </Button>
                
                <Modal 
                    v-bind="args" 
                    :show-close-button="false"
                    v-model:open="isOpen" 
                    @close="isOpen = false"
                >
                    <ModalHeader>
                        <ModalTitle>Modal Without Close Button</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <p class="text-muted-foreground">
                            This modal doesn't have a close button in the header. Users can only close it 
                            by clicking the buttons in the footer, pressing Escape, or clicking outside the modal.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" @click="isOpen = false">
                            Cancel
                        </Button>
                        <Button @click="isOpen = false">
                            Confirm Action
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        `,
    }),
}

// Modal with Long Content
export const LongContent: Story = {
    render: args => ({
        components: {
            Modal,
            Button,
            ModalHeader,
            ModalTitle,
            ModalBody,
            ModalFooter,
        },
        setup() {
            const isOpen = ref(false)
            const scrollPosition = ref(0)
            const isScrollable = ref(false)
            const contentRef = ref<HTMLElement>()

            const handleScroll = (event: Event) => {
                const target = event.target as HTMLElement
                scrollPosition.value = target.scrollTop
                isScrollable.value = target.scrollHeight > target.clientHeight
            }

            const scrollToBottom = () => {
                if (contentRef.value) {
                    contentRef.value.scrollTop = contentRef.value.scrollHeight
                }
            }

            const scrollToTop = () => {
                if (contentRef.value) {
                    contentRef.value.scrollTop = 0
                }
            }

            return {
                args,
                isOpen,
                scrollPosition,
                isScrollable,
                contentRef,
                handleScroll,
                scrollToBottom,
                scrollToTop,
            }
        },
        template: `
            <div>
                <Button @click="isOpen = true" variant="default">
                    Open Modal with Long Content
                </Button>
                
                <Modal v-bind="args" v-model:open="isOpen" @close="isOpen = false">
                    <ModalHeader>
                        <ModalTitle>Modal with Scrollable Content</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div 
                            ref="contentRef"
                            @scroll="handleScroll"
                            class="space-y-4 max-h-96 overflow-y-auto"
                        >
                            <p class="text-muted-foreground">
                                This modal contains a lot of content to demonstrate scrolling behavior.
                            </p>
                            <div v-for="i in 20" :key="i" class="p-4 bg-muted rounded-md">
                                <h3 class="font-medium text-foreground">Section {{ i }}</h3>
                                <p class="text-sm text-muted-foreground mt-1">
                                    This is section {{ i }} of the modal content. The modal will scroll 
                                    when the content exceeds the available height.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Scroll Test Controls -->
                        <div class="mt-4 p-4 bg-blue-50 rounded-md">
                            <h4 class="font-medium mb-2 text-blue-900">Scroll Test Controls:</h4>
                            <div class="flex flex-wrap gap-2 mb-2">
                                <Button @click="scrollToTop" variant="outline" size="sm">
                                    Scroll to Top
                                </Button>
                                <Button @click="scrollToBottom" variant="outline" size="sm">
                                    Scroll to Bottom
                                </Button>
                            </div>
                            <div class="text-sm text-blue-800 space-y-1">
                                <p><strong>Scroll Position:</strong> {{ scrollPosition }}px</p>
                                <p><strong>Is Scrollable:</strong> {{ isScrollable ? 'Yes' : 'No' }}</p>
                                <p><strong>Content Height:</strong> {{ contentRef?.scrollHeight || 0 }}px</p>
                                <p><strong>Visible Height:</strong> {{ contentRef?.clientHeight || 0 }}px</p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" @click="isOpen = false">
                            Cancel
                        </Button>
                        <Button @click="isOpen = false">
                            Save All
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        `,
    }),
}

// Modal with Form
export const WithForm: Story = {
    render: args => ({
        components: {
            Modal,
            Button,
            ModalHeader,
            ModalTitle,
            ModalBody,
            ModalFooter,
        },
        setup() {
            const isOpen = ref(false)
            const formData = ref({
                name: '',
                email: '',
                message: '',
            })

            const handleSubmit = () => {
                console.log('Form submitted:', formData.value)
                isOpen.value = false
            }

            return { args, isOpen, formData, handleSubmit }
        },
        template: `
            <div>
                <Button @click="isOpen = true" variant="default">
                    Open Form Modal
                </Button>
                
                <Modal v-bind="args" v-model:open="isOpen" @close="isOpen = false">
                    <ModalHeader>
                        <ModalTitle>Contact Form</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <form @submit.prevent="handleSubmit" class="space-y-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-foreground mb-1">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    v-model="formData.name"
                                    type="text"
                                    class="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-foreground mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    v-model="formData.email"
                                    type="email"
                                    class="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-foreground mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    v-model="formData.message"
                                    rows="4"
                                    class="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                                    required
                                ></textarea>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" @click="isOpen = false">
                            Cancel
                        </Button>
                        <Button @click="handleSubmit">
                            Send Message
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        `,
    }),
}

// Controlled Modal
export const Controlled: Story = {
    render: args => ({
        components: {
            Modal,
            Button,
            ModalHeader,
            ModalTitle,
            ModalBody,
            ModalFooter,
        },
        setup() {
            const isOpen = ref(false)
            return { args, isOpen }
        },
        template: `
            <div>
                <div class="flex gap-3 mb-4">
                    <Button @click="isOpen = true" variant="default">
                        Open Modal
                    </Button>
                    <Button @click="isOpen = false" variant="outline">
                        Close Modal
                    </Button>
                </div>
                
                <p class="text-sm text-muted-foreground mb-4">
                    Modal state: <strong>{{ isOpen ? 'Open' : 'Closed' }}</strong>
                </p>
                
                <Modal v-bind="args" v-model:open="isOpen" @close="isOpen = false">
                    <ModalHeader>
                        <ModalTitle>Controlled Modal</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <p class="text-muted-foreground">
                            This modal's open state is controlled externally. You can open and close it 
                            using the buttons above, or use the modal's built-in close mechanisms.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" @click="isOpen = false">
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        `,
    }),
}

// Z-Index Customization Story
export const ZIndexCustomization: Story = {
    render: args => ({
        components: {
            Modal,
            Button,
            ModalHeader,
            ModalTitle,
            ModalBody,
            ModalFooter,
        },
        setup() {
            const isOpen = ref(false)
            const customZIndex = ref(2000)

            const setCustomZIndex = () => {
                // Set custom z-index values
                document.documentElement.style.setProperty(
                    '--z-index-modal-backdrop',
                    (customZIndex.value - 10).toString()
                )
                document.documentElement.style.setProperty(
                    '--z-index-modal',
                    customZIndex.value.toString()
                )
            }

            const resetZIndex = () => {
                // Reset to default values
                document.documentElement.style.setProperty(
                    '--z-index-modal-backdrop',
                    '1040'
                )
                document.documentElement.style.setProperty(
                    '--z-index-modal',
                    '1050'
                )
            }

            return { args, isOpen, customZIndex, setCustomZIndex, resetZIndex }
        },
        template: `
            <div class="space-y-4">
                <div class="flex flex-wrap gap-3">
                    <Button @click="isOpen = true" variant="default">
                        Open Modal
                    </Button>
                    <Button @click="setCustomZIndex" variant="outline">
                        Set Custom Z-Index ({{ customZIndex }})
                    </Button>
                    <Button @click="resetZIndex" variant="outline">
                        Reset Z-Index
                    </Button>
                </div>
                
                <div class="p-4 bg-muted rounded-md">
                    <p class="text-sm text-muted-foreground mb-2">
                        This example demonstrates how to customize z-index values using CSS custom properties.
                    </p>
                    <div class="flex items-center gap-2">
                        <label for="zindex" class="text-sm font-medium">Custom Z-Index:</label>
                        <input 
                            id="zindex"
                            v-model.number="customZIndex" 
                            type="number" 
                            min="1000" 
                            max="9999"
                            class="w-20 px-2 py-1 text-sm border rounded"
                        />
                    </div>
                </div>
                
                <Modal v-bind="args" v-model:open="isOpen" @close="isOpen = false">
                    <ModalHeader>
                        <ModalTitle>Z-Index Customization</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div class="space-y-4">
                            <p class="text-muted-foreground">
                                This modal demonstrates z-index customization. You can set custom z-index values 
                                using CSS custom properties or the utility functions.
                            </p>
                            <div class="p-4 bg-muted rounded-md">
                                <h4 class="font-medium mb-2">Current Z-Index Values:</h4>
                                <ul class="text-sm text-muted-foreground space-y-1">
                                    <li><strong>Modal Backdrop:</strong> var(--z-modal-backdrop)</li>
                                    <li><strong>Modal Content:</strong> var(--z-modal)</li>
                                </ul>
                            </div>
                            <div class="p-4 bg-blue-50 rounded-md">
                                <h4 class="font-medium mb-2 text-blue-900">Usage Example:</h4>
                                <pre class="text-xs text-blue-800 bg-blue-100 p-2 rounded overflow-x-auto">
import { setZIndex } from '@pickle-jar/core/utils'

// Set custom z-index values
setZIndex('modal', 2000)
setZIndex('modalBackdrop', 1990)
                                </pre>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" @click="isOpen = false">
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        `,
    }),
}
