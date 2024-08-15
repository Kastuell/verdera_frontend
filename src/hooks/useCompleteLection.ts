import { lectionService } from "@/services/lection.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useCompleteLection(slug: string) {
  const { push } = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: [`complete lection ${slug}`],
    mutationFn: () => lectionService.completeLection(slug),
    onSuccess: () => {
      toast('Лекция завершена')
      push('/courses')
    },
  });

  return { mutate, isPending };
}
