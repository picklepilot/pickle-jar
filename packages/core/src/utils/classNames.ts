import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class names into a single string
 * Filters out falsy values and trims whitespace
 */
export function classNames(
    ...classes: (string | boolean | undefined | null)[]
): string {
    return classes.filter(Boolean).join(' ').trim()
}

/**
 * Conditional class name utility
 */
export function cn(
    base: string,
    conditional: Record<string, boolean> = {}
): string {
    const conditionalClasses = Object.entries(conditional)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(' ')

    return classNames(base, conditionalClasses)
}

/**
 * Merge class names using clsx and tailwind-merge
 * @param inputs - The class names to merge
 * @returns The merged class names
 * @example
 * m('bg-red-500', 'text-white', 'hover:bg-red-600')
 * // Returns 'bg-red-500 text-white hover:bg-red-600'
 */
export function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
