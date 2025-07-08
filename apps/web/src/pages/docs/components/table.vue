<script setup lang="ts">
import { computed } from 'vue'
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
    CodeBlock,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    TabsPanel,
} from '@picklepilot/pickle-jar-ui'

// Import code examples from separate file
import { tableCodeExamples } from './table-code-examples'

const componentData = computed(() => ({
    title: 'Table',
    description:
        'A flexible table component with support for headers, footers, captions, and various styling options. Built with semantic HTML and accessible by default.',
    props: [
        {
            name: 'class',
            type: 'string',
            default: '',
            description: 'Additional CSS classes to apply to the table',
        },
        {
            name: 'striped',
            type: 'boolean',
            default: 'false',
            description:
                'Whether to apply alternating row colors for better readability',
        },
        {
            name: 'spacing',
            type: 'string',
            default: 'normal',
            description: 'The spacing between table cells',
            options: ['normal', 'compact'],
        },
    ],
    events: [] as Array<{ name: string; description: string }>,
    slots: [
        {
            name: 'default',
            description:
                'The table content including headers, body, and footer',
        },
    ],
    codeBlocks: tableCodeExamples,
}))

const tableData = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
]

const salesData = [
    {
        product: 'Widget A',
        category: 'Electronics',
        sales: '1,250',
        revenue: '$18,750',
        growth: '+15%',
    },
    {
        product: 'Widget B',
        category: 'Home & Garden',
        sales: '980',
        revenue: '$16,660',
        growth: '+21%',
    },
    {
        product: 'Widget C',
        category: 'Sports',
        sales: '720',
        revenue: '$8,640',
        growth: '+12%',
    },
]
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
                        <div class="p-8 h-full min-h-72 bg-white rounded-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Role</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow
                                        v-for="row in tableData"
                                        :key="row.name"
                                    >
                                        <TableCell>{{ row.name }}</TableCell>
                                        <TableCell>{{ row.email }}</TableCell>
                                        <TableCell>{{ row.role }}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
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

        <!-- With Caption Example -->
        <div class="space-y-4 mt-8">
            <h3>With Caption</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div class="p-8 h-full min-h-72 bg-white rounded-lg">
                            <Table>
                                <TableCaption
                                    >A list of users in the
                                    system.</TableCaption
                                >
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Role</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow
                                        v-for="row in tableData"
                                        :key="row.name"
                                    >
                                        <TableCell>{{ row.name }}</TableCell>
                                        <TableCell>{{ row.email }}</TableCell>
                                        <TableCell>{{ row.role }}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.withCaption"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- With Footer Example -->
        <div class="space-y-4 mt-8">
            <h3>With Footer</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div class="p-8 h-full min-h-72 bg-white rounded-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Widget A</TableCell>
                                        <TableCell>$10.00</TableCell>
                                        <TableCell>2</TableCell>
                                        <TableCell>$20.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Widget B</TableCell>
                                        <TableCell>$15.00</TableCell>
                                        <TableCell>1</TableCell>
                                        <TableCell>$15.00</TableCell>
                                    </TableRow>
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colspan="3">Total</TableCell>
                                        <TableCell>$35.00</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.withFooter"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Striped Table Example -->
        <div class="space-y-4 mt-8">
            <h3>Striped Table</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div class="p-8 h-full min-h-72 bg-white rounded-lg">
                            <Table striped>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Role</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow
                                        v-for="row in tableData"
                                        :key="row.name"
                                    >
                                        <TableCell>{{ row.name }}</TableCell>
                                        <TableCell>{{ row.email }}</TableCell>
                                        <TableCell>{{ row.role }}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.striped"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Compact Spacing Example -->
        <div class="space-y-4 mt-8">
            <h3>Compact Spacing</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div class="p-8 h-full min-h-72 bg-white rounded-lg">
                            <Table spacing="compact">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Role</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow
                                        v-for="row in tableData"
                                        :key="row.name"
                                    >
                                        <TableCell>{{ row.name }}</TableCell>
                                        <TableCell>{{ row.email }}</TableCell>
                                        <TableCell>{{ row.role }}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.compact"
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
        <div class="space-y-4 mt-8">
            <h3>Complex Example</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div class="p-8 h-full min-h-72 bg-white rounded-lg">
                            <Table striped>
                                <TableCaption
                                    >Monthly sales report for Q1
                                    2024</TableCaption
                                >
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Sales</TableHead>
                                        <TableHead>Revenue</TableHead>
                                        <TableHead>Growth</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow
                                        v-for="row in salesData"
                                        :key="row.product"
                                    >
                                        <TableCell>{{ row.product }}</TableCell>
                                        <TableCell>{{
                                            row.category
                                        }}</TableCell>
                                        <TableCell>{{ row.sales }}</TableCell>
                                        <TableCell>{{ row.revenue }}</TableCell>
                                        <TableCell class="text-green-600">{{
                                            row.growth
                                        }}</TableCell>
                                    </TableRow>
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colspan="3">Total</TableCell>
                                        <TableCell>$44,050</TableCell>
                                        <TableCell class="text-green-600"
                                            >+16%</TableCell
                                        >
                                    </TableRow>
                                </TableFooter>
                            </Table>
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

        <div class="mt-10 space-y-4">
            <h2>Component Parts</h2>
            <p class="text-muted-foreground">
                The Table component is composed of several sub-components that
                work together:
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
                            <TableCell><code>Table</code></TableCell>
                            <TableCell
                                >The main table container with overflow
                                handling</TableCell
                            >
                            <TableCell>Root component</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>TableHeader</code></TableCell>
                            <TableCell
                                >Container for table header rows</TableCell
                            >
                            <TableCell>Contains header cells</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>TableBody</code></TableCell>
                            <TableCell>Container for table data rows</TableCell>
                            <TableCell>Contains data cells</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>TableFooter</code></TableCell>
                            <TableCell
                                >Container for table footer rows</TableCell
                            >
                            <TableCell>Contains summary/total cells</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>TableRow</code></TableCell>
                            <TableCell
                                >Individual table row with hover
                                states</TableCell
                            >
                            <TableCell>Contains cells</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>TableHead</code></TableCell>
                            <TableCell
                                >Header cell with proper styling</TableCell
                            >
                            <TableCell>Inside TableHeader</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>TableCell</code></TableCell>
                            <TableCell>Data cell with proper padding</TableCell>
                            <TableCell>Inside TableBody/TableFooter</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><code>TableCaption</code></TableCell>
                            <TableCell
                                >Table caption for accessibility</TableCell
                            >
                            <TableCell>Optional, at table level</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
</template>
