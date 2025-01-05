import type { DropdownItem } from './DropdownItem'

type AllowedPlacement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'

export type ToolbarItem = {
    children?: DropdownItem[][]
    menuConfig?: {
        allowedPlacements?: AllowedPlacement[]
        buffer?: number
        offset?: number
    }
    classes?: {
        button?: string
        buttonIcon?: string
        menuItems?: string
    }
    count?: number
    disabled?: boolean
    icon?: string
    label?: string
    onClick?: () => void
    position?: 'left' | 'right'
    statusColor?: string
    tooltip?: string
}

export type ToolbarItemGroup = {
    children: ToolbarItem[]
    position: 'left' | 'right'
}
