# Tabs Component

A clean, accessible, and flexible tabs component built with Vue 3 Composition API and TypeScript.

## Features

- ✅ **Vue 3 Composition API** with `<script setup>` syntax
- ✅ **TypeScript** support with proper type definitions
- ✅ **Accessible** with ARIA attributes and keyboard navigation
- ✅ **Flexible** - supports both horizontal and vertical orientations
- ✅ **Controlled & Uncontrolled** modes
- ✅ **Clean API** - simple and intuitive component structure
- ✅ **Tailwind CSS** styling with design system integration

## Components

### Tabs

The main container component that manages tab state and provides context to child components.

### TabsList

Container for tab triggers. Supports both horizontal and vertical orientations.

### TabsTrigger

Individual tab buttons that users click to switch between tabs.

### TabsContent

Container for tab panels content.

### TabsPanel

Individual tab panels that show/hide based on the selected tab.

## Usage

### Basic Example

```vue
<template>
    <Tabs v-model:value="activeTab">
        <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent>
            <TabsPanel value="account">
                <h3>Account Settings</h3>
                <p>Manage your account preferences.</p>
            </TabsPanel>
            <TabsPanel value="password">
                <h3>Password Settings</h3>
                <p>Change your password.</p>
            </TabsPanel>
            <TabsPanel value="settings">
                <h3>General Settings</h3>
                <p>Configure your settings.</p>
            </TabsPanel>
        </TabsContent>
    </Tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    TabsPanel,
} from '@/modules/tabs'

const activeTab = ref('account')
</script>
```

### Vertical Tabs

```vue
<template>
    <Tabs v-model:value="activeTab" orientation="vertical">
        <TabsList orientation="vertical">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent>
            <TabsPanel value="overview">
                <h3>Overview</h3>
                <p>Dashboard overview content.</p>
            </TabsPanel>
            <TabsPanel value="analytics">
                <h3>Analytics</h3>
                <p>Analytics content.</p>
            </TabsPanel>
            <TabsPanel value="reports">
                <h3>Reports</h3>
                <p>Reports content.</p>
            </TabsPanel>
        </TabsContent>
    </Tabs>
</template>
```

### Controlled Mode

```vue
<template>
    <Tabs :value="activeTab" @valueChange="handleTabChange">
        <!-- Tab content -->
    </Tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('account')

const handleTabChange = (value: string) => {
    activeTab.value = value
    // Additional logic here
}
</script>
```

## API Reference

### Tabs Props

| Prop           | Type                         | Default        | Description                                        |
| -------------- | ---------------------------- | -------------- | -------------------------------------------------- |
| `value`        | `string`                     | -              | The currently selected tab value (controlled mode) |
| `defaultValue` | `string`                     | -              | The default selected tab value (uncontrolled mode) |
| `orientation`  | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the tabs                        |
| `disabled`     | `boolean`                    | `false`        | Whether the tabs are disabled                      |
| `class`        | `string`                     | -              | CSS class to apply to the root element             |

### Tabs Events

| Event          | Payload  | Description                                  |
| -------------- | -------- | -------------------------------------------- |
| `update:value` | `string` | Emitted when tab selection changes (v-model) |
| `valueChange`  | `string` | Emitted when tab selection changes           |

### TabsList Props

| Prop          | Type                         | Default        | Description                            |
| ------------- | ---------------------------- | -------------- | -------------------------------------- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the tabs list       |
| `disabled`    | `boolean`                    | `false`        | Whether the tabs list is disabled      |
| `class`       | `string`                     | -              | CSS class to apply to the list element |

### TabsTrigger Props

| Prop       | Type      | Default | Description                               |
| ---------- | --------- | ------- | ----------------------------------------- |
| `value`    | `string`  | -       | The value of this tab trigger (required)  |
| `disabled` | `boolean` | `false` | Whether this tab trigger is disabled      |
| `class`    | `string`  | -       | CSS class to apply to the trigger element |

### TabsTrigger Events

| Event    | Payload      | Description                          |
| -------- | ------------ | ------------------------------------ |
| `click`  | `MouseEvent` | Emitted when the trigger is clicked  |
| `select` | `string`     | Emitted when the trigger is selected |

### TabsContent Props

| Prop    | Type     | Default | Description                               |
| ------- | -------- | ------- | ----------------------------------------- |
| `class` | `string` | -       | CSS class to apply to the content element |

### TabsPanel Props

| Prop    | Type     | Default | Description                             |
| ------- | -------- | ------- | --------------------------------------- |
| `value` | `string` | -       | The value of this tab panel (required)  |
| `class` | `string` | -       | CSS class to apply to the panel element |

## Accessibility

The tabs component follows WAI-ARIA guidelines:

- Uses proper `role` attributes (`tablist`, `tab`, `tabpanel`)
- Includes `aria-selected`, `aria-controls`, and `aria-labelledby` attributes
- Supports keyboard navigation (Arrow keys, Home, End)
- Provides focus management
- Includes proper ARIA orientation attributes

## Styling

The component uses Tailwind CSS classes and CSS custom properties for theming. Key styling features:

- Responsive design with mobile-first approach
- Smooth transitions and hover effects
- Design system color integration
- Flexible layout that adapts to content
- Proper focus indicators for accessibility

## Migration from Old Tabs

The new tabs implementation is a complete rewrite with a cleaner API:

### Before (Old API)

```vue
<TabsNav :tabs="tabs" v-model:active="activeTab" />
```

### After (New API)

```vue
<Tabs v-model:value="activeTab">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent>
    <TabsPanel value="tab1">Content 1</TabsPanel>
    <TabsPanel value="tab2">Content 2</TabsPanel>
  </TabsContent>
</Tabs>
```

## Examples

See the `demo.vue` file for complete working examples including:

- Basic horizontal tabs
- Vertical tabs
- Form integration
- Complex layouts
- Responsive design patterns
