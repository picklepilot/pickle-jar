# Card Component

A flexible card component that displays content with header, content, and footer sections.

## Usage

```vue
<template>
    <Card class="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
                <Button variant="link">Action</Button>
            </CardAction>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <Button>Action</Button>
        </CardFooter>
    </Card>
</template>

<script setup lang="ts">
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@pickle-jar/ui'
import { Button } from '@pickle-jar/ui'
</script>
```

## Components

### Card

The main card container with rounded corners, border, and shadow.

### CardHeader

Container for the card's header content including title, description, and action.

### CardTitle

The main title of the card, styled as a heading.

### CardDescription

Secondary text that provides additional context for the card.

### CardAction

Container for action buttons or links in the card header.

### CardContent

The main content area of the card.

### CardFooter

Container for footer content, typically action buttons.

## Props

All components accept standard HTML attributes and Vue props. The Card component accepts additional CSS classes for styling.

## Styling

The card components use Tailwind CSS classes and follow the design system's theming. You can customize the appearance by passing additional CSS classes to any component.
