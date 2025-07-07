# ColumnManager Refactored

This is a refactored version of the ColumnManager that follows Vue 3 Composition API best practices and provides better composability and maintainability.

## Key Improvements

### 1. **Composable Architecture**

- Core logic extracted into `useColumnManager` composable
- Reusable state management and actions
- Better separation of concerns

### 2. **Smaller, Focused Components**

- `ColumnManagerColumn` - Individual column display
- `ColumnManagerColumnList` - Sortable list of columns
- `ColumnManagerColumnPicker` - Typeahead for adding columns
- `ColumnManagerGroup` - Group container with header and content
- `ColumnManagerGroupHeader` - Group header with meta form
- `ColumnManagerAddGroup` - Add new group functionality

### 3. **Context-Based Configuration**

- `useColumnManagerContext` provides shared configuration
- Reduces prop drilling
- Centralized theme and configuration management

### 4. **Slot-Based Customization**

- Flexible slot system for UI customization
- Default implementations with override capabilities
- Better developer experience

## Usage

### Basic Usage

```vue
<template>
    <ColumnManagerRefactored
        v-model:columns="columns"
        v-model:groups="groups"
        :searcher="searcher"
        @column-select="onColumnSelect"
    >
        <template #column-content="{ column }">
            <div>{{ column.name }}</div>
        </template>
    </ColumnManagerRefactored>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColumnManagerRefactored } from './ColumnManagerRefactored.vue'
import type { ColumnDefinition, ColumnGroupDefinition } from './types'

const columns = ref<ColumnDefinition[]>([])
const groups = ref<ColumnGroupDefinition[]>([])

const searcher = async (query: string) => {
    // Your search logic here
    return []
}

const onColumnSelect = (column: ColumnDefinition) => {
    console.log('Selected column:', column)
}
</script>
```

### Advanced Usage with Custom Actions

```vue
<template>
    <ColumnManagerRefactored
        v-model:columns="columns"
        v-model:groups="groups"
        :searcher="searcher"
        :theme="customTheme"
        :disabled="['groups']"
    >
        <template #column-content="{ column }">
            <div class="flex items-center gap-2">
                <span class="font-medium">{{ column.name }}</span>
                <span class="text-sm text-muted-foreground"
                    >({{ column.type }})</span
                >
            </div>
        </template>

        <template #column-actions="{ column, onRemove, onEdit }">
            <button @click="onEdit" class="btn-edit">Edit</button>
            <button @click="onRemove" class="btn-remove">Remove</button>
        </template>

        <template #option="{ item, selected, active }">
            <div class="option-item">
                {{ item.name }}
            </div>
        </template>
    </ColumnManagerRefactored>
</template>
```

### Using the Composable Directly

```vue
<script setup lang="ts">
import { useColumnManager } from './composables/useColumnManager'
import { ref } from 'vue'

const columns = ref<ColumnDefinition[]>([])
const groups = ref<ColumnGroupDefinition[]>([])

const {
    groupedColumns,
    availableColumns,
    addColumn,
    removeColumn,
    addGroup,
    removeGroup,
    setFocusedColumn,
} = useColumnManager({
    columns,
    groups,
    onUpdate: (newColumns, newGroups) => {
        // Handle updates
        console.log('Columns updated:', newColumns)
        console.log('Groups updated:', newGroups)
    },
})

// Use the actions
const handleAddColumn = (groupId: string, column: ColumnDefinition) => {
    addColumn(groupId, column)
}

const handleRemoveColumn = (groupId: string, columnId: string) => {
    removeColumn(groupId, columnId)
}
</script>
```

## Component API

### ColumnManagerRefactored Props

