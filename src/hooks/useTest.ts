import { testService } from "@/services/test.service";
import { TestT } from "@/types/test.types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useTest(slug: string, n: number = 10) {
  const { data, error, isLoading } = useQuery<TestT, AxiosError>({
    queryKey: [`test ${slug}`],
    queryFn: () => testService.getBySlug(`${slug}?take=${n}`),
  });

  return { data, error, isLoading };
}
