export const dropdownCodeExamples = {
    import: `import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
    DropdownLabel,
    DropdownSeparator,
    DropdownSub,
    DropdownSubTrigger,
    DropdownSubContent,
} from '@picklepilot/pickle-jar-ui'`,

    basicUsage: `<Dropdown>
    <DropdownTrigger>
        <Button>Open Menu</Button>
    </DropdownTrigger>
    <DropdownContent>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Logout</DropdownItem>
    </DropdownContent>
</Dropdown>`,

    withLabels: `<Dropdown>
    <DropdownTrigger>
        <Button>Account</Button>
    </DropdownTrigger>
    <DropdownContent>
        <DropdownLabel>User Account</DropdownLabel>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>Actions</DropdownLabel>
        <DropdownItem>Logout</DropdownItem>
    </DropdownContent>
</Dropdown>`,

    withEvents: `<Dropdown>
    <DropdownTrigger>
        <Button>Actions</Button>
    </DropdownTrigger>
    <DropdownContent>
        <DropdownItem @click="handleEdit">Edit</DropdownItem>
        <DropdownItem @click="handleDelete">Delete</DropdownItem>
        <DropdownItem @select="handleSave">Save</DropdownItem>
    </DropdownContent>
</Dropdown>`,

    disabledItems: `<Dropdown>
    <DropdownTrigger>
        <Button>Actions</Button>
    </DropdownTrigger>
    <DropdownContent>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem disabled>Delete (Disabled)</DropdownItem>
        <DropdownItem>Save</DropdownItem>
    </DropdownContent>
</Dropdown>`,

    customPlacement: `<Dropdown>
    <DropdownTrigger>
        <Button>Top Right</Button>
    </DropdownTrigger>
    <DropdownContent side="top" align="end">
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
    </DropdownContent>
</Dropdown>`,

    oneLineUsage: `<Dropdown><DropdownTrigger><Button>Menu</Button></DropdownTrigger><DropdownContent><DropdownItem>Item</DropdownItem></DropdownContent></Dropdown>`,
}
