"use client";

import { useBurgerMenuStore } from "@/lib/burgerMenu-store";
import { authService } from "@/services/auth.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";

export function useLogout() {
  const { changeOpen, isOpen } = useBurgerMenuStore();
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      isOpen == true && changeOpen();
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["get_profile"] }),
  });

  return { mutate };
}
