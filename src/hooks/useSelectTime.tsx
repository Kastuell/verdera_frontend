import { scheduleService } from "@/services/schedule.service";
import { ScheduleTimeT } from "@/types/schedule.types";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export function useSelectTime() {
  const { mutate, isPending, error } = useMutation<
    ScheduleTimeT[],
    AxiosError,
    number,
    unknown
  >({
    mutationKey: ["useAddTime"],
    mutationFn: (timeId: number) => scheduleService.selectTime(timeId),
    onSuccess() {
      toast("Успешно!");
    },
    onError(err) {
      // @ts-ignore
      toast(`${err.response?.data.message}`);
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["currentWeeks"] }),
  });

  return { mutate, isPending };
}
