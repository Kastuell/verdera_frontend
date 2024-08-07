import { orderService } from "@/services/order.service";
import { useQuery } from "@tanstack/react-query";

export function useMyOrders() {
  const { data, error, isLoading } = useQuery({
    queryKey: [`my_orders`],
    queryFn: async () => orderService.getMyOrders(),
  });

  return { data, error, isLoading };
}
