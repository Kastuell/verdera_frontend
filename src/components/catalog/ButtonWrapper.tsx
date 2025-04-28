"use client";

import { useCartStore } from "@/lib/cart-store";
import { ProductT } from "@/types/product.types";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Dialog, DialogContent, DialogTrigger } from "../ui";

export const ButtonWrapper = ({
  item,
  className,
}: {
  item: ProductT;
  className?: string;
}) => {
  const [isClient, setClient] = useState<boolean>(false);

  const { push } = useRouter();

  const path = usePathname();

  const { addItem, inCartItem, deleteItem } = useCartStore();

  useEffect(() => setClient(true), []);

  return (
    <div className={className}>
      {isClient && (
        <div className="flex flex-col gap-5 md:mt-5 md:flex-row mt-2">
          {item.category.name !== "Расходники" && !path.includes("catalog/") ? (
            <Button onClick={() => push(`catalog/${item.slug}`)}>
              Подробнее
            </Button>
          ) : item.stock == true ? (
            <Button
              onClick={() => {
                addItem(item);
                push("/cart");
              }}
            >
              Купить
            </Button>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Предзаказ</Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md">
                Вы оформляете предзаказ, что означает что товар будет отправлен
                к вам в указанные сроки, непозднее 5 апреля 2025 года.
                <br /> Мы вас уведомим в течении дня после оплаты
                <Button
                  onClick={() => {
                    addItem(item);
                    push("/cart");
                  }}
                >
                  Предзаказать
                </Button>
              </DialogContent>
            </Dialog>
          )}
          {inCartItem(item) ? (
            <Button onClick={() => deleteItem(item)} variant={"black"}>
              Удалить
            </Button>
          ) : (
            <Button onClick={() => addItem(item)} variant={"black"}>
              В корзину
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
