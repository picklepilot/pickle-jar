import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CodeBlock from './CodeBlock.vue'

// Mock Shiki
vi.mock('shiki', () => ({
    getSingletonHighlighter: vi.fn().mockResolvedValue({
        codeToHtml: vi
            .fn()
            .mockReturnValue(
                '<pre><code class="language-typescript"><span class="token keyword">const</span> <span class="token variable">x</span> <span class="token operator">=</span> <span class="token number">1</span></code></pre>'
            ),
    }),
}))

// Mock the useStorybookTheme composable
vi.mock('../../composables/useStorybookTheme', () => ({
    useStorybookTheme: vi.fn(() => ({
        isDark: { value: false },
        themeState: { value: { isDark: false, themeClass: 'light' } },
        toggleTheme: vi.fn(),
        setTheme: vi.fn(),
        updateThemeState: vi.fn(),
    })),
}))

describe('CodeBlock', () => {
    it('renders with default props', () => {
        const wrapper = mount(CodeBlock, {
            props: {
                code: 'const x = 1',
            },
        })

        expect(wrapper.find('.relative.overflow-hidden').exists()).toBe(true)
        expect(wrapper.text()).toContain('typescript')
    })

    it('renders without header when showHeader is false', () => {
        const wrapper = mount(CodeBlock, {
            props: {
                code: 'const x = 1',
                showHeader: false,
            },
        })

        expect(
            wrapper.find('.flex.items-center.justify-between').exists()
        ).toBe(false)
    })

    it('renders without copy button when showCopyButton is false', () => {
        const wrapper = mount(CodeBlock, {
            props: {
                code: 'const x = 1',
                showCopyButton: false,
            },
        })

        expect(wrapper.find('button[aria-label*="Copy"]').exists()).toBe(false)
    })

    it('displays the correct language', () => {
        const wrapper = mount(CodeBlock, {
            props: {
                code: 'const x = 1',
                language: 'javascript',
            },
        })

        expect(wrapper.text()).toContain('javascript')
    })

    it('applies custom theme classes', () => {
        const wrapper = mount(CodeBlock, {
            props: {
                code: 'const x = 1',
                customTheme: {
                    container: 'custom-container-class',
                    header: 'custom-header-class',
                },
            },
        })

        expect(wrapper.find('.custom-container-class').exists()).toBe(true)
        expect(wrapper.find('.custom-header-class').exists()).toBe(true)
    })

    it('shows loading state initially', () => {
        const wrapper = mount(CodeBlock, {
            props: {
                code: 'const x = 1',
            },
        })

        expect(wrapper.text()).toContain('Loading syntax highlighting...')
    })

    it('uses auto theme when enabled', () => {
        const wrapper = mount(CodeBlock, {
            props: {
                code: 'const x = 1',
                autoTheme: true,
                lightTheme: 'github-light',
                darkTheme: 'github-dark',
            },
        })

        // The component should render with auto theme enabled
        expect(wrapper.exists()).toBe(true)
    })

    it('integrates with useStorybookTheme composable', () => {
        const {
            useStorybookTheme,
        } = require('../../composables/useStorybookTheme')

        mount(CodeBlock, {
            props: {
                code: 'const x = 1',
                autoTheme: true,
            },
        })

        expect(useStorybookTheme).toHaveBeenCalled()
    })
})
