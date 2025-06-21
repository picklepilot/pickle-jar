# Vitest Setup for UI Package

This package has been configured with Vitest for testing Vue components and Storybook integration.

## Setup Overview

### Dependencies Added

- `@storybook/addon-vitest` - Storybook addon for Vitest integration
- `vitest` - Testing framework
- `@vitest/browser` - Browser testing support
- `@vitest/coverage-v8` - Coverage reporting
- `jsdom` - DOM environment for tests

### Configuration Files

1. **`vitest.config.ts`** - Main Vitest configuration

    - Vue plugin for component testing
    - JSDOM environment
    - Path aliases for `@` pointing to `src/`
    - Test file patterns: `*.test.ts`, `*.spec.ts`

2. **`src/test/setup.ts`** - Test setup file

    - Jest DOM matchers
    - Mock implementations for browser APIs (ResizeObserver, IntersectionObserver)

3. **`.storybook/main.ts`** - Updated with `@storybook/addon-vitest`

4. **`.storybook/preview.ts`** - Added vitest parameters

## Usage

### Running Tests

```bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test --run

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### From Root Workspace

```bash
# Run tests across all packages
pnpm test

# Run tests for specific package
pnpm --filter @pickle-jar/ui test
```

### Writing Tests

Create test files with `.test.ts` or `.spec.ts` extension:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

describe('MyComponent', () => {
    it('renders properly', () => {
        const wrapper = mount(MyComponent)
        expect(wrapper.find('.my-class').exists()).toBe(true)
    })
})
```

### Storybook Integration

The `@storybook/addon-vitest` is configured and can be used in stories:

```typescript
export const WithTests: Story = {
    // ... story configuration
    parameters: {
        vitest: {
            include: ['src/components/my-component/MyComponent.test.ts'],
        },
    },
}
```

## Notes

- Tests use JSDOM environment for DOM manipulation
- Vue Test Utils is available for component testing
- Jest DOM matchers are available for assertions
- Browser APIs are mocked to prevent test failures
- Path aliases work the same as in the main application

## Troubleshooting

If you encounter issues:

1. Make sure all dependencies are installed: `pnpm install`
2. Check that the test setup file is properly configured
3. Verify that test files follow the naming convention
4. Ensure components don't have external dependencies that need mocking
