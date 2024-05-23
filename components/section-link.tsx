"use client"

import { cn } from "@/lib/utils"
import { Link } from "react-scroll"

type  SectionLinkProps = {
    className?: string;
    href: string;
    children: React.ReactNode;
}
export default function SectionLink({ className, href, children }: SectionLinkProps) {
    const underLinkAnimation = "before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-secondary-700 rounded-lg before:translate-y-2 before:opacity-0 hover:before:translate-y-1 hover:before:opacity-100 before:transition-all before:duration-200"
    return <Link to={href} smooth={true} duration={800} className={cn("relative text-[16px] font-inter text-secondary-800 cursor-pointer",underLinkAnimation,  className)}>{children}</Link>
}
