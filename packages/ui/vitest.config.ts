import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

export default defineConfig({
    plugins: [vue()],
    test: {
        projects: [
            {
                extends: true,
                plugins: [
                    storybookTest({
                        configDir: path.join(__dirname, '.storybook'),
                        storybookScript: 'pnpm storybook --no-open',
                    }),
                ],
                test: {
                    name: 'storybook/test', // This is where you specify the name of your project and this is what storybook expects
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: 'playwright',
                        instances: [
                            {
                                browser: 'chromium',
                            },
                        ],
                    },
                    setupFiles: ['.storybook/vitest.setup.ts'],
                },
            },
            {
                extends: true,
                test: {
                    name: 'unit',
                    include: [
                        'src/**/*.test.ts',
                        'src/**/*.test.tsx',
                        'src/**/*.spec.ts',
                        'src/**/*.spec.tsx',
                    ],
                    environment: 'jsdom',
                    setupFiles: ['./src/test/setup.ts'],
                    globals: true,
                },
            },
        ],
    },

    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    define: {
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
    },
})
