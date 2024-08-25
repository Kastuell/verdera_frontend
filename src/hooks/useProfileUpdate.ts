import { userService } from "@/services/user.service";
import { IProfileForm } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useProfileUpdate() {
  const {push} = useRouter()
  const { mutate, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IProfileForm) => userService.update(data),
    onSuccess() {
      toast("Успешно!");
      push("/")
    },
  });

  return { mutate, isPending };
}
