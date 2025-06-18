<template>
    <button
        @click="handleClick"
        :class="
            m(
                'px-2.5 py-1.5 flex items-center justify-center leading-none rounded-[var(--radius)]',
                // Base styles
                'disabled:opacity-50 disabled:cursor-not-allowed',
                // Variant styles
                variant === 'default' &&
                    'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90',
                variant === 'destructive' &&
                    'bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:bg-[var(--destructive)]/90',
                variant === 'outline' &&
                    'border border-[var(--input)] bg-background hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]',
                variant === 'secondary' &&
                    'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/80',
                variant === 'ghost' &&
                    'hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]',
                variant === 'link' &&
                    'text-[var(--primary)] underline-offset-4 hover:underline',
                // Size styles
                size === 'default' && 'text-sm h-9 px-3 py-2',
                size === 'sm' && 'text-sm h-8 rounded-md px-3',
                size === 'lg' && 'text-base h-10 rounded-md px-3.5',
                size === 'icon' && 'h-10 w-10',
                theme.baseButton
            )
        "
        :aria-disabled="disabled"
        :aria-busy="processing"
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
import { m } from '../utils'

const emit = defineEmits(['click'])

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
         * @type {'default' | 'sm' | 'lg' | 'icon'}
         */
        size?: 'default' | 'sm' | 'lg' | 'icon'

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
         * Locally customize the component's theme properties.
         *
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            baseButton?: string
            baseButtonDisabled?: string
            baseButtonIcon?: string
        }
    }>(),
    {
        disabled: false,
        processing: false,
        size: 'default',
        theme: () => ({
            baseButton: '',
            baseButtonDisabled: '',
            baseButtonIcon: '',
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
