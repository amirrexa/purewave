import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';
import * as jose from 'jose';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { phoneNumber, password } = await req.json();

        if (!phoneNumber || !password) {
            return Response.json({ message: 'تمامی فیلدها الزامی هستند' }, { status: 400 });
        }

        // Validation: Phone number (11 digits, starts with 0)
        const phoneRegex = /^0\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            return Response.json(
                { message: 'شماره تلفن باید ۱۱ رقم باشد و با ۰ شروع شود' },
                { status: 400 }
            );
        }

        // Find the user by phone number
        const user = await prisma.user.findUnique({
            where: { phoneNumber },
            select: {
                id: true,
                phoneNumber: true,
                password: true,
            },
        });

        if (!user || !(await compare(password, user.password))) {
            return Response.json({ message: 'شماره تلفن یا رمز عبور نادرست است' }, { status: 401 });
        }

        // Generate JWT token
        const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
        const jwt = await new jose.SignJWT({ userId: user.id, phoneNumber: user.phoneNumber })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('7d') // Token expires in 7 days
            .sign(secret);

        // Set the JWT token in a cookie
        const cookieStore = await cookies();
        cookieStore.set('token', jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return Response.json({ message: 'ورود با موفقیت انجام شد' });
    } catch (error: any) {
        console.error('Signin error:', error);
        return Response.json({ message: 'خطا در سرور' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}