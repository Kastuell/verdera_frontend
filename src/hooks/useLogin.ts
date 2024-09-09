import { authService } from "@/services/auth.service";
import { IAuthForm, IAuthResponse } from "@/types/auth.types";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogin() {
  const { refresh } = useRouter();

  const { mutate, isError, error } = useMutation<
    IAuthResponse,
    AxiosError,
    IAuthForm,
    unknown
  >({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) => authService.login(data),
    onSuccess: () => {
      refresh()
      toast("Вы вошли");
    },
    onError(err) {
      // @ts-ignore
      toast(`${err.response?.data.message}`);
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['get_profile'] }),
  });

  return { mutate, isError, error };
}
