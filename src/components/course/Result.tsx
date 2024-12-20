"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Container } from "../ui";

export const Result = () => {
  const curLection = useSearchParams().get("cur-lection");
  const nextLection = useSearchParams().get("next-lection");
  const curTest = useSearchParams().get("cur-test");
  const wrongsCount = useSearchParams().get("wrongs-count");
  const result1 = JSON.parse(useSearchParams().getAll("result")[1]) as {
    answerId: number[];
    isCorrect: boolean;
    questionId: number;
    user_answer: {
      answers: {
        id: number;
        value: string;
      }[];
      question: string;
    };
    question_options: string[];
  }[];

  const { back, push } = useRouter();

  if (wrongsCount)
    return (
      <Container className="text-center mt-10">
        {parseInt(wrongsCount) == 0 ? (
          <div className="space-y-20">
            <div>
              <div className="lg:text-5xl text-4xl font-semibold">
                <span className="text-greenish">Поздравляем! </span>
                Вы прошли тест на <span className="text-greenish">100%</span>
              </div>
            </div>
            <div className="text-xl">Следующая лекция доступна для вас !</div>
            <div className="flex justify-center gap-10 flex-col lg:flex-row">
              <Button onClick={() => push("/courses")} variant={"modal"}>
                Вернуться на курс
              </Button>
              <Button onClick={() => push(`/courses/lection/${nextLection}`)}>
                Продолжить обучение
              </Button>
            </div>
          </div>
        ) : parseInt(wrongsCount) <= 2 ? (
          <div className="space-y-20">
            <div>
              <div className="lg:text-5xl text-4xl font-semibold">
                <span className="text-greenish">Поздравляем! </span>
                Вы прошли тест на{" "}
                <span className="text-greenish">
                  {10 - parseInt(wrongsCount)}0%
                </span>
              </div>
            </div>
            <div className="text-xl">Следующая лекция доступна для вас !</div>
            <div className="flex justify-center gap-10 flex-col lg:flex-row">
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
              <div className="lg:text-5xl text-4xl font-semibold">
                <span className="text-reddish">УПС! </span>
                Вы допустили ошибку в тесте
                <br /> Тест пройден на {10 - parseInt(wrongsCount)}0%
              </div>
            </div>
            <div className="text-xl">
              Прочитайте и посмотрите материалы лекции и пройдите тест заново
            </div>
            <div className="flex justify-center gap-10 flex-col lg:flex-row">
              <a href={`/courses/lection/${curLection}`}>
                <Button variant={"modal"}>Вернуться к лекции</Button>
              </a>

              <a href={`/courses/test/${curTest}`}>
                <Button>Пройти тест заново</Button>
              </a>
            </div>
          </div>
        )}
        <div className="mt-10 text-center space-y-4  lg:w-1/2 mx-auto">
          {result1.map((item, index) => (
            <div className="mt-10 space-y-4 border bg-slate-100 rounded-xl border-black p-4" key={item.questionId}>
              <div className="text-xl lg:text-3xl text-center mb-10 break-words">
                {index + 1}. {item.user_answer.question}
              </div>

              <div className="gap-2 mt-10 flex flex-col justify-center items-center">
                {item.question_options.map((it, idx) => {
                  return (
                    <div
                      key={it}
                      className={clsx({
                        ["flex items-center text-base lg:text-xl"]: true,
                        ["before:content-['✓'] text-green-500"]:
                          item.user_answer.answers.findIndex(
                            (i) => i.value == it
                          ) !== -1 && item.isCorrect,
                        ["before:content-['☓'] text-red-500"]:
                          item.user_answer.answers.findIndex(
                            (i) => i.value == it
                          ) !== -1 && !item.isCorrect,
                      })}
                    >
                      {idx+1}. {it}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
};
