import { authService } from "@/services/auth.service";
import { IAuthForm, IAuthResponse } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogin() {
  const { push } = useRouter();

  const { mutate, isError, error } = useMutation<
    IAuthResponse,
    AxiosError,
    IAuthForm,
    unknown
  >({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) => authService.login(data),
    onSuccess: () => {
      push("/profile");
    },
    onError: () => {
      // @ts-ignore
      toast("Неправильный пароль")
    }
  });

  return { mutate, isError, error };
}
