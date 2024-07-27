import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";

export default function LogOutIcon() {
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
  });

  return (
    <a href="/">
      <LogOut
        onClick={() => mutate()}
        className="cursor-pointer transition duration-300 hover:text-red-500"
      />
    </a>
  );
}
