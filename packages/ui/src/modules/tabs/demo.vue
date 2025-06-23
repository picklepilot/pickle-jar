<template>
    <div class="space-y-8">
        <div>
            <h2 class="text-2xl font-bold mb-4">Composable Tabs Demo</h2>
            <p class="text-gray-600 mb-6">
                This demonstrates the new composable tabs structure similar to
                shadcn/ui.
            </p>
        </div>

        <!-- Basic Example -->
        <div class="space-y-4">
            <h3 class="text-lg font-semibold">Basic Example</h3>
            <Tabs v-model="activeTab" default-value="account">
                <TabsList>
                    <template #trigger="{ tab }">
                        <TabsTrigger :tab="tab" />
                    </template>
                </TabsList>

                <TabsContent value="account">
                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold">Account Settings</h4>
                        <p class="text-gray-600">
                            Make changes to your account here. Click save when
                            you're done.
                        </p>
                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <label for="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value="Pedro Duarte"
                                    class="border rounded px-3 py-2"
                                />
                            </div>
                            <div class="grid gap-2">
                                <label for="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    value="@peduarte"
                                    class="border rounded px-3 py-2"
                                />
                            </div>
                        </div>
                        <button
                            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Save changes
                        </button>
                    </div>
                </TabsContent>

                <TabsContent value="password">
                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold">Password</h4>
                        <p class="text-gray-600">
                            Change your password here. After saving, you'll be
                            logged out.
                        </p>
                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <label for="current">Current password</label>
                                <input
                                    id="current"
                                    type="password"
                                    class="border rounded px-3 py-2"
                                />
                            </div>
                            <div class="grid gap-2">
                                <label for="new">New password</label>
                                <input
                                    id="new"
                                    type="password"
                                    class="border rounded px-3 py-2"
                                />
                            </div>
                        </div>
                        <button
                            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Save password
                        </button>
                    </div>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Modern Style -->
        <div class="space-y-4">
            <h3 class="text-lg font-semibold">Modern Style</h3>
            <Tabs v-model="activeTab2" default-value="account" style="modern">
                <TabsList>
                    <template #trigger="{ tab }">
                        <TabsTrigger :tab="tab" />
                    </template>
                </TabsList>

                <TabsContent value="account">
                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold">Account Settings</h4>
                        <p class="text-gray-600">
                            Modern style tabs with bottom border indicators.
                        </p>
                    </div>
                </TabsContent>

                <TabsContent value="password">
                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold">Password</h4>
                        <p class="text-gray-600">
                            Modern style tabs with bottom border indicators.
                        </p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>

        <!-- With Custom Slots -->
        <div class="space-y-4">
            <h3 class="text-lg font-semibold">With Custom Slots</h3>
            <Tabs v-model="activeTab3" default-value="account">
                <TabsList>
                    <template #before>
                        <div class="text-sm text-gray-500 mr-4">
                            Navigation:
                        </div>
                    </template>
                    <template #trigger="{ tab }">
                        <TabsTrigger :tab="tab">
                            <template #left>
                                <span v-if="tab.id === 'account'" class="mr-2"
                                    >👤</span
                                >
                                <span
                                    v-else-if="tab.id === 'password'"
                                    class="mr-2"
                                    >🔒</span
                                >
                                <span
                                    v-else-if="tab.id === 'settings'"
                                    class="mr-2"
                                    >⚙️</span
                                >
                            </template>
                        </TabsTrigger>
                    </template>
                    <template #after>
                        <button
                            class="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            +
                        </button>
                    </template>
                </TabsList>

                <TabsContent value="account">
                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold">
                            👤 Account Settings
                        </h4>
                        <p class="text-gray-600">
                            Custom slots with icons and additional controls.
                        </p>
                    </div>
                </TabsContent>

                <TabsContent value="password">
                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold">🔒 Password</h4>
                        <p class="text-gray-600">
                            Custom slots with icons and additional controls.
                        </p>
                    </div>
                </TabsContent>

                <TabsContent value="settings">
                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold">⚙️ Settings</h4>
                        <p class="text-gray-600">
                            Custom slots with icons and additional controls.
                        </p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Vertical Orientation -->
        <div class="space-y-4">
            <h3 class="text-lg font-semibold">Vertical Orientation</h3>
            <div class="flex">
                <Tabs
                    v-model="activeTab4"
                    default-value="account"
                    orientation="vertical"
                    class="flex-1"
                >
                    <TabsList>
                        <template #trigger="{ tab }">
                            <TabsTrigger :tab="tab" />
                        </template>
                    </TabsList>

                    <TabsContent value="account">
                        <div class="space-y-4">
                            <h4 class="text-lg font-semibold">
                                Account Settings
                            </h4>
                            <p class="text-gray-600">Vertical tabs layout.</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="password">
                        <div class="space-y-4">
                            <h4 class="text-lg font-semibold">Password</h4>
                            <p class="text-gray-600">Vertical tabs layout.</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './index'

const activeTab = ref('account')
const activeTab2 = ref('account')
const activeTab3 = ref('account')
const activeTab4 = ref('account')
</script>
