<script setup lang="ts">
import { computed, ref } from 'vue'
import {
    Button,
    CodeBlock,
    Drawer,
    DrawerContent,
    DrawerTrigger,
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

// Import code examples from separate file
import { drawerCodeExamples } from './drawer-code-examples'
import { parseMarkdown } from '@picklepilot/pickle-jar-core'

const componentData = computed(() => ({
    title: 'Drawer',
    description:
        'A smooth and modern drawer component with gesture-driven animations. This is a wrapper around the Vue port of the [Vaul Drawer](https://vaul.unovue.com/) component.',
    props: [],
    events: [],
    slots: [
        {
            name: 'default',
            description: 'The content of the drawer.',
        },
        {
            name: 'trigger',
            description: 'The trigger for the drawer.',
        },
    ],
    codeBlocks: drawerCodeExamples,
}))
</script>

<template>
    <div class="prose prose-gray max-w-none">
        <h1>{{ componentData.title }}</h1>
        <p
            class="lead markdown-it-content"
            v-html="parseMarkdown(componentData.description)"
        />

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
                            <Drawer>
                                <template #trigger>
                                    <DrawerTrigger>
                                        <Button variant="outline">Open</Button>
                                    </DrawerTrigger>
                                </template>
                                <DrawerContent class="max-h-[50%]">
                                    <div
                                        class="mx-auto w-full max-w-md border rounded-lg p-4"
                                    >
                                        <p>Content</p>
                                    </div>
                                </DrawerContent>
                            </Drawer>
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
