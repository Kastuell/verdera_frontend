"use client";

import { useScheduleStore } from "@/lib/schedule-store";
import { cn } from "@/lib/utils";
import { ScheduleDayT } from "@/types/schedule.types";

import { AddTimeModal } from "./AddTimeModal";
import { Time } from "./Time";

export const Day = ({ day }: { day: ScheduleDayT }) => {
  const { time, day_month, day_of_week, id } = day;

  const { mode, setSelected, selected } = useScheduleStore();

  return (
    <>
      <div
        onClick={() => {
          mode && setSelected(id);
        }}
        className={cn({
          ["border-primary border-2 rounded-3xl p-5 size-full min-h-60"]: true,
          ["opacity-50"]: selected !== id && mode,
        })}
      >
        <div className="capitalize flex justify-between md:flex-col 2xl:flex-row text-sm items-center">
          <div className="font-bold">{day_of_week}</div>
          <div>{day_month}</div>
        </div>
        <div className="space-y-2 mt-4">
          {time.length !== 0 ? (
            time.map((item) => <Time key={item.time} time={item} />)
          ) : (
            <div className="text-center font-bold">Нет записей</div>
          )}
          {selected == id && mode && <AddTimeModal dayId={id} />}
        </div>
      </div>
    </>
  );
};
