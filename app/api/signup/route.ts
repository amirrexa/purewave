import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import * as jose from 'jose';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { phoneNumber, password, repeatPassword } = await req.json();

        // Validation: Check for required fields
        if (!phoneNumber || !password || !repeatPassword) {
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

        // Validation: Passwords match
        if (password !== repeatPassword) {
            return Response.json(
                { message: 'رمز عبور و تکرار آن مطابقت ندارند' },
                { status: 400 }
            );
        }

        // Validation: Password strength (min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            return Response.json(
                {
                    message:
                        'رمز عبور باید حداقل ۸ کاراکتر باشد و شامل یک حرف بزرگ، یک حرف کوچک، یک عدد و یک کاراکتر خاص باشد',
                },
                { status: 400 }
            );
        }

        // Check if the phone number already exists
        const existingUser = await prisma.user.findUnique({
            where: { phoneNumber },
        });

        if (existingUser) {
            return Response.json(
                { message: 'کاربری با این شماره تلفن قبلاً ثبت‌نام کرده است' },
                { status: 400 }
            );
        }

        // Hash the password
        const hashedPassword = await hash(password, 10);

        // Create the user in the database
        const user = await prisma.user.create({
            data: {
                phoneNumber,
                password: hashedPassword,
            },
        });

        // Generate JWT token
        const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
        const jwt = await new jose.SignJWT({ userId: user.id, phoneNumber: user.phoneNumber })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('7d') // Token expires in 7 days (aligned with reference)
            .sign(secret);

        // Set the JWT token in a cookie
        const cookieStore = await cookies();
        cookieStore.set('token', jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return Response.json({ message: 'ثبت‌نام با موفقیت انجام شد' });
    } catch (error: unknown) {
        console.error('Signup error:', error);
        return Response.json({ message: 'خطا در سرور' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}