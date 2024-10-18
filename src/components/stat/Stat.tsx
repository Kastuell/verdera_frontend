"use client";

import { useAllOrders } from "@/hooks/useAllOrders";
import { numberFormat } from "@/utils/numberFormat";
import moment from "moment";
import "moment/locale/ru";
import { Container } from "../ui";
import { StatItem } from "./StatItem";
export const Stat = () => {
  const { data, isLoading } = useAllOrders();

  if (isLoading)
    return <Container className="text-center">Загрузка...</Container>;

  if (!data) return <Container className="text-center">Нет заказов</Container>;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.createdAt} className="border-primary border p-3">
            <StatItem bold k="Id заказа:" val={item.id} />
            <StatItem
              bold
              k="Дата заказа:"
              val={moment(item.createdAt).locale("ru").format("LLLL")}
            />
            <div className="w-full h-0 border-primary border-t my-2" />
            <StatItem k="Город:" val={item.info.city} />
            <StatItem k="Тип доставки:" val={item.info.delivery} />
            <StatItem k="Почта:" val={item.info.email} />
            <StatItem k="Фамилия:" val={item.info.family} />
            <StatItem k="Имя:" val={item.info.name} />
            <StatItem k="Телефон" val={item.info.phone} />

            <div className="space-y-2">
              {item.items.map((it) => (
                <div className="border border-primary px-2 py-1" key={it.id}>
                  <StatItem k="Товар:" val={it.product.name} />
                  <StatItem
                    k="Цена товара:"
                    val={numberFormat.format(it.product.price)}
                  />
                  <StatItem k="Телефон" val={item.info.phone} />
                </div>
              ))}
            </div>

            <StatItem
              k="Статус:"
              val={
                item.status == "PAYED"
                  ? "Оплачено"
                  : item.status == "CANCELED"
                  ? "Отменено"
                  : item.status == "PENDING"
                  ? "В обработке"
                  : ""
              }
            />
            <StatItem
              k="Итоговая цена:"
              val={numberFormat.format(item.total)}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
