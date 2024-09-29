import { supportService } from "@/services/support.service";
import { SupportT } from "@/types/support.types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSupport() {
  const { mutate, error } = useMutation({
    mutationKey: [`support`],
    mutationFn: (qwe: SupportT) => supportService.send(qwe),
    onSuccess: () => {
      toast("Успешно отправлено");
    },
    onError: () => {
      toast("Произошла ошибка");
    },
  });

  return { mutate, error };
}

export function useSupportUnAuth() {
  const { mutate, error, isSuccess } = useMutation({
    mutationKey: [`support}`],
    mutationFn: (qwe: SupportT) => supportService.sendUnAuth(qwe),
    onSuccess: () => {
      toast("Успешно отправлено");
    },
    onError: () => {
      toast("Произошла ошибка");
    },
  });

  return { mutate, error, isSuccess };
}
