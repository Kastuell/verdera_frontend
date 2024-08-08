import { testService } from "@/services/test.service";
import { useQuery } from "@tanstack/react-query";

export function useTest(slug: string, n: number = 10) {
  const { data, error, isLoading } = useQuery({
    queryKey: [`test ${slug}`],
    queryFn: () => testService.getBySlug(`${slug}?take=${n}`),
  });

  return { data, error, isLoading };
}
