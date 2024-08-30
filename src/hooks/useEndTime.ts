import { scheduleService } from "@/services/schedule.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useEndTime() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["useEndTime"],
    mutationFn: (timeId: number) => scheduleService.endTime(timeId),
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
