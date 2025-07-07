import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import CommandPalette from './CommandPalette.vue'
import { LocalSearchStrategy, AlgoliaSearchStrategy } from './index'

const meta: Meta<typeof CommandPalette> = {
    title: 'Modules/CommandPalette',
    component: CommandPalette,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
        inputPlaceholder: { control: 'text' },
        resultsLabel: { control: 'text' },
        noResultsText: { control: 'text' },
        footerText: { control: 'text' },
        keyboardShortcut: { control: 'text' },
        triggerKey: { control: 'text' },
        triggerModifier: {
            control: { type: 'select' },
            options: ['metaKey', 'ctrlKey'],
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample data for local search
const sampleItems = [
    {
        id: '1',
        url: '/docs/getting-started',
        title: 'Getting Started',
        description: 'Learn how to set up and configure your project',
        keywords: ['setup', 'installation', 'beginner'],
    },
    {
        id: '2',
        url: '/docs/components',
        title: 'Components',
        description: 'Browse our collection of reusable UI components',
        keywords: ['ui', 'elements', 'interface'],
    },
    {
        id: '3',
        url: '/docs/api',
        title: 'API Reference',
        description: 'Complete API documentation for all functions and classes',
        keywords: ['reference', 'functions', 'classes'],
    },
    {
        id: '4',
        url: '/docs/examples',
        title: 'Examples',
        description: 'Real-world examples and use cases',
        keywords: ['samples', 'tutorials', 'demos'],
    },
]

export const Default: Story = {
    args: {
        placeholder: 'Search documentation...',
        inputPlaceholder: 'Start typing...',
        resultsLabel: 'Get Started',
        noResultsText: 'No results found',
        footerText: 'Go to Page',
        keyboardShortcut: '⌘K',
        triggerKey: 'k',
        triggerModifier: 'metaKey',
        defaultResults: [
            {
                id: '1',
                url: '/docs/getting-started',
                title: 'Getting Started',
                description: 'Learn how to set up and configure your project',
                keywords: ['setup', 'installation', 'beginner'],
            },
            {
                id: '2',
                url: '/docs/components',
                title: 'Components',
                description: 'Browse our collection of reusable UI components',
                keywords: ['ui', 'elements', 'interface'],
            },
            {
                id: '3',
                url: '/docs/api',
                title: 'API Reference',
                description:
                    'Complete API documentation for all functions and classes',
                keywords: ['reference', 'functions', 'classes'],
            },
            {
                id: '4',
                url: '/docs/examples',
                title: 'Examples',
                description: 'Real-world examples and use cases',
                keywords: ['samples', 'tutorials', 'demos'],
            },
        ],
        defaultResultsLabel: 'Jump right in...',
    },
    render: args => ({
        components: { CommandPalette },
        setup() {
            const localSearchStrategy = new LocalSearchStrategy(sampleItems)
            return { args, localSearchStrategy }
        },
        template: `
            <div class="sm:p-8 w-[calc(100vw-2rem)] sm:w-[500px] mx-auto">
                <CommandPalette 
                    :search-strategy="localSearchStrategy"
                    v-bind="args"
                />
            </div>
        `,
    }),
}

export const WithCustomLabels: Story = {
    args: {
        placeholder: 'Find anything...',
        inputPlaceholder: 'Type to search...',
        resultsLabel: 'Search Results',
        noResultsText: 'Nothing found matching your query',
        footerText: 'Press Enter to navigate',
        keyboardShortcut: 'Ctrl+K',
        triggerKey: 'k',
        triggerModifier: 'ctrlKey',
    },
    render: args => ({
        components: { CommandPalette },
        setup() {
            const localSearchStrategy = new LocalSearchStrategy(sampleItems)
            return { args, localSearchStrategy }
        },
        template: `
            <div class="p-8">
                <CommandPalette 
                    :search-strategy="localSearchStrategy"
                    v-bind="args"
                />
            </div>
        `,
    }),
}

export const AlgoliaExample: Story = {
    args: {
        placeholder: 'Search with Algolia...',
        inputPlaceholder: 'Search with Algolia...',
        resultsLabel: 'Algolia Results',
        noResultsText: 'No Algolia results found',
        footerText: 'Go to Page',
        keyboardShortcut: '⌘K',
        triggerKey: 'k',
        triggerModifier: 'metaKey',
    },
    render: args => ({
        components: { CommandPalette },
        setup() {
            // Note: This is just an example - you would need real Algolia credentials
            const algoliaStrategy = new AlgoliaSearchStrategy({
                appId: 'YOUR_APP_ID',
                searchKey: 'YOUR_SEARCH_KEY',
                indexName: 'YOUR_INDEX_NAME',
            })
            return { args, algoliaStrategy }
        },
        template: `
            <div class="p-8">
                <CommandPalette 
                    :search-strategy="algoliaStrategy"
                    v-bind="args"
                />
            </div>
        `,
    }),
}
