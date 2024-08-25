"use client";

import { useProfile } from "@/hooks/useProfile";
import { useScheduleStore } from "@/lib/schedule-store";

export const AddTimeButton = ({ children }: { children?: React.ReactNode }) => {
  const { changeMode } = useScheduleStore();

  const { data } = useProfile();

  if (data?.role == "TEACHER" || data?.role == "ADMIN")
    return (
      <button
        onClick={() => changeMode()}
        className="border-2 border-primary rounded-xl font-bold py-5 px-8"
      >
        {children}
      </button>
    );
};
