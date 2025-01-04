/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,ts,jsx,tsx,vue,md}'],
  theme: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/forms')],
}
