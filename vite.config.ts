import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// import { fileURLToPath } from 'url'
import { resolve } from 'path'

// const __filename = fileURLToPath('src/index.ts')
// const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts({ tsconfigPath: './tsconfig.app.json' })],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'ComponentJar',
            fileName: 'component-jar',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
})
