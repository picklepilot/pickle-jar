// import { createPinia } from 'pinia'
import './output.css'
import { defineSetupVue3 } from '@histoire/plugin-vue'
import HistoireWrapper from './components/HistoireWrapper.vue'
import ThemeConfigurator from './utils/ThemeConfigurator'

export const setupVue3 = defineSetupVue3(({ app, addWrapper }) => {
    addWrapper(HistoireWrapper)

    app.provide(
        'componentJarTheme',
        new ThemeConfigurator().withParams({
            baseButton:
                'transition-all border border-black px-2.5 py-1.5 rounded-none bg-white font-normal hover:bg-zinc-100',

            baseDropdownMenuItemGroup: 'flex flex-col p-1',
            baseDropdownMenuItems: 'flex flex-col bg-white rounded shadow-2xl',
            baseDropdownMenuItem: 'text-left justify-start text-sm',
            baseDropdownMenuContainer: '',

            // columnManagerItem: 'flex items-center text-sm',
            // columnManagerGroupsContainer: 'w-[350px]',
            // columnManagerGroupHeader: 'p-0',
            // columnManagerNewGroupInput: 'rounded-l',
            // columnManagerNewGroupInputButton: 'rounded-r p-0 size-10',
            // columnManagerNewGroupContainer: 'space-x-0 gap-0',
        })
    )
})
