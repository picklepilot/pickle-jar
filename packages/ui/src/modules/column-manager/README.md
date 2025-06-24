# Column Manager

A comprehensive column management system with drag-and-drop functionality, group organization, and visual feedback.

## Features

- **Drag and Drop**: Move columns between groups with smooth animations
- **Visual Feedback**: Groups highlight when being dragged over
- **Group Management**: Create, edit, and reorder groups
- **Column Organization**: Organize columns into logical groups
- **Real-time Updates**: See changes instantly with live data synchronization

## Drag-Over Functionality

The Column Manager now includes visual feedback when dragging columns over groups. Here's how it works:

### Visual Feedback

When you drag a column over a group, the group will show:

- A blue ring around the group container
- A subtle background tint
- Smooth transitions for a polished user experience

### Implementation Details

The drag-over functionality is implemented using:

1. **Context System**: Uses Vue's provide/inject pattern to share drag state
2. **Event Handlers**: Listens for `dragover`, `dragleave`, and `drop` events
3. **Reactive State**: Tracks which group is currently being dragged over
4. **Visual Styling**: Applies CSS classes based on drag state

### Code Example

```vue
<template>
    <div
        class="group-container"
        :class="{ 'drag-over': isBeingDraggedOver }"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
    >
        <!-- Group content -->
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColumnManagerContext } from '../composables/useColumnManagerContext'

const context = useColumnManagerContext()
const isBeingDraggedOver = computed(() => {
    return (
        context.isDraggingColumn?.value &&
        context.draggedOverGroupId?.value === props.group.id
    )
})

const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
    }

    if (context.isDraggingColumn?.value && context.setDraggedOverGroupId) {
        context.setDraggedOverGroupId(props.group.id)
    }
}

const handleDragLeave = (event: DragEvent) => {
    const target = event.currentTarget as HTMLElement
    const relatedTarget = event.relatedTarget as HTMLElement

    if (target && relatedTarget && !target.contains(relatedTarget)) {
        if (context.setDraggedOverGroupId) {
            context.setDraggedOverGroupId(null)
        }
    }
}
</script>

<style scoped>
.group-container {
    transition: all 0.2s ease-in-out;
}

.group-container.drag-over {
    @apply ring-2 ring-primary/20 bg-primary/5;
}
</style>
```

### Context API

The drag-over functionality uses the following context properties:

- `isDraggingColumn`: Reactive boolean indicating if a column is being dragged
- `draggedOverGroupId`: Reactive string indicating which group is being dragged over
- `setDraggedOverGroupId`: Function to update the dragged over group ID

### Usage

1. **Basic Usage**: The drag-over functionality works automatically when using `ColumnManagerRefactored`
2. **Custom Implementation**: Use the context system to implement custom drag-over behavior
3. **Styling**: Customize the visual feedback by modifying the CSS classes

### Browser Support

The drag-over functionality uses standard HTML5 Drag and Drop API, supported in all modern browsers.

### Accessibility

- Maintains keyboard navigation support
- Provides visual feedback for screen readers
- Follows WCAG guidelines for drag and drop interactions

## Examples

See the Storybook stories for interactive examples:

- `DragOverVisualFeedback`: Demonstrates the visual feedback
- `DragToEmptyGroup`: Shows dragging to empty groups
- `CrossGroupDragging`: Comprehensive drag and drop demo
