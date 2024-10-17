import { orderService } from "@/services/order.service";
import { AllOrdersT } from "@/types/order.types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useAllOrders() {
  const { data, error, isLoading } = useQuery<
    AllOrdersT[],
    AxiosError,
    AllOrdersT[],
    string[]
  >({
    queryKey: ["useAllOrders"],
    queryFn: () => orderService.getAllOrders(),
  });

  return { data, error, isLoading };
}
