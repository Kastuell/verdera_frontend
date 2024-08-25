import { lectionService } from "@/services/lection.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useCompleteLection(slug: string) {
  const { push, refresh } = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: [`complete lection ${slug}`],
    mutationFn: () => lectionService.completeLection(slug),
    onSuccess: () => {
      refresh();
      toast("Лекция завершена");
      push("/courses");
    },
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ["useCourseChapters", "courses"],
      }),
  });

  return { mutate, isPending };
}
