# Modal Components

The Modal components have been refactored into composable parts following the shadcn pattern for maximum flexibility and reusability.

## Components

### ModalRoot

The root container that provides the backdrop, teleport functionality, and core modal behavior (backdrop click, escape key, body scroll prevention).

### ModalContent

Provides the modal content container with size variants and focus management.

### ModalHeader

Provides the header styling and structure with optional close button.

### ModalTitle

Provides the title styling and structure with accessibility support.

### ModalBody

Provides the content area styling with proper padding based on header/footer presence.

### ModalFooter

Provides the footer styling and structure.

### ModalClose

Provides the close button functionality with proper styling and accessibility.

### Modal (Legacy)

A composition example showing how to use the individual parts together while maintaining backward compatibility.

## Usage Examples

### Composable Usage (Recommended)

```vue
<template>
    <ModalRoot :open="isOpen" @update:open="setIsOpen">
        <ModalContent size="lg">
            <ModalHeader @close="setIsOpen(false)">
                <ModalTitle>Edit User</ModalTitle>
            </ModalHeader>

            <ModalBody>
                <p>This is the modal content.</p>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </form>
            </ModalBody>

            <ModalFooter>
                <Button variant="outline" @click="setIsOpen(false)"
                    >Cancel</Button
                >
                <Button @click="saveUser">Save</Button>
            </ModalFooter>
        </ModalContent>
    </ModalRoot>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const setIsOpen = (value: boolean) => {
    isOpen.value = value
}

const saveUser = () => {
    // Save logic here
    setIsOpen(false)
}
</script>
```

### Simple Modal

```vue
<template>
    <ModalRoot :open="isOpen" @update:open="setIsOpen">
        <ModalContent>
            <ModalBody>
                <p>This is a simple modal without header or footer.</p>
            </ModalBody>
        </ModalContent>
    </ModalRoot>
</template>
```

### Custom Header

```vue
<template>
    <ModalRoot :open="isOpen" @update:open="setIsOpen">
        <ModalContent size="xl">
            <ModalHeader :show-close-button="false">
                <div class="flex items-center gap-3">
                    <Icon name="warning" class="text-yellow-500" />
                    <ModalTitle>Warning</ModalTitle>
                </div>
            </ModalHeader>

            <ModalBody>
                <p>This modal has a custom header with an icon.</p>
            </ModalBody>

            <ModalFooter>
                <Button @click="setIsOpen(false)">OK</Button>
            </ModalFooter>
        </ModalContent>
    </ModalRoot>
</template>
```

### Full Screen Modal

```vue
<template>
    <ModalRoot :open="isOpen" @update:open="setIsOpen">
        <ModalContent size="full">
            <ModalHeader>
                <ModalTitle>Full Screen Modal</ModalTitle>
            </ModalHeader>

            <ModalBody>
                <div class="h-full">
                    <p>This modal takes up the full screen.</p>
                </div>
            </ModalBody>
        </ModalContent>
    </ModalRoot>
</template>
```

### Custom Layout

```vue
<template>
    <ModalRoot :open="isOpen" @update:open="setIsOpen">
        <ModalContent>
            <div class="flex h-full">
                <div class="w-1/3 border-r border-border p-6">
                    <h3 class="font-semibold mb-4">Sidebar</h3>
                    <nav>
                        <a href="#" class="block py-2">Option 1</a>
                        <a href="#" class="block py-2">Option 2</a>
                    </nav>
                </div>

                <div class="flex-1 p-6">
                    <ModalTitle>Custom Layout</ModalTitle>
                    <p class="mt-4">This modal has a custom sidebar layout.</p>
                </div>
            </div>

            <ModalClose @close="setIsOpen(false)" />
        </ModalContent>
    </ModalRoot>
</template>
```

### Legacy Usage (Backward Compatible)

```vue
<template>
    <Modal :open="isOpen" @update:open="setIsOpen" size="lg" title="Edit User">
        <p>This is the modal content.</p>
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
        </form>

        <template #footer>
            <Button variant="outline" @click="setIsOpen(false)">Cancel</Button>
            <Button @click="saveUser">Save</Button>
        </template>
    </Modal>
</template>
```

## Props

### ModalRoot Props

- `open`: boolean - Controls whether the modal is open
- `closeOnBackdropClick`: boolean - Whether clicking backdrop closes modal
- `closeOnEscape`: boolean - Whether pressing Escape closes modal
- `preventBodyScroll`: boolean - Whether to prevent body scroll
- `theme`: object - Custom theme properties

### ModalContent Props

- `size`: 'sm' | 'default' | 'lg' | 'xl' | 'full' - Modal size
- `theme`: object - Custom theme properties

### ModalHeader Props

- `showCloseButton`: boolean - Whether to show close button
- `closeButtonLabel`: string - Aria label for close button
- `theme`: object - Custom theme properties

### ModalTitle Props

- `titleId`: string - ID for accessibility

### ModalBody Props

- `hasHeader`: boolean - Whether modal has header
- `hasFooter`: boolean - Whether modal has footer
- `theme`: object - Custom theme properties

### ModalFooter Props

- `theme`: object - Custom theme properties

## Events

### ModalRoot Events

- `close`: Emitted when modal closes
- `update:open`: Emitted when open state changes

### ModalHeader Events

- `close`: Emitted when close button is clicked

### ModalClose Events

- `close`: Emitted when close button is clicked

## Benefits of the Composable Approach

1. **Flexibility**: Mix and match components to create any modal layout
2. **Reusability**: Each component can be used independently
3. **Maintainability**: Easier to test and modify individual parts
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **Accessibility**: Built-in accessibility features in each component
6. **Focus Management**: Automatic focus trapping and management
7. **Custom Layouts**: Create complex modal layouts without constraints
8. **Backward Compatibility**: Original Modal component still works
9. **Design System Consistency**: Each component enforces consistent styling
