<template>
    <span
        :class="
            m(
                'inline-flex items-center justify-center rounded-full px-2.5 py-0.5 font-medium transition-colors',
                variants[variant],
                sizes[size],
                classes
            )
        "
    >
        <slot></slot>
    </span>
</template>

<script setup lang="ts">
import { m } from '../utils'

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'
type BadgeSize = 'default' | 'sm' | 'lg'

interface Props {
    /**
     * The variant of the badge
     * @default 'default'
     */
    variant?: BadgeVariant

    /**
     * The size of the badge
     * @default 'default'
     */
    size?: BadgeSize

    /**
     * Additional classes to be added to the container
     * @default []
     */
    classes?: string[]
}

const variants = {
    default:
        'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/80',
    secondary:
        'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/80',
    destructive:
        'bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:bg-[var(--destructive)]/80',
    outline:
        'text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]',
}

const sizes = {
    default: 'text-xs h-6',
    sm: 'text-xs h-5',
    lg: 'text-sm h-7',
}

withDefaults(defineProps<Props>(), {
    variant: 'default',
    size: 'default',
    classes: () => [],
})
</script>
