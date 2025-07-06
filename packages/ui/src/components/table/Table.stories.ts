import type { Meta, StoryObj } from '@storybook/vue3'
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

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

const books = [
    {
        id: 'BK001',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Classic',
        publishedYear: 1925,
        price: '$12.99',
    },
    {
        id: 'BK002',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Classic',
        publishedYear: 1960,
        price: '$14.99',
    },
    {
        id: 'BK003',
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        publishedYear: 1949,
        price: '$11.99',
    },
    {
        id: 'BK004',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Romance',
        publishedYear: 1813,
        price: '$9.99',
    },
    {
        id: 'BK005',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        publishedYear: 1937,
        price: '$16.99',
    },
    {
        id: 'BK006',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        genre: 'Coming-of-age',
        publishedYear: 1951,
        price: '$13.99',
    },
    {
        id: 'BK007',
        title: 'Lord of the Flies',
        author: 'William Golding',
        genre: 'Allegory',
        publishedYear: 1954,
        price: '$10.99',
    },
]

export const Default: Story = {
    render: () => ({
        components: {
            Table,
            TableBody,
            TableCaption,
            TableCell,
            TableFooter,
            TableHead,
            TableHeader,
            TableRow,
        },
        setup() {
            return { books }
        },
        template: `
            <Table spacing="compact" striped>
                <TableCaption>A list of classic books in our library.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead class="w-[100px]">ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead class="text-right">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="book in books" :key="book.id">
                        <TableCell class="font-medium">{{ book.id }}</TableCell>
                        <TableCell>{{ book.title }}</TableCell>
                        <TableCell>{{ book.author }}</TableCell>
                        <TableCell>{{ book.genre }}</TableCell>
                        <TableCell>{{ book.publishedYear }}</TableCell>
                        <TableCell class="text-right">{{ book.price }}</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colspan="5">Total</TableCell>
                        <TableCell class="text-right">$91.93</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        `,
    }),
}

export const Simple: Story = {
    render: () => ({
        components: {
            Table,
            TableBody,
            TableCell,
            TableHead,
            TableHeader,
            TableRow,
        },
        template: `
            <Table>
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
                    <TableRow>
                        <TableCell>Bob Johnson</TableCell>
                        <TableCell>bob@example.com</TableCell>
                        <TableCell>Editor</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        `,
    }),
}

export const WithCaption: Story = {
    render: () => ({
        components: {
            Table,
            TableBody,
            TableCaption,
            TableCell,
            TableHead,
            TableHeader,
            TableRow,
        },
        template: `
            <Table>
                <TableCaption>Monthly sales report for Q1 2024</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Month</TableHead>
                        <TableHead>Sales</TableHead>
                        <TableHead>Growth</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>January</TableCell>
                        <TableCell>$12,000</TableCell>
                        <TableCell>+15%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>February</TableCell>
                        <TableCell>$14,500</TableCell>
                        <TableCell>+21%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>March</TableCell>
                        <TableCell>$16,200</TableCell>
                        <TableCell>+12%</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        `,
    }),
}
