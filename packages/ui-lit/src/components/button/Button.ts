import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classNames } from '@pickle-jar/core'
// Import the built Tailwind CSS as a string
import tailwindStyles from '@pickle-jar/core/dist/styles.css?inline'

@customElement('pj-button')
export class Button extends LitElement {
    // Inject Tailwind styles into the shadow DOM
    static styles = unsafeCSS(tailwindStyles)

    @property({ type: String })
    variant:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link' = 'default'

    @property({ type: String })
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'

    @property({ type: Boolean })
    disabled = false

    @property({ type: String })
    type: 'button' | 'submit' | 'reset' = 'button'

    render() {
        const buttonClasses = classNames(
            // Base button styles
            'inline-flex items-center justify-center rounded-md transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:pointer-events-none disabled:opacity-50',

            // Size variants
            this.size === 'xs' && 'h-8 px-3 text-xs',
            this.size === 'sm' && 'h-9 px-3 text-sm',
            this.size === 'md' && 'h-10 px-4 py-2 text-sm',
            this.size === 'lg' && 'h-11 px-8 text-base',
            this.size === 'xl' && 'h-12 px-10 text-lg',

            // Variant styles
            this.variant === 'default' &&
                'bg-primary text-primary-foreground hover:bg-primary/90',
            this.variant === 'destructive' &&
                'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            this.variant === 'outline' &&
                'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
            this.variant === 'secondary' &&
                'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            this.variant === 'ghost' &&
                'hover:bg-accent hover:text-accent-foreground',
            this.variant === 'link' &&
                'text-primary underline-offset-4 hover:underline'
        )

        return html`
            <button
                class="${buttonClasses}"
                ?disabled="${this.disabled}"
                type="${this.type}"
            >
                <slot></slot>
            </button>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'pj-button': Button
    }
}
