import type { Meta, StoryObj } from '@storybook/vue3'
import TabsNav from './TabsNav.vue'
import { ref, computed } from 'vue'
import type { Tab } from '../../types'

const meta = {
    title: 'Modules/TabsNav',
    component: TabsNav,
    tags: ['autodocs'],
    argTypes: {
        tabs: {
            control: 'object',
            description: 'Array of tab objects to display',
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
} satisfies Meta<typeof TabsNav>

export default meta
type Story = StoryObj<typeof meta>

// Sample tab data
const sampleTabs: Tab[] = [
    { id: 1, label: 'Overview', active: true, disabled: false },
    { id: 2, label: 'Analytics', active: false, disabled: false },
    { id: 3, label: 'Reports', active: false, disabled: false },
    { id: 4, label: 'Settings', active: false, disabled: false },
]

const tabsWithIcons: Tab[] = [
    {
        id: 1,
        label: 'Dashboard',
        active: true,
        disabled: false,
        classes: ['fa-dashboard'],
    },
    {
        id: 2,
        label: 'Users',
        active: false,
        disabled: false,
        classes: ['fa-users'],
    },
    {
        id: 3,
        label: 'Settings',
        active: false,
        disabled: false,
        classes: ['fa-cog'],
    },
    {
        id: 4,
        label: 'Help',
        active: false,
        disabled: false,
        classes: ['fa-question-circle'],
    },
]

const tabsWithDisabled: Tab[] = [
    { id: 1, label: 'Active Tab', active: true, disabled: false },
    { id: 2, label: 'Disabled Tab', active: false, disabled: true },
    { id: 3, label: 'Another Tab', active: false, disabled: false },
]

// Demo content for each tab
const demoContent = {
    1: {
        title: 'Overview',
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold">Welcome to the Overview</h3>
                <p class="text-gray-600">This is the main dashboard view showing key metrics and recent activity.</p>
                <div class="grid grid-cols-3 gap-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-blue-600">1,234</div>
                        <div class="text-sm text-gray-600">Total Users</div>
                    </div>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-green-600">89%</div>
                        <div class="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-purple-600">$12.5K</div>
                        <div class="text-sm text-gray-600">Revenue</div>
                    </div>
                </div>
            </div>
        `,
    },
    2: {
        title: 'Analytics',
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold">Analytics Dashboard</h3>
                <p class="text-gray-600">Detailed analytics and performance metrics for your application.</p>
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h4 class="font-medium mb-3">Traffic Overview</h4>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span>Page Views</span>
                            <span class="font-medium">45,231</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Unique Visitors</span>
                            <span class="font-medium">12,847</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Bounce Rate</span>
                            <span class="font-medium">23.4%</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
    },
    3: {
        title: 'Reports',
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold">Reports & Documents</h3>
                <p class="text-gray-600">Generate and view detailed reports for your business needs.</p>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 bg-white border rounded-lg">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                                <span class="text-red-600 text-sm">📊</span>
                            </div>
                            <div>
                                <div class="font-medium">Monthly Sales Report</div>
                                <div class="text-sm text-gray-500">Generated 2 days ago</div>
                            </div>
                        </div>
                        <button class="text-blue-600 hover:text-blue-800">Download</button>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-white border rounded-lg">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                                <span class="text-green-600 text-sm">📈</span>
                            </div>
                            <div>
                                <div class="font-medium">User Growth Analysis</div>
                                <div class="text-sm text-gray-500">Generated 1 week ago</div>
                            </div>
                        </div>
                        <button class="text-blue-600 hover:text-blue-800">Download</button>
                    </div>
                </div>
            </div>
        `,
    },
    4: {
        title: 'Settings',
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold">Application Settings</h3>
                <p class="text-gray-600">Configure your application preferences and system settings.</p>
                <div class="space-y-4">
                    <div class="bg-white border rounded-lg p-4">
                        <h4 class="font-medium mb-3">General Settings</h4>
                        <div class="space-y-3">
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
                </div>
            </div>
        `,
    },
}

// Demo content for icon tabs
const iconDemoContent = {
    1: {
        title: 'Dashboard',
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold">📊 Dashboard</h3>
                <p class="text-gray-600">Your main control center with key metrics and quick actions.</p>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                        <div class="text-xl font-bold">Quick Stats</div>
                        <div class="text-sm opacity-90">View your key performance indicators</div>
                    </div>
                    <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                        <div class="text-xl font-bold">Recent Activity</div>
                        <div class="text-sm opacity-90">See what's happening in real-time</div>
                    </div>
                </div>
            </div>
        `,
    },
    2: {
        title: 'Users',
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold">👥 User Management</h3>
                <p class="text-gray-600">Manage your users, permissions, and access controls.</p>
                <div class="bg-white border rounded-lg p-4">
                    <div class="flex items-center justify-between mb-4">
                        <h4 class="font-medium">Active Users</h4>
                        <button class="bg-blue-500 text-white px-3 py-1 rounded text-sm">Add User</button>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span>John Doe</span>
                            <span class="text-sm text-gray-500">Admin</span>
                        </div>
                        <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span>Jane Smith</span>
                            <span class="text-sm text-gray-500">Editor</span>
                        </div>
                        <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span>Bob Johnson</span>
                            <span class="text-sm text-gray-500">Viewer</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
    },
    3: {
        title: 'Settings',
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold">⚙️ System Settings</h3>
                <p class="text-gray-600">Configure system preferences and application behavior.</p>
                <div class="space-y-4">
                    <div class="bg-white border rounded-lg p-4">
                        <h4 class="font-medium mb-3">System Preferences</h4>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <span>Language</span>
                                <select class="border rounded px-2 py-1">
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </div>
                            <div class="flex items-center justify-between">
                                <span>Timezone</span>
                                <select class="border rounded px-2 py-1">
                                    <option>UTC</option>
                                    <option>EST</option>
                                    <option>PST</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
    },
    4: {
        title: 'Help',
        content: `
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
        `,
    },
}

export const Default: Story = {
    render: args => ({
        components: { TabsNav },
        setup() {
            const tabs = ref([...sampleTabs])
            const activeTabId = computed(() => {
                if (!Array.isArray(tabs.value)) return 1
                const activeTab = tabs.value.find(tab => tab.active)
                return activeTab?.id || 1
            })

            const handleClicked = (tabId: number) => {
                tabs.value = tabs.value.map(tab => ({
                    ...tab,
                    active: tab.id === tabId,
                }))
                console.log('Tab clicked:', tabId)
            }

            const handleUpdate = (newTabs: Tab[]) => {
                tabs.value = newTabs
                console.log('Tabs reordered:', newTabs)
            }

            return {
                tabs,
                activeTabId,
                handleClicked,
                handleUpdate,
                demoContent,
            }
        },
        template: `
            <div class="bg-card rounded-lg border pt-2 w-[720px]">
                <TabsNav
                    :tabs="tabs"
                    style="classic"
                    @clicked="handleClicked"
                    @update="handleUpdate"
                />
                <div class="bg-white border rounded-lg p-6">
                    <div v-html="demoContent[activeTabId]?.content"></div>
                </div>
            </div>
        `,
    }),
    args: {
        tabs: sampleTabs,
        style: 'classic',
        disabled: [],
    },
}

export const ModernStyle: Story = {
    render: args => ({
        components: { TabsNav },
        setup() {
            const tabs = ref([...sampleTabs])
            const activeTabId = computed(() => {
                if (!Array.isArray(tabs.value)) return 1
                const activeTab = tabs.value.find(tab => tab.active)
                return activeTab?.id || 1
            })

            const handleClicked = (tabId: number) => {
                tabs.value = tabs.value.map(tab => ({
                    ...tab,
                    active: tab.id === tabId,
                }))
                console.log('Tab clicked:', tabId)
            }

            return { tabs, activeTabId, handleClicked, demoContent }
        },
        template: `
            <div class="bg-card rounded-lg overflow-hidden border pt-2 w-full md:w-[720px]">
                <TabsNav
                    :tabs="tabs"
                    style="modern"
                    @clicked="handleClicked"
                />
                <div class="bg-card p-6">
                    <div v-html="demoContent[activeTabId]?.content"></div>
                </div>
            </div>
        `,
    }),
    args: {
        tabs: sampleTabs,
        style: 'modern',
        disabled: [],
    },
}

export const WithIcons: Story = {
    render: args => ({
        components: { TabsNav },
        setup() {
            const tabs = ref([...tabsWithIcons])
            const activeTabId = computed(() => {
                if (!Array.isArray(tabs.value)) return 1
                const activeTab = tabs.value.find(tab => tab.active)
                return activeTab?.id || 1
            })

            const handleClicked = (tabId: number) => {
                tabs.value = tabs.value.map(tab => ({
                    ...tab,
                    active: tab.id === tabId,
                }))
                console.log('Tab clicked:', tabId)
            }

            return { tabs, activeTabId, handleClicked, iconDemoContent }
        },
        template: `
            <div class="space-y-6">
                <TabsNav
                    :tabs="tabs"
                    style="classic"
                    @clicked="handleClicked"
                />
                <div class="bg-white border rounded-lg p-6">
                    <div v-html="iconDemoContent[activeTabId]?.content"></div>
                </div>
            </div>
        `,
    }),
    args: {
        tabs: tabsWithIcons,
        style: 'classic',
        disabled: [],
    },
}

export const WithDisabledTabs: Story = {
    render: args => ({
        components: { TabsNav },
        setup() {
            const tabs = ref([...tabsWithDisabled])
            const activeTabId = computed(() => {
                if (!Array.isArray(tabs.value)) return 1
                const activeTab = tabs.value.find(tab => tab.active)
                return activeTab?.id || 1
            })

            const handleClicked = (tabId: number) => {
                const tab = tabs.value.find(t => t.id === tabId)
                if (tab && !tab.disabled) {
                    tabs.value = tabs.value.map(tab => ({
                        ...tab,
                        active: tab.id === tabId,
                    }))
                    console.log('Tab clicked:', tabId)
                }
            }

            return { tabs, activeTabId, handleClicked, demoContent }
        },
        template: `
            <div class="space-y-6">
                <TabsNav
                    :tabs="tabs"
                    style="classic"
                    @clicked="handleClicked"
                />
                <div class="bg-white border rounded-lg p-6">
                    <div v-if="activeTabId === 2" class="text-center py-8">
                        <div class="text-gray-400 text-lg mb-2">🚫</div>
                        <div class="text-gray-500">This tab is currently disabled</div>
                        <div class="text-sm text-gray-400 mt-1">Contact your administrator for access</div>
                    </div>
                    <div v-else v-html="demoContent[activeTabId]?.content"></div>
                </div>
            </div>
        `,
    }),
    args: {
        tabs: tabsWithDisabled,
        style: 'classic',
        disabled: [],
    },
}

export const WithCustomTheme: Story = {
    render: args => ({
        components: { TabsNav },
        setup() {
            const tabs = ref([...sampleTabs])
            const activeTabId = computed(() => {
                if (!Array.isArray(tabs.value)) return 1
                const activeTab = tabs.value.find(tab => tab.active)
                return activeTab?.id || 1
            })

            const handleClicked = (tabId: number) => {
                tabs.value = tabs.value.map(tab => ({
                    ...tab,
                    active: tab.id === tabId,
                }))
                console.log('Tab clicked:', tabId)
            }

            return { tabs, activeTabId, handleClicked, demoContent }
        },
        template: `
            <div class="space-y-6">
                <TabsNav
                    :tabs="tabs"
                    style="classic"
                    :theme="{
                        container: 'bg-gray-50 p-4 rounded-lg',
                        sortableContainer: 'bg-white rounded-md shadow-sm',
                        tabsNavTab: 'hover:bg-blue-50 active:bg-blue-100',
                    }"
                    @clicked="handleClicked"
                />
                <div class="bg-white border rounded-lg p-6">
                    <div v-html="demoContent[activeTabId]?.content"></div>
                </div>
            </div>
        `,
    }),
    args: {
        tabs: sampleTabs,
        style: 'classic',
        disabled: [],
        theme: {
            container: 'bg-gray-50 p-4 rounded-lg',
            sortableContainer: 'bg-white rounded-md shadow-sm',
            tabsNavTab: 'hover:bg-blue-50 active:bg-blue-100',
        },
    },
}

export const Interactive: Story = {
    render: args => ({
        components: { TabsNav },
        setup() {
            const tabs = ref([...sampleTabs])
            const activeTabId = computed(() => {
                if (!Array.isArray(tabs.value)) return 1
                const activeTab = tabs.value.find(tab => tab.active)
                return activeTab?.id || 1
            })

            const handleClicked = (tabId: number) => {
                tabs.value = tabs.value.map(tab => ({
                    ...tab,
                    active: tab.id === tabId,
                }))
                console.log('Tab clicked:', tabId)
            }

            const handleUpdate = (newTabs: Tab[]) => {
                tabs.value = newTabs
                console.log('Tabs reordered:', newTabs)
            }

            return {
                tabs,
                activeTabId,
                handleClicked,
                handleUpdate,
                demoContent,
            }
        },
        template: `
            <div class="space-y-6">
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div class="text-sm text-blue-800">
                        <strong>Interactive Demo:</strong> Click on tabs to switch content, drag to reorder tabs
                    </div>
                </div>
                <TabsNav
                    :tabs="tabs"
                    style="classic"
                    @clicked="handleClicked"
                    @update="handleUpdate"
                />
                <div class="bg-white border rounded-lg p-6">
                    <div v-html="demoContent[activeTabId]?.content"></div>
                </div>
            </div>
        `,
    }),
    args: {
        tabs: sampleTabs,
        style: 'classic',
        disabled: [],
    },
}

export const WithSlots: Story = {
    render: args => ({
        components: { TabsNav },
        setup() {
            const tabs = ref([...sampleTabs])
            const activeTabId = computed(() => {
                if (!Array.isArray(tabs.value)) return 1
                const activeTab = tabs.value.find(tab => tab.active)
                return activeTab?.id || 1
            })

            const handleClicked = (tabId: number) => {
                tabs.value = tabs.value.map(tab => ({
                    ...tab,
                    active: tab.id === tabId,
                }))
                console.log('Tab clicked:', tabId)
            }

            return { tabs, activeTabId, handleClicked, demoContent }
        },
        template: `
            <div class="space-y-6">
                <TabsNav
                    :tabs="tabs"
                    style="classic"
                    @clicked="handleClicked"
                >
                    <template #before>
                        <div class="text-sm text-gray-500 mr-4">Navigation:</div>
                    </template>
                    <template #after>
                        <button class="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                            +
                        </button>
                    </template>
                    <template #right="{ element }">
                        <span v-if="element.active" class="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            Active
                        </span>
                    </template>
                </TabsNav>
                <div class="bg-white border rounded-lg p-6">
                    <div v-html="demoContent[activeTabId]?.content"></div>
                </div>
            </div>
        `,
    }),
    args: {
        tabs: sampleTabs,
        style: 'classic',
        disabled: [],
    },
}

export const DisabledBorder: Story = {
    render: args => ({
        components: { TabsNav },
        setup() {
            const tabs = ref([...sampleTabs])
            const activeTabId = computed(() => {
                if (!Array.isArray(tabs.value)) return 1
                const activeTab = tabs.value.find(tab => tab.active)
                return activeTab?.id || 1
            })

            const handleClicked = (tabId: number) => {
                tabs.value = tabs.value.map(tab => ({
                    ...tab,
                    active: tab.id === tabId,
                }))
                console.log('Tab clicked:', tabId)
            }

            return { tabs, activeTabId, handleClicked, demoContent }
        },
        template: `
            <div class="space-y-6">
                <TabsNav
                    :tabs="tabs"
                    style="classic"
                    :disabled="['border']"
                    @clicked="handleClicked"
                />
                <div class="bg-white border rounded-lg p-6">
                    <div v-html="demoContent[activeTabId]?.content"></div>
                </div>
            </div>
        `,
    }),
    args: {
        tabs: sampleTabs,
        style: 'classic',
        disabled: ['border'],
    },
}

export const Overflowing: Story = {
    render: args => ({
        components: { TabsNav },
        setup() {
            const tabs = ref(
                Array.from({ length: 20 }, (_, i) => ({
                    id: `tab-${i + 1}`,
                    label: `Tab ${i + 1}`,
                    active: i === 0,
                }))
            )
            const handleUpdate = updatedTabs => {
                tabs.value = updatedTabs
            }
            const handleClick = tabId => {
                tabs.value = tabs.value.map(tab => ({
                    ...tab,
                    active: tab.id === tabId,
                }))
            }
            return { args, tabs, handleUpdate, handleClick }
        },
        template: `
            <TabsNav
                v-if="tabs.length > 0"
                :tabs="tabs"
                @update="handleUpdate"
                @clicked="handleClick"
                v-bind="args"
            />
        `,
    }),
    args: {
        tabs: [],
    },
}
