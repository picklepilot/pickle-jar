import { ref, watch } from 'vue'

interface DebouncedInputOptions {
    debounce: number
    modelValue: string
    onUpdate: (value: string) => void
}

export function useDebouncedInput(options: DebouncedInputOptions) {
    const timeoutId = ref<number>()
    const effectiveValue = ref(options.modelValue)

    watch(
        () => options.modelValue,
        (value) => {
            effectiveValue.value = value
        }
    )

    /**
     * Handle input with optional debouncing.
     * If debounce is 0, updates immediately. Otherwise, waits for the debounce timeout.
     *
     * @param event
     */
    function handleInput(event: Event) {
        if (!event.target) return

        const targetValue = (event.target as HTMLInputElement).value

        if (options.debounce > 0) {
            // Apply debouncing
            clearTimeout(timeoutId.value)
            timeoutId.value = setTimeout(() => {
                effectiveValue.value = targetValue
                options.onUpdate(targetValue)
            }, options.debounce) as unknown as number
        } else {
            // Update immediately without debouncing
            effectiveValue.value = targetValue
            options.onUpdate(targetValue)
        }
    }

    return {
        effectiveValue,
        handleInput,
    }
}
