import { ProductT } from "@/types/product.types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export type CartItemT = {
  product: ProductT;
  quantity: number;
};

interface ICartStore {
  items: CartItemT[];
  addItem: (product: ProductT) => void;
  deleteItem: (product: ProductT) => void;
  deleteAll: (product: ProductT) => void;
  inCartItem: (product: ProductT) => boolean;
  findItemsIndex: (product: ProductT) => number;
  findSum: () => number;
}

export const useCartStore = create<ICartStore>()(
  devtools(
    devtools(
      persist(
        (set, get) => ({
          items: [],
          findItemsIndex: (product: ProductT) => {
            const { items } = get();
            const index = items.findIndex(
              (item) => item.product.name == product.name
            );
            return index;
          },
          addItem: (product: ProductT) => {
            const { items, findItemsIndex } = get();
            if (items.length !== 0) {
              const index = findItemsIndex(product);
              if (index !== -1) {
                items.splice(index, 1, {
                  product: product,
                  quantity: items[index].quantity + 1,
                });
                set(() => ({
                  items: items,
                }));
              } else {
                set(() => ({
                  items: items.concat([
                    {
                      product: product,
                      quantity: 1,
                    },
                  ]),
                }));
              }
            } else {
              set(() => ({
                items: items.concat([
                  {
                    product: product,
                    quantity: 1,
                  },
                ]),
              }));
            }
          },
          deleteItem: (product: ProductT) => {
            const { items, deleteAll, findItemsIndex } = get();

            const index = findItemsIndex(product);

            if (items[index].quantity !== 1) {
              items.splice(index, 1, {
                product: product,
                quantity: items[index].quantity - 1,
              });
            } else {
              deleteAll(product);
            }

            console.log(items);
            set(() => ({
              items: items,
            }));
          },
          deleteAll: (product: ProductT) => {
            const { items, findItemsIndex } = get();

            const index = findItemsIndex(product);

            items.splice(index, 1);
            set(() => ({
              items: items,
            }));
          },
          inCartItem: (product: ProductT) => {
            const { findItemsIndex } = get();

            const index = findItemsIndex(product);

            return index == -1 ? false : true;
          },
          findSum: () => {
            const { items } = get();

            const sum = items.reduce(
              (prev, cur) => prev + cur.product.price * cur.quantity,
              0
            );

            return sum;
          },
        }),
        {
          name: "cart-storage",
          storage: createJSONStorage(() => sessionStorage),
        }
      )
    )
  )
);
