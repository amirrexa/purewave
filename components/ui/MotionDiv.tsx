'use client';

import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MotionDivProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function MotionDiv({ children, className, style, ...motionProps }: MotionDivProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div className={className} style={style}>{children}</div>;
    }

    return (
        <motion.div className={className} style={style} {...motionProps}>
            {children}
        </motion.div>
    );
}