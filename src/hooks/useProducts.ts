import { productService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const { data, error, isLoading } = useQuery({
    queryKey: [`products`],
    queryFn: () => productService.getAll(),
  });

  return { data, error, isLoading };
}
