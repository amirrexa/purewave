import MotionDiv from '@/components/ui/MotionDiv';
import SignUpForm from '@/components/auth/SignUpForm';
import Link from 'next/link';
import { FaWater } from 'react-icons/fa';

export const metadata = {
    title: 'ثبت‌نام - موج پاک',
    description: 'در موج پاک ثبت‌نام کنید و از دستگاه‌های تصفیه آب با کیفیت بالا بهره‌مند شوید.',
};

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-[var(--color-neutral)] flex items-center justify-center py-12 px-4">
            <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
            >
                <div className="flex justify-center mb-6">
                    <FaWater className="text-5xl text-[var(--color-primary)] animate-pulse" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--color-dark)] text-center mb-6">
                    ثبت‌نام در موج پاک
                </h2>
                <SignUpForm />
                <p className="text-center text-gray-600 mt-6">
                    قبلاً حساب کاربری دارید؟{' '}
                    <Link href="/signin" className="text-[var(--color-accent)] hover:underline">
                        ورود
                    </Link>
                </p>
            </MotionDiv>
        </div >
    );
}