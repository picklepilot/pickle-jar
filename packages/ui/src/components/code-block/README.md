# CodeBlock Component

A Vue 3 component that provides syntax highlighting using Shiki. This component displays code with beautiful syntax highlighting, supports multiple programming languages and themes, and includes a copy-to-clipboard feature.

## Features

- 🎨 **Syntax Highlighting**: Powered by Shiki for accurate and beautiful code highlighting
- 🌈 **Multiple Themes**: Support for various color themes (Monokai, GitHub Dark, Dracula, Nord, etc.)
- 📋 **Copy to Clipboard**: One-click code copying with visual feedback
- 🎛️ **Customizable**: Hide header, disable copy button, customize styling
- 📱 **Responsive**: Works well on all screen sizes
- ♿ **Accessible**: Proper ARIA labels and keyboard navigation

## Usage

### Basic Usage

```vue
<template>
    <CodeBlock code="const message = 'Hello, World!'" language="javascript" />
</template>

<script setup>
import { CodeBlock } from '@pickle-jar/ui'
</script>
```

### With Custom Theme

```vue
<template>
    <CodeBlock
        code="interface User { name: string; age: number; }"
        language="typescript"
        shiki-theme="dracula"
        :custom-theme="{
            container: 'shadow-lg border-2 border-blue-500',
            header: 'bg-blue-50 border-blue-200',
            languageLabel: 'text-blue-700 font-bold',
        }"
    />
</template>
```

### Without Header

```vue
<template>
    <CodeBlock
        code="console.log('Hello World')"
        language="javascript"
        :show-header="false"
    />
</template>
```

### Without Copy Button

```vue
<template>
    <CodeBlock
        code="const config = { api: 'https://api.example.com' }"
        language="json"
        :show-copy-button="false"
    />
</template>
```

### With Custom Tabs

The CodeBlock component now supports a flexible tab system that allows you to create multiple tabs with custom content:

```vue
<template>
    <CodeBlock code="const message = 'Hello, World!'" language="javascript">
        <!-- Custom tab buttons -->
        <template #tabs>
            <CodeBlockTabButton id="demo" label="Demo" :icon="PlayIcon" />
            <CodeBlockTabButton id="code" label="Code" :icon="CodeIcon" />
            <CodeBlockTabButton
                id="docs"
                label="Documentation"
                :icon="BookIcon"
            />
        </template>

        <!-- Tab content -->
        <CodeBlockTab id="demo" label="Demo">
            <div class="p-4 bg-gray-50 rounded">
                <h3 class="text-lg font-semibold mb-2">Live Demo</h3>
                <p>This is a live demonstration of the component.</p>
                <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                    Click me!
                </button>
            </div>
        </CodeBlockTab>

        <CodeBlockTab id="code" label="Code">
            <!-- Code content is automatically shown here -->
        </CodeBlockTab>

        <CodeBlockTab id="docs" label="Documentation">
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">Usage</h3>
                <p class="text-sm text-gray-600 mb-4">
                    This component provides syntax highlighting for code blocks.
                </p>
                <h4 class="font-medium mb-2">Props:</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                    <li><code>code</code> - The code content to highlight</li>
                    <li><code>language</code> - Programming language</li>
                    <li><code>theme</code> - Syntax highlighting theme</li>
                </ul>
            </div>
        </CodeBlockTab>
    </CodeBlock>
</template>

<script setup>
import { CodeBlock, CodeBlockTab, CodeBlockTabButton } from '@pickle-jar/ui'
import { Play, Code, Book } from 'lucide-vue-next'

const PlayIcon = Play
const CodeIcon = Code
const BookIcon = Book
</script>
```

### Tab Components

#### CodeBlockTabButton

The `CodeBlockTabButton` component creates tab navigation buttons:

```vue
<template>
    <CodeBlockTabButton
        id="unique-tab-id"
        label="Tab Label"
        :icon="SomeIcon"
        :disabled="false"
        custom-theme="custom-button-styles"
    />
</template>
```

**Props:**

- `id` (string, required) - Unique identifier for the tab
- `label` (string, required) - Display text for the tab
- `icon` (Component, optional) - Icon component to display
- `disabled` (boolean, optional) - Whether the tab is disabled
- `customTheme` (string, optional) - Custom CSS classes

#### CodeBlockTab

The `CodeBlockTab` component defines tab content:

```vue
<template>
    <CodeBlockTab
        id="unique-tab-id"
        label="Tab Label"
        :disabled="false"
        custom-theme="custom-content-styles"
    >
        <!-- Tab content goes here -->
        <div>Your custom content</div>
    </CodeBlockTab>
</template>
```

**Props:**

- `id` (string, required) - Must match the corresponding tab button ID
- `label` (string, required) - Display text for the tab
- `disabled` (boolean, optional) - Whether the tab is disabled
- `customTheme` (string, optional) - Custom CSS classes for the content area

### Backward Compatibility

The original demo/code tab system is still supported for backward compatibility:

```vue
<template>
    <CodeBlock code="const message = 'Hello, World!'" language="javascript">
        <template #demo>
            <div>Your demo content here</div>
        </template>
    </CodeBlock>
</template>
```

## Props

