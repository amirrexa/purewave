import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const categories = await prisma.category.findMany({
        select: {
            id: true,
            name: true,
        },
    });
    return NextResponse.json(categories);
}