import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from './index'

describe('Table Components', () => {
    it('renders a basic table structure', () => {
        const wrapper = mount(Table, {
            slots: {
                default: `
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john@example.com</TableCell>
                        </TableRow>
                    </TableBody>
                `,
            },
            global: {
                components: {
                    TableHeader,
                    TableBody,
                    TableRow,
                    TableHead,
                    TableCell,
                },
            },
        })

        expect(wrapper.find('table').exists()).toBe(true)
        expect(wrapper.find('thead').exists()).toBe(true)
        expect(wrapper.find('tbody').exists()).toBe(true)
        expect(wrapper.find('tr').exists()).toBe(true)
        expect(wrapper.find('th').exists()).toBe(true)
        expect(wrapper.find('td').exists()).toBe(true)
    })

    it('renders table with caption', () => {
        const wrapper = mount(Table, {
            slots: {
                default: `
                    <TableCaption>Test Caption</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                        </TableRow>
                    </TableBody>
                `,
            },
            global: {
                components: {
                    TableCaption,
                    TableHeader,
                    TableBody,
                    TableRow,
                    TableHead,
                    TableCell,
                },
            },
        })

        expect(wrapper.find('caption').exists()).toBe(true)
        expect(wrapper.find('caption').text()).toBe('Test Caption')
    })

    it('renders table with footer', () => {
        const wrapper = mount(Table, {
            slots: {
                default: `
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>Total: 1</TableCell>
                        </TableRow>
                    </TableFooter>
                `,
            },
            global: {
                components: {
                    TableHeader,
                    TableBody,
                    TableFooter,
                    TableRow,
                    TableHead,
                    TableCell,
                },
            },
        })

        expect(wrapper.find('tfoot').exists()).toBe(true)
        expect(wrapper.find('tfoot td').text()).toBe('Total: 1')
    })

    it('applies correct CSS classes', () => {
        const wrapper = mount(Table)

        expect(wrapper.find('div').classes()).toContain('relative')
        expect(wrapper.find('div').classes()).toContain('w-full')
        expect(wrapper.find('div').classes()).toContain('overflow-auto')
        expect(wrapper.find('table').classes()).toContain('w-full')
        expect(wrapper.find('table').classes()).toContain('caption-bottom')
        expect(wrapper.find('table').classes()).toContain('text-sm')
    })
})
