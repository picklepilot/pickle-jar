<script setup lang="ts">
import { computed, ref } from 'vue'
import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    DropdownLabel,
    DropdownSeparator,
    // DropdownSub,
    // DropdownSubTrigger,
    // DropdownSubContent,
    Button,
    CodeBlock,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    TabsPanel,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
} from '@picklepilot/pickle-jar-ui'

// Import code examples from separate file
import { dropdownCodeExamples } from './dropdown-code-examples'

const componentData = computed(() => ({
    title: 'Dropdown',
    description:
        'A flexible dropdown menu component with support for submenus, keyboard navigation, and accessibility features. Built with floating UI for precise positioning.',
    props: [
        {
            name: 'side',
            type: 'string',
            default: 'bottom',
            description:
                'The side of the trigger where the dropdown should appear',
            options: ['top', 'right', 'bottom', 'left'],
        },
        {
            name: 'align',
            type: 'string',
            default: 'start',
            description:
                'The alignment of the dropdown relative to the trigger',
            options: ['start', 'center', 'end'],
        },
        {
            name: 'sideOffset',
            type: 'number',
            default: '4',
            description: 'The distance in pixels from the trigger',
        },
        {
            name: 'alignOffset',
            type: 'number',
            default: '0',
            description: 'The offset in pixels from the start or end alignment',
        },
        {
            name: 'avoidCollisions',
            type: 'boolean',
            default: 'true',
            description:
                'Whether to automatically flip the dropdown when it would overflow the viewport',
        },
    ],
    events: [
        {
            name: 'select',
            description:
                'Fired when an item is selected (via keyboard or mouse)',
        },
        {
            name: 'click',
            description: 'Fired when the dropdown is clicked (via mouse)',
        },
    ] as Array<{ name: string; description: string }>,
    slots: [
        {
            name: 'default',
            description:
                'The dropdown content including trigger and menu items',
        },
    ],
    codeBlocks: dropdownCodeExamples,
}))

const selectedAction = ref('')
const handleAction = (action: string) => {
    selectedAction.value = action
}
</script>

