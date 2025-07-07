export type DropdownItem = {
    classes?: {
        button?: string
        buttonIcon?: string
    }
    count?: number
    disabled?: boolean
    icon?: string
    label?: string
    onClick?: () => void
    statusColor?: string
}
