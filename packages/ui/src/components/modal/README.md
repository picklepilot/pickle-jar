# Modal Component

A fully-featured modal dialog component with smooth animations, accessibility features, and flexible customization options.

## Features

- ✨ Smooth entry/exit animations with Vue transitions
- 🎯 External state control with v-model support
- ♿ Full accessibility support (ARIA attributes, focus management, keyboard navigation)
- 🎨 Themeable with Tailwind CSS v4 classes
- 📱 Responsive design with multiple size options
- 🔒 Body scroll prevention when open
- 🎛️ Flexible slot-based content structure
- ⌨️ Keyboard support (Escape to close, Tab focus trapping)

## Basic Usage

```vue
<template>
    <div>
        <Button @click="isOpen = true">Open Modal</Button>

        <Modal v-model:open="isOpen" @close="isOpen = false">
            <template #title>My Modal</template>
            <p>This is the modal content.</p>
            <template #footer>
                <Button variant="outline" @click="isOpen = false"
                    >Cancel</Button
                >
                <Button @click="isOpen = false">Confirm</Button>
            </template>
        </Modal>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Modal, Button } from '@your-package/ui'

const isOpen = ref(false)
</script>
```

## Props

| Prop                   | Type                                          | Default         | Description                                       |
| ---------------------- | --------------------------------------------- | --------------- | ------------------------------------------------- |
| `open`                 | `boolean`                                     | `false`         | Controls whether the modal is open or closed      |
| `size`                 | `'sm' \| 'default' \| 'lg' \| 'xl' \| 'full'` | `'default'`     | The size of the modal                             |
| `showCloseButton`      | `boolean`                                     | `true`          | Whether to show the close button in the header    |
| `closeOnBackdropClick` | `boolean`                                     | `true`          | Whether clicking the backdrop closes the modal    |
| `closeOnEscape`        | `boolean`                                     | `true`          | Whether pressing the Escape key closes the modal  |
| `preventBodyScroll`    | `boolean`                                     | `true`          | Whether to prevent body scroll when modal is open |
| `closeButtonLabel`     | `string`                                      | `'Close modal'` | The aria-label for the close button               |
| `theme`                | `object`                                      | `{}`            | Custom theme classes for styling                  |

## Events

| Event         | Payload     | Description                                       |
| ------------- | ----------- | ------------------------------------------------- |
| `close`       | `[]`        | Emitted when the modal is closed                  |
| `update:open` | `[boolean]` | Emitted when the open state changes (for v-model) |

## Slots

| Slot      | Description                                  |
| --------- | -------------------------------------------- |
| `default` | The main content of the modal                |
| `header`  | Custom header content (overrides title slot) |
| `title`   | Modal title (rendered as h2)                 |
| `footer`  | Footer content with action buttons           |

## Size Variants

| Size      | Max Width      | Max Height     | Use Case                      |
| --------- | -------------- | -------------- | ----------------------------- |
| `sm`      | `max-w-md`     | `max-h-[90vh]` | Small confirmations, alerts   |
| `default` | `max-w-lg`     | `max-h-[90vh]` | Standard dialogs, forms       |
| `lg`      | `max-w-2xl`    | `max-h-[90vh]` | Large forms, detailed content |
| `xl`      | `max-w-4xl`    | `max-h-[90vh]` | Complex forms, data tables    |
| `full`    | `max-w-[95vw]` | `max-h-[95vh]` | Full-screen experiences       |

## Examples

### Basic Modal with Title

```vue
<Modal v-model:open="isOpen">
  <template #title>Welcome</template>
  <p>This is a simple modal with a title.</p>
</Modal>
```

### Custom Header

```vue
<Modal v-model:open="isOpen">
  <template #header>
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <Icon class="w-4 h-4 text-primary-foreground" />
      </div>
      <div>
        <h2 class="text-lg font-semibold">Custom Header</h2>
        <p class="text-sm text-muted-foreground">With icon and subtitle</p>
      </div>
    </div>
  </template>
  <p>Modal content here...</p>
</Modal>
```

### Form Modal

