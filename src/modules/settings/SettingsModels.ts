export type SettingsConfigurationItem = {
    badge?: number
    icon: string
    label: string
    onClick: () => void
    active: boolean
}

export type SettingsConfiguration = {
    [key: string]: SettingsConfigurationItem[]
}
