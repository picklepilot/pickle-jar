import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
        vue(),
        dts({
            include: ['src/**/*.ts', 'src/**/*.vue'],
            exclude: [
                'src/**/*.stories.ts',
                'src/**/*.stories.tsx',
                '.storybook/**/*',
            ],
            beforeWriteFile: (filePath, content) => ({
                filePath: filePath.replace(/src\//, ''),
                content,
            }),
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'PickleJarUI',
            fileName: format => `pickle-jar-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['vue', 'clsx', 'tailwind-merge', 'shiki'],
            output: {
                globals: {
                    vue: 'Vue',
                    clsx: 'clsx',
                    'tailwind-merge': 'tailwindMerge',
                    shiki: 'shiki',
                },
            },
        },
        sourcemap: true,
        minify: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
})