```vue
<Modal v-model:open="isOpen" size="lg">
  <template #title>Contact Form</template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium mb-1">Name</label>
      <input id="name" v-model="form.name" type="text" class="w-full px-3 py-2 border rounded-md" required />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium mb-1">Email</label>
      <input id="email" v-model="form.email" type="email" class="w-full px-3 py-2 border rounded-md" required />
    </div>
  </form>
  <template #footer>
    <Button variant="outline" @click="isOpen = false">Cancel</Button>
    <Button @click="handleSubmit">Submit</Button>
  </template>
</Modal>
```

### Modal without Close Button

```vue
<Modal v-model:open="isOpen" :show-close-button="false">
  <template #title>Important Action</template>
  <p>This modal requires explicit user action to close.</p>
  <template #footer>
    <Button @click="isOpen = false">I Understand</Button>
  </template>
</Modal>
```

### Large Content Modal

```vue
<Modal v-model:open="isOpen" size="xl">
  <template #title>Detailed Information</template>
  <div class="space-y-4">
    <p>This modal contains a lot of content and will scroll when needed.</p>
    <div v-for="i in 20" :key="i" class="p-4 bg-muted rounded-md">
      <h3 class="font-medium">Section {{ i }}</h3>
      <p class="text-sm text-muted-foreground">Content for section {{ i }}</p>
    </div>
  </div>
  <template #footer>
    <Button variant="outline" @click="isOpen = false">Close</Button>
  </template>
</Modal>
```

## Accessibility

The Modal component includes comprehensive accessibility features:

- **ARIA attributes**: Proper `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`
- **Focus management**: Automatically focuses the first focusable element when opened
- **Focus trapping**: Tab navigation is trapped within the modal when open
- **Keyboard support**: Escape key closes the modal
- **Screen reader support**: Proper semantic structure and labels

## Theme Customization

You can customize the modal's appearance using the `theme` prop:

```vue
<Modal
    v-model:open="isOpen"
    :theme="{
        backdrop: 'bg-black/75',
        container: 'border-2 border-primary',
        header: 'bg-primary text-primary-foreground',
        content: 'p-8',
        footer: 'bg-muted',
        closeButton: 'text-primary hover:bg-primary/10',
    }"
>
  <!-- Modal content -->
</Modal>
```

## Z-Index Customization

The modal component uses CSS custom properties for z-index values, allowing you to control the stacking order of floating elements globally. The modal uses `--z-modal-backdrop` and `--z-modal` variables.

### Default Z-Index Values

```css
:root {
    --z-index-dropdown: 1000;
    --z-index-sticky: 1020;
    --z-index-fixed: 1030;
    --z-index-modal-backdrop: 1040;
    --z-index-modal: 1050;
    --z-index-popover: 1060;
    --z-index-tooltip: 1070;
}
```

### Customizing Z-Index Values

You can customize z-index values using CSS custom properties:

```css
:root {
    --z-index-modal-backdrop: 2000;
    --z-index-modal: 2010;
}
```

Or programmatically using the utility functions:

```javascript
import { setZIndex } from '@pickle-jar/core/utils'

// Set modal z-index to a higher value
setZIndex('modal', 2000)
setZIndex('modalBackdrop', 1990)
```

### Available Z-Index Layers

- `dropdown`: 1000 - Dropdown menus
- `sticky`: 1020 - Sticky positioned elements
- `fixed`: 1030 - Fixed positioned elements
- `modalBackdrop`: 1040 - Modal backdrop overlay
- `modal`: 1050 - Modal content
- `popover`: 1060 - Popover components
- `tooltip`: 1070 - Tooltip components

## Best Practices

1. **Always provide a title**: Use the `title` slot or `header` slot to provide context
2. **Include action buttons**: Use the `footer` slot for primary actions
3. **Handle state properly**: Use v-model or manual state management
4. **Consider mobile**: Test on mobile devices, especially with full-screen modals
5. **Provide escape routes**: Ensure users can always close the modal
6. **Use appropriate sizes**: Choose the right size for your content
7. **Test accessibility**: Verify keyboard navigation and screen reader compatibility

## Technical Details

- Uses Vue 3's `<Teleport>` to render at the document body level
- Implements Vue transitions for smooth animations
- Prevents body scroll when open to maintain focus
- Generates unique IDs for accessibility attributes
- Supports both controlled and uncontrolled usage patterns
