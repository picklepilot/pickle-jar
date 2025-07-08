<script setup lang="ts">
import { computed } from 'vue'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
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
import {
    InfoIcon,
    CheckIcon,
    AlertTriangleIcon,
    XCircleIcon,
} from 'lucide-vue-next'

const componentData = computed(() => ({
    title: 'Alert',
    description:
        'A flexible alert component system that provides contextual feedback messages for users. Supports multiple variants, dismissible functionality, and composable architecture for maximum customization.',
    props: [
        {
            name: 'variant',
            type: 'string',
            default: 'info',
            description: 'The type of alert to display',
            options: [
                'info',
                'processing',
                'warning',
                'error',
                'success',
                'muted',
            ],
        },
        {
            name: 'dismissable',
            type: 'boolean',
            default: 'false',
            description:
                'Whether the alert can be dismissed by clicking an X button',
            options: undefined as string[] | undefined,
        },
        {
            name: 'flush',
            type: 'boolean',
            default: 'false',
            description: 'Removes rounded corners from the alert',
            options: undefined as string[] | undefined,
        },
        {
            name: 'theme',
            type: 'object',
            default: '{}',
            description: "Locally customize the component's theme properties",
            options: undefined as string[] | undefined,
        },
    ],
    events: [
        {
            name: 'close',
            description: 'Emitted when the alert close button is clicked',
        },
    ],
    slots: [
        {
            name: 'default',
            description: 'The default slot for alert content',
        },
    ],
    codeBlocks: {
        oneLineUsage: `<Alert variant="success"><AlertTitle>Success!</AlertTitle><AlertDescription>Operation completed.</AlertDescription></Alert>`,
        basic: `<template>
  <Alert variant="info">
    <AlertIcon>
      <InfoIcon class="size-4" />
    </AlertIcon>
    <AlertTitle>Information</AlertTitle>
    <AlertDescription>This is an informational alert message.</AlertDescription>
  </Alert>
</template>

<script setup>
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@picklepilot/pickle-jar-ui'
import { InfoIcon } from 'lucide-vue-next'
<\/script>`,
        basicUsage: `<template>
  <Alert variant="info">
    <AlertTitle>Information</AlertTitle>
    <AlertDescription>This is a basic alert message.</AlertDescription>
  </Alert>
</template>

<script setup>
import { Alert, AlertTitle, AlertDescription } from '@picklepilot/pickle-jar-ui'
<\/script>`,
        variants: `<template>
  <div class="space-y-4">
    <Alert variant="info">
      <AlertIcon>
        <InfoIcon class="size-4" />
      </AlertIcon>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This is an informational message.</AlertDescription>
    </Alert>
    
    <Alert variant="success">
      <AlertIcon>
        <CheckIcon class="size-4" />
      </AlertIcon>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>Your action was completed successfully.</AlertDescription>
    </Alert>
    
    <Alert variant="warning">
      <AlertIcon>
        <AlertTriangleIcon class="size-4" />
      </AlertIcon>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Please review your input before proceeding.</AlertDescription>
    </Alert>
    
    <Alert variant="error">
      <AlertIcon>
        <XCircleIcon class="size-4" />
      </AlertIcon>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong. Please try again.</AlertDescription>
    </Alert>
  </div>
</template>

<script setup>
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@picklepilot/pickle-jar-ui'
import { InfoIcon, CheckIcon, AlertTriangleIcon, XCircleIcon } from 'lucide-vue-next'
<\/script>`,
        dismissable: `<template>
  <Alert variant="info" dismissable @close="handleClose">
    <AlertIcon>
      <InfoIcon class="size-4" />
    </AlertIcon>
    <AlertTitle>Dismissible Alert</AlertTitle>
    <AlertDescription>This alert can be closed by clicking the X button.</AlertDescription>
  </Alert>
</template>

<script setup>
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@picklepilot/pickle-jar-ui'
import { InfoIcon } from 'lucide-vue-next'

const handleClose = () => {
  console.log('Alert closed')
}
<\/script>`,
        withActions: `<template>
  <Alert variant="success">
    <AlertContent>
      <AlertIcon>
        <CheckIcon class="size-4" />
      </AlertIcon>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>Your action was completed successfully.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="sm">View Details</Button>
      </AlertAction>
    </AlertContent>
  </Alert>
</template>

<script setup>
import { Alert, AlertContent, AlertIcon, AlertTitle, AlertDescription, AlertAction, Button } from '@picklepilot/pickle-jar-ui'
import { CheckIcon } from 'lucide-vue-next'
<\/script>`,
        flush: `<template>
  <Alert variant="warning" flush>
    <AlertIcon>
      <AlertTriangleIcon class="size-4" />
    </AlertIcon>
    <AlertTitle>Warning</AlertTitle>
    <AlertDescription>This alert has no rounded corners.</AlertDescription>
  </Alert>
</template>

<script setup>
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@picklepilot/pickle-jar-ui'
import { AlertTriangleIcon } from 'lucide-vue-next'
<\/script>`,

        import: `import { 
    Alert, 
    AlertIcon, 
    AlertTitle, 
    AlertDescription, 
    AlertAction,
    Button,
} from '@picklepilot/pickle-jar-ui'`,
        useAlertImport: `import { useAlert } from '@picklepilot/pickle-jar-ui'`,
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
                            <Alert variant="info">
                                <AlertTitle>Information</AlertTitle>
                                <AlertDescription
                                    >This is a basic alert
                                    message.</AlertDescription
                                >
                            </Alert>
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
                            <Alert variant="info">
                                <AlertIcon>
                                    <InfoIcon class="size-4" />
                                </AlertIcon>
                                <AlertTitle>Information</AlertTitle>
                                <AlertDescription
                                    >This is an informational alert
                                    message.</AlertDescription
                                >
                            </Alert>
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

        <!-- Variants Example -->
        <div class="space-y-4 mt-8">
            <h3>Variants</h3>
            <Tabs class="px-2 pt-2 border rounded-lg">
                <TabsList class="relative z-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent class="-mx-2 grow min-h-px border-none">
                    <TabsPanel value="preview" class="h-full border-t">
                        <div
                            class="flex flex-col gap-4 p-8 h-full min-h-72 bg-white rounded-lg"
                        >
                            <Alert variant="muted">
                                <AlertIcon>
                                    <InfoIcon class="size-4" />
                                </AlertIcon>
                                <AlertTitle>Information</AlertTitle>
                                <AlertDescription
                                    >This is an informational
                                    message.</AlertDescription
                                >
                            </Alert>

                            <Alert variant="info">
                                <AlertIcon>
                                    <InfoIcon class="size-4" />
                                </AlertIcon>
                                <AlertTitle>Information</AlertTitle>
                                <AlertDescription
                                    >This is an informational
                                    message.</AlertDescription
                                >
                            </Alert>

                            <Alert variant="success">
                                <AlertIcon>
                                    <CheckIcon class="size-4" />
                                </AlertIcon>
                                <AlertTitle>Success!</AlertTitle>
                                <AlertDescription
                                    >Your action was completed
                                    successfully.</AlertDescription
                                >
                            </Alert>

                            <Alert variant="warning">
                                <AlertIcon>
                                    <AlertTriangleIcon class="size-4" />
                                </AlertIcon>
                                <AlertTitle>Warning</AlertTitle>
                                <AlertDescription
                                    >Please review your input before
                                    proceeding.</AlertDescription
                                >
                            </Alert>

                            <Alert variant="error">
                                <AlertIcon>
                                    <XCircleIcon class="size-4" />
                                </AlertIcon>
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription
                                    >Something went wrong. Please try
                                    again.</AlertDescription
                                >
                            </Alert>
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

        <div class="mt-10 space-y-4">
            <h3>useAlert Import</h3>
            <CodeBlock
                language="ts"
                :code="componentData.codeBlocks.useAlertImport"
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
            <p>The alert system consists of several composable components:</p>

            <h3>Alert</h3>
            <p>
                The main alert component that combines all sub-components for
                convenience.
            </p>

            <h3>AlertIcon</h3>
            <p>
                Provides the icon container styling with proper spacing and
                alignment.
            </p>

            <h3>AlertTitle</h3>
            <p>
                Provides the title styling and structure with proper typography.
            </p>

            <h3>AlertDescription</h3>
            <p>
                Provides the description/body styling and structure for the main
                content.
            </p>

            <h3>AlertAction</h3>
            <p>
                Provides the action area styling for buttons and interactive
                elements.
            </p>
        </div>

        <div class="mt-10 space-y-4">
            <h2>useAlert Composable</h2>
            <p>
                The <code>useAlert</code> composable provides programmatic
                control over alert state:
            </p>

            <h3>State Properties</h3>
            <ul>
                <li><code>isVisible</code> - Controls alert visibility</li>
                <li>
                    <code>variant</code> - Alert variant (info, success,
                    warning, error, etc.)
                </li>
                <li>
                    <code>dismissable</code> - Whether the alert can be
                    dismissed
                </li>
                <li><code>flush</code> - Removes rounded corners</li>
            </ul>

            <h3>Methods</h3>
            <ul>
                <li><code>show()</code> - Display the alert</li>
                <li><code>hide()</code> - Hide the alert</li>
                <li><code>toggle()</code> - Toggle visibility</li>
                <li><code>setVariant(variant)</code> - Change alert variant</li>
                <li>
                    <code>setDismissable(dismissable)</code> - Set dismissable
                    state
                </li>
                <li><code>setFlush(flush)</code> - Set flush state</li>
            </ul>

            <h3>Computed Properties</h3>
            <ul>
                <li>
                    <code>isInfo</code>, <code>isSuccess</code>,
                    <code>isWarning</code>, <code>isError</code>, etc. - Variant
                    checks
                </li>
            </ul>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Variants</h2>
            <p>
                The alert component supports several variants for different
                contexts:
            </p>
            <ul>
                <li>
                    <strong>info</strong> - Informational messages with blue
                    styling
                </li>
                <li>
                    <strong>processing</strong> - Loading or processing states
                    with blue styling
                </li>
                <li>
                    <strong>success</strong> - Success messages with green
                    styling
                </li>
                <li>
                    <strong>warning</strong> - Warning messages with yellow
                    styling
                </li>
                <li>
                    <strong>error</strong> - Error messages with red styling
                </li>
                <li>
                    <strong>muted</strong> - Neutral messages with gray styling
                </li>
            </ul>
        </div>

        <div class="mt-10 space-y-4">
            <h2>Accessibility</h2>
            <p>The alert component follows accessibility best practices:</p>
            <ul>
                <li>Uses semantic HTML with proper ARIA roles</li>
                <li>Includes proper focus management</li>
                <li>Supports keyboard navigation</li>
                <li>Provides clear visual indicators for different states</li>
                <li>Includes screen reader support</li>
                <li>Uses proper color contrast ratios</li>
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
