import Link from 'next/link';
import MotionDiv from '@/components/ui/MotionDiv';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/30 h-18 flex items-center backdrop-blur-lg shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <MotionDiv
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-[var(--color-primary)] tracking-tight"
                >
                    <Link href="/">موج پاک</Link>
                </MotionDiv>

                {/* Navigation Links */}
                {/* <div className="flex gap-6">
                    <MotionDiv
                        whileHover={{ color: 'var(--color-accent)', scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="text-[var(--color-dark)] hover:text-[var(--color-accent)] font-medium"
                    >
                        <Link href="/products">محصولات</Link>
                    </MotionDiv>
                </div> */}

                {/* CTAs */}
                <MotionDiv
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center gap-4"
                >
                    <MotionDiv
                        whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(38, 166, 154, 0.3)' }}
                        transition={{ duration: 0.3 }}
                        className="bg-[var(--color-accent)]  rounded-full text-white font-semibold hover:bg-[var(--color-secondary)]"
                    >
                        <Link className='flex justify-center items-center px-5 py-2' href="/signup">ثبت نام</Link>
                    </MotionDiv>
                    <MotionDiv
                        whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(30, 136, 229, 0.3)' }}
                        transition={{ duration: 0.3 }}
                        className="border bg-white border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-semibold hover:bg-[var(--color-primary)] hover:text-white"
                    >
                        <Link className="flex justify-center items-center px-5 py-2" href="/signin">ورود</Link>
                    </MotionDiv>
                </MotionDiv>
            </div>
        </nav >
    );
}