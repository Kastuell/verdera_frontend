import { useLogout } from "@/hooks/useLogout";
import { LogOut } from "lucide-react";

export const LogOutIcon = () => {
  const { mutate } = useLogout()

  return (
    <a href="/">
      <LogOut
        onClick={() => mutate()}
        className="cursor-pointer transition duration-300 hover:text-red-500"
      />
    </a>
  );
};
