# Command Palette Module

A flexible command palette component that supports custom search strategies. This module provides a reusable command palette with a clean, modern UI that can be configured to work with any search backend.

## Features

- 🔍 **Flexible Search Strategy**: Support for any search backend through the `SearchStrategy` interface
- ⌨️ **Keyboard Shortcuts**: Configurable keyboard shortcuts (default: ⌘K / Ctrl+K)
- 🎨 **Customizable UI**: Fully customizable labels, placeholders, and text
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ♿ **Accessible**: Built with accessibility in mind using Headless UI
- 🚀 **TypeScript Support**: Full TypeScript support with proper type definitions

## Basic Usage

```vue
<template>
    <CommandPalette
        :search-strategy="searchStrategy"
        placeholder="Search docs..."
        input-placeholder="Search documentation..."
    />
</template>

<script setup lang="ts">
import {
    CommandPalette,
    LocalSearchStrategy,
} from '@your-org/ui/modules/command-palette'

const searchStrategy = new LocalSearchStrategy([
    {
        id: '1',
        url: '/docs/getting-started',
        title: 'Getting Started',
        description: 'Learn how to set up your project',
        keywords: ['setup', 'installation'],
    },
])
</script>
```

## Search Strategies

### LocalSearchStrategy

Search through a predefined list of items locally:

```typescript
import {
    LocalSearchStrategy,
    LocalSearchItem,
} from '@your-org/ui/modules/command-palette'

const items: LocalSearchItem[] = [
    {
        id: '1',
        url: '/docs/getting-started',
        title: 'Getting Started',
        description: 'Learn how to set up your project',
        keywords: ['setup', 'installation', 'beginner'],
    },
]

const searchStrategy = new LocalSearchStrategy(items)
```

### AlgoliaSearchStrategy

Search using Algolia's search service:

```typescript
import { AlgoliaSearchStrategy } from '@your-org/ui/modules/command-palette'

const searchStrategy = new AlgoliaSearchStrategy({
    appId: 'YOUR_APP_ID',
    searchKey: 'YOUR_SEARCH_KEY',
    indexName: 'YOUR_INDEX_NAME',
})
```

### Custom Search Strategy

Implement your own search strategy by implementing the `SearchStrategy` interface:

```typescript
import type {
    SearchStrategy,
    CommandPaletteResult,
} from '@your-org/ui/modules/command-palette'

class CustomSearchStrategy implements SearchStrategy {
    async search(query: string): Promise<CommandPaletteResult[]> {
        // Your custom search logic here
        const results = await yourSearchAPI(query)

        return results.map(result => ({
            id: result.id,
            url: result.url,
            title: result.title,
            description: result.description,
        }))
    }
}
```

## Props

| Prop               | Type                     | Default              | Description                                    |
| ------------------ | ------------------------ | -------------------- | ---------------------------------------------- |
| `searchStrategy`   | `SearchStrategy`         | **required**         | The search strategy to use                     |
| `placeholder`      | `string`                 | `'Search...'`        | Text shown in the search button                |
| `inputPlaceholder` | `string`                 | `'Search...'`        | Placeholder text in the search input           |
| `resultsLabel`     | `string`                 | `'Results'`          | Label above the search results                 |
| `noResultsText`    | `string`                 | `'No results found'` | Text shown when no results are found           |
| `footerText`       | `string`                 | `'Go to Page'`       | Text in the footer                             |
| `keyboardShortcut` | `string`                 | `'⌘K'`               | Keyboard shortcut text to display              |
| `triggerKey`       | `string`                 | `'k'`                | Key that triggers the command palette          |
| `triggerModifier`  | `'metaKey' \| 'ctrlKey'` | `'metaKey'`          | Modifier key (⌘ on Mac, Ctrl on Windows/Linux) |

## Types

### CommandPaletteResult

```typescript
interface CommandPaletteResult {
    id: string
    url: string
    title: string
    description?: string
    [key: string]: any
}
```

### SearchStrategy

```typescript
interface SearchStrategy {
    search: (query: string) => Promise<CommandPaletteResult[]>
}
```

### LocalSearchItem

```typescript
interface LocalSearchItem {
    id: string
    url: string
    title: string
    description?: string
    keywords?: string[]
}
```

### AlgoliaSearchStrategyConfig

```typescript
interface AlgoliaSearchStrategyConfig {
    appId: string
    searchKey: string
    indexName: string
}
```

## Keyboard Shortcuts

- **⌘K / Ctrl+K**: Open command palette
- **Escape**: Close command palette
- **Enter**: Navigate to selected result

## Examples

### Documentation Search

```vue
<template>
    <CommandPalette
        :search-strategy="docsSearchStrategy"
        placeholder="Search docs..."
        input-placeholder="Search documentation..."
        results-label="Documentation"
        footer-text="Go to Page"
    />
</template>

<script setup lang="ts">
import {
    CommandPalette,
    AlgoliaSearchStrategy,
} from '@your-org/ui/modules/command-palette'

const docsSearchStrategy = new AlgoliaSearchStrategy({
    appId: 'YOUR_ALGOLIA_APP_ID',
    searchKey: 'YOUR_ALGOLIA_SEARCH_KEY',
    indexName: 'docs',
})
</script>
```

### File Search

```vue
<template>
    <CommandPalette
        :search-strategy="fileSearchStrategy"
        placeholder="Find files..."
        input-placeholder="Search files..."
        results-label="Files"
        footer-text="Open File"
        keyboard-shortcut="⌘P"
        trigger-key="p"
    />
</template>

<script setup lang="ts">
import {
    CommandPalette,
    LocalSearchStrategy,
} from '@your-org/ui/modules/command-palette'

const fileSearchStrategy = new LocalSearchStrategy([
    {
        id: 'src/components/Button.vue',
        url: '/src/components/Button.vue',
        title: 'Button.vue',
        description: 'Vue component for buttons',
        keywords: ['button', 'component', 'vue'],
    },
])
</script>
```

## Accessibility

The command palette is built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast support

## Styling

The component uses Tailwind CSS classes and follows the design system. The styling is consistent with other UI components in the package.

## Browser Support

- Modern browsers with ES2018+ support
- Vue 3.x
- TypeScript 4.x+
