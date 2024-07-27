import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
  const { data, error, isLoading } = useQuery({
    queryKey: [`get_profile`],
    queryFn: () => userService.getProfile(),
  });

  return { data, error, isLoading };
}
