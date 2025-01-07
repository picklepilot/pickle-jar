/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,vue,md}',
        './docs/.vitepress/**/*.vue',
        './docs/.vitepress/**/*.ts',
        './docs/.vitepress/**/*.js',
        './docs/.vitepress/**/*.mjs',
        './docs/.vitepress/theme/**/*.vue',
        './docs/.vitepress/theme/**/*.ts',
        './docs/.vitepress/theme/**/*.js',
        './docs/.vitepress/theme/**/*.mjs',
        './docs/components/**/*.{js,ts,vue,mjs,mts}',
        './docs/**/*.md',
    ],
    theme: {
        extend: {},
    },
    plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/forms')],
}
