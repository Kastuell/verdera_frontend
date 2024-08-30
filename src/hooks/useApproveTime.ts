import { scheduleService } from "@/services/schedule.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useApproveTime() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["useApproveTime"],
    mutationFn: (timeId: number) => scheduleService.approveTime(timeId),
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
