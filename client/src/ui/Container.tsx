import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: Props) => {
    const newClassName = twMerge('max-w-screen-lg mx-auto px-4 py-10 lg:px-0', className);
    return (
        <div className={newClassName}>{children}</div>
    )
}

export default Container;
