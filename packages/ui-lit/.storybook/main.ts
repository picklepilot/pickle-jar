import type { StorybookConfig } from '@storybook/web-components-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-docs',
        '@storybook/addon-onboarding',
        '@storybook/addon-a11y',
        '@storybook/addon-vitest',
    ],

    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },

    // viteFinal: async config => {
    //     return {
    //         ...config,
    //         css: {
    //             ...config.css,
    //             postcss: {
    //                 plugins: [require('tailwindcss'), require('autoprefixer')],
    //             },
    //         },
    //     }
    // },
}

export default config
