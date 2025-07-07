import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
    {
        test: {
            include: ['src/**/*.{test,spec}.{js,ts,vue}'],
        },
    },
])
