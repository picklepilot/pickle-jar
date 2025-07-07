import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Drawer from './Drawer.vue'
import DrawerHeader from './DrawerHeader.vue'
import DrawerTitle from './DrawerTitle.vue'
import DrawerBody from './DrawerBody.vue'
import DrawerFooter from './DrawerFooter.vue'

describe('Drawer', () => {
    it('renders when open', () => {
        const wrapper = mount(Drawer, {
            props: {
                open: true,
            },
            slots: {
                default: 'Drawer content',
            },
        })

        expect(wrapper.text()).toContain('Drawer content')
    })

    it('does not render when closed', () => {
        const wrapper = mount(Drawer, {
            props: {
                open: false,
            },
            slots: {
                default: 'Drawer content',
            },
        })

        expect(wrapper.text()).not.toContain('Drawer content')
    })

    it('emits close event when close button is clicked', async () => {
        const wrapper = mount(Drawer, {
            props: {
                open: true,
                showCloseButton: true,
            },
        })

        await wrapper.find('[aria-label="Close drawer"]').trigger('click')
        expect(wrapper.emitted('close')).toBeTruthy()
    })

    it('emits update:open event when close button is clicked', async () => {
        const wrapper = mount(Drawer, {
            props: {
                open: true,
                showCloseButton: true,
            },
        })

        await wrapper.find('[aria-label="Close drawer"]').trigger('click')
        expect(wrapper.emitted('update:open')).toEqual([[false]])
    })
})

describe('DrawerHeader', () => {
    it('renders with title', () => {
        const wrapper = mount(DrawerHeader, {
            slots: {
                default: 'Header Title',
            },
        })

        expect(wrapper.text()).toContain('Header Title')
    })

    it('shows close button by default', () => {
        const wrapper = mount(DrawerHeader, {
            props: {
                showCloseButton: true,
            },
        })

        expect(wrapper.find('[aria-label="Close drawer"]').exists()).toBe(true)
    })

    it('hides close button when showCloseButton is false', () => {
        const wrapper = mount(DrawerHeader, {
            props: {
                showCloseButton: false,
            },
        })

        expect(wrapper.find('[aria-label="Close drawer"]').exists()).toBe(false)
    })
})

describe('DrawerTitle', () => {
    it('renders title content', () => {
        const wrapper = mount(DrawerTitle, {
            slots: {
                default: 'Test Title',
            },
        })

        expect(wrapper.text()).toContain('Test Title')
    })

    it('applies titleId when provided', () => {
        const wrapper = mount(DrawerTitle, {
            props: {
                titleId: 'test-title-id',
            },
            slots: {
                default: 'Test Title',
            },
        })

        expect(wrapper.attributes('id')).toBe('test-title-id')
    })
})

describe('DrawerBody', () => {
    it('renders body content', () => {
        const wrapper = mount(DrawerBody, {
            slots: {
                default: 'Body content',
            },
        })

        expect(wrapper.text()).toContain('Body content')
    })

    it('applies correct padding classes based on props', () => {
        const wrapper = mount(DrawerBody, {
            props: {
                hasHeader: true,
                hasFooter: false,
            },
        })

        expect(wrapper.classes()).toContain('pt-0')
    })
})

describe('DrawerFooter', () => {
    it('renders footer content', () => {
        const wrapper = mount(DrawerFooter, {
            slots: {
                default: 'Footer content',
            },
        })

        expect(wrapper.text()).toContain('Footer content')
    })
})
