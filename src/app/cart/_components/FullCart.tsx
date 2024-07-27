"use client";

import Icon from "@/app/_components/layout-components/Icon";
import { Button } from "@/components/ui";
import Head from "@/components/ui/Head";
import { useCartStore } from "@/lib/cart-store";
import { convertPrice } from "@/utils/convertPrice";
import CartItem from "./CartItem";

export default function FullCart() {
  const fullCartItems = [
    {
      title: "Владивосток",
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
        <Head className="border-b-4 pb-2 w-1/3 border-primary" center={false}>
          Ваш заказ
        </Head>
        <div className="grid grid-cols-2 mt-20 gap-10">
          {items.map((item) => (
            <CartItem key={item.product.slug} item={item} />
          ))}
        </div>
      </div>
      <div className="font-bold text-4xl flex gap-32">
        <div>Итого</div>
        <div className="text-greenish">{convertPrice(findSum())} &#x20bd;</div>
      </div>
      <div className="w-1/2 mx-auto">
        <Button variant={"white"}>Оформить заказ</Button>
      </div>
    </div>
  );
}
