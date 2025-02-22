export type SettingsConfigurationItem = {
    badge?: number
    icon: string
    label: string
    onClick: () => void
    active: boolean
    disabled?: boolean
}

export interface SettingsConfiguration {
    [key: string]: SettingsConfigurationItem[]
}
