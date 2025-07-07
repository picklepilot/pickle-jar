import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import {
    Breadcrumbs,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from './index'

describe('Breadcrumbs', () => {
    it('renders breadcrumb navigation', () => {
        const wrapper = mount(Breadcrumbs, {
            slots: {
                default: `
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Test</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                `,
            },
            global: {
                components: {
                    BreadcrumbList,
                    BreadcrumbItem,
                    BreadcrumbLink,
                    BreadcrumbPage,
                    BreadcrumbSeparator,
                },
            },
        })

        expect(wrapper.find('nav').exists()).toBe(true)
        expect(wrapper.find('nav').attributes('aria-label')).toBe('Breadcrumb')
        expect(wrapper.find('ol').exists()).toBe(true)
        expect(wrapper.find('li').exists()).toBe(true)
    })

    it('renders breadcrumb links correctly', () => {
        const wrapper = mount(BreadcrumbLink, {
            props: {
                href: '/test',
            },
            slots: {
                default: 'Test Link',
            },
        })

        expect(wrapper.find('a').exists()).toBe(true)
        expect(wrapper.find('a').attributes('href')).toBe('/test')
        expect(wrapper.text()).toBe('Test Link')
    })

    it('renders breadcrumb page correctly', () => {
        const wrapper = mount(BreadcrumbPage, {
            slots: {
                default: 'Current Page',
            },
        })

        expect(wrapper.find('span').exists()).toBe(true)
        expect(wrapper.text()).toBe('Current Page')
        expect(wrapper.find('span').attributes('tabindex')).toBe('0')
    })

    it('renders breadcrumb separator correctly', () => {
        const wrapper = mount(BreadcrumbSeparator)

        expect(wrapper.find('span').exists()).toBe(true)
        expect(wrapper.find('svg').exists()).toBe(true)
        expect(wrapper.find('span').attributes('role')).toBe('presentation')
    })
})
