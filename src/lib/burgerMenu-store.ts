import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IBurgerMenuStore {
  isOpen: boolean;
  changeOpen: () => void;
}

export const useBurgerMenuStore = create<IBurgerMenuStore>()(
  devtools(
    devtools((set, get) => ({
      isOpen: false,
      changeOpen: () => {
        const { isOpen } = get();
        set(() => ({
          isOpen: !isOpen,
        }));
      },
    }))
  )
);
