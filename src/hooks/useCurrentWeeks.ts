import { scheduleService } from "@/services/schedule.service";
import { useQuery } from "@tanstack/react-query";

export function useCurrentWeeks() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: [`currentWeeks`],
    queryFn: () => scheduleService.getCurrentWeeks(),
  });

  return { data, error, isLoading, isError };
}
