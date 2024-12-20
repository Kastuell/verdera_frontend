import { testService } from "@/services/test.service";
import { queryClient } from "@/utils/TanstackProvider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type TestUserT = {
  testId: number;
  userTest: {
    questId: number;
    answerId: number[];
    user_answer: {
      id: number;
      value: string;
    }[];
  }[];
};

export function useCompleteTest() {
  const { push } = useRouter();
  const { mutate, isPending, error, data } = useMutation({
    mutationKey: [`useCompleteTest`],
    mutationFn: (data: TestUserT) => testService.completeTest(data),
    onSuccess: (data) => {
      if (data?.wrongs.length == 0) {
        queryClient.invalidateQueries({ queryKey: ["useCourseChapters"] });
        queryClient.invalidateQueries({ queryKey: ["courses"] });
        queryClient.invalidateQueries({ queryKey: [`test ${data?.testSlug}`] });
        queryClient.invalidateQueries({ queryKey: ["get_profile"] });
        toast("Тест решён верно");
        push(
          `/courses/test/result?result=true&wrongs-count=${
            data?.wrongs.length
          }&next-lection=${data?.nextLectionSlug}&procent=${
            data?.procent
          }&result=${JSON.stringify(data?.result)}`
        );
      } else if (data?.wrongs.length <= 2) {
        toast(`Тест решён верно, с ошибками: ${data?.wrongs.length}`);
        push(
          `/courses/test/result?result=true&wrongs-count=${
            data?.wrongs.length
          }&next-lection=${data?.nextLectionSlug}&procent=${
            data?.procent
          }&result=${JSON.stringify(data?.result)}`
        );
      } else {
        toast("Вы совершили ошибку в тесте!");
        push(
          `/courses/test/result?result=false&wrongs-count=${
            data?.wrongs.length
          }&cur-lection=${data?.curLectionSlug}&cur-test=${
            data?.testSlug
          }&procent=${data?.procent}&result=${JSON.stringify(data?.result)}`
        );
      }
    },
  });

  return { mutate, isPending, error, data };
}
