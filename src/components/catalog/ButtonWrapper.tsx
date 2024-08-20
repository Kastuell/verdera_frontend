"use client";

import { useCartStore } from "@/lib/cart-store";
import { ProductT } from "@/types/product.types";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui";

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
        <div className="flex flex-col gap-5 md:mt-5 md:flex-row">
          {item.category.name !== "Расходники" && !path.includes("catalog/") ? (
            <Button onClick={() => push(`catalog/${item.slug}`)}>
              Подробнее
            </Button>
          ) : (
            <Button onClick={() =>{ addItem(item); push("/cart")}}>Купить</Button>
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
