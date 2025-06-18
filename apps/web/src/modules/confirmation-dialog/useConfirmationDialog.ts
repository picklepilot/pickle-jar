import { ref } from 'vue'

export function useConfirmationDialog() {
    const cancelButtonText = ref<string>('Cancel')
    const confirmButtonText = ref<string>('Confirm')
    const confirmButtonTheme = ref<string>('')
    const description = ref<string>('')
    const processing = ref<string>('')
    const show = ref<boolean>(false)
    const title = ref<string>('')

    const cancelCallback = ref<Function>(() => {
        console.warn('Cancel callback not set')
        show.value = false
    })
    const confirmCallback = ref<Function>(() => {
        console.warn('Confirm callback not set')
        show.value = false
    })

    /**
     * Opens the confirmation dialog with the given parameters.
     *
     * @param {string} titleText - The title of the dialog.
     * @param {string} descriptionText - The text that goes below the title in the dialog.
     * @param confirmCallbackFn
     * @param cancelCallbackFn
     * @param confirmButtonTextText
     * @param cancelButtonTextText
     * @param confirmButtonThemeClassList
     */
    function doOpen(
        titleText: string,
        descriptionText: string,
        confirmCallbackFn?: Function,
        cancelCallbackFn?: Function,
        confirmButtonTextText = 'Confirm',
        cancelButtonTextText = 'Cancel',
        confirmButtonThemeClassList = ''
    ) {
        title.value = titleText
        description.value = descriptionText
        confirmButtonText.value = confirmButtonTextText
        cancelButtonText.value = cancelButtonTextText
        confirmButtonTheme.value = confirmButtonThemeClassList

        confirmCallback.value =
            confirmCallbackFn ||
            (async () => {
                console.warn('Confirm callback not set')
                show.value = false
            })

        cancelCallback.value =
            cancelCallbackFn ||
            (async () => {
                console.warn('Cancel callback not set')
                show.value = false
            })

        show.value = true
    }

    function toggleProcessing(message: string) {
        processing.value = message
    }

    return {
        cancelButtonText,
        cancelCallback,
        confirmButtonText,
        confirmButtonTheme,
        confirmCallback,
        description,
        doOpen,
        processing,
        show,
        title,
        toggleProcessing,
    }
}
