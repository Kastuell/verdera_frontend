"use client";

import { useCompleteTest } from "@/hooks/useCompleteTest";
import { useTest } from "@/hooks/useTest";
import { useState } from "react";
import { Button, Head } from "../ui";
import { Question } from "./Question";

export const TestWrapper = ({ slug }: { slug: string }) => {
  const { data, isLoading, error } = useTest(slug);

  const { mutate } = useCompleteTest();

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

    const changeQuest = () => {
      if (validToNext) setQuest((prev) => prev + 1);
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
            <Button disabled={!validToNext} onClick={changeQuest}>
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
    );
  }
};
