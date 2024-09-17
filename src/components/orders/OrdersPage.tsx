"use client";

import { useMyOrders } from "@/hooks/useMyOrders";
import { Loader } from "lucide-react";
import { FullOrder } from "./FullOrder";

export const OrdersPage = () => {
  const { data, error, isLoading } = useMyOrders();

  if (isLoading) return <Loader className="animate-spin" />;

  if (error) return <div>Ошибка</div>;

  if (data !== undefined) {
    if (data.length == 0) return <div>Вы ещё не делали заказ</div>;

    return (
      <div className="space-y-10">
        {data.map((item, index) => (
          <FullOrder key={item.id} index={index} items={item.items} status={item.status} />
        ))}
      </div>
    );
  }
};
