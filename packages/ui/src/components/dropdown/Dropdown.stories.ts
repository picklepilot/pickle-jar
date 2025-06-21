import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    DropdownLabel,
    DropdownSeparator,
    DropdownSub,
    DropdownSubTrigger,
    DropdownSubContent,
} from './index'
import Button from '../button/Button.vue'

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => ({
        components: {
            Button,
            Dropdown,
            DropdownTrigger,
            DropdownContent,
            DropdownItem,
            DropdownLabel,
            DropdownSeparator,
        },
        setup() {
            const handleAction = (action: string) => {
                console.log(`Action: ${action}`)
            }

            return { handleAction }
        },
        template: `
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="outline" size="sm">Open Menu</Button>
                </DropdownTrigger>
                <DropdownContent class="w-60">
                    <DropdownLabel>
                        My Account
                    </DropdownLabel>
                    <DropdownItem>
                    <span class="text-sm font-medium grow">Profile</span>
                        <span class="text-muted-foreground ml-auto text-xs tracking-widest">⇧⌘P</span>
                    </DropdownItem>
                    <DropdownItem @select="handleAction('settings')">Settings</DropdownItem>
                    <DropdownItem @select="handleAction('billing')">Billing</DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem @select="handleAction('logout')">Logout</DropdownItem>
                </DropdownContent>
            </Dropdown>
        `,
    }),
}

// export const WithSubmenus: Story = {
//     render: () => ({
//         components: {
//             Dropdown,
//             DropdownTrigger,
//             DropdownContent,
//             DropdownItem,
//             DropdownLabel,
//             DropdownSeparator,
//             DropdownSub,
//             DropdownSubTrigger,
//             DropdownSubContent,
//         },
//         template: `
//             <Dropdown>
//                 <DropdownTrigger>
//                     <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                         More Options
//                     </button>
//                 </DropdownTrigger>
//                 <DropdownContent>
//                     <DropdownItem>New File</DropdownItem>
//                     <DropdownItem>New Folder</DropdownItem>
//                     <DropdownSeparator />
//                     <DropdownSub>
//                         <DropdownSubTrigger>
//                             More Tools
//                         </DropdownSubTrigger>
//                         <DropdownSubContent>
//                             <DropdownItem>Save Project</DropdownItem>
//                             <DropdownItem>Debug</DropdownItem>
//                             <DropdownItem>Run Tests</DropdownItem>
//                         </DropdownSubContent>
//                     </DropdownSub>
//                     <DropdownSub>
//                         <DropdownSubTrigger>
//                             Export
//                         </DropdownSubTrigger>
//                         <DropdownSubContent>
//                             <DropdownItem>Export as PDF</DropdownItem>
//                             <DropdownItem>Export as Image</DropdownItem>
//                             <DropdownItem>Export as JSON</DropdownItem>
//                         </DropdownSubContent>
//                     </DropdownSub>
//                     <DropdownSeparator />
//                     <DropdownItem>Share</DropdownItem>
//                     <DropdownItem>Delete</DropdownItem>
//                 </DropdownContent>
//             </Dropdown>
//         `,
//     }),
// }

export const WithActions: Story = {
    render: () => ({
        components: {
            Dropdown,
            DropdownTrigger,
            DropdownContent,
            DropdownItem,
            DropdownLabel,
            DropdownSeparator,
        },
        setup() {
            const handleAction = (action: string) => {
                console.log(`Action: ${action}`)
            }

            return { handleAction }
        },
        template: `
            <Dropdown>
                <DropdownTrigger>
                    <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Actions
                    </button>
                </DropdownTrigger>
                <DropdownContent>
                    <DropdownItem @select="handleAction('edit')">
                        Edit
                    </DropdownItem>
                    <DropdownItem @select="handleAction('copy')">
                        Copy
                    </DropdownItem>
                    <DropdownItem @select="handleAction('delete')">
                        Delete
                    </DropdownItem>
                </DropdownContent>
            </Dropdown>
        `,
    }),
}
