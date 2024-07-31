"use client";
import { useBurgerMenuStore } from "@/lib/burgerMenu-store";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { UnderlineText } from "../UnderlineText";
import { BurgerMenu } from "./BurgerMenu";
import { BurgerMenuIcon } from "./BurgerMenuIcon";
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
  const { isOpen } = useBurgerMenuStore();
  const [isClient, setClient] = useState<boolean>(false);

  useEffect(() => setClient(true));

  return (
    <>
      {isOpen && <BurgerMenu />}
      {isClient && (
        <header
          className={clsx({
            ["py-5 text-primary container z-10"]: true,
            ["absolute text-secondary left-0 right-0"]: pathName == "/",
          })}
        >
          <div className="flex justify-between items-center">
            <div className="basis-1/3">
              <Link href="/" className="inline-block">
                <Logo
                  sizes={cn({
                    ["w-[150px] lg:w-[250px] h-[100px]"]: true,
                    ["w-[30px] lg:w-[50px] h-[100px]"]: pathName == "/",
                  })}
                  long={pathName !== "/"}
                  pathName={pathName}
                />
              </Link>
            </div>
            <ul className="hidden md:flex gap-14 text-3xl justify-center basis-1/3">
              {navItems.center.map((item) => (
                <UnderlineText
                  key={item.href}
                  color={pathName === "/" ? "bg-secondary" : "bg-primary"}
                >
                  <Link className="block flex-0" href={item.href}>
                    {item.title}
                  </Link>
                </UnderlineText>
              ))}
            </ul>
            <div className="hidden md:flex gap-14 justify-end items-center basis-1/3">
              <CartIcon />
              <ProfileIcon />
            </div>
            <BurgerMenuIcon />
          </div>
        </header>
      )}
    </>
  );
};
