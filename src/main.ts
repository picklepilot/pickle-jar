import { createApp } from 'vue'
import './style.css'
import './styles/theme.css'
import App from './App.vue'
import ThemeConfigurator from './utils/ThemeConfigurator'

const app = createApp(App)

app.provide(
    'componentJarTheme',
    new ThemeConfigurator().withParams({
        baseButton: 'hover:bg-zinc-100',
    })
)

app.mount('#app')