<template>
    <div class="prose prose-gray max-w-none">
        <h1>{{ componentData.title }}</h1>
        <p class="lead">{{ componentData.description }}</p>

        <div class="mt-10 space-y-4">
            <h3>Usage</h3>
            <CodeBlock
                language="ts"
                :code="componentData.codeBlocks.import"
                auto-theme
                light-theme="github-light"
                dark-theme="github-dark"
                class="border-none shadow-none"
            />
            <!-- <CodeBlock
                language="vue"
                :code="componentData.codeBlocks.oneLineUsage"
                auto-theme
                light-theme="github-light"
                dark-theme="github-dark"
                class="border-none shadow-none"
            /> -->
        </div>

        <!-- Basic Usage Example -->
        <div class="space-y-4 mt-8">
            <h3>Basic Usage</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button>Open Menu</Button>
                                </DropdownTrigger>
                                <DropdownContent>
                                    <DropdownItem
                                        @click="handleAction('profile')"
                                        >Profile</DropdownItem
                                    >
                                    <DropdownItem
                                        @click="handleAction('settings')"
                                        >Settings</DropdownItem
                                    >
                                    <DropdownItem
                                        @click="handleAction('logout')"
                                        >Logout</DropdownItem
                                    >
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue-html"
                            :code="componentData.codeBlocks.basicUsage"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- With Labels Example -->
        <div class="space-y-4 mt-8">
            <h3>With Labels</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button>Account</Button>
                                </DropdownTrigger>
                                <DropdownContent>
                                    <DropdownLabel>User Account</DropdownLabel>
                                    <DropdownItem
                                        @click="handleAction('profile')"
                                        >Profile</DropdownItem
                                    >
                                    <DropdownItem
                                        @click="handleAction('settings')"
                                        >Settings</DropdownItem
                                    >
                                    <DropdownSeparator />
                                    <DropdownLabel>Actions</DropdownLabel>
                                    <DropdownItem
                                        @click="handleAction('logout')"
                                        >Logout</DropdownItem
                                    >
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.withLabels"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- With Submenus Example -->
        <!-- <div class="space-y-4 mt-8">
            <h3>With Submenus</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button>More Options</Button>
                                </DropdownTrigger>
                                <DropdownContent>
                                    <DropdownItem @click="handleAction('edit')"
                                        >Edit</DropdownItem
                                    >
                                    <DropdownItem
                                        @click="handleAction('duplicate')"
                                        >Duplicate</DropdownItem
                                    >
                                    <DropdownSeparator />
                                    <DropdownSub>
                                        <DropdownSubTrigger>
                                            More Actions
                                        </DropdownSubTrigger>
                                        <DropdownSubContent>
                                            <DropdownItem
                                                @click="handleAction('archive')"
                                                >Archive</DropdownItem
                                            >
                                            <DropdownItem
                                                @click="handleAction('delete')"
                                                >Delete</DropdownItem
                                            >
                                        </DropdownSubContent>
                                    </DropdownSub>
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.withSubmenus"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div> -->

        <!-- With Events Example -->
        <div class="space-y-4 mt-8">
            <h3>With Events</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button>Actions</Button>
                                </DropdownTrigger>
                                <DropdownContent>
                                    <DropdownItem @click="handleAction('edit')"
                                        >Edit</DropdownItem
                                    >
                                    <DropdownItem
                                        @click="handleAction('delete')"
                                        >Delete</DropdownItem
                                    >
                                    <DropdownItem @select="handleAction('save')"
                                        >Save</DropdownItem
                                    >
                                </DropdownContent>
                            </Dropdown>
                            <div
                                v-if="selectedAction"
                                class="ml-4 text-sm text-gray-600"
                            >
                                Selected: {{ selectedAction }}
                            </div>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.withEvents"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Disabled Items Example -->
        <div class="space-y-4 mt-8">
            <h3>Disabled Items</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button>Actions</Button>
                                </DropdownTrigger>
                                <DropdownContent>
                                    <DropdownItem @click="handleAction('edit')"
                                        >Edit</DropdownItem
                                    >
                                    <DropdownItem disabled
                                        >Delete (Disabled)</DropdownItem
                                    >
                                    <DropdownItem @click="handleAction('save')"
                                        >Save</DropdownItem
                                    >
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.disabledItems"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Custom Placement Example -->
        <div class="space-y-4 mt-8">
            <h3>Custom Placement</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button>Top Right</Button>
                                </DropdownTrigger>
                                <DropdownContent side="top" align="end">
                                    <DropdownItem
                                        @click="handleAction('option1')"
                                        >Option 1</DropdownItem
                                    >
                                    <DropdownItem
                                        @click="handleAction('option2')"
                                        >Option 2</DropdownItem
                                    >
                                    <DropdownItem
                                        @click="handleAction('option3')"
                                        >Option 3</DropdownItem
                                    >
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.customPlacement"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Complex Example -->
        <!-- <div class="space-y-4 mt-8">
            <h3>Complex Example</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button variant="outline">
                                        <svg
                                            class="mr-2 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        Account
                                    </Button>
                                </DropdownTrigger>
                                <DropdownContent class="w-56">
                                    <DropdownLabel>My Account</DropdownLabel>
                                    <DropdownItem
                                        @click="handleAction('profile')"
                                    >
                                        <svg
                                            class="mr-2 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem
                                        @click="handleAction('billing')"
                                    >
                                        <svg
                                            class="mr-2 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                            />
                                        </svg>
                                        Billing
                                    </DropdownItem>
                                    <DropdownItem
                                        @click="handleAction('settings')"
                                    >
                                        <svg
                                            class="mr-2 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        Settings
                                    </DropdownItem>
                                    <DropdownSeparator />
                                    <DropdownSub>
                                        <DropdownSubTrigger>
                                            <svg
                                                class="mr-2 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                                />
                                            </svg>
                                            More
                                        </DropdownSubTrigger>
                                        <DropdownSubContent>
                                            <DropdownItem
                                                @click="handleAction('archive')"
                                                >Archive</DropdownItem
                                            >
                                            <DropdownItem
                                                @click="handleAction('export')"
                                                >Export</DropdownItem
                                            >
                                            <DropdownSeparator />
                                            <DropdownItem disabled
                                                >Delete</DropdownItem
                                            >
                                        </DropdownSubContent>
                                    </DropdownSub>
                                    <DropdownSeparator />
                                    <DropdownItem
                                        @click="handleAction('logout')"
                                    >
                                        <svg
                                            class="mr-2 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            />
                                        </svg>
                                        Log out
                                    </DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.complexExample"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div> -->

        <div class="mt-10 space-y-4">
            <h2>Props</h2>
            <div class="overflow-x-auto border rounded-lg shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Default</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                            v-for="prop in componentData.props"
                            :key="prop.name"
                        >
                            <TableCell>
                                <code>{{ prop.name }}</code>
                            </TableCell>
                            <TableCell>
                                <code>{{ prop.type }}</code>
                            </TableCell>
                            <TableCell>
                                <code>{{ prop.default }}</code>
                            </TableCell>
                            <TableCell>
                                {{ prop.description }}
                                <div
                                    v-if="prop.options"
                                    class="mt-1 text-sm text-neutral-500"
                                >
                                    Options: {{ prop.options.join(', ') }}
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Events</h2>
            <div class="overflow-x-auto border rounded-lg shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                            v-for="event in componentData.events"
                            :key="event.name"
                        >
                            <TableCell>
                                <code>{{ event.name }}</code>
                            </TableCell>
                            <TableCell>
                                {{ event.description }}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Slots</h2>
            <div class="overflow-x-auto border rounded-lg shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                            v-for="slot in componentData.slots"
                            :key="slot.name"
                        >
                            <TableCell>
                                <code>{{ slot.name }}</code>
                            </TableCell>
                            <TableCell>
                                {{ slot.description }}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Component Parts</h2>
            <p class="text-muted-foreground">
                The Dropdown component is composed of several sub-components
                that work together:
            </p>
            <div class="overflow-x-auto border rounded-lg shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Usage</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell><code>Dropdown</code></TableCell>
                            <TableCell
                                >The main dropdown container that provides
                                context</TableCell
                            >
                            <TableCell>Root component</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>DropdownTrigger</code></TableCell>
                            <TableCell
                                >The element that triggers the dropdown to
                                open</TableCell
                            >
                            <TableCell
                                >Contains the trigger button/element</TableCell
                            >
                        </TableRow>
                        <TableRow>
                            <TableCell><code>DropdownContent</code></TableCell>
                            <TableCell
                                >The dropdown menu container with
                                positioning</TableCell
                            >
                            <TableCell>Contains menu items</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>DropdownItem</code></TableCell>
                            <TableCell
                                >Individual menu item with click
                                handling</TableCell
                            >
                            <TableCell>Inside DropdownContent</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>DropdownLabel</code></TableCell>
                            <TableCell
                                >Section label for grouping menu
                                items</TableCell
                            >
                            <TableCell>Inside DropdownContent</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                ><code>DropdownSeparator</code></TableCell
                            >
                            <TableCell
                                >Visual separator between menu
                                sections</TableCell
                            >
                            <TableCell>Inside DropdownContent</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>DropdownSub</code></TableCell>
                            <TableCell
                                >Container for submenu functionality</TableCell
                            >
                            <TableCell>Inside DropdownContent</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                ><code>DropdownSubTrigger</code></TableCell
                            >
                            <TableCell>Trigger for opening a submenu</TableCell>
                            <TableCell>Inside DropdownSub</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                ><code>DropdownSubContent</code></TableCell
                            >
                            <TableCell
                                >Content container for submenu items</TableCell
                            >
                            <TableCell>Inside DropdownSub</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Accessibility</h2>
            <p class="text-muted-foreground">
                The Dropdown component includes comprehensive accessibility
                features:
            </p>
            <ul class="list-disc pl-6 space-y-2">
                <li>
                    <strong>Keyboard Navigation:</strong> Full keyboard support
                    with arrow keys, Enter, Space, and Escape
                </li>
                <li>
                    <strong>ARIA Attributes:</strong> Proper ARIA roles and
                    states for screen readers
                </li>
                <li>
                    <strong>Focus Management:</strong> Automatic focus
                    management when opening/closing
                </li>
                <li>
                    <strong>Click Outside:</strong> Closes dropdown when
                    clicking outside
                </li>
                <li>
                    <strong>Escape Key:</strong> Closes dropdown when pressing
                    Escape
                </li>
            </ul>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Keyboard Shortcuts</h2>
            <div class="overflow-x-auto border rounded-lg shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Key</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell
                                ><code>Enter</code> /
                                <code>Space</code></TableCell
                            >
                            <TableCell
                                >Open/close dropdown (on trigger) or select item
                                (on menu item)</TableCell
                            >
                        </TableRow>
                        <TableRow>
                            <TableCell><code>Arrow Down</code></TableCell>
                            <TableCell>Navigate to next menu item</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>Arrow Up</code></TableCell>
                            <TableCell
                                >Navigate to previous menu item</TableCell
                            >
                        </TableRow>
                        <TableRow>
                            <TableCell><code>Home</code></TableCell>
                            <TableCell>Navigate to first menu item</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>End</code></TableCell>
                            <TableCell>Navigate to last menu item</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>Escape</code></TableCell>
                            <TableCell>Close dropdown</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>Arrow Right</code></TableCell>
                            <TableCell
                                >Open submenu (on submenu trigger)</TableCell
                            >
                        </TableRow>
                        <TableRow>
                            <TableCell><code>Arrow Left</code></TableCell>
                            <TableCell
                                >Close submenu (on submenu trigger)</TableCell
                            >
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
</template>
