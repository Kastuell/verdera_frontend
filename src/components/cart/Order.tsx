"use client";

import { useCartStore } from "@/lib/cart-store";
import { convertPrice } from "@/utils/convertPrice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui";

export const Order = () => {
  const { items, findSum } = useCartStore();
  const [isClient, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <div className="lg:w-[500px]">
      <h3 className="font-semibold text-4xl">Ваш заказ</h3>

      <div className="flex flex-wrap gap-5 mt-5">
        {items.map((item) => (
          <Image
            key={item.product.slug}
            alt=""
            src={`/images/jpg/catalog/${item.product.img}.jpg`}
            width={180}
            height={180}
          />
        ))}
      </div>
      <div className="space-y-8 mt-5 lg:text-3xl text-lg">
        <div className="flex justify-between">
          <div>{items.length} товара на сумму</div>
          <div className="text-greenish">
            {isClient && convertPrice(findSum())} &#x20bd;
          </div>
        </div>
        <div className="flex justify-between">
          <div>Скидка Verdera</div>
          <div className="text-greenish">0 &#x20bd;</div>
        </div>
        <div className="hidden h-0.5 border-t border-primary lg:block " />
        <div className="flex justify-between">
          <div className="font-bold">Итого</div>
          <div className="text-greenish">
            {isClient && convertPrice(findSum())} &#x20bd;
          </div>
        </div>
        <Button className="mt-20" type="submit" variant={"black"}>
          Оформить заказ
        </Button>
        <p className="text-center text-sm leading-8">
          Нажимая на кнопку «Оформить заказ», вы принимаете условия
          <a
            target="_blank"
            href="/pdf/oferta.pdf"
            className="text-greenish cursor-pointer"
          >
            {" "}
            Публичной оферты
          </a>
        </p>
      </div>
    </div>
  );
};
