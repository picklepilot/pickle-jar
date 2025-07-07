# Checkbox Component

A customizable checkbox component with accessibility features and theme support.

## Features

- ✅ **Accessibility**: Full ARIA support with keyboard navigation
- ✅ **Vue 3 Composition API**: Built with modern Vue 3 patterns
- ✅ **TypeScript**: Fully typed with proper interfaces
- ✅ **Theme Support**: Customizable styling through theme props
- ✅ **Form Integration**: Works seamlessly with Vue forms
- ✅ **Keyboard Navigation**: Space and Enter keys to toggle
- ✅ **Label Support**: Optional label with click-to-toggle functionality

## Basic Usage

```vue
<template>
    <Checkbox v-model="checked"> Accept terms and conditions </Checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@pickle-jar/ui'

const checked = ref(false)
</script>
```

## Props

| Prop            | Type               | Default          | Description                                       |
| --------------- | ------------------ | ---------------- | ------------------------------------------------- |
| `modelValue`    | `boolean`          | `false`          | The current checked state of the checkbox         |
| `disabled`      | `boolean`          | `false`          | Whether the checkbox is disabled                  |
| `indeterminate` | `boolean`          | `false`          | Whether the checkbox is in an indeterminate state |
| `id`            | `string`           | `auto-generated` | The unique identifier for the checkbox            |
| `name`          | `string`           | `undefined`      | The name attribute for form submission            |
| `value`         | `string \| number` | `undefined`      | The value attribute for form submission           |
| `required`      | `boolean`          | `false`          | Whether the checkbox is required in a form        |
| `theme`         | `CheckboxTheme`    | `{}`             | Custom theme properties                           |

## Events

| Event               | Payload      | Description                             |
| ------------------- | ------------ | --------------------------------------- |
| `update:modelValue` | `boolean`    | Emitted when the checkbox state changes |
| `change`            | `boolean`    | Emitted when the checkbox is toggled    |
| `click`             | `MouseEvent` | Emitted when the checkbox is clicked    |

## Examples

### Basic Checkbox

```vue
<template>
    <Checkbox v-model="isChecked"> I agree to the terms </Checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@pickle-jar/ui'

const isChecked = ref(false)
</script>
```

### Disabled State

```vue
<template>
    <div class="space-y-2">
        <Checkbox v-model="checked" disabled> Disabled unchecked </Checkbox>
        <Checkbox v-model="checked" disabled :model-value="true">
            Disabled checked
        </Checkbox>
    </div>
</template>
```

### Multiple Checkboxes

```vue
<template>
    <div class="space-y-2">
        <h3 class="text-sm font-medium">Select your preferences:</h3>
        <div v-for="(option, index) in options" :key="option.id">
            <Checkbox
                v-model="option.checked"
                @update:model-value="toggleOption(index)"
            >
                {{ option.label }}
            </Checkbox>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@pickle-jar/ui'

const options = ref([
    { id: '1', label: 'Option 1', checked: false },
    { id: '2', label: 'Option 2', checked: true },
    { id: '3', label: 'Option 3', checked: false },
])

const toggleOption = (index: number) => {
    options.value[index].checked = !options.value[index].checked
}
</script>
```

### Form Integration

```vue
<template>
    <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="space-y-2">
            <Checkbox
                v-model="formData.newsletter"
                name="newsletter"
                value="newsletter"
            >
                Subscribe to newsletter
            </Checkbox>

            <Checkbox
                v-model="formData.terms"
                name="terms"
                value="terms"
                required
            >
                I accept the terms and conditions
            </Checkbox>
        </div>

        <button
            type="submit"
            class="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
            Submit
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@pickle-jar/ui'

const formData = ref({
    newsletter: false,
    terms: false,
})

const handleSubmit = () => {
    if (!formData.value.terms) {
        alert('You must accept the terms and conditions')
        return
    }
    console.log('Form data:', formData.value)
}
</script>
```

### Custom Theme

```vue
<template>
    <Checkbox v-model="checked" :theme="customTheme">
        Custom themed checkbox
    </Checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@pickle-jar/ui'

const checked = ref(false)

const customTheme = {
    checkbox:
        'border-2 border-blue-500 bg-blue-50 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-600',
    label: 'text-blue-700 font-semibold',
}
</script>
```

## Accessibility

The Checkbox component includes comprehensive accessibility features:

- **ARIA Attributes**: Proper `role="checkbox"`, `aria-checked`, and `aria-disabled` attributes
- **Keyboard Navigation**: Use Tab to focus, Space or Enter to toggle
- **Screen Reader Support**: Proper labeling and state announcements
- **Focus Management**: Visible focus indicators
- **Label Association**: Labels are properly associated with checkboxes

### Keyboard Shortcuts

| Key     | Action                |
| ------- | --------------------- |
| `Tab`   | Navigate to checkbox  |
| `Space` | Toggle checkbox state |
| `Enter` | Toggle checkbox state |

## Styling

The component uses Tailwind CSS classes and supports custom theming through the `theme` prop. The default styling follows the design system's color scheme and spacing.

### CSS Custom Properties

The component uses CSS custom properties for theming:

```css
:root {
    --primary: 222.2 84% 4.9%;
    --primary-foreground: 210 40% 98%;
    --ring: 217.2 32.6% 17.5%;
    --background: 0 0% 100%;
    --border: 214.3 31.8% 91.4%;
}
```

### Custom Classes

You can override the default styling by providing custom classes through the `theme` prop:

```vue
<Checkbox
    v-model="checked"
    :theme="{
        checkbox: 'your-custom-checkbox-classes',
        label: 'your-custom-label-classes',
    }"
>
    Custom styled checkbox
</Checkbox>
```

## TypeScript Support

The component includes full TypeScript support with proper type definitions:

```typescript
import type {
    CheckboxProps,
    CheckboxEmits,
    CheckboxTheme,
} from '@pickle-jar/ui'

// Props interface
interface CheckboxProps {
    modelValue?: boolean
    disabled?: boolean
    indeterminate?: boolean
    id?: string
    name?: string
    value?: string | number
    required?: boolean
    theme?: CheckboxTheme
}

// Emits interface
interface CheckboxEmits {
    (e: 'update:modelValue', value: boolean): void
    (e: 'change', value: boolean): void
    (e: 'click', event: MouseEvent): void
}
```

## Testing

The component includes comprehensive tests covering:

- ✅ Rendering with different props
- ✅ Event emission
- ✅ Keyboard navigation
- ✅ Accessibility attributes
- ✅ Theme customization
- ✅ Form integration

Run tests with:

```bash
npm test Checkbox.test.ts
```

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

When contributing to the Checkbox component:

1. Follow the established patterns in the codebase
2. Add comprehensive tests for new features
3. Update the Storybook stories
4. Ensure accessibility compliance
5. Update this README for any API changes