| Prop                | Type                                             | Default                     | Description                  |
| ------------------- | ------------------------------------------------ | --------------------------- | ---------------------------- |
| `columns`           | `ColumnDefinition[]`                             | `[]`                        | Array of columns to manage   |
| `groups`            | `ColumnGroupDefinition[]`                        | `[]`                        | Array of groups              |
| `disabled`          | `string[]`                                       | `[]`                        | Disabled features            |
| `defaultGroupColor` | `string`                                         | `'#e7e5e4'`                 | Default color for new groups |
| `theme`             | `Record<string, string>`                         | `{}`                        | Theme configuration          |
| `searcher`          | `(query: string) => Promise<ColumnDefinition[]>` | `() => Promise.resolve([])` | Search function              |
| `defaultItems`      | `ColumnDefinition[]`                             | `[]`                        | Default items for typeahead  |
| `onColumnSelect`    | `(column: ColumnDefinition) => void`             | -                           | Column selection callback    |

### ColumnManagerRefactored Events

| Event            | Payload                   | Description                       |
| ---------------- | ------------------------- | --------------------------------- |
| `update:columns` | `ColumnDefinition[]`      | Emitted when columns change       |
| `update:groups`  | `ColumnGroupDefinition[]` | Emitted when groups change        |
| `column-select`  | `ColumnDefinition`        | Emitted when a column is selected |

### Slots

| Slot                  | Props                                                                    | Description                         |
| --------------------- | ------------------------------------------------------------------------ | ----------------------------------- |
| `drag-handle`         | -                                                                        | Custom drag handle for groups       |
| `column-content`      | `{ column: ColumnDefinition }`                                           | Custom column content display       |
| `column-actions`      | `{ column: ColumnDefinition, onRemove: () => void, onEdit: () => void }` | Custom column actions               |
| `option`              | `{ item: ColumnDefinition, selected: boolean, active: boolean }`         | Custom typeahead option display     |
| `typeahead-static`    | -                                                                        | Static content for typeahead        |
| `typeahead-group`     | `{ group: any, items: ColumnDefinition[] }`                              | Custom typeahead group display      |
| `typeahead-searching` | -                                                                        | Loading state for typeahead         |
| `default`             | -                                                                        | Default slot for additional content |

## Migration from Original ColumnManager

### Before (Original)

```vue
<ColumnManager
    :existing-columns="columns"
    :group-configuration="groups"
    :theme="complexThemeObject"
    :typeahead-middleware-options="middlewareOptions"
    :searcher="searcher"
    :disabled="['groups']"
    @update:existing-columns="onColumnsUpdate"
    @update:group-configuration="onGroupsUpdate"
>
  <template #column="{ element }">
    <div>{{ element.name }}</div>
  </template>
</ColumnManager>
```

### After (Refactored)

```vue
<ColumnManagerRefactored
    v-model:columns="columns"
    v-model:groups="groups"
    :searcher="searcher"
    :disabled="['groups']"
>
  <template #column-content="{ column }">
    <div>{{ column.name }}</div>
  </template>
</ColumnManagerRefactored>
```

## Benefits

1. **Reduced Configuration** - From 20+ theme properties to simple slot-based customization
2. **Better TypeScript Support** - Smaller interfaces with better type inference
3. **Improved Performance** - Smaller components with targeted reactivity
4. **Enhanced Reusability** - Components can be used independently
5. **Easier Testing** - Focused components and composables
6. **Better Developer Experience** - Clear API with sensible defaults

## Architecture

```
ColumnManagerRefactored.vue
├── useColumnManager (composable)
│   ├── State management
│   ├── Actions (add, remove, move, etc.)
│   └── Computed properties
├── useColumnManagerContext (context)
│   ├── Theme configuration
│   ├── Disabled features
│   └── Shared callbacks
└── Components
    ├── ColumnManagerGroup
    │   ├── ColumnManagerGroupHeader
    │   ├── ColumnManagerColumnList
    │   └── ColumnManagerColumnPicker
    ├── ColumnManagerColumn
    └── ColumnManagerAddGroup
```

This refactored approach provides a much cleaner, more maintainable, and more flexible solution for column management functionality.
