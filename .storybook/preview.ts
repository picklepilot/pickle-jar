import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import ThemeConfigurator from '../src/utils/ThemeConfigurator'
import '../src/style.css'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

// Use setup() to configure global Vue components, directives, plugins, etc.
setup((app) => {
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
        })
    )
})

export default preview
