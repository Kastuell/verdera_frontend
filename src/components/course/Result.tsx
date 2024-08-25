"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button, Container } from "../ui";

export const Result = () => {
  const result = useSearchParams().get("result");
  const curLection = useSearchParams().get("cur-lection");
  const nextLection = useSearchParams().get("next-lection");
  const curTest = useSearchParams().get("cur-test");

  const { back, push } = useRouter();

  console.log(nextLection)

  return (
    <Container className="text-center mt-10">
      {result == "true" ? (
        <div className="space-y-20">
          <div>
            <div className="text-5xl font-semibold">
              <span className="text-greenish">Поздравляем! </span>
              Вы прошли тест на <span className="text-greenish">100%</span>
            </div>
          </div>
          <div className="text-xl">Следующая лекция доступна для вас !</div>
          <div className="flex justify-between gap-10">
            <Button onClick={() => push("/courses")} variant={"modal"}>
              Вернуться на курс
            </Button>
            <Button onClick={() => push(`/courses/lection/${nextLection}`)}>
              Продолжить обучение
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-20">
          <div className="text-center">
            <div className="text-5xl font-semibold">
              <span className="text-reddish">УПС!</span>
              Вы не допустили ошибку в тесте
            </div>
          </div>
          <div className="text-xl">
            Прочитайте и посмотрите материалы лекции и пройдите тест заново
          </div>
          <div className="flex justify-center gap-10">
            <a href={`/courses/lection/${curLection}`}>
              <Button variant={"modal"}>Вернуться к лекции</Button>
            </a>

            <a href={`/courses/test/${curTest}`}>
              <Button>Пройти тест заново</Button>
            </a>
          </div>
        </div>
      )}
    </Container>
  );
};
