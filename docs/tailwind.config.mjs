/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,ts,jsx,tsx,vue,md}',
        './.vitepress/**/*.vue',
        './.vitepress/**/*.ts',
        './.vitepress/**/*.js',
        './.vitepress/**/*.mjs',
        './.vitepress/theme/**/*.vue',
        './.vitepress/theme/**/*.ts',
        './.vitepress/theme/**/*.js',
        './.vitepress/theme/**/*.mjs',
        './**/*.md',
    ],
    theme: {
        extend: {},
    },
    plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/forms')],
}
