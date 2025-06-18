import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@pickle-jar/ui/dist/ui.css'
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
