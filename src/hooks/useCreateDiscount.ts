import { discountService } from "@/services/discount.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateDiscount() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["create discount"],
    mutationFn: (data: { email: string }) => discountService.create(data),
    onSuccess: () => {
      toast("Успешно");
    },
    onError(err) {
      // @ts-ignore
      toast(`${err.response?.data.message}`);
    },
  });

  return { mutate, isPending };
}
