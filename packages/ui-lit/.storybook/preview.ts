import type { Preview } from '@storybook/web-components-vite'
import '@pickle-jar/core/styles'
// import './theme.css'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'centered',
        backgrounds: {
            default: 'light',
            options: {
                light: { name: 'Light', value: '#ffffff' },
                dark: { name: 'Dark', value: '#0c0a09' },
            },
        },
    },
    decorators: [
        (story, context) => {
            const background = context.globals.backgrounds?.value
            document.documentElement.className = background || 'light'
            return story()
        },
    ],
}

export default preview
