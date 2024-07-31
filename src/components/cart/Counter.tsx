"use client";

import { CartItemT, useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

interface ICounter {
  item: CartItemT;
}

export const Counter = (props: ICounter) => {
  const { item } = props;

  const { items, addItem, deleteItem } = useCartStore();

  return (
    <div className="flex gap-3">
      <CounterItem onClick={() => deleteItem(item.product)}>-</CounterItem>
      <CounterItem> {item.quantity}</CounterItem>
      <CounterItem onClick={() => addItem(item.product)}>+</CounterItem>
    </div>
  );
};

function CounterItem({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "size-8 border-2 border-primary bg-secondary flex justify-center items-center",
        [
          {
            "hover:bg-primary hover:text-secondary transition duration-300 cursor-pointer":
              typeof children !== "number",
          },
        ]
      )}
    >
      {children}
    </div>
  );
}
