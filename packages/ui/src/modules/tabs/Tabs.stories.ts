import type { Meta, StoryObj } from '@storybook/vue3'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './index'
import { ref, computed } from 'vue'
import type { Tab } from '../../types'

const meta = {
    title: 'Modules/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: 'text',
            description: 'The currently active tab value',
        },
        defaultValue: {
            control: 'text',
            description: 'The default active tab value',
        },
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
            description: 'The orientation of the tabs',
        },
        style: {
            control: 'select',
            options: ['classic', 'modern'],
            description: 'Visual style of the tabs',
        },
        disabled: {
            control: 'object',
            description: 'Array of disabled features',
        },
        theme: {
            control: 'object',
            description: 'Custom theme overrides',
        },
    },
    decorators: [
        story => ({
            components: { story },
            template:
                '<div style="min-height: 400px; padding: 20px;"><story /></div>',
        }),
    ],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

// Sample tab data
const sampleTabs: Tab[] = [
    { id: 'account', label: 'Account', active: true, disabled: false },
    { id: 'password', label: 'Password', active: false, disabled: false },
    { id: 'settings', label: 'Settings', active: false, disabled: false },
    { id: 'help', label: 'Help', active: false, disabled: false },
]

export const Default: Story = {
    render: args => ({
        components: { Tabs, TabsList, TabsTrigger, TabsContent },
        setup() {
            const activeTab = ref('account')

            return { activeTab }
        },
        template: `
            <Tabs v-model="activeTab" v-bind="args">
                <TabsList>
                    <template #trigger="{ tab }">
                        <TabsTrigger :tab="tab" />
                    </template>
                </TabsList>
                
                <TabsContent value="account">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Account Settings</h3>
                        <p class="text-gray-600">Make changes to your account here. Click save when you're done.</p>
                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <label for="name">Name</label>
                                <input id="name" type="text" value="Pedro Duarte" class="border rounded px-3 py-2" />
                            </div>
                            <div class="grid gap-2">
                                <label for="username">Username</label>
                                <input id="username" type="text" value="@peduarte" class="border rounded px-3 py-2" />
                            </div>
                        </div>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Save changes
                        </button>
                    </div>
                </TabsContent>
                
                <TabsContent value="password">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Password</h3>
                        <p class="text-gray-600">Change your password here. After saving, you'll be logged out.</p>
                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <label for="current">Current password</label>
                                <input id="current" type="password" class="border rounded px-3 py-2" />
                            </div>
                            <div class="grid gap-2">
                                <label for="new">New password</label>
                                <input id="new" type="password" class="border rounded px-3 py-2" />
                            </div>
                        </div>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Save password
                        </button>
                    </div>
                </TabsContent>
                
                <TabsContent value="settings">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Settings</h3>
                        <p class="text-gray-600">Configure your application preferences.</p>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span>Email Notifications</span>
                                <input type="checkbox" checked class="rounded">
                            </div>
                            <div class="flex items-center justify-between">
                                <span>Dark Mode</span>
                                <input type="checkbox" class="rounded">
                            </div>
                            <div class="flex items-center justify-between">
                                <span>Auto-save</span>
                                <input type="checkbox" checked class="rounded">
                            </div>
                        </div>
                    </div>
                </TabsContent>
                
                <TabsContent value="help">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Help & Support</h3>
                        <p class="text-gray-600">Get help, view documentation, and contact support.</p>
                        <div class="space-y-4">
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h4 class="font-medium text-blue-800 mb-2">📚 Documentation</h4>
                                <p class="text-blue-700 text-sm">Browse our comprehensive documentation and guides.</p>
                            </div>
                            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h4 class="font-medium text-green-800 mb-2">🎥 Video Tutorials</h4>
                                <p class="text-green-700 text-sm">Watch step-by-step video tutorials.</p>
                            </div>
                            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <h4 class="font-medium text-purple-800 mb-2">💬 Contact Support</h4>
                                <p class="text-purple-700 text-sm">Get in touch with our support team.</p>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        `,
    }),
    args: {
        defaultValue: 'account',
        style: 'classic',
        disabled: [],
    },
}

