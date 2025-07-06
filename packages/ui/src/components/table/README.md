# Table Component

A responsive table component built with Vue 3 and Tailwind CSS, following the ShadCN composable pattern.

## Features

- **Composable Design**: Each table element is a separate component for maximum flexibility
- **Responsive**: Automatically handles overflow on smaller screens
- **Accessible**: Proper semantic HTML structure with ARIA support
- **Customizable**: Easy to style and extend with Tailwind classes
- **TypeScript Support**: Full TypeScript support with proper interfaces

## Components

The table is composed of the following components:

- `Table` - The main container component
- `TableHeader` - Wraps the header section
- `TableBody` - Wraps the body section
- `TableFooter` - Wraps the footer section
- `TableRow` - Represents a table row
- `TableHead` - Represents a header cell
- `TableCell` - Represents a regular table cell
- `TableCaption` - Represents a table caption

## Usage

### Basic Table

```vue
<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>User</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>

<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@pickle-jar/ui'
</script>
```

### Table with Caption and Footer

```vue
<template>
    <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead class="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead class="text-right">Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="invoice in invoices" :key="invoice.invoice">
                <TableCell class="font-medium">{{ invoice.invoice }}</TableCell>
                <TableCell>{{ invoice.paymentStatus }}</TableCell>
                <TableCell>{{ invoice.paymentMethod }}</TableCell>
                <TableCell class="text-right">{{
                    invoice.totalAmount
                }}</TableCell>
            </TableRow>
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colspan="3">Total</TableCell>
                <TableCell class="text-right">$2,500.00</TableCell>
            </TableRow>
        </TableFooter>
    </Table>
</template>
```

## Styling

The table components use Tailwind CSS classes and follow the design system's color scheme. You can customize the appearance by:

1. **Adding custom classes**: Each component accepts additional classes via the `class` attribute
2. **Using CSS custom properties**: The components use CSS custom properties for theming
3. **Overriding styles**: You can override specific styles using Tailwind's utility classes

### Common Customizations

```vue
<!-- Right-aligned text in cells -->
<TableCell class="text-right">$250.00</TableCell>

<!-- Custom width for columns -->
<TableHead class="w-[100px]">Invoice</TableHead>

<!-- Custom styling for specific rows -->
<TableRow class="bg-muted/50">
    <TableCell>Special Row</TableCell>
</TableRow>
```

## Accessibility

The table components are built with accessibility in mind:

- Proper semantic HTML structure (`<table>`, `<thead>`, `<tbody>`, etc.)
- Support for `colspan` and `rowspan` attributes
- Proper ARIA attributes for screen readers
- Keyboard navigation support
- High contrast ratios for text readability

## Responsive Behavior

The table automatically handles responsive behavior:

- Horizontal scrolling on smaller screens
- Maintains readability across all device sizes
- Proper text wrapping and overflow handling

## TypeScript Support

All components are fully typed with TypeScript:

```typescript
import type { ComponentProps } from 'vue'

// Type for Table component props
type TableProps = ComponentProps<typeof Table>

// Type for TableCell component props
type TableCellProps = ComponentProps<typeof TableCell>
```

## Examples

See the Storybook stories for more examples and use cases:

- Basic table with headers and data
- Table with caption and footer
- Responsive table with custom styling
- Table with dynamic data

## Migration from Other Libraries

If you're migrating from other table libraries:

1. Replace `<table>` with `<Table>`
2. Replace `<thead>` with `<TableHeader>`
3. Replace `<tbody>` with `<TableBody>`
4. Replace `<th>` with `<TableHead>`
5. Replace `<td>` with `<TableCell>`
6. Replace `<tr>` with `<TableRow>`
7. Replace `<caption>` with `<TableCaption>`

The components maintain the same semantic structure while providing enhanced styling and functionality.
