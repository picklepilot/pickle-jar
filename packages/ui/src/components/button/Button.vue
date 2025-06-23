<template>
    <button
        ref="buttonRef"
        @click="handleClick"
        :class="
            m(
                'inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm ring-offset-background focus:outline-none focus:ring-3 focus:ring-ring/30 transition-[box-shadow,color] disabled:pointer-events-none disabled:opacity-50 gap-1.5',

                // Svg styles
                `[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0`,

                // Border radius - round prop overrides default rounded-md
                round ? 'rounded-full' : 'rounded-md',

                // Variant styles
                variant === 'default' &&
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                variant === 'destructive' &&
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                variant === 'outline' &&
                    'border border-ring bg-background hover:bg-accent hover:text-accent-foreground',
                variant === 'secondary' &&
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                variant === 'ghost' &&
                    'hover:bg-accent hover:text-accent-foreground',
                variant === 'link' &&
                    'text-primary underline-offset-4 hover:underline',

                // Size styles
                size === 'default' && 'px-4 has-[svg]:pl-3 py-2',
                size === 'lg' && 'px-5 py-2 text-lg has-[svg]:pl-4',
                size === 'sm' && 'px-3 py-1.5 has-[svg]:pl-2',
                size === 'xs' && 'px-2 py-1 has-[svg]:pl-1',
                size === 'icon' && 'size-9',

                isDropdownTrigger && 'outline-none ring-3 ring-ring',

                theme.button
            )
        "
        :aria-disabled="disabled"
        :aria-busy="processing"
        :aria-expanded="isDropdownTrigger"
        :disabled="disabled"
    >
        <slot></slot>
        <span v-if="processing" aria-hidden="true">
            <span v-if="$slots.processing">
                <slot name="processing" />
            </span>
        </span>
    </button>
</template>

<script setup lang="ts">
import { inject, computed, ref } from 'vue'
import { m } from '../../utils'

const emit = defineEmits(['click'])

// Inject dropdown context to check if this button is a dropdown trigger
interface DropdownContext {
    isOpen: any
    triggerRef: any
    open: () => void
    close: () => void
    toggle: () => void
    setTriggerRef: (ref: HTMLElement) => void
    registerItem: (itemRef: HTMLElement, itemId: string) => void
    unregisterItem: (itemId: string) => void
    focusNext: () => void
    focusPrevious: () => void
    focusFirst: () => void
    focusLast: () => void
    focusItem: (itemId: string) => void
    getActiveItemId: () => string | null
}

const dropdown = inject<DropdownContext>('dropdown')
const buttonRef = ref<HTMLElement>()

// Check if this button is the trigger for an active dropdown
// Compare the button ref with the trigger ref to see if they are the same element
const isDropdownTrigger = computed(() => {
    dropdown?.triggerRef?.value
    const triggerRefButton =
        dropdown?.triggerRef?.value?.querySelector('button')
    return (
        triggerRefButton === buttonRef.value && dropdown?.isOpen?.value === true
    )
})

withDefaults(
    defineProps<{
        /**
         * The variant of the button.
         * @type {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'}
         */
        variant?:
            | 'default'
            | 'destructive'
            | 'outline'
            | 'secondary'
            | 'ghost'
            | 'link'

        /**
         * The size of the button.
         * @type {'default' | 'sm' | 'lg' | 'xs' | 'icon'}
         */
        size?: 'default' | 'sm' | 'lg' | 'xs' | 'icon'

        /**
         * Whether the button is disabled.
         * When true, the button cannot be clicked and shows a disabled state.
         *
         * @type {boolean}
         */
        disabled?: boolean

        /**
         * Whether the button is in a processing state.
         * When true, displays a loading indicator before the button content.
         *
         * @type {boolean}
         */
        processing?: boolean

        /**
         * Whether the button should have a round/circular shape.
         * When true, the button will have rounded-full class instead of rounded-md.
         *
         * @type {boolean}
         */
        round?: boolean

        /**
         * Locally customize the component's theme properties.
         *
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            button?: string
            buttonDisabled?: string
            buttonIcon?: string
        }

        /**
         * Whether the button is an icon button.
         * When true, the button will have a smaller size and no padding.
         *
         * @type {boolean}
         */
        icon?: boolean
    }>(),
    {
        disabled: false,
        processing: false,
        size: 'default',
        round: false,
        theme: () => ({
            button: '',
            buttonDisabled: '',
            buttonIcon: '',
        }),
        variant: 'default',
    }
)

function handleClick(evt: MouseEvent) {
    evt.preventDefault()
    emit('click', evt)
}
</script>

<style scoped>
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
</style>
