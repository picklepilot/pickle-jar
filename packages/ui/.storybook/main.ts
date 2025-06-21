import type { StorybookConfig } from '@storybook/vue3-vite'
import { resolve } from 'path'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-docs',
        '@storybook/addon-onboarding',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-vitest',
            options: {
                config: resolve(__dirname, '../vitest.config.ts'),
                mode: 'development',
                coverage: {
                    provider: 'v8',
                },
                browser: true,
            },
        },
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },

    viteFinal: async config => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve?.alias,
                    '@': resolve(__dirname, '../src'),
                },
            },
            // css: {
            //     ...config.css,
            //     postcss: {
            //         plugins: [require('tailwindcss'), require('autoprefixer')],
            //     },
            // },
        }
    },
}

export default config
