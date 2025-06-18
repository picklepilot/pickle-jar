import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import ThemeConfigurator from '../src/utils/ThemeConfigurator'
import '../src/style.css'
import '../src/styles/theme.css'

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
// Use setup() to configure global Vue components, directives, plugins, etc.
setup((app: any) => {
    // Add your global Vue configuration here
    // Example:
    // app.use(MyPlugin)
    // app.component('my-component', MyComponent)
    // app.mixin({})

    app.provide(
        'componentJarTheme',
        new ThemeConfigurator().withParams({
            baseDropdownInputContainer: '',
            baseDropdownInputText: '',
            baseDropdownMenuItemGroup: 'flex flex-col p-1',
            baseDropdownMenuItems:
                'flex flex-col bg-white rounded shadow-2xl divide-y divide-gray-200 border border-gray-200',
            baseDropdownMenuItem: 'text-left justify-start text-sm rounded',
            baseDropdownMenuItemButton: 'rounded px-2.5 py-1',
            baseDropdownMenuItemActiveButton: 'bg-blue-400 text-blue-50',
            baseDropdownMenuContainer: 'relative',
            generalFloatingPanelContainer: '',

            // ui-window-toolbar
            uiWindowToolbarWindowContainer: 'bg-white',
            uiWindowToolbarWindowTopMenu: 'bg-white',
            uiWindowToolbarWindowTopMenuTitle: 'text-zinc-900',
            uiWindowToolbarWindowCloseButton: '[&>svg]:size-4 text-red-50',
            uiWindowToolbarWindowCollapseButton:
                '[&>svg]:size-4 text-amber-800',
            uiWindowToolbarWindowResizeHandle: 'bg-zinc-900',
            uiWindowToolbarWindowResizeHandleActive: 'bg-zinc-900',
        })
    )
})

export default preview
