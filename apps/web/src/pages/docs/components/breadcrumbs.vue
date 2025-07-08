<script setup lang="ts">
import { computed } from 'vue'
import {
    Breadcrumbs,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
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
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    Button,
} from '@picklepilot/pickle-jar-ui'

const componentData = computed(() => ({
    title: 'Breadcrumbs',
    description:
        'A composable breadcrumb component that displays the path to the current resource using a hierarchy of links. Provides navigation context and helps users understand their location within a site.',
    props: [
        {
            name: 'href',
            type: 'string',
            default: 'undefined',
            description: 'The href attribute for the link (BreadcrumbLink)',
            options: undefined as string[] | undefined,
        },
        {
            name: 'to',
            type: 'string | object',
            default: 'undefined',
            description:
                'The route to navigate to (for Vue Router) (BreadcrumbLink)',
            options: undefined as string[] | undefined,
        },
        {
            name: 'asChild',
            type: 'boolean',
            default: 'false',
            description:
                'Whether to render as a child component (BreadcrumbLink)',
            options: undefined as string[] | undefined,
        },
        {
            name: 'theme',
            type: 'object',
            default: '{}',
            description:
                "Locally customize the component's theme properties for all breadcrumb components",
            options: undefined as string[] | undefined,
        },
    ],
    events: [
        {
            name: 'click',
            description:
                'Emitted when a breadcrumb link is clicked (BreadcrumbLink)',
        },
    ],
    slots: [
        {
            name: 'default',
            description: 'The default slot for breadcrumb content',
        },
    ],
    codeBlocks: {
        oneLineUsage: `<Breadcrumbs><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumbs>`,
        basic: `<template>
  <Breadcrumbs>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumbs>
</template>

<script setup>
import {
  Breadcrumbs,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@picklepilot/pickle-jar-ui'
<\/script>`,
        basicUsage: `<template>
  <Breadcrumbs>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Current Page</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumbs>
</template>

<script setup>
import {
  Breadcrumbs,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@picklepilot/pickle-jar-ui'
<\/script>`,
        customSeparator: `<template>
  <Breadcrumbs>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <svg class="size-3.5">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Components</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumbs>
</template>

<script setup>
import {
  Breadcrumbs,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@picklepilot/pickle-jar-ui'
<\/script>`,
        withDropdown: `<template>
  <Breadcrumbs>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <Dropdown>
          <DropdownTrigger asChild>
            <Button variant="ghost" size="sm">
              Components
            </Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Documentation</DropdownItem>
            <DropdownItem>Themes</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumbs>
</template>

<script setup>
import {
  Breadcrumbs,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  Button,
} from '@picklepilot/pickle-jar-ui'
<\/script>`,
        withEllipsis: `<template>
  <Breadcrumbs>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Current Page</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumbs>
</template>

<script setup>
import {
  Breadcrumbs,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@picklepilot/pickle-jar-ui'
<\/script>`,
        longBreadcrumb: `<template>
  <Breadcrumbs>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/docs/components/navigation">Navigation</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumbs>
</template>

<script setup>
import {
  Breadcrumbs,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@picklepilot/pickle-jar-ui'
<\/script>`,
        import: `import {
  Breadcrumbs,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@picklepilot/pickle-jar-ui'`,
        routerLink: `<BreadcrumbLink to="/">Home</BreadcrumbLink>`,
    },
}))
</script>

