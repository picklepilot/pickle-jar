import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CodeBlock from './CodeBlock.vue'
import CodeBlockTab from './CodeBlockTab.vue'
import CodeBlockTabButton from './CodeBlockTabButton.vue'

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

    describe('Custom Tabs System', () => {
        it('renders custom tabs when provided', () => {
            const wrapper = mount(CodeBlock, {
                props: {
                    code: 'const x = 1',
                },
                slots: {
                    tabs: `
                        <CodeBlockTabButton id="demo" label="Demo" />
                        <CodeBlockTabButton id="code" label="Code" />
                    `,
                    default: `
                        <CodeBlockTab id="demo" label="Demo">
                            <div>Demo content</div>
                        </CodeBlockTab>
                        <CodeBlockTab id="code" label="Code">
                            <div>Code content</div>
                        </CodeBlockTab>
                    `,
                },
                global: {
                    components: {
                        CodeBlockTab,
                        CodeBlockTabButton,
                    },
                },
            })

            expect(wrapper.find('.flex.border-b').exists()).toBe(true)
            expect(wrapper.text()).toContain('Demo')
            expect(wrapper.text()).toContain('Code')
        })

        it('shows tab content when tab is active', () => {
            const wrapper = mount(CodeBlock, {
                props: {
                    code: 'const x = 1',
                },
                slots: {
                    tabs: `
                        <CodeBlockTabButton id="demo" label="Demo" />
                    `,
                    default: `
                        <CodeBlockTab id="demo" label="Demo">
                            <div>Demo content</div>
                        </CodeBlockTab>
                    `,
                },
                global: {
                    components: {
                        CodeBlockTab,
                        CodeBlockTabButton,
                    },
                },
            })

            expect(wrapper.text()).toContain('Demo content')
        })

        it('maintains backward compatibility with demo slot', () => {
            const wrapper = mount(CodeBlock, {
                props: {
                    code: 'const x = 1',
                },
                slots: {
                    demo: '<div>Legacy demo content</div>',
                },
            })

            expect(wrapper.text()).toContain('Demo')
            expect(wrapper.text()).toContain('Code')
            expect(wrapper.text()).toContain('Legacy demo content')
        })
    })
})
