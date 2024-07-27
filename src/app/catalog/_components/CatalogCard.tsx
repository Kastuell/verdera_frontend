"use client";

import { Button } from "@/components/ui";
import { useCartStore } from "@/lib/cart-store";
import { ProductT } from "@/types/product.types";
import { convertPrice } from "@/utils/convertPrice";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface ICatalogCard {
  item: ProductT;
}

export default function CatalogCard(props: ICatalogCard) {
  const { item } = props;

  const { push } = useRouter();

  const path = usePathname();

  const { addItem, inCartItem, deleteItem } = useCartStore();

  return (
    <div className="w-full flex justify-between gap-6">
      <Image
        alt={item.name}
        src={`/images/jpg/catalog/${item.img}.jpg`}
        width={600}
        height={561}
      />
      <div className="flex flex-col justify-between">
        <div className="text-5xl font-bold">
          <h2>{item.name}</h2>
          {item.subName && (
            <div className="text-greenish mt-6">+ {item.subName}</div>
          )}
        </div>
        <div className="text-2xl leading-relaxed">
          {item.description.firstly}
        </div>
        <div className="text-3xl font-medium">
          {convertPrice(item.price)} &#x20bd;
        </div>
        <div className="flex justify-between gap-5">
          {item.category.name !== "Расходники" && !path.includes("catalog/") ? (
            <Button onClick={() => push(`catalog/${item.slug}`)}>
              Подробнее
            </Button>
          ) : (
            <Button>Купить</Button>
          )}
          {inCartItem(item) ? (
            <Button
              onClick={() => deleteItem(item)}
              className="basis-2/3"
              variant={"black"}
            >
              Удалить
            </Button>
          ) : (
            <Button
              onClick={() => addItem(item)}
              className="basis-2/3"
              variant={"black"}
            >
              В корзину
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
