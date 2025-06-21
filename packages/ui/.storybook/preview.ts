import type { Preview } from '@storybook/vue3'
// import '../src/styles/globals.css'
import './storybook.css'

const preview: Preview = {
    parameters: {
        // actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
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
}

export default preview
