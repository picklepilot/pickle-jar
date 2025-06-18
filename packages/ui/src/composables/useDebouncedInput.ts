import { ref, watch } from 'vue'

export function useDebouncedInput(
    props: { debounce: number; modelValue: string },
    emit: any
) {
    const timeoutId = ref<number>()

    const effectiveValue = ref(props.modelValue)

    watch(
        () => props.modelValue,
        (value) => {
            effectiveValue.value = value
        }
    )

    /**
     * Wait the timeout value before updating the model value.
     *
     * @param event
     */
    function handleInput(event: Event) {
        if (event.target) {
            clearTimeout(timeoutId.value)
            timeoutId.value = setTimeout(() => {
                // @ts-ignore
                effectiveValue.value = event.target!.value
                emit('update:modelValue', effectiveValue.value)
            }, props.debounce) as unknown as number
        }
    }

    return {
        effectiveValue,
        handleInput,
    }
}
