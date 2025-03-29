import dts from 'vite-plugin-dts'
// import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // tailwindcss(),
        dts({ tsconfigPath: './tsconfig.app.json' }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'ComponentJar',
            fileName: 'component-jar',
        },
        rollupOptions: {
            external: ['vue', 'pinia'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
        sourcemap: true,
    },
})
