import { testService } from "@/services/test.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type TestUserT = {
  testId: number;
  userTest: { answerId: number[]; questId: number }[];
};

export function useCompleteTest() {
  const { push } = useRouter();
  const { mutate, isPending, error } = useMutation({
    mutationKey: [`useCompleteTest`],
    mutationFn: (data: TestUserT) => testService.completeTest(data),
    onSuccess: (data) => {
      if (data?.isCorrect) {
        toast("Тест решён верно");
        push(
          `/courses/test/result?result=true&next-lection=${data?.nextLectionSlug}`
        );
      } else {
        toast("Вы совершили ошибку в тесте!");
        push(
          `/courses/test/result?result=false&cur-lection=${data?.curLectionSlug}&cur-test=${data?.testSlug}`
        );
      }
    },

    onSettled: (data) =>
      queryClient.invalidateQueries({
        queryKey: ["useCourseChapters", `test ${data?.testSlug}`],
      }),
  });

  return { mutate, isPending, error };
}
