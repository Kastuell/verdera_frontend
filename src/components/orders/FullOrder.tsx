"use client";
import { OrderItem } from "@/types/order.types";
import Image from "next/image";

export const FullOrder = ({
  items,
  status,
}: {
  items: OrderItem[];
  status: string;
}) => {
  console.log(items);
  return (
    <div className="grid grid-cols-2">
      {items.map((item) => (
        <div className="flex" key={item.id}>
          <Image
            src={`/images/jpg/catalog/${item.product.img}.jpg`}
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
      ))}
    </div>
  );
};
