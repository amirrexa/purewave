import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed Brands
    const brand1 = await prisma.brand.create({
        data: {
            name: 'AquaPure',
            description: 'برند پیشرو در تولید دستگاه‌های تصفیه آب خانگی و صنعتی.',
            logo: '/images/brands/aquapure.jpg',
        },
    });

    const brand2 = await prisma.brand.create({
        data: {
            name: 'PureFlow',
            description: 'تولیدکننده فیلترهای با کیفیت برای تصفیه آب.',
            logo: '/images/brands/pureflow.jpg',
        },
    });

    // Seed Categories
    const category1 = await prisma.category.create({
        data: {
            name: 'خانگی',
            description: 'دستگاه‌های تصفیه آب برای استفاده در منازل.',
        },
    });

    const category2 = await prisma.category.create({
        data: {
            name: 'صنعتی',
            description: 'دستگاه‌های تصفیه آب برای استفاده در کارخانه‌ها و کارگاه‌ها.',
        },
    });

    const category3 = await prisma.category.create({
        data: {
            name: 'فیلتر',
            description: 'فیلترهای جایگزین برای دستگاه‌های تصفیه آب.',
        },
    });

    // Seed Products
    await prisma.product.createMany({
        data: [
            {
                name: 'دستگاه خانگی مدل A1',
                description: 'دستگاه تصفیه آب خانگی با فناوری نانو، مناسب برای خانواده‌ها.',
                price: 2500000,
                image: '/images/product-a1.jpg',
                images: ['/images/product-a1-1.jpg', '/images/product-a1-2.jpg'],
                brandId: brand1.id,
                categoryId: category1.id,
                stock: 50,
                sku: 'A1-HOME-001',
                weight: 5.5,
                dimensions: '30x20x40 cm',
                features: ['فیلتر نانو', 'کم مصرف', 'نصب آسان'],
            },
            {
                name: 'دستگاه صنعتی مدل B2',
                description: 'دستگاه تصفیه آب صنعتی برای استفاده در کارخانه‌ها و کارگاه‌ها.',
                price: 5000000,
                image: '/images/product-b2.jpg',
                images: ['/images/product-b2-1.jpg', '/images/product-b2-2.jpg'],
                brandId: brand1.id,
                categoryId: category2.id,
                stock: 20,
                sku: 'B2-IND-001',
                weight: 15.0,
                dimensions: '50x40x60 cm',
                features: ['ظرفیت بالا', 'فیلتر صنعتی', 'دوام بالا'],
            },
            {
                name: 'فیلتر جایگزین مدل C3',
                description: 'فیلتر جایگزین برای دستگاه‌های تصفیه آب خانگی و صنعتی.',
                price: 500000,
                image: '/images/product-c3.jpg',
                images: ['/images/product-c3-1.jpg', '/images/product-c3-2.jpg'],
                brandId: brand2.id,
                categoryId: category3.id,
                stock: 100,
                sku: 'C3-FIL-001',
                weight: 0.5,
                dimensions: '10x10x20 cm',
                features: ['فیلتر کربن فعال', 'عمر طولانی', 'مناسب برای همه مدل‌ها'],
            },
        ],
    });

    // Seed an Admin User (optional)
    await prisma.user.update({
        where: { phoneNumber: '09123456789' }, // Replace with an existing phone number
        data: { role: 'ADMIN' },
    });

    console.log('Seeding completed successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });