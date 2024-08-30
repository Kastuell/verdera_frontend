import { scheduleService } from "@/services/schedule.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCancelTime() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["useCancelTime"],
    mutationFn: (timeId: number) => scheduleService.cancelTime(timeId),
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