export const ModernStyle: Story = {
    render: args => ({
        components: { Tabs, TabsList, TabsTrigger, TabsContent },
        setup() {
            const activeTab = ref('account')

            return { activeTab }
        },
        template: `
            <Tabs v-model="activeTab" v-bind="args">
                <TabsList>
                    <template #trigger="{ tab }">
                        <TabsTrigger :tab="tab" />
                    </template>
                </TabsList>
                
                <TabsContent value="account">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Account Settings</h3>
                        <p class="text-gray-600">Make changes to your account here. Click save when you're done.</p>
                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <label for="name">Name</label>
                                <input id="name" type="text" value="Pedro Duarte" class="border rounded px-3 py-2" />
                            </div>
                            <div class="grid gap-2">
                                <label for="username">Username</label>
                                <input id="username" type="text" value="@peduarte" class="border rounded px-3 py-2" />
                            </div>
                        </div>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Save changes
                        </button>
                    </div>
                </TabsContent>
                
                <TabsContent value="password">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Password</h3>
                        <p class="text-gray-600">Change your password here. After saving, you'll be logged out.</p>
                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <label for="current">Current password</label>
                                <input id="current" type="password" class="border rounded px-3 py-2" />
                            </div>
                            <div class="grid gap-2">
                                <label for="new">New password</label>
                                <input id="new" type="password" class="border rounded px-3 py-2" />
                            </div>
                        </div>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Save password
                        </button>
                    </div>
                </TabsContent>
                
                <TabsContent value="settings">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Settings</h3>
                        <p class="text-gray-600">Configure your application preferences.</p>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span>Email Notifications</span>
                                <input type="checkbox" checked class="rounded">
                            </div>
                            <div class="flex items-center justify-between">
                                <span>Dark Mode</span>
                                <input type="checkbox" class="rounded">
                            </div>
                            <div class="flex items-center justify-between">
                                <span>Auto-save</span>
                                <input type="checkbox" checked class="rounded">
                            </div>
                        </div>
                    </div>
                </TabsContent>
                
                <TabsContent value="help">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Help & Support</h3>
                        <p class="text-gray-600">Get help, view documentation, and contact support.</p>
                        <div class="space-y-4">
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h4 class="font-medium text-blue-800 mb-2">📚 Documentation</h4>
                                <p class="text-blue-700 text-sm">Browse our comprehensive documentation and guides.</p>
                            </div>
                            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h4 class="font-medium text-green-800 mb-2">🎥 Video Tutorials</h4>
                                <p class="text-green-700 text-sm">Watch step-by-step video tutorials.</p>
                            </div>
                            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <h4 class="font-medium text-purple-800 mb-2">💬 Contact Support</h4>
                                <p class="text-purple-700 text-sm">Get in touch with our support team.</p>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        `,
    }),
    args: {
        defaultValue: 'account',
        style: 'modern',
        disabled: [],
    },
}

export const WithCustomSlots: Story = {
    render: args => ({
        components: { Tabs, TabsList, TabsTrigger, TabsContent },
        setup() {
            const activeTab = ref('account')

            return { activeTab }
        },
        template: `
            <Tabs v-model="activeTab" v-bind="args">
                <TabsList>
                    <template #before>
                        <div class="text-sm text-gray-500 mr-4">Navigation:</div>
                    </template>
                    <template #trigger="{ tab }">
                        <TabsTrigger :tab="tab">
                            <template #left>
                                <span v-if="tab.id === 'account'" class="mr-2">👤</span>
                                <span v-else-if="tab.id === 'password'" class="mr-2">🔒</span>
                                <span v-else-if="tab.id === 'settings'" class="mr-2">⚙️</span>
                                <span v-else-if="tab.id === 'help'" class="mr-2">❓</span>
                            </template>
                        </TabsTrigger>
                    </template>
                    <template #after>
                        <button class="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                            +
                        </button>
                    </template>
                </TabsList>
                
                <TabsContent value="account">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">👤 Account Settings</h3>
                        <p class="text-gray-600">Make changes to your account here. Click save when you're done.</p>
                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <label for="name">Name</label>
                                <input id="name" type="text" value="Pedro Duarte" class="border rounded px-3 py-2" />
                            </div>
                            <div class="grid gap-2">
                                <label for="username">Username</label>
                                <input id="username" type="text" value="@peduarte" class="border rounded px-3 py-2" />
                            </div>
                        </div>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Save changes
                        </button>
                    </div>
                </TabsContent>
                
                <TabsContent value="password">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">🔒 Password</h3>
                        <p class="text-gray-600">Change your password here. After saving, you'll be logged out.</p>
                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <label for="current">Current password</label>
                                <input id="current" type="password" class="border rounded px-3 py-2" />
                            </div>
                            <div class="grid gap-2">
                                <label for="new">New password</label>
                                <input id="new" type="password" class="border rounded px-3 py-2" />
                            </div>
                        </div>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Save password
                        </button>
                    </div>
                </TabsContent>
                
                <TabsContent value="settings">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">⚙️ Settings</h3>
                        <p class="text-gray-600">Configure your application preferences.</p>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span>Email Notifications</span>
                                <input type="checkbox" checked class="rounded">
                            </div>
                            <div class="flex items-center justify-between">
                                <span>Dark Mode</span>
                                <input type="checkbox" class="rounded">
                            </div>
                            <div class="flex items-center justify-between">
                                <span>Auto-save</span>
                                <input type="checkbox" checked class="rounded">
                            </div>
                        </div>
                    </div>
                </TabsContent>
                
                <TabsContent value="help">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">❓ Help & Support</h3>
                        <p class="text-gray-600">Get help, view documentation, and contact support.</p>
                        <div class="space-y-4">
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h4 class="font-medium text-blue-800 mb-2">📚 Documentation</h4>
                                <p class="text-blue-700 text-sm">Browse our comprehensive documentation and guides.</p>
                            </div>
                            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h4 class="font-medium text-green-800 mb-2">🎥 Video Tutorials</h4>
                                <p class="text-green-700 text-sm">Watch step-by-step video tutorials.</p>
                            </div>
                            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <h4 class="font-medium text-purple-800 mb-2">💬 Contact Support</h4>
                                <p class="text-purple-700 text-sm">Get in touch with our support team.</p>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        `,
    }),
    args: {
        defaultValue: 'account',
        style: 'classic',
        disabled: [],
    },
}

