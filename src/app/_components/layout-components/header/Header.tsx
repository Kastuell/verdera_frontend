"use client"
import UnderlineText from "@/components/text/UnderlineText"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Icon from "../Icon"
import Logo from "../Logo"

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
                            <UnderlineText
                                key={item.href}
                                children={<Link href={item.href}>{item.title}</Link>}
                                color={pathName === "/" ? "bg-secondary" : "bg-primary"} />
                        )}
                    </ul>
                    <ul className="flex gap-14 ">
                        {navItems.right.map(item =>
                            <Icon
                                key={item.href}
                                pathName={pathName}
                                isHeader={true}
                                src={item.src}
                                alt={item.alt}
                                title={item.alt} />
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}