export { debounce } from './DebounceUtil'
export { default as ThemeConfigurator } from './ThemeConfigurator'
export { m } from './TextUtils'

/**
 * Utility function to ensure Tailwind classes are detected by the content scanner
 * This function does nothing at runtime but helps Tailwind find classes
 */
export function twClasses(...classes: string[]) {
    return classes.join(' ')
}

/**
 * Predefined class sets for common components
 * These help Tailwind's content scanner detect classes automatically
 */
export const componentClasses = {
    combobox: twClasses(
        'relative rounded-lg border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color] flex items-start flex-wrap gap-1 p-1 flex-1 min-w-[120px] border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-y-0 right-0 items-center pr-2 text-muted-foreground size-4 text-inherit transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in fixed left-0 z-10 overflow-x-hidden overflow-y-auto bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0 font-medium -mx-2.5 cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate bg-accent opacity-50 pointer-events-none'
    ),
    button: twClasses(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-border bg-background hover:bg-accent hover:text-accent-foreground bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:bg-accent hover:text-accent-foreground text-primary underline-offset-4 hover:underline'
    ),
    columnManager: twClasses(
        'w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row overflow-y-auto p-3 mb-4 last:mb-0 sortable-drag flex min-w-px grow items-center space-x-2 text-base font-semibold shrink-0 text-sm h-5 w-5 group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50 drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5 size-3.5 ml-auto flex items-center space-x-1 p-1 size-4 sticky bottom-0 z-2 gap-2 p-3 bg-background/90 backdrop-blur-sm flex -space-x-px transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in'
    ),
}
