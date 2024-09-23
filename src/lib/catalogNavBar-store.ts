import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type SelectedT = {
  name: string;
  slug: string;
};

interface ICatalogNavBarStore {
  selected: SelectedT;
  setSelected: (data: SelectedT) => void;
}

export const useCatalogNavBarStore = create<ICatalogNavBarStore>()(
  devtools((set) => ({
    selected: {
      name: "Курсы",
      slug: "kursy",
    },
    setSelected: (data: SelectedT) => {
      set(() => ({
        selected: data,
      }));
    },
  }))
);
