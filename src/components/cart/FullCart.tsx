"use client";

import { Button, Head } from "@/components/ui";
import { useProfile } from "@/hooks/useProfile";
import { useCartStore } from "@/lib/cart-store";
import { convertPrice } from "@/utils/convertPrice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Icon } from "../Icon";
import { CartItem } from "./CartItem";

export const FullCart = () => {
  const { data } = useProfile();
  const fullCartItems = [
    {
      title: data?.region || "Укажите при регистрации",
      src: "/images/svg/cart/map.svg",
      description:
        "Убедитесь, что ваш регион указан верно. От выбора региона зависят доступные способы оплаты и получения заказа.",
      size: 40,
    },
    {
      title: "Доставка",
      src: "/images/svg/cart/development.svg",
      description:
        "Рассчет стоимости доставки происходит транспортной компанией, оплата доставки при получении",
      size: 60,
    },
  ];

  useEffect(() => {
    const { refresh } = useRouter();
    refresh();
  }, []);

  const { items, findSum } = useCartStore();

  return (
    <div className="space-y-20">
      <div className="space-y-8">
        {fullCartItems.map((item) => (
          <div key={item.description}>
            <div className="flex gap-4 items-center">
              <Icon src={item.src} size={item.size} />
              <h4 className="font-bold text-3xl">{item.title}</h4>
            </div>
            <p className="mt-2.5">{item.description}</p>
          </div>
        ))}
      </div>
      <div>
        <Head
          className="border-b-4 pb-2 lg:w-1/3 border-primary"
          center={false}
        >
          Ваш заказ
        </Head>
        <div className="grid xl:grid-cols-2 lg:mt-20 mt-10 gap-10">
          {items.map((item) => (
            <CartItem key={item.product.slug} item={item} />
          ))}
        </div>
      </div>
      <div className="font-bold lg:text-4xl text-xl flex gap-32">
        <div>Итого</div>
        <div className="text-greenish text-nowrap">
          {convertPrice(findSum())} &#x20bd;
        </div>
      </div>
      <div className="lg:w-1/2 mx-auto">
        <Link href={"cart/confirming"}>
          <Button variant={"white"}>Оформить заказ</Button>
        </Link>
      </div>
    </div>
  );
};
