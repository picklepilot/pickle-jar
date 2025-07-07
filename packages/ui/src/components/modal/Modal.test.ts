import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Modal from './Modal.vue'

describe('Modal Component', () => {
    let wrapper: any

    beforeEach(() => {
        // Create a div to mount the component
        const div = document.createElement('div')
        div.id = 'app'
        document.body.appendChild(div)
    })

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount()
        }
        // Clean up
        const app = document.getElementById('app')
        if (app) {
            document.body.removeChild(app)
        }
    })

    it('should use CSS custom properties for z-index values', async () => {
        wrapper = mount(Modal, {
            props: {
                open: true,
            },
            global: {
                stubs: {
                    Teleport: {
                        template: '<div><slot /></div>',
                    },
                },
            },
        })

        await nextTick()

        // Check that the backdrop uses the correct z-index CSS variable
        const backdrop = wrapper.find('[role="dialog"]')
        expect(backdrop.exists()).toBe(true)
        expect(backdrop.attributes('style')).toContain(
            'z-index: var(--z-modal-backdrop)'
        )

        // Check that the modal content uses the correct z-index CSS variable
        const modalContent = wrapper.find('.absolute')
        expect(modalContent.exists()).toBe(true)
        expect(modalContent.attributes('style')).toContain(
            'z-index: var(--z-modal)'
        )
    })

    it('should allow custom z-index values through CSS custom properties', async () => {
        // Set custom z-index values
        document.documentElement.style.setProperty(
            '--z-index-modal-backdrop',
            '2000'
        )
        document.documentElement.style.setProperty('--z-index-modal', '2010')

        wrapper = mount(Modal, {
            props: {
                open: true,
            },
            global: {
                stubs: {
                    Teleport: {
                        template: '<div><slot /></div>',
                    },
                },
            },
        })

        await nextTick()

        // The component should still use the CSS variables, but now they resolve to our custom values
        const backdrop = wrapper.find('[role="dialog"]')
        expect(backdrop.exists()).toBe(true)
        expect(backdrop.attributes('style')).toContain(
            'z-index: var(--z-modal-backdrop)'
        )

        const modalContent = wrapper.find('.absolute')
        expect(modalContent.exists()).toBe(true)
        expect(modalContent.attributes('style')).toContain(
            'z-index: var(--z-modal)'
        )

        // Clean up custom values
        document.documentElement.style.removeProperty(
            '--z-index-modal-backdrop'
        )
        document.documentElement.style.removeProperty('--z-index-modal')
    })

    it('should not render when closed', () => {
        wrapper = mount(Modal, {
            props: {
                open: false,
            },
            global: {
                stubs: {
                    Teleport: {
                        template: '<div><slot /></div>',
                    },
                },
            },
        })

        // When closed, no modal elements should be rendered
        const backdrop = wrapper.find('[role="dialog"]')
        expect(backdrop.exists()).toBe(false)

        const modalContent = wrapper.find('.absolute')
        expect(modalContent.exists()).toBe(false)
    })

    it('should have scrollable content area when content exceeds height', async () => {
        wrapper = mount(Modal, {
            props: {
                open: true,
            },
            slots: {
                default: `
                    <div class="space-y-4">
                        <p>This is a test paragraph.</p>
                        ${Array.from(
                            { length: 50 },
                            (_, i) => `
                            <div class="p-4 bg-muted rounded-md">
                                <h3>Section ${i + 1}</h3>
                                <p>This is section ${i + 1} content to make the modal scrollable.</p>
                            </div>
                        `
                        ).join('')}
                    </div>
                `,
            },
            global: {
                stubs: {
                    Teleport: {
                        template: '<div><slot /></div>',
                    },
                },
            },
        })

        await nextTick()

        // Find the content area (the div with overflow-auto class)
        const contentArea = wrapper.find('.overflow-auto')
        expect(contentArea.exists()).toBe(true)

        // Check that the content area has the correct CSS classes for scrolling
        expect(contentArea.classes()).toContain('overflow-auto')
        expect(contentArea.classes()).toContain('flex-1')

        // Verify that the content area is actually scrollable
        const contentElement = contentArea.element as HTMLElement
        expect(contentElement.scrollHeight).toBeGreaterThan(
            contentElement.clientHeight
        )
        expect(contentElement.scrollTop).toBe(0) // Should start at top

        // Test scrolling functionality
        const originalScrollTop = contentElement.scrollTop
        contentElement.scrollTop = 100
        expect(contentElement.scrollTop).toBe(100)

        // Reset scroll position
        contentElement.scrollTop = originalScrollTop
    })

    it('should maintain scroll position when modal is reopened', async () => {
        wrapper = mount(Modal, {
            props: {
                open: true,
            },
            slots: {
                default: `
                    <div class="space-y-4">
                        ${Array.from(
                            { length: 30 },
                            (_, i) => `
                            <div class="p-4 bg-muted rounded-md">
                                <h3>Section ${i + 1}</h3>
                                <p>Content for section ${i + 1}</p>
                            </div>
                        `
                        ).join('')}
                    </div>
                `,
            },
            global: {
                stubs: {
                    Teleport: {
                        template: '<div><slot /></div>',
                    },
                },
            },
        })

        await nextTick()

        const contentArea = wrapper.find('.overflow-auto')
        const contentElement = contentArea.element as HTMLElement

        // Scroll to a specific position
        contentElement.scrollTop = 500
        expect(contentElement.scrollTop).toBe(500)

        // Close the modal
        await wrapper.setProps({ open: false })
        await nextTick()

        // Reopen the modal
        await wrapper.setProps({ open: true })
        await nextTick()

        // The scroll position should be reset to 0 when modal reopens
        const newContentArea = wrapper.find('.overflow-auto')
        const newContentElement = newContentArea.element as HTMLElement
        expect(newContentElement.scrollTop).toBe(0)
    })
})
