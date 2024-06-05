"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.product.deleteMany();
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
            yield prisma.product.create({
                data: product,
            });
        }
        console.log('Database seeded!');
    });
}
main();
