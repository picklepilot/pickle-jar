import type { Meta, StoryObj } from '@storybook/vue3'
import ThemeToggle from './ThemeToggle.vue'

const meta = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'compact', 'minimal'],
            description: 'Visual variant of the theme toggle',
        },
        showDetails: {
            control: 'boolean',
            description: 'Whether to show theme details',
        },
        theme: {
            control: 'object',
            description: 'Custom theme overrides',
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
A component that hooks into Storybook's background toggle to provide theme switching functionality.

## Features

- **Automatic Detection**: Automatically detects the current theme from Storybook's background toggle
- **Manual Toggle**: Provides a button to manually toggle between light and dark themes
- **Theme State**: Shows current theme state including background color and CSS class
- **Event System**: Dispatches custom events when theme changes for other components to listen to

## Usage

\`\`\`vue
<template>
  <ThemeToggle 
    variant="default" 
    :show-details="true"
    :theme="{
      container: 'custom-container-class',
      text: 'custom-text-class',
      button: 'custom-button-class'
    }"
  />
</template>

<script setup>
import { ThemeToggle } from '@pickle-jar/ui'
</script>
\`\`\`

## Composable Usage

You can also use the \`useStorybookTheme\` composable directly in your components:

\`\`\`vue
<script setup>
import { useStorybookTheme } from '@pickle-jar/ui'

const { isDark, background, themeClass, toggleTheme, setTheme } = useStorybookTheme()

// React to theme changes
watch(() => isDark.value, (newIsDark) => {
  console.log('Theme changed to:', newIsDark ? 'dark' : 'light')
})
</script>
\`\`\`
                `,
            },
        },
    },
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        showDetails: true,
    },
}

export const Compact: Story = {
    args: {
        variant: 'compact',
        showDetails: true,
    },
}

export const Minimal: Story = {
    args: {
        variant: 'minimal',
        showDetails: false,
    },
}

export const WithCustomTheme: Story = {
    args: {
        variant: 'default',
        showDetails: true,
        theme: {
            container:
                'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200',
            text: 'text-blue-800 font-semibold',
            button: 'bg-blue-500 text-white hover:bg-blue-600',
        },
    },
}

export const MultipleToggles: Story = {
    render: () => ({
        components: { ThemeToggle },
        template: `
            <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ThemeToggle variant="default" />
                    <ThemeToggle variant="compact" />
                    <ThemeToggle variant="minimal" />
                </div>
                <div class="text-sm text-muted-foreground">
                    <p>All toggles are synchronized and hook into Storybook's background control.</p>
                    <p>Try changing the background in the Storybook controls panel above!</p>
                </div>
            </div>
        `,
    }),
}
