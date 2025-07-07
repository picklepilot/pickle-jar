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

// ModalRoot types
export interface ModalRootProps {
    open: boolean
    closeOnBackdropClick?: boolean
    closeOnEscape?: boolean
    preventBodyScroll?: boolean
    theme?: {
        backdrop?: string
    }
}

export interface ModalRootEmits {
    close: []
    'update:open': [value: boolean]
}

export interface ModalRootExpose {
    close: () => void
    modalContainerRef: HTMLElement | undefined
    backdropRef: HTMLElement | undefined
    titleId: string
    descriptionId: string
}

// ModalContent types
export interface ModalContentProps {
    size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'
    theme?: {
        container?: string
    }
}

export interface ModalContentExpose {
    modalRef: HTMLElement | undefined
    focusFirstElement: () => Promise<void>
}

// ModalHeader types
export interface ModalHeaderProps {
    showCloseButton?: boolean
    closeButtonLabel?: string
    theme?: {
        header?: string
        closeButton?: string
    }
}

export interface ModalHeaderEmits {
    close: []
}

// ModalTitle types
export interface ModalTitleProps {
    titleId?: string
}

// ModalBody types
export interface ModalBodyProps {
    hasHeader?: boolean
    hasFooter?: boolean
    theme?: {
        content?: string
    }
}

// ModalFooter types
export interface ModalFooterProps {
    theme?: {
        footer?: string
    }
}

// ModalClose types
export interface ModalCloseProps {
    closeButtonLabel?: string
    theme?: {
        closeButton?: string
    }
}

export interface ModalCloseEmits {
    close: []
}
