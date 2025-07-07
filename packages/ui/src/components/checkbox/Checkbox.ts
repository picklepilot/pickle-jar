import type { ComponentPublicInstance } from 'vue'

export interface CheckboxProps {
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
        checkbox?: string
        label?: string
    }
}

export interface CheckboxEmits {
    (e: 'update:modelValue', value: boolean): void
    (e: 'change', value: boolean): void
    (e: 'click', event: MouseEvent): void
}

export interface CheckboxTheme {
    checkbox?: string
    label?: string
}

export interface CheckboxExpose {
    checkboxRef: HTMLButtonElement | undefined
    id: string
}

export type CheckboxInstance = ComponentPublicInstance<
    CheckboxProps,
    CheckboxExpose
>
