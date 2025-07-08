export const tableCodeExamples = {
    import: `import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from '@picklepilot/pickle-jar-ui'`,

    basicUsage: `<Table>
    <TableHeader>
        <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>User</TableCell>
        </TableRow>
    </TableBody>
</Table>`,

    withCaption: `<Table>
    <TableCaption>A list of users in the system.</TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
        </TableRow>
    </TableBody>
</Table>`,

    withFooter: `<Table>
    <TableHeader>
        <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Widget A</TableCell>
            <TableCell>$10.00</TableCell>
            <TableCell>2</TableCell>
            <TableCell>$20.00</TableCell>
        </TableRow>
    </TableBody>
    <TableFooter>
        <TableRow>
            <TableCell colspan="3">Total</TableCell>
            <TableCell>$20.00</TableCell>
        </TableRow>
    </TableFooter>
</Table>`,

    striped: `<Table striped>
    <TableHeader>
        <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>User</TableCell>
        </TableRow>
    </TableBody>
</Table>`,

    compact: `<Table spacing="compact">
    <TableHeader>
        <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>User</TableCell>
        </TableRow>
    </TableBody>
</Table>`,

    complexExample: `<Table striped>
    <TableCaption>Monthly sales report for Q1 2024</TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Sales</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Growth</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Widget A</TableCell>
            <TableCell>Electronics</TableCell>
            <TableCell>1,250</TableCell>
            <TableCell>$18,750</TableCell>
            <TableCell class="text-green-600">+15%</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Widget B</TableCell>
            <TableCell>Home & Garden</TableCell>
            <TableCell>980</TableCell>
            <TableCell>$16,660</TableCell>
            <TableCell class="text-green-600">+21%</TableCell>
        </TableRow>
    </TableBody>
    <TableFooter>
        <TableRow>
            <TableCell colspan="3">Total</TableCell>
            <TableCell>$35,410</TableCell>
            <TableCell class="text-green-600">+18%</TableCell>
        </TableRow>
    </TableFooter>
</Table>`,

    oneLineUsage: `<Table><TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>John Doe</TableCell></TableRow></TableBody></Table>`,
}
