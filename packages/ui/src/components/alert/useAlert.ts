import { ref, computed, readonly } from 'vue'

export interface AlertState {
    isVisible: boolean
    variant: 'info' | 'processing' | 'warning' | 'error' | 'success' | 'muted'
    dismissable: boolean
    flush: boolean
}

export function useAlert(initialState: Partial<AlertState> = {}) {
    const state = ref<AlertState>({
        isVisible: true,
        variant: 'info',
        dismissable: false,
        flush: false,
        ...initialState,
    })

    const show = () => {
        state.value.isVisible = true
    }

    const hide = () => {
        state.value.isVisible = false
    }

    const toggle = () => {
        state.value.isVisible = !state.value.isVisible
    }

    const setVariant = (variant: AlertState['variant']) => {
        state.value.variant = variant
    }

    const setDismissable = (dismissable: boolean) => {
        state.value.dismissable = dismissable
    }

    const setFlush = (flush: boolean) => {
        state.value.flush = flush
    }

    const isInfo = computed(() => state.value.variant === 'info')
    const isProcessing = computed(() => state.value.variant === 'processing')
    const isWarning = computed(() => state.value.variant === 'warning')
    const isError = computed(() => state.value.variant === 'error')
    const isSuccess = computed(() => state.value.variant === 'success')
    const isMuted = computed(() => state.value.variant === 'muted')

    return {
        state: readonly(state),
        show,
        hide,
        toggle,
        setVariant,
        setDismissable,
        setFlush,
        isInfo,
        isProcessing,
        isWarning,
        isError,
        isSuccess,
        isMuted,
    }
}
