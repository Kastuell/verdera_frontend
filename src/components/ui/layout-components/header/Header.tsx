"use client"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavItem from "../NavItem"

export default function header() {

    const pathName = usePathname()

    return (
        <header className={clsx({
            ["relative container text-primary"]: true,
            ["text-secondary"]: pathName == '/'
        })}>
            <div className={clsx({
                ['w-full py-5']: true,
                ['absolute']: pathName == '/'
            })}>
                <nav className="flex items-center justify-between">
                    <Link href={'/'}>
                        <Image
                            className={clsx({
                                ['invert']: true,
                                ['invert-0']: pathName == '/'
                            })}
                            src={'/images/svg/logo.svg'}
                            alt="logo"
                            width={245}
                            height={100}
                        />
                    </Link>
                    <ul className="flex gap-14 text-3xl">
                        <NavItem children='Каталог' href="/catalog" underline />
                        <NavItem children='О нас' href="/about" underline />
                    </ul>
                    <ul className="flex gap-14 ">
                        <NavItem children={<Image className={clsx({
                            ['invert']: true,
                            ['invert-0']: pathName == '/'
                        })} src={'/images/svg/header/cart.svg'} width={40} height={40} alt="Корзина" />} href="cart" />
                        <NavItem children={<Image className={clsx({
                            ['invert']: true,
                            ['invert-0']: pathName == '/'
                        })} src={'/images/svg/header/profile.svg'} width={40} height={40} alt="Профиль" />} href="profile" />
                    </ul>
                </nav>
            </div>
        </header>
    )
}