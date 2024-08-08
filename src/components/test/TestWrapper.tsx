"use client";

import { useTest } from "@/hooks/useTest";
import { useState } from "react";
import { Button, Head } from "../ui";
import { Question } from "./Question";

export const TestWrapper = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useTest(slug);

  const [curQuest, setQuest] = useState<number>(0);

  const testLength = data?.questions.length;


  const [answers, setAnswers] = useState<
    { questId: number; answerId: number }[]
  >([]);

  const validToNext = curQuest < (testLength ?? 0) - 1 && answers[curQuest] !== undefined

  const changeQuest = () => {
    if (validToNext)
      setQuest((prev) => prev + 1);
  };

  const changeAnswers = (answer: { questId: number; answerId: number }[]) => {
    const inAnswersIndex = answers.findIndex(
      (item) => item.questId == answer[0].questId
    );
    if (inAnswersIndex !== -1) {
      const prevArr = answers;
      prevArr.splice(inAnswersIndex, 1, {
        answerId: answer[0].answerId,
        questId: answer[0].questId,
      });
      setAnswers(prevArr);
    } else {
      setAnswers((prev) => prev.concat(answer));
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-1/2 mx-auto">
      <Head className="mt-5">
        Вопрос {curQuest + 1} / {testLength}
      </Head>
      <Question
        changeAnswers={changeAnswers}
        question={data?.questions[curQuest]}
      />
      <div className="mt-10">
        {curQuest !== (testLength ?? 0) - 1 ? (
          <Button disabled={!validToNext} onClick={changeQuest}>Далее</Button>
        ) : (
          <Button disabled={answers[curQuest] == undefined} onClick={() => console.log(answers)}>Завершить тест</Button>
        )}
      </div>
    </div>
  );
};
