"use client";
import { OrderItem } from "@/types/order.types";
import moment from "moment";
import Image from "next/image";

export const FullOrder = ({
  items,
  status,
  index,
  date,
}: {
  items: OrderItem[];
  status: string;
  index: number;
  date: string;
}) => {
  console.log(status)
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 text-xl md:text-3xl">
        <h2 className="font-bold">Заказ #{index + 1}</h2>
        <div className="flex-0">
          <h6 className="font-bold">
            {status == "PAYED"
              ? "Оплачено"
              : status == "CANCELED"
              ? "Отменено"
              : status == "PENDING"
              ? "В обработке"
              : ""}
          </h6>
          <p>{moment(date).locale("ru").format("LLLL")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 mt-2">
        {items.map((item) => (
          <div key={item.id} className="grid grid-cols-5">
            <Image
              className="xl:col-span-2 col-span-5"
              src={`/images/jpg/catalog/${item.product.img}.jpg`}
              alt=""
              width={500}
              height={500}
            />
            <div className="xl:col-span-3 col-span-5 ml-2 mt-2 space-y-3 xl:space-y-0">
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
