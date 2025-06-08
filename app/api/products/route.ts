import { PrismaClient, Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');
    const sort = searchParams.get('sort') || 'newest';

    const orderBy: Prisma.ProductOrderByWithRelationInput = { createdAt: 'desc' };
    switch (sort) {
        case 'cheapest':
            orderBy.price = 'asc';
            break;
        case 'most-expensive':
            orderBy.price = 'desc';
            break;
        case 'newest':
        default:
            orderBy.createdAt = 'desc';
            break;
    }

    const products = await prisma.product.findMany({
        where: {
            isAvailable: true,
            ...(categoryId && { categoryId }),
        },
        orderBy,
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            discount: true,
            image: true,
            createdAt: true,
            features: true,
            brandId: true,
            categoryId: true,
            classificationId: true,
        },
    });

    return NextResponse.json(products);
}