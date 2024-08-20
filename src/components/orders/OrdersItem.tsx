"use client";
import { OrderItem } from "@/types/order.types";
import Image from "next/image";

export const OrdersItem = ({
  item,
  status,
}: {
  item: OrderItem;
  status: string;
}) => {
  return (
    <div className="flex">
      <Image
        src={item.product.img}
        alt=""
        width={500}
        height={500}
        className="basis-1/2"
      />
      <div>
        <div className="xl:text-5xl md:text-3xl text-lg font-bold">
          <h2>{item.product.name}</h2>
          {item.product.subName && (
            <div className="text-greenish lg:mt-6 mt-2">
              + {item.product.subName}
            </div>
          )}
        </div>
        <div>
          <p>Статус:</p>
          <p>{status}</p>
        </div>
        <div>
          <p>Адрес доставки:</p>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};
