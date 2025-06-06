import MotionDiv from '@/components/ui/MotionDiv';
import SignInForm from '@/components/auth/SignInForm';
import Link from 'next/link';
import { FaWater } from 'react-icons/fa';

export const metadata = {
    title: 'ورود - موج پاک',
    description: 'وارد حساب کاربری خود در موج پاک شوید و از خدمات ما بهره‌مند شوید.',
};

export default function SignInPage() {
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
                    ورود به موج پاک
                </h2>
                <SignInForm />
                <p className="text-center text-gray-600 mt-6">
                    حساب کاربری ندارید؟{' '}
                    <Link href="/signup" className="text-[var(--color-accent)] hover:underline">
                        ثبت‌نام
                    </Link>
                </p>
            </MotionDiv>
        </div>
    );
}