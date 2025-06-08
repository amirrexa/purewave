// app/api/classifications/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const classifications = await prisma.classification.findMany({
        select: {
            id: true,
            name: true,
        },
    });
    return NextResponse.json(classifications);
}