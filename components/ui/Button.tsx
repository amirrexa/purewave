'use client';

import { ButtonHTMLAttributes } from 'react';

export const Button = ({
    children,
    onClick,
    className = '',
    style = {},
    disabled = false,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer rounded-full px-4 py-2 text-gray-700 hover:bg-[var(--color-accent)] hover:text-white! transition-all border border-[var(--color-accent)] ${className}`}
            style={{ ...style }}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};