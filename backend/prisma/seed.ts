import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.product.deleteMany();

    const products = [
        {
            name: 'Smartphone',
            description: 'A cool new smartphone',
            price: 699.99,
            imageURL: 'https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg',
        },
        {
            name: 'Laptop',
            description: 'A powerful laptop',
            price: 1299.99,
            imageURL: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            name: 'Headphones',
            description: 'Noise-cancelling headphones',
            price: 199.99,
            imageURL: 'https://m.media-amazon.com/images/I/317eB4+yU6L._AC_UY327_FMwebp_QL65_.jpg',
        },
    ];

    for (const product of products) {
        await prisma.product.create({
            data: product,
        });
    }

    console.log('Database seeded!');
}

main();
