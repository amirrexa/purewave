const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    // Ensure Classifications exist with Persian names
    await prisma.classification.upsert({
        where: { id: 'class1' },
        update: {},
        create: {
            id: 'class1',
            name: 'تصفیه آب', // Persian for "Water Purifiers"
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    });
    await prisma.classification.upsert({
        where: { id: 'class2' },
        update: {},
        create: {
            id: 'class2',
            name: 'پمپ آب', // Persian for "Water Pumps"
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    });

    // Update existing products with Classification IDs based on name
    const products = await prisma.product.findMany();
    for (const product of products) {
        await prisma.product.update({
            where: { id: product.id },
            data: {
                classificationId: product.name.includes('پمپ') ? 'class2' : 'class1', // Assign based on "پمپ" for pumps
            },
        });
    }
    console.log('Seeding completed with Persian classifications');
}

seed()
    .catch(console.error)
    .finally(() => prisma.$disconnect());