import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DrawerHandle from './DrawerHandle.vue'

describe('DrawerHandle', () => {
    it('renders with default props', () => {
        const wrapper = mount(DrawerHandle)
        expect(wrapper.find('[class*="cursor-grab"]').exists()).toBe(true)
    })

    it('emits drag events when clicked', async () => {
        const wrapper = mount(DrawerHandle)

        // Simulate mouse down
        await wrapper.trigger('mousedown')
        expect(wrapper.emitted('dragStart')).toBeTruthy()
    })

    it('applies correct position classes', () => {
        const wrapper = mount(DrawerHandle, {
            props: {
                position: 'left',
            },
        })

        expect(wrapper.classes()).toContain('flex-col')
    })

    it('shows visual indicator', () => {
        const wrapper = mount(DrawerHandle)
        expect(wrapper.find('[class*="w-12 h-1.5"]').exists()).toBe(true)
    })
})
