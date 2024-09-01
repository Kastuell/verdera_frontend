"use client";
import { EnumOrderStatus, OrderItem } from "@/types/order.types";
import Image from "next/image";

export const FullOrder = ({
  items,
  status,
  index,
}: {
  items: OrderItem[];
  status: string;
  index: number;
}) => {
  console.log(items);
  return (
    <div className="w-full">
      <div className="flex gap-5 font-bold text-3xl">
        <h2>Заказ #{index + 1}</h2>
        <h6>
          {status == "PAYED" ? EnumOrderStatus.PAYED : EnumOrderStatus.PENDING}
        </h6>
      </div>

      <div className="grid grid-cols-2 mt-2">
        {items.map((item) => (
          <div className="grid grid-cols-5">
            <Image
              className="col-span-2"
              src={`/images/jpg/catalog/${item.product.img}.jpg`}
              alt=""
              width={500}
              height={500}
            />
            <div className="col-span-3 ml-2">
              <div className="text-greenish font-bold text-3xl">
                {item.product.name}
              </div>
              <div className="leading-8">
                {item.product.description.firstly}
              </div>
              <div className="font-bold text-3xl">
                {item.product.price} &#x20bd;
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
