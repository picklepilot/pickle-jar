<template>
    <span
        :class="
            m(
                'inline-flex items-center justify-center rounded-full px-2.5 py-0.5 font-medium transition-colors',
                // Variant styles
                variant === 'default' &&
                    'bg-primary text-primary-foreground hover:bg-primary/80',
                variant === 'secondary' &&
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                variant === 'destructive' &&
                    'bg-destructive text-destructive-foreground hover:bg-destructive/80',
                variant === 'outline' &&
                    'text-foreground border border-border hover:bg-accent hover:text-accent-foreground',

                // Size styles
                size === 'default' && 'text-xs h-6',
                size === 'sm' && 'text-xs h-5',
                size === 'lg' && 'text-sm h-7',

                theme.badge
            )
        "
    >
        <slot></slot>
    </span>
</template>

<script setup lang="ts">
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

withDefaults(
    defineProps<{
        /**
         * The variant of the badge.
         * @type {'default' | 'secondary' | 'destructive' | 'outline'}
         */
        variant?: 'default' | 'secondary' | 'destructive' | 'outline'

        /**
         * The size of the badge.
         * @type {'default' | 'sm' | 'lg'}
         */
        size?: 'default' | 'sm' | 'lg'

        /**
         * Locally customize the component's theme properties.
         *
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            badge?: string
        }
    }>(),
    {
        variant: 'default',
        size: 'default',
        theme: () => ({
            badge: '',
        }),
    }
)
</script>
