"use client";

import { useCurrentWeeks } from "@/hooks/useCurrentWeeks";
import { Loader } from "lucide-react";
import { Week } from "./Week";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";

export const ScheduleWrapper = () => {
  const { data, isLoading } = useCurrentWeeks();

  if (isLoading) return <Loader className="animate-spin" />;

  if (data)
    return (
      <>
        <Accordion
          defaultValue={["item-1", "item-2"]}
          type="multiple"
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {data.currentWeek.week_start} - {data.currentWeek.week_end}
            </AccordionTrigger>
            <AccordionContent>
              <Week week={data.currentWeek} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {data.nextWeek.week_start} - {data.nextWeek.week_end}
            </AccordionTrigger>
            <AccordionContent>
              <Week week={data.nextWeek} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
};
