"use client";

import { CartItemT, useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";
import { convertPrice } from "@/utils/convertPrice";
import { Trash } from "lucide-react";
import Image from "next/image";
import Counter from "./Counter";

interface ICartItem {
  item: CartItemT;
}

export default function CartItem(props: ICartItem) {
  const { item } = props;

  const { product } = item;

  const { deleteAll } = useCartStore();

  return (
    <div className="w-full flex justify-between gap-6">
      <Image
        alt={product.name}
        src={`/images/jpg/catalog/${product.img}.jpg`}
        width={300}
        height={300}
      />
      <div className="flex flex-col justify-between">
        <div className="text-2xl font-bold">
          <h2>{product.name}</h2>
          {product.subName && (
            <div className="text-greenish mt-2">+ {product.subName}</div>
          )}
        </div>
        <div className="text-xs  leading-6">{product.description.firstly}</div>
        <div className="text-2xl font-medium text-greenish">
          {convertPrice(product.price)} &#x20bd;
        </div>
        <div
          className={cn("flex justify-between gap-5", {
            ["hidden"]: item.product.category.name == "Курсы",
          })}
        >
          <Counter item={item} />
        </div>
      </div>
      <div className="place-self-end">
        <Trash
          onClick={() => deleteAll(item.product)}
          className="hover:text-red-700 transition duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
}
