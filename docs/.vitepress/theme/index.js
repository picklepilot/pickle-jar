import './tailwind.postcss'
import './custom.css'
import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import { ThemeConfigurator } from 'component-jar'
import Sortable, { MultiDrag } from 'sortablejs'

function mountMultiDragPlugin() {
    if (typeof window === 'undefined') {
        return
    }

    if (!window.multiDragMounted) {
        Sortable.mount(new MultiDrag())
    }
    window.multiDragMounted = true
}

mountMultiDragPlugin()

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.provide(
            'componentJarTheme',
            new ThemeConfigurator().withParams({
                baseButton:
                    'flex items-center justify-center text-sm text-stone-950 border border-stone-950 bg-zinc-50 hover:bg-zinc-100',
                baseDropdownMenuItems:
                    'flex flex-col max-w-[250px] bg-white shadow-xl rounded-lg ring-1 ring-zinc-200/60',
                baseDropdownMenuItemButton:
                    'hover:bg-zinc-100 flex w-full px-2 py-1 rounded-sm text-sm',
                baseDropdownMenuItemGroup: 'border-b border-zinc-200/60 p-1',
                columnManagerContainer:
                    'bg-white rounded-none first:rounded-t-xl last:rounded-b-xl border-t-0 border-x-0 border-b border-zinc-200',
                columnManagerGroupHeader:
                    'rounded-none py-1.5 pt-3 pr-2 pl-3 flex items-center justify-between',
                columnManagerGroupContainer:
                    'bg-white rounded-none first:rounded-t-xl last:rounded-b-xl border-t-0 border-x-0 border-b border-zinc-200',
                columnManagerGroupsContainer:
                    'space-y-0 rounded-t-xl rounded-b-xl overflow-hidden border border-zinc-300/80 p-0 h-auto w-[420px] shrink-0',
                columnManagerItem:
                    'group flex w-full [&.selected]:bg-blue-100 pl-2 pr-0 hover:bg-zinc-100/60',
                columnManagerNewGroupContainer:
                    'flex items-center space-x-2 p-2',
                columnManagerNewGroupInput: 'h-9',
                columnManagerNewGroupInputButton:
                    'flex items-center justify-center w-9 h-9 shrink-0',
                baseDropdownInputText: 'bg-white text-sm grow',
                baseDropdownInputContainer:
                    'relative flex w-full cursor-default overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 text-left ring-2 ring-transparent focus-within:border-zinc-500 focus-within:ring-zinc-200/60 hover:bg-zinc-50 focus:bg-white focus:shadow-sm focus:outline-hidden sm:text-sm',
            })
        )

        app.component('DemoContainer', DemoContainer)
    },
}
