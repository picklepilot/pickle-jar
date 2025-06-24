# Sortable Component

A custom Vue 3 sortable component built with Motion's Reorder API. This component provides smooth animations, beautiful drag feedback, and excellent performance for drag-and-drop interactions.

## Features

- ✅ **Motion Reorder API** - Built on top of Motion's powerful animation system
- ✅ **Smooth animations** - Beautiful layout animations and drag feedback
- ✅ **Cross-group dragging** - Move items between different sortable instances
- ✅ **Beautiful empty state** - Customizable drop zones for empty groups
- ✅ **TypeScript support** - Full type safety
- ✅ **Vue 3 Composition API** - Modern Vue patterns
- ✅ **Accessible** - Proper ARIA attributes and keyboard support
- ✅ **Customizable** - Flexible props and slots
- ✅ **Performance optimized** - Efficient animations and minimal re-renders

## Installation

The component is included in the UI package and can be imported directly:

```typescript
import { Sortable } from '@picklepilot/pickle-jar-ui'
```

## Basic Usage

```vue
<template>
    <Sortable
        :items="items"
        group="my-group"
        group-id="list-1"
        @update="handleUpdate"
    >
        <template #item="{ item, index }">
            <div class="p-4 border rounded-lg">
                {{ item.title }}
            </div>
        </template>
    </Sortable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sortable } from '@picklepilot/pickle-jar-ui'

const items = ref([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
])

const handleUpdate = (newItems: any[]) => {
    items.value = newItems
}
</script>
```

## Props

| Prop          | Type                                             | Default             | Description                                  |
| ------------- | ------------------------------------------------ | ------------------- | -------------------------------------------- |
| `items`       | `any[]`                                          | `[]`                | Array of items to sort                       |
| `group`       | `string`                                         | `'default'`         | Group identifier for cross-group dragging    |
| `groupId`     | `string`                                         | `undefined`         | Unique identifier for this sortable instance |
| `itemKey`     | `string \| (item: any, index: number) => string` | `'id'`              | Key to identify items                        |
| `disabled`    | `boolean`                                        | `false`             | Disable drag and drop functionality          |
| `animation`   | `number`                                         | `150`               | Animation duration in milliseconds           |
| `ghostClass`  | `string`                                         | `'sortable-ghost'`  | CSS class for ghost element                  |
| `chosenClass` | `string`                                         | `'sortable-chosen'` | CSS class for chosen element                 |
| `dragClass`   | `string`                                         | `'sortable-drag'`   | CSS class for dragged element                |

## Events

| Event        | Payload                                             | Description                                    |
| ------------ | --------------------------------------------------- | ---------------------------------------------- |
| `update`     | `items: any[]`                                      | Fired when items are reordered                 |
| `add`        | `{ item: any, newIndex: number, groupId?: string }` | Fired when an item is added from another group |
| `remove`     | `{ item: any, oldIndex: number, groupId?: string }` | Fired when an item is removed to another group |
| `start`      | `{ item: any, index: number }`                      | Fired when dragging starts                     |
| `end`        | `{ item: any, index: number }`                      | Fired when dragging ends                       |
| `drag-enter` | `{ item: any, index: number, groupId?: string }`    | Fired when dragging enters a drop zone         |
| `drag-leave` | `{ item: any, index: number, groupId?: string }`    | Fired when dragging leaves a drop zone         |

## Slots

### `item` Slot

The main slot for rendering individual items:

```vue
<template #item="{ item, index }">
    <div class="item">
        {{ item.title }}
    </div>
</template>
```

**Slot Props:**

- `item`: The current item
- `index`: The item's index in the list

### `empty` Slot

Custom slot for empty state when there are no items:

```vue
<template #empty="{ isDragOver }">
    <div class="empty-zone">
        {{ isDragOver ? 'Drop here' : 'No items' }}
    </div>
</template>
```

**Slot Props:**

- `isDragOver`: Whether the empty zone is being dragged over

## Cross-Group Dragging

To enable dragging between different sortable instances, use the same `group` prop:

```vue
<template>
    <div class="grid grid-cols-2 gap-4">
        <!-- First group -->
        <Sortable
            :items="group1Items"
            group="shared"
            group-id="group-1"
            @update="handleGroup1Update"
            @add="handleAdd"
            @remove="handleRemove"
        >
            <template #item="{ item }">
                <div class="item">{{ item.title }}</div>
            </template>
        </Sortable>

        <!-- Second group -->
        <Sortable
            :items="group2Items"
            group="shared"
            group-id="group-2"
            @update="handleGroup2Update"
            @add="handleAdd"
            @remove="handleRemove"
        >
            <template #item="{ item }">
                <div class="item">{{ item.title }}</div>
            </template>
        </Sortable>
    </div>
</template>
```

## Styling

The component includes default styles that work with the design system. Motion Reorder automatically handles drag feedback and animations:

```css
/* Custom styles */
.sortable-container {
    min-height: 100px;
}

.sortable-empty-zone {
    border: 2px dashed hsl(var(--ring) / 0.3);
    border-radius: 0.5rem;
    background-color: hsl(var(--accent) / 0.05);
}

.sortable-empty-zone.sortable-drop-active {
    border-color: hsl(var(--ring) / 0.8);
    background-color: hsl(var(--accent) / 0.15);
    transform: scale(1.02);
}

.sortable-item {
    transition: all 0.2s ease-in-out;
    cursor: grab;
}

.sortable-item:active {
    cursor: grabbing;
}

/* Motion Reorder automatically applies these styles during drag */
:deep([data-motion-reorder-item][data-motion-reorder-dragging]) {
    z-index: 1000;
    opacity: 0.8;
    transform: rotate(2deg) scale(0.98);
    box-shadow: 0 8px 25px hsl(var(--ring) / 0.3);
}
```

## Motion Reorder Benefits

This component leverages Motion's Reorder API for several advantages:

- **Smooth animations**: Automatic layout animations when items are reordered
- **Beautiful drag feedback**: Items smoothly animate during drag operations
- **Performance**: Optimized animations with minimal re-renders
- **Accessibility**: Built-in keyboard support and ARIA attributes
- **Touch support**: Works seamlessly on touch devices
- **Spring physics**: Natural-feeling animations with spring easing

## Accessibility

The component follows accessibility best practices:

- Uses semantic HTML elements
- Provides proper ARIA attributes
- Supports keyboard navigation
- Maintains focus management
- Uses proper color contrast ratios
- Motion Reorder handles accessibility automatically

## Browser Support

The component uses Motion's Reorder API, which supports all modern browsers:

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Performance

The component is optimized for performance:

- Motion's efficient animation system
- Minimal DOM manipulation
- Optimized re-renders
- Hardware-accelerated animations
- Lightweight implementation

## Migration from SortableJS

If you're migrating from SortableJS, here are the key differences:

| SortableJS | Motion Sortable |
| ---------- | --------------- |
| `:list`    | `:items`        |
| `item-key` | `itemKey`       |
| `group`    | `group`         |
| `@add`     | `@add`          |
| `@remove`  | `@remove`       |
| `@update`  | `@update`       |
| `@start`   | `@start`        |
| `@end`     | `@end`          |

## Examples

See the Storybook stories for comprehensive examples:

- Basic usage with smooth animations
- Cross-group dragging with beautiful feedback
- Empty state customization
- Event handling
- Styling customization

## Contributing

When contributing to this component:

1. Follow the Vue 3 Composition API patterns
2. Maintain TypeScript type safety
3. Add comprehensive tests
4. Update documentation
5. Follow accessibility guidelines
6. Leverage Motion's animation capabilities
