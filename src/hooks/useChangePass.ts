import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useChangePass() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["useChangePass"],
    mutationFn: (data: {
      email: string;
      password: string;
      confirmCode: string;
      code: string;
    }) => authService.changePass(data),
    onSuccess: () => {},
    onError(err) {
      // @ts-ignore
      toast(`${err.response?.data.message}`);
    },
  });

  return { mutate, isPending };
}
