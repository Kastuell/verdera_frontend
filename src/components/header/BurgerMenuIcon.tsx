import { useBurgerMenuStore } from "@/lib/burgerMenu-store";
import { Menu } from "lucide-react";

export const BurgerMenuIcon = () => {
  const { changeOpen } = useBurgerMenuStore();
  return (
    <Menu
      onClick={changeOpen}
      className="md:hidden justify-self-end"
      size={40}
    />
  );
};
