import { testService } from "@/services/test.service";
import { TestT } from "@/types/test.types";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type TestUserT = {
  testId: number;
  userTest: { answerId: number[]; questId: number }[];
};

export function useCompleteTest() {
  const { push, refresh } = useRouter();
  const { mutate, isPending, error, data } = useMutation<
    TestT,
    AxiosError,
    any,
    unknown
  >({
    mutationKey: [`useCompleteTest`],
    mutationFn: (data: TestUserT) => testService.completeTest(data),
    onSuccess: () => {
      toast("Тест решён верно");
      refresh()
      push("/courses");
    },
    onError: () => {
      toast("Вы совершили ошибку в тесте!");
      push("/courses");
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["useCourseChapters"] }),
  });

  return { mutate, isPending, error };
}
