import { useLogout } from "@/hooks/useLogout";

export const LogOutBtn = () => {
  const { mutate } = useLogout();

  return (
    <a
      href="/"
      className="text-reddish mt-4 rounded-xl hover:text-red-300 transition duration-300"
      onClick={() => mutate()}
    >
      Выход
    </a>
  );
};
