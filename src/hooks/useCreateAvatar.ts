import { userService } from "@/services/user.service";
import { useMutation } from "@tanstack/react-query";
import { File } from "buffer";
import { toast } from "sonner";

export function useCreateAvatar() {
  const { mutate, error } = useMutation({
    mutationKey: [`support}`],
    mutationFn: (avatar: File) => userService.createAvatar(avatar),
    onSuccess: () => {
      toast("Успешно отправлено");
    },
    onError: () => {
      toast("Произошла ошибка");
    },
  });

  return { mutate, error };
}
