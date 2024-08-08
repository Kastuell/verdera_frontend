"use client";

import { QuestionT } from "@/types/test.types";
import { Label, RadioGroup, RadioGroupItem } from "../ui";

export const Question = ({
  question,
  changeAnswers,
}: {
  question: QuestionT | undefined;
  changeAnswers: (
    answer: {
      questId: number;
      answerId: number;
    }[]
  ) => void;
}) => {
  return (
    <>
      <div className="mt-10">
        <div className="text-4xl text-center">{question?.name}</div>
        <RadioGroup
          onValueChange={(e) =>
            changeAnswers([
              // @ts-ignore
              { questId: question?.id ?? 0, answerId: JSON.parse(e).id },
            ])
          }
          className="space-y-10 mx-auto mt-10"
        >
          {question?.answers.map((item) => (
            <div
              key={item.value}
              className="flex items-center space-x-2 text-xl"
            >
              <RadioGroupItem value={JSON.stringify(item)} id={item.value} />
              <Label className="cursor-pointer" htmlFor={item.value}>{item.value}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );
};
