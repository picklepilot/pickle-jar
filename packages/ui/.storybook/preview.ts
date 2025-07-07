import type { Preview } from '@storybook/vue3'
import './theme.css'
import { Renderer } from 'storybook/internal/types'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        // Background toggle for light/dark themes
        backgrounds: {
            default: 'light',
            options: {
                light: { name: 'Light', value: '#ffffff' },
                dark: { name: 'Dark', value: '#0c0a09' },
            },
        },
        // Accessibility testing
        a11y: {
            config: {
                rules: [
                    {
                        id: 'color-contrast',
                        enabled: true,
                    },
                ],
            },
        },
        // Vitest testing
        vitest: {
            include: ['../src/**/*.{test,spec}.{js,ts,vue}'],
        },
    },
    decorators: [
        withThemeByClassName<Renderer>({
            themes: {
                light: '',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
    ],
}

export default preview
