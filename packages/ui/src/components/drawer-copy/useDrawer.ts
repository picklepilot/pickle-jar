import { ref, computed } from 'vue'

export interface UseDrawerOptions {
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
     * Whether to show the close button in the header.
     * @type {boolean}
     */
    showCloseButton?: boolean

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
        content?: string
        closeButton?: string
    }
}

export function useDrawer(options: UseDrawerOptions = {}) {
    const isOpen = ref(false)

    const drawerProps = computed(() => ({
        open: isOpen.value,
        position: options.position || 'right',
        size: options.size || 'default',
        showCloseButton: options.showCloseButton ?? true,
        closeOnBackdropClick: options.closeOnBackdropClick ?? true,
        closeOnEscape: options.closeOnEscape ?? true,
        preventBodyScroll: options.preventBodyScroll ?? true,
        closeButtonLabel: options.closeButtonLabel || 'Close drawer',
        theme: options.theme || {},
    }))

    const open = () => {
        isOpen.value = true
    }

    const close = () => {
        isOpen.value = false
    }

    const toggle = () => {
        isOpen.value = !isOpen.value
    }

    const handleUpdateOpen = (value: boolean) => {
        isOpen.value = value
    }

    return {
        isOpen,
        drawerProps,
        open,
        close,
        toggle,
        handleUpdateOpen,
    }
}
