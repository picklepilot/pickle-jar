// Framework-agnostic component interfaces
export interface BaseComponentProps {
    id?: string
    className?: string
    disabled?: boolean
}

export interface ThemeConfig {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
}

export interface ComponentTheme {
    name: string
    config: ThemeConfig
}

// Common UI types that can be shared
export type AllowedPlacement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'

export interface DropdownItem {
    id: string
    label: string
    value?: any
    disabled?: boolean
    icon?: string
}

export interface Tab {
    id: string
    label: string
    content?: any
    disabled?: boolean
    icon?: string
}

export interface ToolbarItem {
    id: string
    label: string
    icon?: string
    action?: () => void
    disabled?: boolean
    type?: 'button' | 'dropdown' | 'separator'
}
