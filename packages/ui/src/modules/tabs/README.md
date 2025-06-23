# Tabs Component

A composable tabs component that follows the shadcn/ui pattern, providing a flexible and accessible way to create tabbed interfaces.

## Components

### Tabs

The root component that provides context for the tabs system.

### TabsList

The container for tab triggers, handling responsive overflow and drag-and-drop functionality.

### TabsTrigger

Individual tab buttons that can be clicked to switch between tabs.

### TabsContent

Content panels that are shown/hidden based on the active tab.

## Usage

### Basic Example

```vue
<template>
    <Tabs v-model="activeTab" default-value="account">
        <TabsList>
            <template #trigger="{ tab }">
                <TabsTrigger :tab="tab" />
            </template>
        </TabsList>

        <TabsContent value="account">
            <div>Account content goes here</div>
        </TabsContent>

        <TabsContent value="password">
            <div>Password content goes here</div>
        </TabsContent>
    </Tabs>
</template>

<script setup>
import { ref } from 'vue'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/modules/tabs'

const activeTab = ref('account')
</script>
```

### With Custom Styling

```vue
<template>
    <Tabs
        v-model="activeTab"
        style="modern"
        :theme="{
            container: 'bg-gray-50 p-4 rounded-lg',
            sortableContainer: 'bg-white rounded-md shadow-sm',
            tabsNavTab: 'hover:bg-blue-50 active:bg-blue-100',
        }"
    >
        <TabsList>
            <template #trigger="{ tab }">
                <TabsTrigger :tab="tab" />
            </template>
        </TabsList>

        <TabsContent value="account">
            <div>Account content</div>
        </TabsContent>
    </Tabs>
</template>
```

### With Custom Slots

```vue
<template>
    <Tabs v-model="activeTab">
        <TabsList>
            <template #before>
                <div class="text-sm text-gray-500 mr-4">Navigation:</div>
            </template>

            <template #trigger="{ tab }">
                <TabsTrigger :tab="tab">
                    <template #left>
                        <span v-if="tab.id === 'account'" class="mr-2">👤</span>
                        <span v-else-if="tab.id === 'settings'" class="mr-2"
                            >⚙️</span
                        >
                    </template>
                </TabsTrigger>
            </template>

            <template #after>
                <button
                    class="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded"
                >
                    +
                </button>
            </template>
        </TabsList>

        <TabsContent value="account">
            <div>Account content</div>
        </TabsContent>
    </Tabs>
</template>
```

### Vertical Orientation

```vue
<template>
    <div class="flex">
        <Tabs v-model="activeTab" orientation="vertical" class="flex-1">
            <TabsList>
                <template #trigger="{ tab }">
                    <TabsTrigger :tab="tab" />
                </template>
            </TabsList>

            <TabsContent value="account">
                <div>Account content</div>
            </TabsContent>
        </Tabs>
    </div>
</template>
```

## Props

### Tabs

| Prop           | Type                         | Default        | Description                    |
| -------------- | ---------------------------- | -------------- | ------------------------------ |
| `modelValue`   | `string \| number`           | -              | The currently active tab value |
| `defaultValue` | `string \| number`           | -              | The default active tab value   |
| `orientation`  | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the tabs    |
| `style`        | `'classic' \| 'modern'`      | `'classic'`    | Visual style of the tabs       |
| `disabled`     | `string[]`                   | `[]`           | Array of disabled features     |
| `theme`        | `object`                     | `{}`           | Custom theme overrides         |

### TabsList

The TabsList component provides the following slots:

- `before`: Content to display before the tabs
- `trigger`: Template for rendering each tab trigger (receives `tab` prop)
- `after`: Content to display after the tabs
- `overflow-trigger`: Template for rendering overflow dropdown items (receives `tab` prop)

### TabsTrigger

| Prop  | Type  | Description              |
| ----- | ----- | ------------------------ |
| `tab` | `Tab` | The tab object to render |

### TabsContent

| Prop    | Type               | Description                                  |
| ------- | ------------------ | -------------------------------------------- |
| `value` | `string \| number` | The value that identifies this content panel |
| `class` | `string`           | Additional CSS classes                       |

## Events

### Tabs

| Event               | Payload            | Description                         |
| ------------------- | ------------------ | ----------------------------------- |
| `update:modelValue` | `string \| number` | Emitted when the active tab changes |
| `clicked`           | `string \| number` | Emitted when a tab is clicked       |
| `update`            | `Tab[]`            | Emitted when tabs are reordered     |

## Features

- **Responsive**: Automatically handles overflow with a dropdown menu
- **Drag & Drop**: Tabs can be reordered by dragging
- **Accessible**: Proper ARIA attributes and keyboard navigation
- **Flexible**: Customizable styling and slots for custom content
- **TypeScript**: Full TypeScript support with proper type definitions

## Migration from TabsNav

The new composable structure is designed to be more flexible and follows modern Vue 3 patterns. The old `TabsNav` component is still available for backward compatibility, but new projects should use the composable structure.

### Before (TabsNav)

```vue
<TabsNav :tabs="tabs" @clicked="handleTabClick" @update="handleTabsUpdate" />
```

### After (Composable)

```vue
<Tabs v-model="activeTab" @clicked="handleTabClick" @update="handleTabsUpdate">
  <TabsList>
    <template #trigger="{ tab }">
      <TabsTrigger :tab="tab" />
    </template>
  </TabsList>
  
  <TabsContent value="tab1">
    Content for tab 1
  </TabsContent>
  
  <TabsContent value="tab2">
    Content for tab 2
  </TabsContent>
</Tabs>
```

## Accessibility

The tabs component follows WCAG guidelines and includes:

- Proper ARIA attributes (`role="tablist"`, `role="tab"`, `role="tabpanel"`)
- Keyboard navigation (Arrow keys, Home, End, Enter, Space)
- Focus management
- Screen reader support

## Styling

The component uses Tailwind CSS classes and supports both classic and modern styles:

- **Classic**: Traditional bordered tabs with background color changes
- **Modern**: Clean tabs with bottom border indicators

Custom theming is supported through the `theme` prop, allowing you to override specific CSS classes.
