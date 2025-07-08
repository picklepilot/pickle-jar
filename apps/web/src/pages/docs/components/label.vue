<script setup lang="ts">
import { computed } from 'vue'
import {
    CodeBlock,
    Input,
    Label,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Tabs,
    TabsContent,
    TabsList,
    TabsPanel,
    TabsTrigger,
} from '@picklepilot/pickle-jar-ui'

const componentData = computed(() => ({
    title: 'Label',
    description:
        'A simple, accessible label component for form controls. Applies consistent styling and ensures proper association with inputs for accessibility.',
    props: [],
    events: [] as Array<{ name: string; description: string }>,
    slots: [
        {
            name: 'default',
            description: 'The label text or content',
        },
    ],
    codeBlocks: {
        import: `import Label from '@picklepilot/pickle-jar-ui/src/components/label/Label.vue'`,
        basicUsage: `<Label for=\"email\">Email Address</Label>\n<input id=\"email\" type=\"email\" class=\"input\" />`,
        withInput: `<div class=\"flex flex-col gap-2\">\n  <Label for=\"username\">Username</Label>\n  <input id=\"username\" type=\"text\" class=\"input\" />\n</div>`,
        withCustomContent: `<Label for=\"terms\">\n  <span>I agree to the <a href=\"/terms\" class=\"underline\">terms and conditions</a></span>\n</Label>\n<input id=\"terms\" type=\"checkbox\" />`,
    },
}))
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
                language="vue-html"
                :code="componentData.codeBlocks.basicUsage"
                auto-theme
                light-theme="github-light"
                dark-theme="github-dark"
                class="border-none shadow-none"
            />
        </div>

        <!-- With Input Example -->
        <div class="space-y-4 mt-8">
            <h3>With Input</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="p-8 h-full min-h-32 max-w-md bg-white rounded-lg flex flex-col gap-2"
                        >
                            <Label for="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                class="input border px-2 py-1 rounded"
                                placeholder="Enter your username"
                            />
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue-html"
                            :code="componentData.codeBlocks.withInput"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- With Custom Content Example -->
        <div class="space-y-4 mt-8">
            <h3>With Custom Content</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="p-8 h-full min-h-32 bg-white rounded-lg flex flex-col gap-2"
                        >
                            <Label for="terms">
                                <span
                                    >I agree to the
                                    <a href="/terms" class="underline"
                                        >terms and conditions</a
                                    ></span
                                >
                            </Label>
                            <input id="terms" type="checkbox" />
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.withCustomContent"
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
                        <TableRow>
                            <TableCell
                                colspan="4"
                                class="text-center text-muted-foreground"
                            >
                                No props
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
                        <TableRow>
                            <TableCell
                                colspan="2"
                                class="text-center text-muted-foreground"
                            >
                                No events
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
                        <TableRow>
                            <TableCell><code>default</code></TableCell>
                            <TableCell>The label text or content</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Accessibility</h2>
            <p>
                The <code>Label</code> component renders a semantic
                <code>&lt;label&gt;</code> element and should be associated with
                a form control using the <code>for</code> attribute (matching
                the <code>id</code> of the input). This ensures screen readers
                and assistive technologies can properly announce the label.
            </p>
            <ul>
                <li>
                    Always use <code>for</code> on <code>Label</code> and
                    <code>id</code> on the input.
                </li>
                <li>
                    Supports keyboard navigation and improves form
                    accessibility.
                </li>
                <li>Use semantic and descriptive label text.</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    components: { Label },
}
</script>
