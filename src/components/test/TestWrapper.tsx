"use client";

import { useCompleteTest } from "@/hooks/useCompleteTest";
import { useTest } from "@/hooks/useTest";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Head } from "../ui";
import { Question } from "./Question";

export const TestWrapper = ({ slug }: { slug: string }) => {
  const { back } = useRouter();

  const { data, isLoading, error } = useTest(slug, 10);

  const { mutate, data: qwe } = useCompleteTest();

  const [curQuest, setQuest] = useState<number>(0);
  const [answers, setAnswers] = useState<
    { questId: number; answerId: number[] }[]
  >([]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Вам сюда рановато)</div>;

  if (data) {
    const testLength = data.questions.length;

    const validToNext =
      curQuest < (testLength ?? 10) - 1 && answers[curQuest] !== undefined;

    const validToPrev = curQuest !== 0;
    console.log(validToPrev);

    const changeQuest = (payload: "prev" | "next") => {
      if (payload == "next") {
        if (validToNext) {
          setQuest((prev) => prev + 1);
        }
      } else if (payload == "prev") {
        if (validToPrev) {
          setQuest((prev) => prev - 1);
        }
      }
    };

    const handleClick = () => {
      console.log(answers);
      mutate({
        testId: data.id,
        userTest: answers,
      });
    };

    const changeAnswers = (answer: {
      questId: number;
      answerId: number[];
      isMulti?: boolean;
    }) => {
      const { answerId, questId, isMulti } = answer;
      const inAnswersIndex = answers.findIndex(
        (item) => item.questId == answer.questId
      );
      if (inAnswersIndex !== -1) {
        const prevArr = answers;
        if (isMulti) {
          prevArr.splice(inAnswersIndex, 1, {
            answerId: answerId,
            questId: questId,
          });
        } else {
          prevArr.splice(inAnswersIndex, 1, {
            answerId: answerId,
            questId: questId,
          });
        }
      } else {
        setAnswers((prev) =>
          prev.concat({ answerId: answerId, questId: questId })
        );
      }
    };

    return (
      <div>
        <div
          className="lg:text-2xl text-xl cursor-pointer inline-block group"
          onClick={() => {
            curQuest == 0 ? back() : changeQuest("prev");
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10">
              <MoveLeft className="translate-x-4 group-hover:translate-x-0 transition duration-300" />
            </div>
            <div className="group-hover:underline transition duration-300">
              {curQuest == 0 ? "Выйти" : "Предыдущий вопрос"}
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 mx-auto">
          <Head className="mt-5">
            Вопрос {curQuest + 1} / {testLength}
          </Head>
          <Question
            changeAnswers={changeAnswers}
            question={data.questions[curQuest]}
          />
          <div className="mt-10">
            {curQuest !== (testLength ?? 0) - 1 ? (
              <Button
                disabled={!validToNext}
                onClick={() => changeQuest("next")}
              >
                Далее
              </Button>
            ) : (
              <Button
                disabled={answers[curQuest] == undefined}
                onClick={() => handleClick()}
              >
                Завершить тест
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
};
