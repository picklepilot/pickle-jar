// Re-export core types
export * from '@pickle-jar/core'

// Lit-specific types
export interface LitComponentProps {
    id?: string
    className?: string
    disabled?: boolean
    theme?: string
}

export interface LitEventDetail {
    [key: string]: any
}

export interface LitComponentEvents {
    [eventName: string]: CustomEvent<LitEventDetail>
}
