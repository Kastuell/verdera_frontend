"use client";

import { Button } from "@/components/ui";
import { useCartStore } from "@/lib/cart-store";
import { ProductT } from "@/types/product.types";
import { convertPrice } from "@/utils/convertPrice";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ICatalogCard {
  item: ProductT;
}

export const CatalogCard = (props: ICatalogCard) => {
  const { item } = props;

  const { push } = useRouter();

  const path = usePathname();

  const { addItem, inCartItem, deleteItem } = useCartStore();

  const [isClient, setClient] = useState<boolean>(false);

  useEffect(() => setClient(true), []);

  return (
    <div className="w-full flex flex-col xl:flex-row justify-between gap-6">
      <div className="relative mx-auto w-[290px] h-[290px] md:w-full md:h-[421px] xl:w-[600px] xl:h-[561px]">
        <Image
          alt={item.name}
          src={`/images/jpg/catalog/${item.img}.jpg`}
          fill
        />
      </div>

      <div className="flex flex-col justify-between text-center lg:text-start">
        <div className="xl:text-5xl md:text-3xl text-lg font-bold">
          <h2>{item.name}</h2>
          {item.subName && (
            <div className="text-greenish lg:mt-6 mt-2">+ {item.subName}</div>
          )}
        </div>
        <div className="xl:text-2xl md:text-xl md:leading-10 text-base xl:leading-relaxed mt-8 lg:mt-0">
          {item.description.firstly}
        </div>
        <div className="text-3xl font-medium mt-8 lg:mt-0">
          {convertPrice(item.price)} &#x20bd;
        </div>
        {isClient && (
          <div className="flex flex-col md:flex-row mt-8 xl:mt-0 justify-between gap-5">
            {item.category.name !== "Расходники" &&
            !path.includes("catalog/") ? (
              <Button onClick={() => push(`catalog/${item.slug}`)}>
                Подробнее
              </Button>
            ) : (
              <Button>Купить</Button>
            )}
            {inCartItem(item) ? (
              <Button
                onClick={() => deleteItem(item)}
                className="lg:basis-2/3"
                variant={"black"}
              >
                Удалить
              </Button>
            ) : (
              <Button
                onClick={() => addItem(item)}
                className="lg:basis-2/3"
                variant={"black"}
              >
                В корзину
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
