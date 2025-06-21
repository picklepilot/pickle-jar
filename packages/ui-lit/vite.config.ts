import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            include: ['src/**/*.ts'],
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
            name: 'PickleJarUILit',
            fileName: format => `pickle-jar-ui-lit.${format}.js`,
        },
        rollupOptions: {
            external: ['lit', '@pickle-jar/core'],
            output: {
                globals: {
                    lit: 'Lit',
                    '@pickle-jar/core': 'PickleJarCore',
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
