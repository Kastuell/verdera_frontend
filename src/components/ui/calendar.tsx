"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ru } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      startMonth={
        new Date(new Date().setDate(new Date().getDate() - 100 * 365))
      }
      endMonth={new Date(new Date().setDate(new Date().getDate() - 18 * 365))}
      hideNavigation
      captionLayout="dropdown"
      defaultMonth={
        new Date(new Date().setDate(new Date().getDate() - 18 * 365))
      }
      locale={ru}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium hidden",
        // nav: "space-x-1 flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "size-4 bg-transparent p-0 opacity-50 hover:opacity-100",
          "absolute left-1"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "size-4 bg-transparent p-0 opacity-50 hover:opacity-100",
          "absolute right-1"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        week: "grid grid-cols-7 w-full mt-2",
        day: "size-9 flex justify-center items-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-greeenish [&:has([aria-selected])]:bg-greeenish first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        range_end: "day-range-end",
        selected: "bg-greenish hover:bg-greenish",
        // today: "bg-greeenish",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-greeenish aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle: "aria-selected:bg-greeenish",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === "left") {
            return <ChevronLeft className="h-4 w-4" />;
          }
          return <ChevronRight className="h-4 w-4" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
