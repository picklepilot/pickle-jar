<template>
    <div class="space-y-8">
        <div>
            <h2 class="text-2xl font-bold mb-4">Basic Table</h2>
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
        </div>

        <div>
            <h2 class="text-2xl font-bold mb-4">
                Table with Caption and Footer
            </h2>
            <Table>
                <TableCaption
                    >A list of classic books in our library.</TableCaption
                >
                <TableHeader>
                    <TableRow>
                        <TableHead class="w-[100px]">ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead class="text-right">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="book in books" :key="book.id">
                        <TableCell class="font-medium">{{ book.id }}</TableCell>
                        <TableCell>{{ book.title }}</TableCell>
                        <TableCell>{{ book.author }}</TableCell>
                        <TableCell>{{ book.genre }}</TableCell>
                        <TableCell class="text-right">{{
                            book.price
                        }}</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colspan="4">Total</TableCell>
                        <TableCell class="text-right">$91.93</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>

        <div>
            <h2 class="text-2xl font-bold mb-4">Book Sales Report</h2>
            <Table>
                <TableCaption
                    >Monthly book sales report for Q1 2024</TableCaption
                >
                <TableHeader>
                    <TableRow>
                        <TableHead>Genre</TableHead>
                        <TableHead>Books Sold</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead>Growth</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Classic</TableCell>
                        <TableCell>1,250</TableCell>
                        <TableCell>$18,750</TableCell>
                        <TableCell class="text-green-600">+15%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Fantasy</TableCell>
                        <TableCell>980</TableCell>
                        <TableCell>$16,660</TableCell>
                        <TableCell class="text-green-600">+21%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dystopian</TableCell>
                        <TableCell>720</TableCell>
                        <TableCell>$8,640</TableCell>
                        <TableCell class="text-green-600">+12%</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colspan="2">Total</TableCell>
                        <TableCell>$44,050</TableCell>
                        <TableCell class="text-green-600">+16%</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    </div>
</template>

<script setup lang="ts">
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
</script>
