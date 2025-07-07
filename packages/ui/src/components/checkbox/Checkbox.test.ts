import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Checkbox from './Checkbox.vue'

describe('Checkbox', () => {
    it('renders correctly with default props', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        expect(wrapper.find('button[role="checkbox"]').exists()).toBe(true)
        expect(wrapper.find('label').text()).toBe('Test checkbox')
        expect(wrapper.find('button').attributes('aria-checked')).toBe('false')
    })

    it('renders checked state correctly', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: true,
            },
            slots: {
                default: 'Checked checkbox',
            },
        })

        expect(wrapper.find('button').attributes('aria-checked')).toBe('true')
        expect(wrapper.find('svg').exists()).toBe(true)
        expect(wrapper.find('button').attributes('data-state')).toBe('checked')
    })

    it('emits update:modelValue when clicked', async () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        await wrapper.find('button').trigger('click')
        await nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
    })

    it('emits change event when clicked', async () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        await wrapper.find('button').trigger('click')
        await nextTick()

        expect(wrapper.emitted('change')).toBeTruthy()
        expect(wrapper.emitted('change')?.[0]).toEqual([true])
    })

    it('emits click event when clicked', async () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        await wrapper.find('button').trigger('click')
        await nextTick()

        expect(wrapper.emitted('click')).toBeTruthy()
    })

    it('toggles from checked to unchecked', async () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: true,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        await wrapper.find('button').trigger('click')
        await nextTick()

        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
    })

    it('does not emit events when disabled', async () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
                disabled: true,
            },
            slots: {
                default: 'Disabled checkbox',
            },
        })

        await wrapper.find('button').trigger('click')
        await nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
        expect(wrapper.emitted('change')).toBeFalsy()
    })

    it('applies disabled attributes correctly', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
                disabled: true,
            },
            slots: {
                default: 'Disabled checkbox',
            },
        })

        const button = wrapper.find('button')
        expect(button.attributes('disabled')).toBeDefined()
        expect(button.attributes('aria-disabled')).toBe('true')
    })

    it('handles keyboard navigation', async () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        const button = wrapper.find('button')

        // Test Enter key
        await button.trigger('keydown', { key: 'Enter' })
        await nextTick()
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])

        // Reset
        await wrapper.setProps({ modelValue: false })
        await nextTick()

        // Test Space key
        await button.trigger('keydown', { key: ' ' })
        await nextTick()
        expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([true])
    })

    it('does not respond to other keys', async () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        await wrapper.find('button').trigger('keydown', { key: 'Tab' })
        await nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('handles label click', async () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        await wrapper.find('label').trigger('click')
        await nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
    })

    it('generates unique ID when not provided', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        const label = wrapper.find('label')
        expect(label.attributes('for')).toBeDefined()
        expect(label.attributes('for')).toMatch(/^checkbox-/)
    })

    it('uses provided ID', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
                id: 'custom-checkbox',
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        const label = wrapper.find('label')
        expect(label.attributes('for')).toBe('custom-checkbox')
    })

    it('applies custom theme classes', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
                theme: {
                    checkbox: 'custom-checkbox-class',
                    label: 'custom-label-class',
                },
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        const button = wrapper.find('button')
        const label = wrapper.find('label')

        expect(button.classes()).toContain('custom-checkbox-class')
        expect(label.classes()).toContain('custom-label-class')
    })

    it('renders without label when no slot content', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
        })

        expect(wrapper.find('label').exists()).toBe(false)
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('handles indeterminate state', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
                indeterminate: true,
            },
            slots: {
                default: 'Indeterminate checkbox',
            },
        })

        const button = wrapper.find('button')
        expect(button.attributes('data-state')).toBe('unchecked')
        // Note: The indeterminate state is handled via CSS and JavaScript
        // This test verifies the prop is passed correctly
    })

    it('prevents default on label click', async () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        const label = wrapper.find('label')
        const clickEvent = new Event('click')
        const preventDefaultSpy = vi.spyOn(clickEvent, 'preventDefault')

        await label.trigger('click', clickEvent)
        await nextTick()

        expect(preventDefaultSpy).toHaveBeenCalled()
    })

    it('handles required prop', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
                required: true,
            },
            slots: {
                default: 'Required checkbox',
            },
        })

        // The required prop is passed through but not directly visible in the DOM
        // This test ensures the component accepts the prop without errors
        expect(wrapper.exists()).toBe(true)
    })

    it('handles name and value props', () => {
        const wrapper = mount(Checkbox, {
            props: {
                modelValue: false,
                name: 'test-checkbox',
                value: 'test-value',
            },
            slots: {
                default: 'Test checkbox',
            },
        })

        // The name and value props are available for form handling
        // This test ensures the component accepts the props without errors
        expect(wrapper.exists()).toBe(true)
    })
})
