import { useScheduleStore } from "@/lib/schedule-store";
import { AddTimeT, scheduleService } from "@/services/schedule.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useAddTime() {
  const { changeMode } = useScheduleStore();

  const { mutate, isPending } = useMutation({
    mutationKey: ["useAddTime"],
    mutationFn: (data: AddTimeT) => scheduleService.createTime(data),
    onSuccess() {
      toast("Успешно!");
      changeMode();
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
