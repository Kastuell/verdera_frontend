"use client";

import { useBurgerMenuStore } from "@/lib/burgerMenu-store";
import { authService } from "@/services/auth.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useLogout() {
  const { push } = useRouter();
  const { changeOpen, isOpen } = useBurgerMenuStore();
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      push("/");
      isOpen == true && changeOpen();
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["get_profile"] }),
  });

  return { mutate };
}