<template>
    <div class="prose prose-gray max-w-none">
        <h1>{{ componentData.title }}</h1>
        <p class="lead">{{ componentData.description }}</p>

        <div class="mt-10 space-y-4">
            <h3>Imports</h3>
            <CodeBlock
                language="ts"
                :code="componentData.codeBlocks.import"
                auto-theme
                light-theme="github-light"
                dark-theme="github-dark"
                class="border-none shadow-none"
            />
        </div>

        <!-- Basic Example -->
        <div class="space-y-4 mt-8">
            <h3>Basic Usage</h3>
            <Tabs class="px-2 pt-2 bg-background border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex items-center justify-center p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Breadcrumbs>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/"
                                            >Home</BreadcrumbLink
                                        >
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage
                                            >Current Page</BreadcrumbPage
                                        >
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumbs>
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

        <!-- Complete Example -->
        <div class="space-y-4 mt-8">
            <h3>Complete Example</h3>
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
                            <Breadcrumbs>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/"
                                            >Home</BreadcrumbLink
                                        >
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/components"
                                            >Components</BreadcrumbLink
                                        >
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage
                                            >Breadcrumbs</BreadcrumbPage
                                        >
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumbs>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.basic"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- With Dropdown Example -->
        <div class="space-y-4 mt-8">
            <h3>With Dropdown</h3>
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
                            <Breadcrumbs>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/"
                                            >Home</BreadcrumbLink
                                        >
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <Dropdown>
                                            <DropdownTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    :theme="{
                                                        button: 'p-0 size-5 rounded flex items-center justify-center',
                                                    }"
                                                >
                                                    <BreadcrumbEllipsis
                                                        :theme="{
                                                            ellipsis:
                                                                'p-0 h-4 w-3',
                                                        }"
                                                    />
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownContent align="start">
                                                <DropdownItem
                                                    >Documentation</DropdownItem
                                                >
                                                <DropdownItem
                                                    >Themes</DropdownItem
                                                >
                                                <DropdownItem
                                                    >GitHub</DropdownItem
                                                >
                                            </DropdownContent>
                                        </Dropdown>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage
                                            >Breadcrumbs</BreadcrumbPage
                                        >
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumbs>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.withDropdown"
                            auto-theme
                            light-theme="github-light"
                            dark-theme="github-dark"
                            class="border-none rounded-t-none shadow-none"
                        />
                    </TabsPanel>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Long Breadcrumb Example -->
        <div class="space-y-4 mt-8">
            <h3>Long Breadcrumb</h3>
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
                            <Breadcrumbs>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/"
                                            >Home</BreadcrumbLink
                                        >
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/docs"
                                            >Documentation</BreadcrumbLink
                                        >
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/docs/components"
                                            >Components</BreadcrumbLink
                                        >
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            href="/docs/components/navigation"
                                            >Navigation</BreadcrumbLink
                                        >
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage
                                            >Breadcrumbs</BreadcrumbPage
                                        >
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumbs>
                        </div>
                    </TabsPanel>
                    <TabsPanel value="code" class="grow min-h-px border-t">
                        <CodeBlock
                            language="vue"
                            :code="componentData.codeBlocks.longBreadcrumb"
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
                The breadcrumb link can be used with Vue Router by passing a
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

        <div class="mt-10 space-y-4">
            <h2>Components</h2>
            <p>
                The breadcrumbs system consists of several composable
                components:
            </p>

            <h3>Breadcrumbs</h3>
            <p>
                The main container component that provides context for the
                breadcrumb system.
            </p>

            <h3>BreadcrumbList</h3>
            <p>
                Wraps the breadcrumb items in an ordered list for semantic HTML
                structure.
            </p>

            <h3>BreadcrumbItem</h3>
            <p>Individual breadcrumb item wrapper component.</p>

            <h3>BreadcrumbLink</h3>
            <p>
                Clickable link component for navigation. Supports both regular
                links and Vue Router navigation.
            </p>

            <h3>BreadcrumbPage</h3>
            <p>
                Component for the current page (non-clickable). Represents the
                final destination.
            </p>

            <h3>BreadcrumbSeparator</h3>
            <p>
                Separator between breadcrumb items. Can be customized with
                custom icons or content.
            </p>

            <h3>BreadcrumbEllipsis</h3>
            <p>
                Component for showing collapsed breadcrumb items when there are
                too many levels to display.
            </p>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Accessibility</h2>
            <p>
                The breadcrumbs component follows accessibility best practices:
            </p>
            <ul>
                <li>
                    Uses semantic HTML with <code>&lt;nav&gt;</code> and
                    <code>&lt;ol&gt;</code> elements
                </li>
                <li>Includes proper ARIA labels and roles</li>
                <li>Supports keyboard navigation</li>
                <li>Provides focus management</li>
                <li>Uses proper color contrast ratios</li>
                <li>Includes screen reader support</li>
            </ul>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Styling</h2>
            <p>
                The component uses Tailwind CSS classes and follows the design
                system's theming approach. You can customize the appearance
                using the <code>theme</code> prop on individual components.
            </p>
        </div>
    </div>
</template>
