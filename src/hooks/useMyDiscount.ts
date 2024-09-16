import { discountService } from "@/services/discount.service";
import { useQuery } from "@tanstack/react-query";

export function useMyDiscount() {
  const { isPending, error, data } = useQuery({
    queryKey: ["useMyDiscount"],
    queryFn: () => discountService.getMyDiscount(),
  });

  return { data, isPending };
}
