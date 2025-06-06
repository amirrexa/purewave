import MotionDiv from '@/components/ui/MotionDiv';

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[var(--color-dark)] to-[var(--color-dark)]/[0.95] text-white py-12 overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Links Section */}
                    <div>
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-[var(--color-secondary)]">لینک‌ها</h3>
                            <ul className="space-y-2">
                                <li>
                                    <MotionDiv whileHover={{ x: 5, color: 'var(--color-secondary)' }} transition={{ duration: 0.3 }}>
                                        <a href="/about" className="text-gray-300 hover:text-[var(--color-secondary)]">درباره ما</a>
                                    </MotionDiv>
                                </li>
                                <li>
                                    <MotionDiv whileHover={{ x: 5, color: 'var(--color-secondary)' }} transition={{ duration: 0.3 }}>
                                        <a href="/contact" className="text-gray-300 hover:text-[var(--color-secondary)]">تماس با ما</a>
                                    </MotionDiv>
                                </li>
                                <li>
                                    <MotionDiv whileHover={{ x: 5, color: 'var(--color-secondary)' }} transition={{ duration: 0.3 }}>
                                        <a href="/privacy" className="text-gray-300 hover:text-[var(--color-secondary)]">سیاست حفظ حریم خصوصی</a>
                                    </MotionDiv>
                                </li>
                            </ul>
                        </MotionDiv>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-[var(--color-secondary)]">شبکه‌های اجتماعی</h3>
                            <div className="flex gap-4">
                                <MotionDiv whileHover={{ scale: 1.2, color: 'var(--color-accent)' }} transition={{ duration: 0.3 }}>
                                    <a href="#" className="text-gray-300 hover:text-[var(--color-accent)]">فیسبوک</a>
                                </MotionDiv>
                                <MotionDiv whileHover={{ scale: 1.2, color: 'var(--color-accent)' }} transition={{ duration: 0.3 }}>
                                    <a href="#" className="text-gray-300 hover:text-[var(--color-accent)]">توییتر</a>
                                </MotionDiv>
                                <MotionDiv whileHover={{ scale: 1.2, color: 'var(--color-accent)' }} transition={{ duration: 0.3 }}>
                                    <a href="#" className="text-gray-300 hover:text-[var(--color-accent)]">اینستاگرام</a>
                                </MotionDiv>
                            </div>
                        </MotionDiv>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-[var(--color-secondary)]">خبرنامه</h3>
                            <form className="flex">
                                <MotionDiv whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <button
                                        type="submit"
                                        className="bg-[var(--color-accent)] text-white p-3 rounded-r-full font-semibold hover:bg-[var(--color-secondary)]"
                                    >
                                        ثبت
                                    </button>
                                </MotionDiv>
                                <input
                                    type="email"
                                    placeholder="ایمیل خود را وارد کنید"
                                    className="p-3 rounded-l-full bg-white/10 text-white placeholder-gray-400 border-none focus:outline-none w-full"
                                />
                            </form>
                        </MotionDiv>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} موج پاک. تمامی حقوق محفوظ است.
                </div>
            </div>
        </footer>
    );
}