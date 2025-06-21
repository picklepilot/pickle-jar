<script setup lang="ts">
import { CommandPalette, AlgoliaSearchStrategy } from '@pickle-jar/ui'

// Initialize Algolia search strategy
const algoliaSearchStrategy = new AlgoliaSearchStrategy({
    appId: 'ECSILNZCDE',
    searchKey: '670deb25b09e92da4d8eb17a07f83620',
    indexName: 'algolia-index',
})
</script>

<template>
    <span class="w-[500px]">
        <CommandPalette
            :search-strategy="algoliaSearchStrategy"
            placeholder="Search docs..."
            input-placeholder="Search documentation..."
            results-label="Get Started"
            no-results-text="No results found"
            footer-text="Go to Page"
            keyboard-shortcut="⌘K"
            trigger-key="k"
            trigger-modifier="metaKey"
        />
    </span>
</template>
