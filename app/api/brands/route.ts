import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const brands = await prisma.brand.findMany({
        select: {
            id: true,
            name: true,
        },
    });
    return NextResponse.json(brands);
}