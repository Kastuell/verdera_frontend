"use client";

import { CartItemT, useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";
import { convertPrice } from "@/utils/convertPrice";
import { Trash } from "lucide-react";
import Image from "next/image";
import { Counter } from "./Counter";

interface ICartItem {
  item: CartItemT;
}

export const CartItem = (props: ICartItem) => {
  const { item } = props;

  const { product } = item;

  const { deleteAll } = useCartStore();

  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-6">
      <div className="mx-auto size-[280px] md:size-[300px] relative">
        <Image
          alt={product.name}
          src={`/images/jpg/catalog/${product.img}.jpg`}
          fill
        />
      </div>

      <div className="flex flex-col gap-5 justify-between text-center md:text-start basis-1/2 lg:basis-[55%]">
        <div className="text-xl font-bold">
          <h2>{product.name}</h2>
          {product.subName && (
            <div className="text-greenish mt-2">+ {product.subName}</div>
          )}
        </div>
        <div className="text-xs leading-6">{product.description.firstly}</div>
        <div className="text-2xl font-medium text-greenish ">
          {convertPrice(product.price)} &#x20bd;
        </div>
        <div
          className={cn(
            "flex items-center md:justify-start justify-center gap-5"
          )}
        >
          {item.product.category.name !== "Курсы" && <Counter item={item} />}
          <Trash
            onClick={() => deleteAll(item.product)}
            className="hover:text-red-700 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
      {/* <div className="place-self-end hidden lg:block">
        <Trash
          onClick={() => deleteAll(item.product)}
          className="hover:text-red-700 transition duration-300 cursor-pointer"
        />
      </div> */}
    </div>
  );
};