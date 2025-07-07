<script setup lang="ts">
import { computed, ref } from 'vue'
import {
    Input,
    CodeBlock,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    TabsPanel,
    Table,
    TableHeader,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@picklepilot/pickle-jar-ui'

// Import code examples from separate file
import { inputCodeExamples } from './input-code-examples'

const componentData = computed(() => ({
    title: 'Input',
    description:
        'A versatile input component with support for different types, themes, and accessibility features. Supports v-model and custom styling.',
    props: [
        {
            name: 'type',
            type: 'string',
            default: 'text',
            description: 'The type of input field',
            options: ['text', 'email', 'password', 'number', 'tel', 'url'],
        },
        {
            name: 'placeholder',
            type: 'string',
            default: '',
            description: 'Placeholder text for the input field',
        },
        {
            name: 'value',
            type: 'string',
            default: '',
            description: 'The input value (for named v-model)',
        },
        {
            name: 'modelValue',
            type: 'string',
            default: '',
            description: 'The input value (for v-model)',
        },
        {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description:
                'Whether the input is disabled. When true, the input cannot be interacted with and shows a disabled state.',
        },
        {
            name: 'theme',
            type: 'object',
            default: '{}',
            description:
                "Locally customize the component's theme properties including input styles.",
        },
    ],
    events: [
        {
            name: 'update:modelValue',
            description:
                'Emitted when the input value changes (for v-model). Receives the new value as payload.',
        },
        {
            name: 'update:value',
            description:
                'Emitted when the input value changes (for named v-model). Receives the new value as payload.',
        },
        {
            name: 'input',
            description:
                'Emitted when the input value changes. Receives the new value as payload.',
        },
    ],
    slots: [],
    codeBlocks: inputCodeExamples,
}))

const inputValue = ref('Hello World')
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
            <CodeBlock
                language="vue"
                :code="componentData.codeBlocks.oneLineUsage"
                auto-theme
                light-theme="github-light"
                dark-theme="github-dark"
                class="border-none shadow-none"
            />
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
                            class="flex items-center justify-center gap-2 p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Input type="text" placeholder="Enter text..." />
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
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

        <!-- With Value Example -->
        <div class="space-y-4 mt-8">
            <h3>With Value</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center gap-2 p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Input
                                type="text"
                                placeholder="Enter text..."
                                v-model="inputValue"
                            />
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.withValue"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Input Types Example -->
        <div class="space-y-4 mt-8">
            <h3>Input Types</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex flex-col items-center justify-center gap-4 p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Input type="text" placeholder="Text input..." />
                            <Input type="email" placeholder="Email input..." />
                            <Input
                                type="password"
                                placeholder="Password input..."
                            />
                            <Input
                                type="number"
                                placeholder="Number input..."
                            />
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.types"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Disabled State Example -->
        <div class="space-y-4 mt-8">
            <h3>Disabled State</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center gap-2 p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Input
                                type="text"
                                placeholder="Disabled input..."
                                disabled
                            />
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.disabled"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Custom Theme Example -->
        <div class="space-y-4 mt-8">
            <h3>Custom Theme</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center gap-2 p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Input
                                type="text"
                                placeholder="Custom themed input..."
                                :theme="{
                                    input: 'bg-blue-50 border-blue-200 focus:ring-blue-500 focus:border-blue-500',
                                }"
                            />
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.customTheme"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

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

        <!-- <div class="mt-10 space-y-4">
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
        </div> -->
    </div>
</template>
