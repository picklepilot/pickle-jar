<script setup lang="ts">
import { computed } from 'vue'
import DocsLayout from '@/components/docs/DocsLayout.vue'
// import { Button } from '@picklepilot/pickle-jar-ui'
import {
    MousePointer,
    Type,
    //  Palette,
    Search,
    Settings,
    Layers,
    MessageSquare,
    FileText,
    Grid,
    Zap,
} from 'lucide-vue-next'

const componentCategories = computed(() => [
    {
        title: 'Form Elements',
        description: 'Interactive form components for user input',
        icon: Type,
        components: [
            {
                name: 'Button',
                href: '/docs/components/button',
                description:
                    'Versatile button component with multiple variants',
            },
            {
                name: 'Input',
                href: '/docs/components/input',
                description: 'Text input field with validation support',
            },
            {
                name: 'Combobox',
                href: '/docs/components/combobox',
                description: 'Searchable dropdown with keyboard navigation',
            },
            {
                name: 'Typeahead',
                href: '/docs/components/typeahead',
                description: 'Autocomplete input with suggestions',
            },
            {
                name: 'Color Picker',
                href: '/docs/components/color-picker',
                description: 'Color selection component with palette',
            },
        ],
    },
    {
        title: 'Overlay Components',
        description: 'Components that appear above other content',
        icon: Layers,
        components: [
            {
                name: 'Tooltip',
                href: '/docs/components/tooltip',
                description: 'Contextual information on hover',
            },
            {
                name: 'Popover',
                href: '/docs/components/popover',
                description: 'Floating content container',
            },
            {
                name: 'Dropdown',
                href: '/docs/components/dropdown',
                description: 'Menu with multiple options',
            },
        ],
    },
    {
        title: 'Feedback & Status',
        description: 'Components for user feedback and status indication',
        icon: MessageSquare,
        components: [
            {
                name: 'Alert',
                href: '/docs/components/alert',
                description: 'Important message display',
            },
            {
                name: 'Badge',
                href: '/docs/components/badge',
                description: 'Status indicator or count display',
            },
            {
                name: 'Empty State',
                href: '/docs/components/empty-state',
                description: 'Placeholder for empty content',
            },
        ],
    },
    {
        title: 'Content Display',
        description: 'Components for displaying structured content',
        icon: FileText,
        components: [
            {
                name: 'Code Block',
                href: '/docs/components/code-block',
                description: 'Syntax-highlighted code display',
            },
        ],
    },
    {
        title: 'Advanced Modules',
        description: 'Complex components for specific use cases',
        icon: Zap,
        components: [
            {
                name: 'Command Palette',
                href: '/docs/components/command-palette',
                description: 'Global search and command interface',
            },
            {
                name: 'Confirmation Dialog',
                href: '/docs/components/confirmation-dialog',
                description: 'Modal for user confirmations',
            },
            {
                name: 'Tabs Navigation',
                href: '/docs/components/tabs-nav',
                description: 'Tabbed content organization',
            },
            {
                name: 'Column Manager',
                href: '/docs/components/column-manager',
                description: 'Data table column configuration',
            },
            {
                name: 'Fluent Query Builder',
                href: '/docs/components/fluent-query-builder',
                description: 'Dynamic query construction interface',
            },
        ],
    },
    {
        title: 'Utilities',
        description: 'Helper components and utilities',
        icon: Settings,
        components: [
            {
                name: 'Theme Toggle',
                href: '/docs/components/theme-toggle',
                description: 'Dark/light mode switcher',
            },
        ],
    },
])

const allComponents = computed(() =>
    componentCategories.value.flatMap(category => category.components)
)
</script>

<template>
    <DocsLayout>
        <div class="prose prose-gray max-w-none">
            <div class="mb-8">
                <h1 class="text-4xl font-bold tracking-tight">Components</h1>
                <p class="text-xl text-muted-foreground mt-4">
                    A collection of beautifully designed, accessible components
                    built with Vue 3 and TypeScript.
                </p>
            </div>

            <!-- Quick Search -->
            <div class="mb-12">
                <div class="relative">
                    <Search
                        class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    />
                    <input
                        type="text"
                        placeholder="Search components..."
                        class="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
            </div>

            <!-- Component Categories -->
            <div class="space-y-12">
                <div
                    v-for="category in componentCategories"
                    :key="category.title"
                    class="space-y-6"
                >
                    <div class="flex items-center gap-3">
                        <component
                            :is="category.icon"
                            class="h-6 w-6 text-primary"
                        />
                        <h2 class="text-2xl font-semibold">
                            {{ category.title }}
                        </h2>
                    </div>
                    <p class="text-muted-foreground text-lg">
                        {{ category.description }}
                    </p>

                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        <RouterLink
                            v-for="component in category.components"
                            :key="component.name"
                            :to="component.href"
                            class="group block p-6 border border-border rounded-lg bg-card hover:bg-accent/50 transition-all duration-200 hover:border-primary/20 hover:shadow-md"
                        >
                            <div class="flex items-start justify-between mb-3">
                                <h3
                                    class="font-semibold text-lg group-hover:text-primary transition-colors"
                                >
                                    {{ component.name }}
                                </h3>
                                <MousePointer
                                    class="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors"
                                />
                            </div>
                            <p
                                class="text-sm text-muted-foreground leading-relaxed"
                            >
                                {{ component.description }}
                            </p>
                        </RouterLink>
                    </div>
                </div>
            </div>

            <!-- All Components Grid -->
            <div class="mt-16 pt-12 border-t border-border">
                <div class="flex items-center gap-3 mb-8">
                    <Grid class="h-6 w-6 text-primary" />
                    <h2 class="text-2xl font-semibold">All Components</h2>
                </div>

                <div
                    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
                >
                    <RouterLink
                        v-for="component in allComponents"
                        :key="component.name"
                        :to="component.href"
                        class="group block p-4 border border-border rounded-lg bg-card hover:bg-accent/50 transition-all duration-200 hover:border-primary/20 text-center"
                    >
                        <h3
                            class="font-medium text-sm group-hover:text-primary transition-colors"
                        >
                            {{ component.name }}
                        </h3>
                    </RouterLink>
                </div>
            </div>

            <!-- Getting Started CTA -->
            <div
                class="mt-16 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20"
            >
                <div class="text-center">
                    <h3 class="text-xl font-semibold mb-2">
                        Ready to get started?
                    </h3>
                    <p class="text-muted-foreground mb-6">
                        Install the library and start building beautiful
                        interfaces with our components.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <RouterLink
                            to="/docs/installation"
                            class="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                            Installation Guide
                        </RouterLink>
                        <RouterLink
                            to="/docs/quick-start"
                            class="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
                        >
                            Quick Start
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </DocsLayout>
</template>
