<script setup lang="ts">
import { computed, ref } from 'vue'
import {
    Checkbox,
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
import { checkboxCodeExamples } from './checkbox-code-examples'

const componentData = computed(() => ({
    title: 'Checkbox',
    description:
        'A customizable checkbox component with accessibility features, theme support, and v-model integration. Supports indeterminate state and keyboard navigation.',
    props: [
        {
            name: 'modelValue',
            type: 'boolean',
            default: 'false',
            description: 'The current checked state of the checkbox',
            options: ['true', 'false'],
        },
        {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description:
                'Whether the checkbox is disabled. When true, the checkbox cannot be interacted with and shows a disabled state.',
            options: ['true', 'false'],
        },
        {
            name: 'indeterminate',
            type: 'boolean',
            default: 'false',
            description:
                'Whether the checkbox is in an indeterminate state. When true, shows a different visual state (typically a dash instead of a check).',
            options: ['true', 'false'],
        },
        {
            name: 'id',
            type: 'string',
            default: 'auto-generated',
            description:
                'The unique identifier for the checkbox. Used for accessibility and form association.',
        },
        {
            name: 'name',
            type: 'string',
            default: '',
            description:
                'The name attribute for the checkbox. Used for form submission and grouping.',
        },
        {
            name: 'value',
            type: 'string | number',
            default: '',
            description:
                'The value attribute for the checkbox. Used for form submission.',
        },
        {
            name: 'required',
            type: 'boolean',
            default: 'false',
            description: 'Whether the checkbox is required in a form.',
            options: ['true', 'false'],
        },
        {
            name: 'theme',
            type: 'object',
            default: '{}',
            description:
                "Locally customize the component's theme properties including checkbox, container, and label styles.",
        },
    ],
    events: [
        {
            name: 'update:modelValue',
            description:
                'Emitted when the checkbox state changes (for v-model). Receives the new boolean value as payload.',
        },
        {
            name: 'change',
            description:
                'Emitted when the checkbox state changes. Receives the new boolean value as payload.',
        },
        {
            name: 'click',
            description:
                'Emitted when the checkbox is clicked. Receives the MouseEvent as payload.',
        },
    ],
    slots: [
        {
            name: 'default',
            description: 'The label content for the checkbox.',
        },
    ],
    codeBlocks: checkboxCodeExamples,
}))

const checked = ref(false)
</script>

<template>
    <div class="prose prose-gray max-w-none">
        <h1 class="">
            {{ componentData.title }}
        </h1>
        <p class="lead">
            {{ componentData.description }}
        </p>

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
                :code="componentData.codeBlocks.basicUsage"
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
                            <Checkbox v-model="checked">
                                Accept terms and conditions
                            </Checkbox>
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
    </div>
</template>
