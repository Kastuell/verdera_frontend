import { lectionService } from "@/services/lection.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCompleteLection(slug: string) {
  const { mutate, isPending } = useMutation({
    mutationKey: [`complete lection ${slug}`],
    mutationFn: () => lectionService.completeLection(slug),
    onSuccess: () => {
      toast("Лекция завершена");
    },
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ["useCourseChapters", "courses"],
      }),
  });

  return { mutate, isPending };
}
