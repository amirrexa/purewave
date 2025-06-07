'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input, Button, message } from 'antd';

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        password: '',
        repeatPassword: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Limit phoneNumber to 11 digits and allow only numbers
        if (name === 'phoneNumber') {
            const cleanedValue = value.replace(/\D/g, ''); // Remove non-digits
            if (cleanedValue.length <= 11) {
                setFormData((prev) => ({ ...prev, [name]: cleanedValue }));
            }
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        // Client-side validation
        if (formData.password !== formData.repeatPassword) {
            setError('رمز عبور و تکرار آن مطابقت ندارند');
            setLoading(false);
            return;
        }

        let normalizedPhoneNumber = formData.phoneNumber;
        if (normalizedPhoneNumber.length === 10 && !normalizedPhoneNumber.startsWith('0')) {
            normalizedPhoneNumber = '0' + normalizedPhoneNumber;
        }

        if (normalizedPhoneNumber.length !== 11) {
            setError('شماره تلفن باید ۱۱ رقم باشد');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phoneNumber: normalizedPhoneNumber,
                    password: formData.password,
                    repeatPassword: formData.repeatPassword,
                }),
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'خطا در ثبت‌نام');

            message.success('ثبت‌نام با موفقیت انجام شد! لطفاً وارد شوید.');
            router.push('/signin');
        } catch (err: unknown) {
            let errorMessage: string;
            if (err instanceof Error) {
                errorMessage = err.message;
            } else if (typeof err === 'string') {
                errorMessage = err;
            } else {
                errorMessage = 'خطای ناشناخته رخ داده است';
            }
            setError(errorMessage);
            message.error(errorMessage);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && <p className="text-[var(--color-error)] text-center">{error}</p>}
            <div className="flex flex-col gap-1">
                <label className="text-[var(--color-dark)] text-sm font-medium">شماره تلفن</label>
                <Input
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="09123456789"
                    autoComplete="tel"
                    className="p-3 rounded-lg border border-gray-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[var(--color-dark)] text-sm font-medium">رمز عبور</label>
                <Input.Password
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="رمز عبور خود را وارد کنید"
                    autoComplete="new-password"
                    className="p-3 rounded-lg border border-gray-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[var(--color-dark)] text-sm font-medium">تکرار رمز عبور</label>
                <Input.Password
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    placeholder="رمز عبور خود را دوباره وارد کنید"
                    autoComplete="new-password"
                    className="p-3 rounded-lg border border-gray-300 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
                />
            </div>
            <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white p-3 rounded-full font-semibold text-base"
            >
                ثبت‌نام
            </Button>
        </form>
    );
}