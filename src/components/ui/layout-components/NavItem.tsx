"use client"

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface INavItem {
    children: string | React.ReactNode
    href: string
    underline?: boolean
    className?: string
}

export default function NavItem(props: INavItem) {

    const { className, children, href, underline = false } = props

    const pathName = usePathname()


    return (
        <li
            key={href}
            id={href}
            className={clsx({
                [`${className}`]: true,
                ['group transition duration-300']: underline
            })}>
            <Link href={href}>
                {children}
                {underline && <span className={clsx({
                    ["block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.9px] bg-primary"]: true,
                    ["bg-secondary"]: pathName == '/'
                })} />}
            </Link>
        </li>
    )
}