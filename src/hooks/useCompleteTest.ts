import { testService } from "@/services/test.service";
import { TestT } from "@/types/test.types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type TestUserT = {
  testId: number;
  userTest: { answerId: number[]; questId: number }[];
};

export function useCompleteTest() {
  const { push } = useRouter();
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
      push("/courses");
    },
    onError: () => {
      console.log(error?.message);
      toast("Вы совершили ошибку в тесте!");
    },
  });

  return { mutate, isPending, error };
}