export const VerticalOrientation: Story = {
    render: args => ({
        components: { Tabs, TabsList, TabsTrigger, TabsContent },
        setup() {
            const activeTab = ref('account')

            return { activeTab }
        },
        template: `
            <div class="flex">
                <Tabs v-model="activeTab" v-bind="args" class="flex-1">
                    <TabsList>
                        <template #trigger="{ tab }">
                            <TabsTrigger :tab="tab" />
                        </template>
                    </TabsList>
                    
                    <TabsContent value="account">
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold">Account Settings</h3>
                            <p class="text-gray-600">Make changes to your account here. Click save when you're done.</p>
                            <div class="grid gap-4">
                                <div class="grid gap-2">
                                    <label for="name">Name</label>
                                    <input id="name" type="text" value="Pedro Duarte" class="border rounded px-3 py-2" />
                                </div>
                                <div class="grid gap-2">
                                    <label for="username">Username</label>
                                    <input id="username" type="text" value="@peduarte" class="border rounded px-3 py-2" />
                                </div>
                            </div>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Save changes
                            </button>
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="password">
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold">Password</h3>
                            <p class="text-gray-600">Change your password here. After saving, you'll be logged out.</p>
                            <div class="grid gap-4">
                                <div class="grid gap-2">
                                    <label for="current">Current password</label>
                                    <input id="current" type="password" class="border rounded px-3 py-2" />
                                </div>
                                <div class="grid gap-2">
                                    <label for="new">New password</label>
                                    <input id="new" type="password" class="border rounded px-3 py-2" />
                                </div>
                            </div>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Save password
                            </button>
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="settings">
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold">Settings</h3>
                            <p class="text-gray-600">Configure your application preferences.</p>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <span>Email Notifications</span>
                                    <input type="checkbox" checked class="rounded">
                                </div>
                                <div class="flex items-center justify-between">
                                    <span>Dark Mode</span>
                                    <input type="checkbox" class="rounded">
                                </div>
                                <div class="flex items-center justify-between">
                                    <span>Auto-save</span>
                                    <input type="checkbox" checked class="rounded">
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="help">
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold">Help & Support</h3>
                            <p class="text-gray-600">Get help, view documentation, and contact support.</p>
                            <div class="space-y-4">
                                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <h4 class="font-medium text-blue-800 mb-2">📚 Documentation</h4>
                                    <p class="text-blue-700 text-sm">Browse our comprehensive documentation and guides.</p>
                                </div>
                                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <h4 class="font-medium text-green-800 mb-2">🎥 Video Tutorials</h4>
                                    <p class="text-green-700 text-sm">Watch step-by-step video tutorials.</p>
                                </div>
                                <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                    <h4 class="font-medium text-purple-800 mb-2">💬 Contact Support</h4>
                                    <p class="text-purple-700 text-sm">Get in touch with our support team.</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        `,
    }),
    args: {
        defaultValue: 'account',
        orientation: 'vertical',
        style: 'classic',
        disabled: [],
    },
}
