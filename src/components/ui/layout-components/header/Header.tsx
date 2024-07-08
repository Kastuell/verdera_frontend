"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Icon from "../Icon"
import Logo from "../Logo"
import NavItem from "../NavItem"

export default function header() {

    const pathName = usePathname()

    const navItems = {
        center: [
            { title: "Каталог", href: "/catalog" },
            { title: "О нас", href: "/about" },
        ],
        right: [
            { src: "/images/svg/header/cart.svg", alt: "Корзина", href: "cart" },
            { src: "/images/svg/header/profile.svg", alt: "Профиль", href: "profile" },
        ]
    }

    return (
        <header className="relative container">
            <div className={clsx({
                ['w-full py-5 text-primary']: true,
                ['absolute text-secondary']: pathName == '/'
            })}>
                <nav className="flex items-center justify-between">
                    <Link href="/">
                        <Logo pathName={pathName} />
                    </Link>
                    <ul className="flex gap-14 text-3xl">
                        {navItems.center.map(item =>
                            <NavItem
                                children={item.title}
                                href={item.href}
                                underline />)}
                    </ul>
                    <ul className="flex gap-14 ">
                        {navItems.right.map(item =>
                            <NavItem
                                href={item.href}
                                children={<Icon
                                    pathName={pathName}
                                    isHeader={true}
                                    src={item.src}
                                    alt={item.alt}
                                    title={item.alt} />} />
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}