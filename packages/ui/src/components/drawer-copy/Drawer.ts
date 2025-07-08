export interface DrawerProps {
    /**
     * Controls whether the drawer is open or closed.
     * @type {boolean}
     */
    open: boolean

    /**
     * The position of the drawer on the screen.
     * @type {'left' | 'right' | 'top' | 'bottom'}
     */
    position?: 'left' | 'right' | 'top' | 'bottom'

    /**
     * The size of the drawer.
     * @type {'sm' | 'default' | 'lg' | 'xl' | 'full'}
     */
    size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'

    /**
     * Whether clicking the backdrop closes the drawer.
     * @type {boolean}
     */
    closeOnBackdropClick?: boolean

    /**
     * Whether pressing the Escape key closes the drawer.
     * @type {boolean}
     */
    closeOnEscape?: boolean

    /**
     * Whether to prevent body scroll when drawer is open.
     * @type {boolean}
     */
    preventBodyScroll?: boolean

    /**
     * Whether drag-to-close is enabled.
     * @type {boolean}
     */
    dragToClose?: boolean

    /**
     * The threshold distance to trigger close on drag end.
     * @type {number}
     */
    dragThreshold?: number

    /**
     * The velocity threshold to trigger close on flick.
     * @type {number}
     */
    velocityThreshold?: number

    /**
     * Locally customize the component's theme properties.
     * @type {Partial<ThemeParams>}
     */
    theme?: {
        backdrop?: string
        container?: string
        content?: string
        closeButton?: string
        handle?: string
        indicator?: string
    }
}

export interface DrawerEmits {
    close: []
    'update:open': [value: boolean]
}

export interface DrawerSlots {
    default: {}
    header: {}
    title: {}
    footer: {}
}

export interface DrawerExpose {
    close: () => void
    handleDragStart: (event: MouseEvent | TouchEvent) => void
    handleDragMove: (
        deltaX: number,
        deltaY: number,
        event: MouseEvent | TouchEvent
    ) => void
    handleDragEnd: (event: MouseEvent | TouchEvent) => void
}

// DrawerRoot types
export interface DrawerRootProps {
    open: boolean
    position?: 'left' | 'right' | 'top' | 'bottom'
    closeOnBackdropClick?: boolean
    closeOnEscape?: boolean
    preventBodyScroll?: boolean
    theme?: {
        backdrop?: string
    }
}

export interface DrawerRootEmits {
    close: []
    'update:open': [value: boolean]
}

export interface DrawerRootExpose {
    close: () => void
    drawerContainerRef: HTMLElement | undefined
    backdropRef: HTMLElement | undefined
    titleId: string
    descriptionId: string
    setDragging: (dragging: boolean) => void
}

// DrawerContent types
export interface DrawerContentProps {
    open?: boolean
    position?: 'left' | 'right' | 'top' | 'bottom'
    size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'
    dragToClose?: boolean
    dragThreshold?: number
    velocityThreshold?: number
    theme?: {
        container?: string
        content?: string
    }
}

export interface DrawerContentEmits {
    dragStart: [event: MouseEvent | TouchEvent]
    dragMove: [deltaX: number, deltaY: number, event: MouseEvent | TouchEvent]
    dragEnd: [event: MouseEvent | TouchEvent]
    'drag-start': []
    'drag-end': []
    close: []
    'update:open': [value: boolean]
}

export interface DrawerContentExpose {
    drawerRef: HTMLElement | undefined
    focusFirstElement: () => Promise<void>
    handleDragStart: (event: MouseEvent | TouchEvent) => void
    handleDragMove: (
        deltaX: number,
        deltaY: number,
        event: MouseEvent | TouchEvent
    ) => void
    handleDragEnd: (event: MouseEvent | TouchEvent) => void
    isDragging: boolean
}

// DrawerHeader types
export interface DrawerHeaderProps {
    position?: 'left' | 'right' | 'top' | 'bottom'
    showCloseButton?: boolean
    showDragHandle?: boolean
    closeButtonLabel?: string
    theme?: {
        header?: string
        closeButton?: string
        handle?: string
        indicator?: string
    }
}

export interface DrawerHeaderEmits {
    close: []
    'update:open': [value: boolean]
    dragStart: [event: MouseEvent | TouchEvent]
    dragMove: [deltaX: number, deltaY: number, event: MouseEvent | TouchEvent]
    dragEnd: [event: MouseEvent | TouchEvent]
}

// DrawerHandle types
export interface DrawerHandleProps {
    position?: 'left' | 'right' | 'top' | 'bottom'
    theme?: {
        handle?: string
        indicator?: string
    }
}

export interface DrawerHandleEmits {
    dragStart: [event: MouseEvent | TouchEvent]
    dragMove: [deltaX: number, deltaY: number, event: MouseEvent | TouchEvent]
    dragEnd: [event: MouseEvent | TouchEvent]
}

export interface DrawerHandleExpose {
    handleRef: HTMLElement | undefined
    isDragging: boolean
}

// DrawerTitle types
export interface DrawerTitleProps {
    titleId?: string
}

// DrawerBody types
export interface DrawerBodyProps {
    hasHeader?: boolean
    hasFooter?: boolean
    theme?: {
        content?: string
    }
}

// DrawerFooter types
export interface DrawerFooterProps {
    theme?: {
        footer?: string
    }
}

// DrawerClose types
export interface DrawerCloseProps {
    closeButtonLabel?: string
    theme?: {
        closeButton?: string
    }
}

export interface DrawerCloseEmits {
    close: []
}

// Re-export the composable types
export type { UseDrawerOptions } from './useDrawer'
