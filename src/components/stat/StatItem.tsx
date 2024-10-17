import { cn } from "@/lib/utils";

export const StatItem = (data: {
  k: string;
  val: string | number;
  bold?: boolean;
}) => {
  return (
    <div
      className={cn({
        ["font-medium text-sm lg:text-xl flex gap-3"]: true,
        ["text-base lg:text-2xl font-bold"]: data.bold == true,
        [""]: data.bold == false,
      })}
    >
      <div className="font-bold">{data.k}</div>
      <div>{data.val}</div>
    </div>
  );
};
