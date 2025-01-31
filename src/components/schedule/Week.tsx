import { ScheduleWeekT } from "@/types/schedule.types";
import { Day } from "./Day";

export const Week = ({ week }: { week: ScheduleWeekT }) => {
  const { days, week_end, week_start } = week;
  return (
    <>
      <div className="mt-10">
        {/* <div className="uppercase font-bold">
          {week_start} - {week_end}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
          {days.map((item) => (
            <Day key={item.date} day={item} />
          ))}
        </div>
      </div>
    </>
  );
};
