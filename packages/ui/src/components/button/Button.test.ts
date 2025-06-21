import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
    it('renders properly', () => {
        const wrapper = mount(Button, {
            slots: {
                default: 'Click me',
            },
        })

        expect(wrapper.text()).toContain('Click me')
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('emits click event when clicked', async () => {
        const wrapper = mount(Button, {
            slots: {
                default: 'Click me',
            },
        })

        await wrapper.find('button').trigger('click')

        expect(wrapper.emitted('click')).toBeTruthy()
    })

    it('applies disabled state correctly', () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true,
            },
            slots: {
                default: 'Disabled Button',
            },
        })

        const button = wrapper.find('button')
        expect(button.attributes('disabled')).toBeDefined()
        expect(button.attributes('aria-disabled')).toBe('true')
    })

    it('applies different variants correctly', () => {
        const wrapper = mount(Button, {
            props: {
                variant: 'destructive',
            },
            slots: {
                default: 'Destructive Button',
            },
        })

        const button = wrapper.find('button')
        expect(button.classes()).toContain('bg-destructive')
    })
})
