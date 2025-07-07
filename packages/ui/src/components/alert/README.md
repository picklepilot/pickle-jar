# Alert Components

The Alert components have been refactored into composable parts following the shadcn pattern for maximum flexibility and reusability.

## Components

### AlertRoot

The root container that provides the base structure and styling context.

### AlertContent

Provides the basic flex layout structure for alerts.

### AlertIcon

Provides the icon container styling (shrink-0).

### AlertTitle

Provides the title styling and structure (includes ml-3 grow for layout).

### AlertDescription

Provides the description/body styling and structure (includes ml-3 grow for layout).

### AlertAction

Provides the action area styling (flex items-center).

### AlertClose

Provides the dismissible close button functionality.

### Alert (Legacy)

A composition example showing how to use the individual parts together.

## Usage Examples

### Composable Usage (Recommended)

```vue
<template>
    <AlertRoot variant="success">
        <AlertContent>
            <AlertIcon>
                <CheckIcon class="h-5 w-5 text-green-600" />
            </AlertIcon>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription
                >Your action was completed successfully.</AlertDescription
            >
            <AlertAction>
                <Button variant="outline" size="sm">View Details</Button>
            </AlertAction>
        </AlertContent>
        <AlertClose @close="handleClose" />
    </AlertRoot>
</template>
```

### Warning Alert

```vue
<template>
    <AlertRoot variant="warning" flush>
        <AlertContent>
            <AlertIcon>
                <WarningIcon class="h-5 w-5 text-yellow-600" />
            </AlertIcon>
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription
                >Please review your input before proceeding.</AlertDescription
            >
            <AlertAction>
                <Button variant="outline" size="sm">Review</Button>
            </AlertAction>
        </AlertContent>
        <AlertClose @close="handleClose" />
    </AlertRoot>
</template>
```

### Custom Layout

```vue
<template>
    <AlertRoot variant="info">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <AlertIcon>
                    <InfoIcon class="h-5 w-5 text-blue-600" />
                </AlertIcon>
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is a custom layout.</AlertDescription>
            </div>
            <AlertAction>
                <Button size="sm">Action 1</Button>
                <Button size="sm" variant="outline">Action 2</Button>
                <AlertClose @close="handleClose" />
            </AlertAction>
        </div>
    </AlertRoot>
</template>
```

### Minimal Alert

```vue
<template>
    <AlertRoot variant="muted">
        <AlertContent>
            <AlertDescription
                >This is a minimal alert without title or
                actions.</AlertDescription
            >
        </AlertContent>
    </AlertRoot>
</template>
```

### With useAlert Composable

```vue
<template>
    <AlertRoot
        v-if="alert.state.isVisible"
        :variant="alert.state.variant"
        :flush="alert.state.flush"
    >
        <AlertContent>
            <AlertTitle>{{ title }}</AlertTitle>
            <AlertDescription>{{ message }}</AlertDescription>
        </AlertContent>
        <AlertClose v-if="alert.state.dismissable" @close="alert.hide" />
    </AlertRoot>
</template>

<script setup lang="ts">
import { useAlert } from './useAlert'

const alert = useAlert({
    variant: 'success',
    dismissable: true,
    flush: false,
})

const title = ref('Success!')
const message = ref('Operation completed successfully.')

// You can programmatically control the alert
const showError = () => {
    alert.setVariant('error')
    alert.setDismissable(true)
    alert.show()
}
</script>
```

## Props

### AlertRoot Props

- `variant`: 'info' | 'processing' | 'warning' | 'error' | 'success' | 'muted'
- `flush`: boolean - removes rounded corners
- `theme`: object - custom theme properties

### Other Components

All other components are simple wrappers with no props - they use default slots for content.

## Events

### AlertClose Events

- `close`: Emitted when close button is clicked

## Benefits of the Composable Approach

1. **Flexibility**: Mix and match components to create any layout
2. **Reusability**: Each component can be used independently
3. **Maintainability**: Easier to test and modify individual parts
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **State Management**: useAlert composable for programmatic control
6. **Granular Control**: Each component has a single responsibility
7. **No Magic**: Clear composition without hidden slot logic
8. **Design System Consistency**: Each component enforces consistent styling
9. **Simplified Structure**: No unnecessary wrapper components
