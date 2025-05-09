import { orderService, PlaceOrderT } from "@/services/order.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useCreateOrder() {
  const { push } = useRouter();
  const { mutate, isPending, error } = useMutation({
    mutationKey: ["create order"],
    mutationFn: (data: PlaceOrderT) => orderService.placeOrder(data),
    onSuccess: ({ confirmation }) => {
      push(confirmation.confirmation_url);
    },
    onError: () => {
      console.log(error)
    }
  });

  return { mutate, isPending };
}