| Prop                | Type      | Default        | Description                                                     |
| ------------------- | --------- | -------------- | --------------------------------------------------------------- |
| `code`              | `string`  | **required**   | The code content to highlight                                   |
| `language`          | `string`  | `'typescript'` | Programming language for syntax highlighting                    |
| `shikiTheme`        | `string`  | `'monokai'`    | Shiki theme name for syntax highlighting                        |
| `showHeader`        | `boolean` | `true`         | Whether to show the header with language label and copy button  |
| `showCopyButton`    | `boolean` | `true`         | Whether to show the copy button                                 |
| `copyButtonLabel`   | `string`  | `'Copy'`       | Custom label for the copy button                                |
| `codeToHtmlOptions` | `object`  | `{}`           | Custom options passed to Shiki's codeToHtml method              |
| `customTheme`       | `object`  | `{}`           | Custom CSS classes for styling different parts of the component |

### Supported Languages

The component supports all languages that Shiki supports, including:

- `typescript`, `javascript`, `jsx`, `tsx`
- `vue`, `html`, `css`, `scss`, `sass`
- `json`, `yaml`, `toml`
- `python`, `java`, `csharp`, `cpp`
- `bash`, `shell`, `powershell`
- And many more...

### Supported Themes

The component supports all themes bundled with Shiki. Here are some popular ones:

#### Dark Themes

- `monokai` (default)
- `github-dark`
- `dracula`
- `nord`
- `one-dark-pro`
- `material-theme`
- `material-theme-palenight`
- `catppuccin-mocha`
- `tokyo-night`
- `rose-pine`
- `gruvbox-dark-medium`
- `solarized-dark`

#### Light Themes

- `github-light`
- `material-theme-lighter`
- `catppuccin-latte`
- `solarized-light`
- `one-light`

#### Special Themes

- `github-dark-dimmed`
- `github-dark-high-contrast`
- `github-light-high-contrast`
- `material-theme-ocean`
- `material-theme-darker`

You can see all available themes by checking the browser console when the component loads - it will log the available themes.

### Custom Theme Object

The `customTheme` prop allows you to customize the styling of different parts:

```typescript
interface CustomTheme {
    container?: string // Main container styles
    header?: string // Header section styles
    languageLabel?: string // Language label styles
    copyButton?: string // Copy button styles
    content?: string // Code content area styles
    pre?: string // Pre element styles
    code?: string // Code element styles
    loading?: string // Loading state styles
    error?: string // Error state styles
}
```

### Custom codeToHtml Options

The `codeToHtmlOptions` prop allows you to pass custom configuration options directly to Shiki's `codeToHtml` method. This gives you fine-grained control over the syntax highlighting output.

```vue
<template>
    <CodeBlock
        code="const message = 'Hello, World!'"
        language="javascript"
        :code-to-html-options="{
            colorReplacements: {
                '#24292e': '#1a1a1a',
                '#ffffff': '#ffffff',
                '#0366d6': '#ff6b6b',
                '#28a745': '#51cf66',
            },
        }"
    />
</template>
```

#### Available Options

The `codeToHtmlOptions` object can include any options supported by Shiki's `codeToHtml` method:

```typescript
interface CodeToHtmlOptions {
    lang?: string // Language for syntax highlighting
    theme?: string // Theme name
    colorReplacements?: Record<string, string> // Color replacement mappings
    [key: string]: any // Any other Shiki codeToHtml options
}
```

#### Color Replacements

One of the most useful features is the ability to customize color replacements:

```vue
<template>
    <CodeBlock
        code="function greet(name: string): string { return `Hello, ${name}!` }"
        language="typescript"
        :code-to-html-options="{
            colorReplacements: {
                // Replace default colors with custom ones
                '#24292e': '#0d1117', // Background color
                '#ffffff': '#f0f6fc', // Text color
                '#0366d6': '#58a6ff', // Blue (keywords, etc.)
                '#28a745': '#3fb950', // Green (strings, etc.)
                '#d73a49': '#f85149', // Red (errors, etc.)
            },
        }"
    />
</template>
```

#### Advanced Customization

You can also pass other Shiki options for advanced customization:

```vue
<template>
    <CodeBlock
        code="console.log('Hello World')"
        language="javascript"
        :code-to-html-options="{
            colorReplacements: {
                '#24292e': '#1a1a1a',
                '#ffffff': '#ffffff',
            },
            // Add custom CSS classes
            class: 'custom-code-block',
            // Other Shiki options as needed
        }"
    />
</template>
```

**Note**: The `lang` and `theme` options in `codeToHtmlOptions` will be overridden by the component's `language` and `shikiTheme` props to ensure consistency. Use `colorReplacements` and other options for customization.

## Events

The component doesn't emit any events currently, but the copy functionality provides visual feedback through the button state.

## Styling

The component uses Tailwind CSS classes and follows the design system's theming approach. You can customize the appearance using:

1. **Custom theme prop**: Pass custom CSS classes via the `customTheme` prop
2. **CSS custom properties**: Override the component's CSS variables
3. **Tailwind classes**: The component uses semantic class names that can be customized

## Accessibility

- Copy button includes proper `aria-label` for screen readers
- Loading and error states are properly announced
- Keyboard navigation is supported
- High contrast themes are available

## Performance

- Shiki highlighter is initialized lazily on component mount
- The highlighter is cached and reused for the same language/theme combinations
- Large code blocks are scrollable without performance impact

## Browser Support

- Modern browsers with ES2020+ support
- Requires `navigator.clipboard` API for copy functionality (falls back gracefully)
- Works with SSR/SSG frameworks

## Debugging

If themes aren't working as expected, check the browser console for debug information. The component logs:

- Available themes
- Theme initialization status
- Highlighting process

## Examples

See the Storybook stories for more examples and interactive demos:

```bash
pnpm storybook
```

Then navigate to "Components/CodeBlock" to see all available examples with different themes.
