# Storybook Theme Hook

This package provides a composable and component to hook into Storybook's background toggle for theme switching functionality.

## Features

- **Automatic Theme Detection**: Automatically detects the current theme from Storybook's background toggle
- **Manual Theme Toggle**: Provides methods to manually toggle between light and dark themes
- **Event System**: Dispatches custom events when theme changes for other components to listen to
- **Reactive State**: Provides reactive theme state that updates automatically
- **Visual Component**: Includes a `ThemeToggle` component for easy integration

## Setup

### 1. Configure Storybook Background Toggle

In your `.storybook/preview.ts`:

```typescript
import type { Preview } from '@storybook/vue3'

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'light',
            options: {
                light: { name: 'Light', value: '#ffffff' },
                dark: { name: 'Dark', value: '#0c0a09' },
            },
        },
    },
    decorators: [
        (story, context) => {
            const background = context.globals.backgrounds?.value
            document.documentElement.className =
                background === '#0c0a09' ? 'dark' : 'light'
            return story()
        },
    ],
}

export default preview
```

### 2. Use the Composable

```vue
<template>
    <div :class="containerClasses">
        <h1>Current Theme: {{ isDark ? 'Dark' : 'Light' }}</h1>
        <button @click="toggleTheme">Toggle Theme</button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStorybookTheme } from '@pickle-jar/ui'

const { isDark, background, themeClass, toggleTheme, setTheme } =
    useStorybookTheme()

const containerClasses = computed(() =>
    isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
)
</script>
```

### 3. Use the ThemeToggle Component

```vue
<template>
    <div>
        <ThemeToggle
            variant="default"
            :show-details="true"
            :theme="{
                container: 'custom-container-class',
                text: 'custom-text-class',
                button: 'custom-button-class',
            }"
        />
    </div>
</template>

<script setup lang="ts">
import { ThemeToggle } from '@pickle-jar/ui'
</script>
```

## API Reference

### useStorybookTheme()

Returns an object with the following properties and methods:

#### Properties

- `isDark: boolean` - Whether the current theme is dark
- `background: string` - The current background color value
- `themeClass: string` - The current CSS class ('dark' or 'light')
- `themeState: StorybookThemeState` - Full theme state object

#### Methods

- `toggleTheme(): void` - Toggle between light and dark themes
- `setTheme(isDark: boolean): void` - Set a specific theme
- `updateThemeState(backgroundValue: string): void` - Update theme state manually

### ThemeToggle Component

#### Props

- `variant?: 'default' | 'compact' | 'minimal'` - Visual variant
- `showDetails?: boolean` - Whether to show theme details
- `theme?: object` - Custom theme overrides

#### Events

- `theme-change` - Emitted when theme changes

## Event System

The composable dispatches a custom event `storybook-theme-change` when the theme changes:

```javascript
window.addEventListener('storybook-theme-change', event => {
    const { isDark, background, themeClass } = event.detail
    console.log('Theme changed:', { isDark, background, themeClass })
})
```

## Integration Examples

### Making Components Theme-Aware

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useStorybookTheme } from '@pickle-jar/ui'

const { isDark } = useStorybookTheme()

const buttonClasses = computed(() => ({
    button: isDark
        ? 'bg-blue-600 hover:bg-blue-700 text-white'
        : 'bg-blue-500 hover:bg-blue-600 text-white',
}))
</script>
```

### Listening to Theme Changes

```vue
<script setup lang="ts">
import { watch } from 'vue'
import { useStorybookTheme } from '@pickle-jar/ui'

const { isDark } = useStorybookTheme()

watch(
    () => isDark,
    newIsDark => {
        console.log('Theme changed to:', newIsDark ? 'dark' : 'light')
        // Update your component logic here
    }
)
</script>
```

### Custom Theme Toggle Button

```vue
<template>
    <button
        @click="toggleTheme"
        :class="buttonClasses"
        :aria-label="`Switch to ${isDark ? 'light' : 'dark'} theme`"
    >
        {{ isDark ? '☀️' : '🌙' }}
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStorybookTheme } from '@pickle-jar/ui'

const { isDark, toggleTheme } = useStorybookTheme()

const buttonClasses = computed(
    () => 'p-2 rounded-md transition-colors hover:bg-accent'
)
</script>
```

## CSS Variables

The theme system works with CSS custom properties. Make sure your CSS includes:

```css
:root {
    --background: #ffffff;
    --foreground: #000000;
    /* ... other light theme variables */
}

.dark {
    --background: #0c0a09;
    --foreground: #ffffff;
    /* ... other dark theme variables */
}
```

## Browser Support

- Modern browsers with ES6+ support
- Vue 3.x
- Storybook 7.x+

## Troubleshooting

### Theme not updating

1. Check that your Storybook background toggle is configured correctly
2. Ensure the decorator is applying the correct CSS class to `document.documentElement`
3. Verify that your CSS variables are defined for both light and dark themes

### Component not reactive

1. Make sure you're using the composable in a Vue component context
2. Use `computed()` for reactive theme-dependent values
3. Check that the component is mounted in the Storybook iframe

### Events not firing

1. Verify that the custom event is being dispatched
2. Check that event listeners are added after the component is mounted
3. Ensure event listeners are properly cleaned up in `onUnmounted`
