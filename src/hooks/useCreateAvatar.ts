import { userService } from "@/services/user.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

export function useCreateAvatar({
  form,
}: {
  form: UseFormReturn<
    {
      avatar: any;
    },
    any,
    undefined
  >;
}) {
  const { mutate, error } = useMutation({
    mutationKey: [`support}`],
    mutationFn: (avatar: FormData) => userService.createAvatar(avatar),
    onSuccess: () => {
      toast("Успешно отправлено");
      form.setValue("avatar", undefined);
    },
    onError(err) {
      // @ts-ignore
      console.log(`${err.response?.data.message}`);
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["get_profile"] }),
  });

  return { mutate, error };
}
