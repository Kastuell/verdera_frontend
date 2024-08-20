import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useAvatar(id: number) {
  const { data, error, isLoading } = useQuery({
    queryKey: [`user_avatar ${id}`],
    queryFn: () => userService.getAvatar(id),
  });

  return { data, error, isLoading };
}
