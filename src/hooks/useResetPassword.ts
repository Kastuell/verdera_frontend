import { authService } from "@/services/auth.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useResetPassword() {
  const { push } = useRouter();
  const { mutate, error, isPending } = useMutation({
    mutationKey: [`useResetPassword`],
    mutationFn: (data: { password: string; code: string; email: string }) =>
      authService.resetPassword(data),
    onSuccess: () => {
      push("/profile");
      toast("Пароль успешно сменён");
    },
    onError: () => {
      // @ts-ignore
      toast(`${err.response?.data.message}`);
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["get_profile"] }),
  });

  return { mutate, error, isPending };
}
