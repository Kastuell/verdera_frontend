"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "../Logo";
import { UnderlineText } from "../UnderlineText";
import { CartIcon } from "./CartIcon";
import { ProfileIcon } from "./ProfileIcon";

export const Header = () => {
  const pathName = usePathname();

  const navItems = {
    center: [
      { title: "Каталог", href: "/catalog" },
      { title: "О нас", href: "/about" },
    ],
    right: [
      { src: "/images/svg/header/cart.svg", alt: "Корзина", href: "/cart" },
      {
        src: "/images/svg/header/profile.svg",
        alt: "Профиль",
        href: "/profile",
      },
    ],
  };

  return (
    <header className="relative container">
      <div
        suppressHydrationWarning
        className={clsx({
          ["w-full py-5 text-primary"]: true,
          ["absolute text-secondary"]: pathName == "/",
        })}
      >
        <div className="grid grid-cols-3 items-center">
          <Link href="/" className="inline-block">
            <Logo pathName={pathName} />
          </Link>
          <ul className="flex gap-14 text-3xl justify-self-center">
            {navItems.center.map((item) => (
              <UnderlineText
                key={`${item.href} dassdadas`}
                children={<Link href={item.href}>{item.title}</Link>}
                color={pathName === "/" ? "bg-secondary" : "bg-primary"}
              />
            ))}
          </ul>
          <div className="flex gap-14 justify-self-end items-center">
            <CartIcon />
            <ProfileIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
