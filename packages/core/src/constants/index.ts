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
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
} as const
