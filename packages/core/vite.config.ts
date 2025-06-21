import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            include: ['src/**/*.ts'],
            exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
            beforeWriteFile: (filePath, content) => ({
                filePath: filePath.replace(/src\//, ''),
                content,
            }),
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'PickleJarCore',
            fileName: format => `pickle-jar-core.${format}.js`,
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {},
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
    // css: {
    //     postcss: {
    //         plugins: [require('tailwindcss'), require('autoprefixer')],
    //     },
    // },
})
