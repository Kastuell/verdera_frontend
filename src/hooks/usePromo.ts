import { promoService } from "@/services/promo.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function usePromo() {
  const { mutate, error, isPending, isSuccess, data } = useMutation({
    mutationKey: [`promo`],
    mutationFn: (name: string) =>
      promoService.getByName(name.length == 0 ? "1" : name),
    onSuccess: () => {
      toast("Промокод активирован");
    },
    onError: (err) => {
      // @ts-ignore
      toast(`${err.response?.data.message}`);
    },
  });

  return { mutate, error, isPending, isSuccess, data };
}
