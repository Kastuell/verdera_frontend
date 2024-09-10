import { authService } from "@/services/auth.service";
import { emailService } from "@/services/email.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useResetPassword() {
  const { mutate, error, isPending } = useMutation({
    mutationKey: [`useResetPassword`],
    mutationFn: (data: { password: string; code: string; email: string }) => authService.resetPassword(data),
    onSuccess: () => {
      toast("Пароль успешно сменён");
    },
    onError: () => {
      toast("Произошла ошибка");
    },
  });

  return { mutate, error, isPending };
}
