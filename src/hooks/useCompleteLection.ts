import { lectionService } from "@/services/lection.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export function useCompleteLection(slug: string) {
  const { mutate, isPending } = useMutation<any, AxiosError, string, unknown>({
    mutationKey: ["useCompleteLection"],
    mutationFn: () => lectionService.completeLection(slug),
    onSuccess: () => {
      toast("Лекция завершена");
      queryClient.invalidateQueries({ queryKey: ["useCourseChapters"] });
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: [`lection ${slug}`] });
      queryClient.invalidateQueries({ queryKey: ["get_profile"] });
    },
    onError(err) {
      // @ts-ignore
      toast(`${err.response?.data.message}`);
    },
    
  });

  return { mutate, isPending };
}
