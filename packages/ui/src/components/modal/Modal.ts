export interface ModalProps {
    /**
     * Controls whether the modal is open or closed.
     * @type {boolean}
     */
    open: boolean

    /**
     * The size of the modal.
     * @type {'sm' | 'default' | 'lg' | 'xl' | 'full'}
     */
    size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'

    /**
     * Whether to show the close button in the header.
     * @type {boolean}
     */
    showCloseButton?: boolean

    /**
     * Whether clicking the backdrop closes the modal.
     * @type {boolean}
     */
    closeOnBackdropClick?: boolean

    /**
     * Whether pressing the Escape key closes the modal.
     * @type {boolean}
     */
    closeOnEscape?: boolean

    /**
     * Whether to prevent body scroll when modal is open.
     * @type {boolean}
     */
    preventBodyScroll?: boolean

    /**
     * The aria-label for the close button.
     * @type {string}
     */
    closeButtonLabel?: string

    /**
     * Locally customize the component's theme properties.
     * @type {Partial<ThemeParams>}
     */
    theme?: {
        backdrop?: string
        container?: string
        header?: string
        content?: string
        footer?: string
        closeButton?: string
    }
}

export interface ModalEmits {
    close: []
    'update:open': [value: boolean]
}

export interface ModalSlots {
    default: {}
    header: {}
    title: {}
    footer: {}
}

export interface ModalExpose {
    close: () => void
}
