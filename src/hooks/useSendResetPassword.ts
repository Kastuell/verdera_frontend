import { emailService } from "@/services/email.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSendResetPassword() {
  const { mutate, error } = useMutation({
    mutationKey: [`useSendResetPassword`],
    mutationFn: (email: string) => emailService.sendResetPass(email),
    onSuccess: () => {
      toast("Вам на почту пришло письмо");
    },
    onError(err) {
      // @ts-ignore
      toast(`${err.response?.data.message}`);
    },
  });

  return { mutate, error };
}
