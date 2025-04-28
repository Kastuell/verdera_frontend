import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type SelectedT = {
  name: string;
  slug: string;
};

interface ICatalogNavBarStore {
  selected: SelectedT;
  setSelected: (data: SelectedT) => void;
  selectedSimulators: string,
  setSelectedSimulators: (value: string) => void
}

export const useCatalogNavBarStore = create<ICatalogNavBarStore>()(
  devtools((set) => ({
    selected: {
      name: "Тренажёры",
      slug: "trenazhery",
    },
    selectedSimulators: "",
    setSelected: (data: SelectedT) => {
      set(() => ({
        selected: data,
      }));
    },
    setSelectedSimulators: (value) => {
      set(() => ({
        selectedSimulators: value
      }))
    }
  }))
);
