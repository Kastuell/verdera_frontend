import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IScheduleStore {
  mode: boolean;
  changeMode: () => void;

  selected: number | undefined;
  setSelected: (id: number) => void;
}

export const useScheduleStore = create<IScheduleStore>()(
  devtools((set, get) => ({
    mode: false,
    changeMode: () => {
      const { mode } = get();
      set(() => ({
        mode: !mode,
      }));
    },
    selected: undefined,
    setSelected: (id: number) => {
      set(() => ({
        selected: id,
      }));
    },
  }))
);
