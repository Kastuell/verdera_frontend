"use client";

import { useProfile } from "@/hooks/useProfile";
import { useBurgerMenuStore } from "@/lib/burgerMenu-store";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Logo } from "../Logo";
import { LogOutBtn } from "./LogOutBtn";
import { ProfileBurgerMenuIcon } from "./ProfileBurgerMenuIcon";

export const BurgerMenu = () => {
  const burger = [
    { title: "Аккаунт", href: "/profile" },
    { title: "Корзина", href: "/cart" },
    { title: "Каталог", href: "/catalog" },
    { title: "О нас", href: "/about" },
  ];

  const { isOpen } = useBurgerMenuStore();

  const { changeOpen } = useBurgerMenuStore();

  const { data } = useProfile();

  return (
    <div
      className={cn(
        "h-full absolute z-[2000] bg-primary top-0 w-full -translate-x-full transition duration-300",
        {
          ["translate-x-0"]: isOpen,
        }
      )}
    >
      <div className="py-5 text-secondary container">
        <div className="flex justify-between items-center">
          <Logo sizes="w-[185px] lg:w-[250px] h-[100px]" long />
          <X onClick={changeOpen} className="text-secondary" size={40} />
        </div>
        <div
          suppressHydrationWarning
          className="flex flex-col gap-4 text-xl mt-6"
        >
          {burger.map((item) =>
            item.href !== "/profile" ? (
              <a
                key={`${item.href} ${item.title}`}
                onClick={changeOpen}
                href={item.href}
              >
                {item.title}
              </a>
            ) : (
              <ProfileBurgerMenuIcon key={"qwe"} />
            )
          )}
          {data && <LogOutBtn />}
        </div>
      </div>
    </div>
  );
};
