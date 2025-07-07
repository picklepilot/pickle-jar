<template>
    <div class="demo-container">
        <h2>Basic Tabs</h2>
        <Tabs v-model:value="activeTab" class="w-full max-w-md">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent>
                <TabsPanel value="account">
                    <div class="space-y-4">
                        <h3 class="text-lg font-medium">Account Settings</h3>
                        <p class="text-sm text-muted-foreground">
                            Manage your account settings and preferences.
                        </p>
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                class="w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                    </div>
                </TabsPanel>
                <TabsPanel value="password">
                    <div class="space-y-4">
                        <h3 class="text-lg font-medium">Password Settings</h3>
                        <p class="text-sm text-muted-foreground">
                            Change your password and security settings.
                        </p>
                        <div class="space-y-2">
                            <label class="text-sm font-medium"
                                >Current Password</label
                            >
                            <input
                                type="password"
                                placeholder="Enter current password"
                                class="w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium"
                                >New Password</label
                            >
                            <input
                                type="password"
                                placeholder="Enter new password"
                                class="w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                    </div>
                </TabsPanel>
                <TabsPanel value="settings">
                    <div class="space-y-4">
                        <h3 class="text-lg font-medium">General Settings</h3>
                        <p class="text-sm text-muted-foreground">
                            Configure your general application settings.
                        </p>
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Theme</label>
                            <select class="w-full px-3 py-2 border rounded-md">
                                <option>Light</option>
                                <option>Dark</option>
                                <option>System</option>
                            </select>
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Language</label>
                            <select class="w-full px-3 py-2 border rounded-md">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>
                    </div>
                </TabsPanel>
            </TabsContent>
        </Tabs>

        <div class="mt-8">
            <h2>Vertical Tabs</h2>
            <Tabs
                v-model:value="activeVerticalTab"
                orientation="vertical"
                class="w-full max-w-2xl"
            >
                <TabsList orientation="vertical">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                    <TabsTrigger value="notifications"
                        >Notifications</TabsTrigger
                    >
                </TabsList>
                <TabsContent>
                    <TabsPanel value="overview">
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium">Overview</h3>
                            <p class="text-sm text-muted-foreground">
                                Get a quick overview of your dashboard and key
                                metrics.
                            </p>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="p-4 border rounded-lg">
                                    <h4 class="font-medium">Total Users</h4>
                                    <p class="text-2xl font-bold">1,234</p>
                                </div>
                                <div class="p-4 border rounded-lg">
                                    <h4 class="font-medium">Active Sessions</h4>
                                    <p class="text-2xl font-bold">567</p>
                                </div>
                            </div>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="analytics">
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium">Analytics</h3>
                            <p class="text-sm text-muted-foreground">
                                View detailed analytics and performance metrics.
                            </p>
                            <div
                                class="h-32 bg-muted rounded-lg flex items-center justify-center"
                            >
                                <p class="text-muted-foreground">
                                    Analytics Chart Placeholder
                                </p>
                            </div>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="reports">
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium">Reports</h3>
                            <p class="text-sm text-muted-foreground">
                                Generate and view detailed reports.
                            </p>
                            <div class="space-y-2">
                                <button
                                    class="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                                >
                                    Generate Report
                                </button>
                            </div>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="notifications">
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium">Notifications</h3>
                            <p class="text-sm text-muted-foreground">
                                Manage your notification preferences.
                            </p>
                            <div class="space-y-2">
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" checked />
                                    <span class="text-sm"
                                        >Email notifications</span
                                    >
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" />
                                    <span class="text-sm"
                                        >Push notifications</span
                                    >
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" checked />
                                    <span class="text-sm"
                                        >SMS notifications</span
                                    >
                                </label>
                            </div>
                        </div>
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsPanel } from './index'

const activeTab = ref('account')
const activeVerticalTab = ref('overview')
</script>

<style scoped>
.demo-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.demo-container h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
}
</style>
