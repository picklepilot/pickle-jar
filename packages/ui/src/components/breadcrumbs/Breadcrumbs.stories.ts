import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import {
    Breadcrumbs,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from './index'
import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
} from '../dropdown'
import { Button } from '../button/Button'

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => ({
        components: {
            Breadcrumbs,
            BreadcrumbList,
            BreadcrumbItem,
            BreadcrumbLink,
            BreadcrumbPage,
            BreadcrumbSeparator,
        },
        template: `
            <Breadcrumbs>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumbs>
        `,
    }),
}

export const WithCustomSeparator: Story = {
    render: () => ({
        components: {
            Breadcrumbs,
            BreadcrumbList,
            BreadcrumbItem,
            BreadcrumbLink,
            BreadcrumbPage,
            BreadcrumbSeparator,
        },
        template: `
            <Breadcrumbs>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="size-3.5"
                        >
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="size-3.5"
                        >
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumbs>
        `,
    }),
}

export const WithDropdown: Story = {
    render: () => ({
        components: {
            Breadcrumbs,
            BreadcrumbList,
            BreadcrumbItem,
            BreadcrumbLink,
            BreadcrumbPage,
            BreadcrumbSeparator,
            Dropdown,
            DropdownTrigger,
            DropdownContent,
            DropdownItem,
            Button,
        },
        template: `
            <Breadcrumbs>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Dropdown>
                            <DropdownTrigger asChild>
                                <Button variant="ghost" size="sm" class="h-auto p-0">
                                    Components
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="size-3.5"
                                    >
                                        <path d="m6 9 6 6 6-6"/>
                                    </svg>
                                </Button>
                            </DropdownTrigger>
                            <DropdownContent align="start">
                                <DropdownItem>Documentation</DropdownItem>
                                <DropdownItem>Themes</DropdownItem>
                                <DropdownItem>GitHub</DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumbs>
        `,
    }),
}

export const WithEllipsis: Story = {
    render: () => ({
        components: {
            Breadcrumbs,
            BreadcrumbList,
            BreadcrumbItem,
            BreadcrumbLink,
            BreadcrumbPage,
            BreadcrumbSeparator,
            BreadcrumbEllipsis,
            Dropdown,
            DropdownTrigger,
            DropdownContent,
            DropdownItem,
        },
        template: `
            <Breadcrumbs>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Dropdown>
                            <DropdownTrigger asChild>
                                <BreadcrumbEllipsis />
                            </DropdownTrigger>
                            <DropdownContent align="start">
                                <DropdownItem>Documentation</DropdownItem>
                                <DropdownItem>Themes</DropdownItem>
                                <DropdownItem>GitHub</DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumbs>
        `,
    }),
}

export const LongBreadcrumb: Story = {
    render: () => ({
        components: {
            Breadcrumbs,
            BreadcrumbList,
            BreadcrumbItem,
            BreadcrumbLink,
            BreadcrumbPage,
            BreadcrumbSeparator,
        },
        template: `
            <Breadcrumbs>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/docs/components/navigation">Navigation</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumbs>
        `,
    }),
}
