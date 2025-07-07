# Breadcrumbs

A composable breadcrumb component that displays the path to the current resource using a hierarchy of links.

## Usage

```vue
<template>
    <Breadcrumbs>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumbs>
</template>

<script setup lang="ts">
import {
    Breadcrumbs,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/breadcrumbs'
</script>
```

## Components

### Breadcrumbs

The main container component that provides context for the breadcrumb system.

### BreadcrumbList

Wraps the breadcrumb items in an ordered list.

### BreadcrumbItem

Individual breadcrumb item wrapper.

### BreadcrumbLink

Clickable link component for navigation.

**Props:**

- `href?: string` - The href attribute for the link
- `to?: string | object` - The route to navigate to (for Vue Router)
- `asChild?: boolean` - Whether to render as a child component
- `theme?: object` - Theme customization

### BreadcrumbPage

Component for the current page (non-clickable).

**Props:**

- `theme?: object` - Theme customization

### BreadcrumbSeparator

Separator between breadcrumb items.

**Props:**

- `theme?: object` - Theme customization

### BreadcrumbEllipsis

Component for showing collapsed breadcrumb items.

**Props:**

- `theme?: object` - Theme customization

## Examples

### Custom Separator

```vue
<Breadcrumbs>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <svg class="size-3.5">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumbs>
```

### With Dropdown

```vue
<Breadcrumbs>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="ghost" size="sm">
            Components
          </Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Documentation</DropdownItem>
          <DropdownItem>Themes</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumbs>
```

### With Ellipsis

```vue
<Breadcrumbs>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumbs>
```

## Accessibility

The breadcrumbs component follows accessibility best practices:

- Uses semantic HTML with `<nav>` and `<ol>` elements
- Includes proper ARIA labels
- Supports keyboard navigation
- Provides focus management
- Uses proper color contrast ratios

## Styling

The component uses Tailwind CSS classes and follows the design system's theming approach. You can customize the appearance using the `theme` prop on individual components.
