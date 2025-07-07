# Multi-Framework Architecture

This turborepo supports both Vue.js and Lit components through a shared architecture that maximizes code reuse while maintaining framework independence.

## Architecture Overview

```
pickle-jar/
├── packages/
│   ├── core/           # Framework-agnostic utilities and types
│   ├── ui/            # Vue-specific components (existing)
│   └── ui-lit/        # Lit-specific components (new)
├── apps/
│   ├── web/           # Vue application (existing)
│   └── web-lit/       # Lit application (new)
└── config/            # Shared configuration (future)
```

## Package Structure

### @pickle-jar/core

Framework-agnostic utilities and types that can be shared between Vue and Lit components.

**Key Features:**

- Shared TypeScript types and interfaces
- Utility functions (class names, validation, theming)
- Constants and design tokens
- No framework dependencies

**Usage:**

```typescript
import { classNames, isValidEmail, getTheme } from '@pickle-jar/core'
```

### @pickle-jar/ui (Vue)

Vue-specific components that use the core utilities.

**Key Features:**

- Vue 3 components with Composition API
- Storybook integration
- Tailwind CSS styling
- TypeScript support

**Usage:**

```vue
<template>
    <BaseButton variant="primary" size="md"> Click me </BaseButton>
</template>

<script setup lang="ts">
import { BaseButton } from '@pickle-jar/ui'
</script>
```

### @pickle-jar/ui-lit (Lit)

Lit-specific components that use the core utilities.

**Key Features:**

- Web Components built with Lit
- Framework-agnostic (can be used in any framework)
- Storybook integration
- Tailwind CSS styling
- TypeScript support

**Usage:**

```html
<!-- In any HTML/framework -->
<pj-button variant="primary" size="md"> Click me </pj-button>
```

```typescript
// In TypeScript
import '@pickle-jar/ui-lit'
```

## Development Workflow

### 1. Shared Development

When developing features that should work across both frameworks:

1. **Add to core package first:**

    ```typescript
    // packages/core/src/utils/newUtility.ts
    export function newUtility() {
        // Framework-agnostic implementation
    }
    ```

2. **Update types in core:**

    ```typescript
    // packages/core/src/types/index.ts
    export interface NewFeature {
        // Shared interface
    }
    ```

3. **Implement in both UI packages:**

    ```typescript
    // Vue implementation
    // packages/ui/src/components/NewComponent.vue

    // Lit implementation
    // packages/ui-lit/src/components/NewComponent.ts
    ```

### 2. Framework-Specific Development

When developing features specific to one framework:

1. **Vue-specific:** Add directly to `packages/ui`
2. **Lit-specific:** Add directly to `packages/ui-lit`
3. **App-specific:** Add to respective app in `apps/`

## Build and Development

### Commands

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Development mode for all apps
pnpm dev

# Storybook for Vue components
cd apps/web && pnpm storybook

# Storybook for Lit components
cd apps/web-lit && pnpm storybook

# Build specific package
cd packages/ui && pnpm build
cd packages/ui-lit && pnpm build
```

### Package Dependencies

```
apps/web/
├── @pickle-jar/core (shared utilities)
└── @pickle-jar/ui (Vue components)

apps/web-lit/
├── @pickle-jar/core (shared utilities)
└── @pickle-jar/ui-lit (Lit components)

packages/ui/
└── @pickle-jar/core (shared utilities)

packages/ui-lit/
└── @pickle-jar/core (shared utilities)
```

## Best Practices

### 1. Core Package Guidelines

- Keep utilities framework-agnostic
- Use TypeScript for type safety
- Write comprehensive tests
- Document all public APIs

### 2. Component Development

- Follow consistent naming conventions
- Use shared types from core package
- Implement similar APIs across frameworks
- Maintain consistent styling with Tailwind

### 3. Testing Strategy

- Unit tests for core utilities
- Component tests for each framework
- Integration tests for apps
- Visual regression tests with Storybook

### 4. Styling Approach

- Use Tailwind CSS for consistent design
- Define design tokens in core package
- Use CSS custom properties for theming
- Maintain consistent component APIs

## Migration Strategy

### From Vue-only to Multi-framework

1. **Extract shared utilities** to `@pickle-jar/core`
2. **Create Lit equivalents** of existing Vue components
3. **Update existing apps** to use shared utilities
4. **Add new Lit app** for testing Lit components
5. **Gradually migrate** components as needed

### Adding New Frameworks

1. **Create new UI package** (e.g., `@pickle-jar/ui-react`)
2. **Implement components** using core utilities
3. **Add Storybook configuration**
4. **Create demo app** for testing
5. **Update documentation**

## Benefits

### Code Reuse

- Shared utilities reduce duplication
- Consistent APIs across frameworks
- Single source of truth for types

### Developer Experience

- Familiar patterns across frameworks
- Shared tooling and configuration
- Consistent development workflow

### Performance

- Smaller bundle sizes through tree-shaking
- Framework-agnostic utilities
- Optimized builds per framework

### Maintainability

- Centralized type definitions
- Shared validation and utilities
- Consistent theming and design tokens

## Future Considerations

### Potential Enhancements

- Shared build configuration
- Unified testing framework
- Common CI/CD pipeline
- Shared documentation site
- Component playground

### Framework Support

- React components
- Svelte components
- Angular components
- Vanilla JavaScript utilities

This architecture provides a solid foundation for supporting multiple frameworks while maximizing code reuse and maintaining developer productivity.
