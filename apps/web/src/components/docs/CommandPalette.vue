<script setup lang="ts">
import {
    CommandPalette,
    AlgoliaSearchStrategy,
} from '@picklepilot/pickle-jar-ui'

// Initialize Algolia search strategy
const algoliaSearchStrategy = new AlgoliaSearchStrategy({
    appId: 'ECSILNZCDE',
    searchKey: '670deb25b09e92da4d8eb17a07f83620',
    indexName: 'algolia-index',
})

const defaultResults = [
    {
        title: 'Installation',
        url: '/docs/installation',
        id: 'installation',
    },
    {
        title: 'Components',
        url: '/docs/components',
        id: 'components',
    },
]
</script>

<template>
    <span class="hidden sm:block w-[calc(100vw-2rem)] sm:w-[300px]">
        <CommandPalette
            :search-strategy="algoliaSearchStrategy"
            :default-results="defaultResults"
            footer-text="Go to Page"
            input-placeholder="Start typing..."
            keyboard-shortcut="⌘K"
            no-results-text="No results found"
            placeholder="Search documentation..."
            results-label="Get Started"
            trigger-key="k"
            trigger-modifier="metaKey"
        />
    </span>
</template>
