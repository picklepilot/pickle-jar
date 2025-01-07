import { defineConfig } from 'vitepress'
import { default as path } from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Component Jar',
    description: 'A collection of Vue 3 components built using Tailwind CSS.',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                    {
                        text: 'Column manager',
                        link: '/components/column-manager',
                    },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],
    },
    vite: {
        // configFile: false,
        resolve: {
            alias: {
                'component-jar': path.resolve(__dirname, '../../src'),
            },
            dedupe: ['vue'], // avoid error when using dependencies that also use Vue
        },
    },
})
