<script setup lang="ts">
import { computed } from 'vue'
import {
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
    TableCell,
    TableHead,
    TableRow,
} from '@picklepilot/pickle-jar-ui'
import { PlusIcon } from 'lucide-vue-next'

const componentData = computed(() => ({
    title: 'Button',
    description:
        'A versatile button component with multiple variants, sizes, and states. Supports loading states, custom themes, and accessibility features.',
    props: [
        {
            name: 'variant',
            type: 'string',
            default: 'default',
            description: 'The visual style of the button',
            options: [
                'default',
                'destructive',
                'outline',
                'secondary',
                'ghost',
                'link',
            ],
        },
        {
            name: 'size',
            type: 'string',
            default: 'default',
            description: 'The size of the button',
            options: ['default', 'sm', 'lg', 'xs', 'icon'],
        },
        {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description:
                'Whether the button is disabled. When true, the button cannot be clicked and shows a disabled state.',
        },
        {
            name: 'processing',
            type: 'boolean',
            default: 'false',
            description:
                'Whether the button is in a processing state. When true, displays a loading indicator.',
        },
        {
            name: 'round',
            type: 'boolean',
            default: 'false',
            description:
                'Whether the button should have a round/circular shape. When true, uses rounded-full instead of rounded-md.',
        },
        {
            name: 'theme',
            type: 'object',
            default: '{}',
            description:
                "Locally customize the component's theme properties including button, buttonDisabled, and buttonIcon styles.",
        },
    ],
    events: [
        {
            name: 'click',
            description:
                'Emitted when the button is clicked. Receives the MouseEvent as payload.',
        },
    ],
    slots: [
        {
            name: 'default',
            description: 'The default slot for the button content',
        },
        {
            name: 'processing',
            description:
                'Optional slot for custom loading indicator content when processing is true',
        },
    ],
    codeBlocks: {
        oneLineUsage: `<Button variant='outline' size='default'>Click me</Button>`,
        basic: `<template>
  <Button variant='default' size='default'>
    Click me
  </Button>
</template>

<script setup>
import { Button } from '@picklepilot/pickle-jar-ui'
<\/script>`,
        basicUsage: `<template>
  <Button>
    Click me
  </Button>
</template>

<script setup>
import { Button } from '@picklepilot/pickle-jar-ui'
<\/script>`,
        variants: `<template>
  <div class='space-x-4'>
    <Button variant='default'>Default</Button>
    <Button variant='secondary'>Secondary</Button>
    <Button variant='outline'>Outline</Button>
    <Button variant='ghost'>Ghost</Button>
  </div>
</template>

<script setup>
import { Button } from '@picklepilot/pickle-jar-ui'
<\/script>`,
        sizes: `<template>
  <div class='space-x-4'>
    <Button size='sm'>Small</Button>
    <Button size='default'>Default</Button>
    <Button size='lg'>Large</Button>
  </div>
</template>

<script setup>
import { Button } from '@picklepilot/pickle-jar-ui'
<\/script>`,
        icon: `<template>   
  <Button>
    <template #icon>
      <PlusIcon class='size-4' />
    </template>
    With Icon
  </Button>
</template>

<script setup>
import { Button } from '@picklepilot/pickle-jar-ui'
<\/script>`,
        processing: `<template>
  <div class='space-x-4'>
    <Button processing>
      Loading...
      <template #processing>
        <span>⏳</span>
      </template>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@picklepilot/pickle-jar-ui'
<\/script>`,
        round: `<template>
  <div class='space-x-4'>
    <Button round>Round</Button>
    <Button round variant='destructive'>Delete</Button>
    <Button round size='icon'>
      <PlusIcon class='size-4' />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@picklepilot/pickle-jar-ui'
import { PlusIcon, TrashIcon } from 'lucide-vue-next'
<\/script>`,
        iconButton: `<template>
  <div class='space-x-4'>
    <Button size='icon'>
      <PlusIcon class='size-4' />
      <span class='sr-only'>Add</span>
    </Button>
    <Button size='icon' variant='outline'>
      <TrashIcon class='size-4' />
      <span class='sr-only'>Delete</span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@picklepilot/pickle-jar-ui'
<\/script>`,
        disabled: `<template>
  <div class='space-x-4'>
    <Button disabled>
      Disabled Button
    </Button>
    <Button disabled variant='destructive'>
      Disabled Destructive
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@picklepilot/pickle-jar-ui'
<\/script>`,
        import: `import { Button } from '@picklepilot/pickle-jar-ui'`,
        routerLink: `<Button to='/'>Go Home</Button>`,
    },
}))

// const handleClick = () => {
//     alert('clicked')
// }
</script>

<template>
    <div class="prose prose-gray max-w-none">
        <h1>{{ componentData.title }}</h1>
        <p class="lead">{{ componentData.description }}</p>

        <!-- <h2>Usage</h2> -->

        <!-- <Tabs class="mt-10 px-2 h-72">
            <TabsList class="relative z-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent class="-mx-2 grow min-h-px">
                <TabsPanel value="preview" class="h-full">
                    <div
                        class="flex items-center justify-center p-8 h-full bg-neutral-100 rounded-lg"
                    >
                        <Button @click="handleClick">Click me</Button>
                    </div>
                </TabsPanel>
                <TabsPanel value="code" class="grow min-h-px">
                    <CodeBlock
                        language="vue"
                        :code="componentData.codeBlocks.basic"
                        auto-theme
                        light-theme="github-light"
                        dark-theme="github-dark"
                        class="border-none shadow-none"
                    />
                </TabsPanel>
            </TabsContent>
        </Tabs> -->

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

        <!-- Variants Example -->
        <div class="space-y-4 mt-8">
            <h3>With Variants</h3>
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
                            <Button variant="default">Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.variants"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Sizes Example -->
        <div class="space-y-4 mt-8">
            <h3>With Sizes</h3>
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
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.sizes"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Icon Example -->
        <div class="space-y-4 mt-8">
            <h3>With Icon</h3>
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
                            <Button>
                                <svg
                                    class="size-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                                With Icon
                            </Button>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.icon"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Processing State Example -->
        <div class="space-y-4 mt-8">
            <h3>With Processing State</h3>
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
                            <Button processing>
                                Loading...
                                <template #processing>
                                    <span>⏳</span>
                                </template>
                            </Button>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.processing"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Round Buttons Example -->
        <div class="space-y-4 mt-8">
            <h3>Round Buttons</h3>
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
                            <Button round>Round</Button>
                            <Button round variant="destructive">Delete</Button>
                            <Button round size="icon">
                                <PlusIcon class="size-4" />
                            </Button>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.round"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Icon Size Example -->
        <div class="space-y-4 mt-8">
            <h3>Icon Size</h3>
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
                            <Button size="icon">
                                <PlusIcon class="size-4" />
                            </Button>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.iconButton"
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
                            <Button disabled> Disabled Button </Button>
                            <Button disabled variant="destructive">
                                Disabled Destructive
                            </Button>
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

        <div class="mt-10 space-y-4">
            <h3>With Router Link</h3>
            <p>
                The button can be used as a router link by passing a
                <code>to</code>
                prop.
            </p>
            <CodeBlock
                language="vue"
                :code="componentData.codeBlocks.routerLink"
                auto-theme
                light-theme="github-light"
                dark-theme="github-dark"
                class="border-none shadow-none"
            />
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
