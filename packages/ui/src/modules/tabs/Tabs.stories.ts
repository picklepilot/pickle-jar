import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, defineComponent } from 'vue'
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsPanel } from './index'
import { Card, CardContent, CardHeader } from '../../components/card'

// Simple placeholder component for testing
const SimpleTabs = defineComponent({
    components: { Card, Tabs, TabsList, TabsTrigger, TabsContent, TabsPanel },
    template: `
    <div class="w-full max-w-md mx-auto">
        <Card>
            <Tabs v-model:value="activeTab" style="modern">
                <CardHeader class="p-2">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                </CardHeader>
                <CardContent class="p-4 border-t border-border">
                <TabsContent>
                    
                        <TabsPanel value="account">
                            <h3>Account Settings</h3>
                            <p>Manage your account preferences.</p>
                        </TabsPanel>
                        <TabsPanel value="password">
                            <h3>Password Settings</h3>
                            <p>Change your password.</p>
                        </TabsPanel>
                        <TabsPanel value="settings">
                            <h3>General Settings</h3>
                            <p>Configure your settings.</p>
                        </TabsPanel>
                    
                </TabsContent>
                </CardContent>
            </Tabs>
        </Card>
    </div>
  `,

    setup() {
        const activeTab = ref('account')
        const tabs = [
            {
                value: 'account',
                label: 'Account',
                content: 'Account settings content',
            },
            {
                value: 'password',
                label: 'Password',
                content: 'Password settings content',
            },
            {
                value: 'settings',
                label: 'Settings',
                content: 'General settings content',
            },
        ]
        return { activeTab, tabs }
    },
})

const meta: Meta<typeof SimpleTabs> = {
    title: 'Modules/Tabs',
    component: SimpleTabs,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'A clean, accessible, and flexible tabs component built with Vue 3 Composition API and TypeScript.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    render: () => SimpleTabs,
}
