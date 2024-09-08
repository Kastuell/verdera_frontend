import { authService } from "@/services/auth.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useConfirmEmail() {
  const { push } = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: ["confirmEmail"],
    mutationFn: (data: { email: string; code: string }) =>
      authService.emailConfirm(data.email, data.code),
    onSuccess() {
      toast("Успешно!");
      push("/profile");
    },
    onError(err) {
      // @ts-ignore
      toast(`${err.response?.data.message}`);
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["get_profile"] }),
  });

  return { mutate, isPending };
}
