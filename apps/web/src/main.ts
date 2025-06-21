import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import '@pickle-jar/ui/styles'
import './style.css'

// import './styles/theme.css'
// import ThemeConfigurator from './utils/ThemeConfigurator'

const app = createApp(App)
app.use(router)

// app.provide(
//     'componentJarTheme',
//     new ThemeConfigurator().withParams({
//         baseButton: 'hover:bg-zinc-100',
//     })
// )

app.mount('#app')
