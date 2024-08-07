import { lectionService } from "@/services/lection.service";
import { useQuery } from "@tanstack/react-query";

export function useLectionBySlug(slug: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: [`lection`],
    queryFn: () => lectionService.getBySlug(slug),
  });

  return { data, error, isLoading };
}
