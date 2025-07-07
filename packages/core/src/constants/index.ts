// Component size constants
export const SIZES = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
} as const

export type Size = (typeof SIZES)[keyof typeof SIZES]

// Component variant constants
export const VARIANTS = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    info: 'info',
} as const

export type Variant = (typeof VARIANTS)[keyof typeof VARIANTS]

// Animation duration constants
export const ANIMATION_DURATIONS = {
    fast: 150,
    normal: 300,
    slow: 500,
} as const

// Z-index constants
export const Z_INDEX = {
    dropdown: 'var(--z-dropdown)',
    sticky: 'var(--z-sticky)',
    fixed: 'var(--z-fixed)',
    modalBackdrop: 'var(--z-modal-backdrop)',
    modal: 'var(--z-modal)',
    popover: 'var(--z-popover)',
    tooltip: 'var(--z-tooltip)',
} as const
