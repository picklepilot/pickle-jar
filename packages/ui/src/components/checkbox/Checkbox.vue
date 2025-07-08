<template>
    <div class="flex items-center space-x-2" :class="[theme?.container || '']">
        <button
            ref="checkboxRef"
            :id="id"
            type="button"
            role="checkbox"
            :aria-checked="indeterminate ? 'mixed' : modelValue"
            :aria-disabled="disabled"
            :disabled="disabled"
            @click="handleClick"
            @keydown="handleKeydown"
            :class="
                m(
                    'peer size-4 shrink-0 rounded flex items-center shadow-xs justify-center border border-ring bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary/10 data-[state=indeterminate]:bg-primary/60 min-w-4 min-h-4',
                    theme?.checkbox || ''
                )
            "
            :data-state="
                indeterminate
                    ? 'indeterminate'
                    : modelValue
                      ? 'checked'
                      : 'unchecked'
            "
        >
            <CheckIcon v-if="modelValue && !indeterminate" class="size-3" />
            <MinusIcon v-if="indeterminate" class="size-3" />
        </button>
        <Label
            v-if="$slots.default"
            :for="id"
            :class="
                m(
                    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none',
                    theme?.label || ''
                )
            "
            @click="handleLabelClick"
            :id="`${id}-label`"
        >
            <slot></slot>
        </Label>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { m } from '../../utils'
import { CheckIcon, MinusIcon } from 'lucide-vue-next'
import Label from '../label/Label.vue'

interface Props {
    /**
     * The current checked state of the checkbox.
     * @type {boolean}
     */
    modelValue?: boolean

    /**
     * Whether the checkbox is disabled.
     * When true, the checkbox cannot be interacted with and shows a disabled state.
     * @type {boolean}
     */
    disabled?: boolean

    /**
     * Whether the checkbox is in an indeterminate state.
     * When true, shows a different visual state (typically a dash instead of a check).
     * @type {boolean}
     */
    indeterminate?: boolean

    /**
     * The unique identifier for the checkbox.
     * Used for accessibility and form association.
     * @type {string}
     */
    id?: string

    /**
     * The name attribute for the checkbox.
     * Used for form submission and grouping.
     * @type {string}
     */
    name?: string

    /**
     * The value attribute for the checkbox.
     * Used for form submission.
     * @type {string | number}
     */
    value?: string | number

    /**
     * Whether the checkbox is required in a form.
     * @type {boolean}
     */
    required?: boolean

    /**
     * Locally customize the component's theme properties.
     * @type {Partial<CheckboxTheme>}
     */
    theme?: {
        container?: string
        checkbox?: string
        label?: string
    }
}

interface Emits {
    (e: 'update:modelValue', value: boolean): void
    (e: 'change', value: boolean): void
    (e: 'click', event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    disabled: false,
    indeterminate: false,
    required: false,
    theme: () => ({
        checkbox: '',
        container: '',
        label: '',
    }),
})

const emit = defineEmits<Emits>()

const checkboxRef = ref<HTMLButtonElement>()

// Generate a unique ID if none provided
const id = computed(
    () => props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`
)

const handleClick = (event: MouseEvent) => {
    if (props.disabled) return

    // If indeterminate, set to checked. Otherwise, toggle the current state
    const newValue = props.indeterminate ? true : !props.modelValue
    emit('update:modelValue', newValue)
    emit('change', newValue)
    emit('click', event)
}

const handleLabelClick = (event: MouseEvent) => {
    if (props.disabled) return

    // Prevent double-triggering when clicking the label
    event.preventDefault()
    handleClick(event)
}

const handleKeydown = (event: KeyboardEvent) => {
    if (props.disabled) return

    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        handleClick(event as unknown as MouseEvent)
    }
}
</script>
