"use client";

import { useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Icon from "../Icon";

export default function CartIcon() {
  const { items } = useCartStore();

  return (
    <Link href={"/cart"} className="block relative">
      <Icon
        isHeader={true}
        src={"/images/svg/header/cart.svg"}
        alt={"Корзина"}
        title={"Корзина"}
      />
      <span
        className={cn(
          "size-5 bg-[#D24B4B] rounded-full absolute -bottom-3.5 -right-3.5 hidden",
          {
            ["block"]: items.length > 0,
          }
        )}
      />
    </Link>
  );
}
