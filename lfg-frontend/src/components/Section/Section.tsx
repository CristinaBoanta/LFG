import type { ReactNode } from 'react';
import cn from 'classnames';

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <div className={cn("bg-gray-800 rounded-md border border-gray-700 mx-8 p-2", className)}>
            {children}
        </div>
    )
}