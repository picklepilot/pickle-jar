# @pickle-jar/ui-lit

Lit-based web components for the Pickle Jar design system.

## Features

- **Web Components**: Built with Lit for framework-agnostic usage
- **TypeScript**: Full TypeScript support with type definitions
- **Tailwind CSS**: Consistent styling with Tailwind CSS
- **Storybook**: Interactive component documentation and testing
- **Shared Utilities**: Uses `@pickle-jar/core` for shared functionality

## Installation

```bash
npm install @pickle-jar/ui-lit
```

## Usage

### Basic Usage

```html
<!-- In any HTML file -->
<pj-button variant="primary" size="md"> Click me </pj-button>
```

### In TypeScript/JavaScript

```typescript
import '@pickle-jar/ui-lit'

// The components are now available as custom elements
const button = document.createElement('pj-button')
button.setAttribute('variant', 'primary')
button.textContent = 'Click me'
document.body.appendChild(button)
```

### In Vue

```vue
<template>
    <pj-button variant="primary" size="md"> Click me </pj-button>
</template>

<script setup lang="ts">
import '@pickle-jar/ui-lit'
</script>
```

### In React

```tsx
import '@pickle-jar/ui-lit'

function App() {
    return (
        <pj-button variant="primary" size="md">
            Click me
        </pj-button>
    )
}
```

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Start Storybook
pnpm storybook
```

### Storybook

The package includes a dedicated Storybook instance for web components:

```bash
# Start Storybook on port 6007
pnpm storybook

# Build Storybook
pnpm build-storybook
```

Storybook provides:

- Interactive component documentation
- Visual testing
- Accessibility testing
- Component variants and states

### Building

```bash
# Build the package
pnpm build

# Watch mode
pnpm build --watch
```

## Component API

### pj-button

A customizable button component with multiple variants and sizes.

#### Props

| Prop       | Type                                                             | Default     | Description                    |
| ---------- | ---------------------------------------------------------------- | ----------- | ------------------------------ |
| `variant`  | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Button variant                 |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                           | `'md'`      | Button size                    |
| `disabled` | `boolean`                                                        | `false`     | Whether the button is disabled |
| `type`     | `'button' \| 'submit' \| 'reset'`                                | `'button'`  | Button type                    |

#### Events

| Event   | Detail | Description                      |
| ------- | ------ | -------------------------------- |
| `click` | -      | Fired when the button is clicked |

#### Example

```html
<pj-button variant="primary" size="lg" @click="handleClick">
    Submit Form
</pj-button>
```

## Architecture

This package is part of the multi-framework Pickle Jar architecture:

```
@pickle-jar/core     # Shared utilities and types
@pickle-jar/ui       # Vue components
@pickle-jar/ui-lit   # Lit components (this package)
```

### Dependencies

- **@pickle-jar/core**: Shared utilities, types, and constants
- **lit**: Web component library
- **tailwindcss**: Styling framework

### Peer Dependencies

- **lit**: Required for using the components

## Contributing

1. **Follow the Architecture**: Use shared utilities from `@pickle-jar/core`
2. **Maintain Consistency**: Keep APIs similar to Vue components
3. **Add Stories**: Create Storybook stories for new components
4. **Test Thoroughly**: Ensure components work across frameworks

### Adding New Components

1. Create the component in `src/components/`
2. Add TypeScript types if needed
3. Create Storybook stories
4. Export from `src/index.ts`
5. Update this README

### Component Guidelines

- Use shared types from `@pickle-jar/core`
- Follow the naming convention: `pj-{component-name}`
- Implement similar APIs to Vue components
- Use Tailwind CSS for styling
- Include comprehensive Storybook stories

## License

MIT
