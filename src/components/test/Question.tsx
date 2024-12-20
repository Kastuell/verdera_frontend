"use client";
import { QuestionT } from "@/types/test.types";
import { useState } from "react";
import { Checkbox, CheckboxGroup } from "rsuite";
import { Label, RadioGroup, RadioGroupItem } from "../ui";
export const Question = ({
  question,
  changeAnswers,
}: {
  question: QuestionT | undefined;
  changeAnswers: (answer: {
    questId: number;
    answerId: number[];
    isMulti?: boolean;
    user_answer: {
      id: number;
      value: string;
    }[];
  }) => void;
}) => {
  const [val, setValue] = useState<any>([]);
  if (question)
    return (
      <>
        <div className="mt-10 space-y-4">
          <div className="lg:text-4xl text-center mb-10 text-3xl break-words">
            {question.item.name}
            {question.multi && "(несколько вариантов ответа)"}
          </div>
          {question.multi ? (
            <CheckboxGroup
              className=" mt-10 space-y-10"
              value={val}
              onChange={(value) => {
                setValue(value);
                const user_answer = value.map((it) => {
                  return {
                    id: it as number,
                    value: val,
                  };
                });
                changeAnswers({
                  questId: question.item.id ?? 0,
                  // @ts-ignore
                  answerId: value,
                  user_answer: user_answer,
                });
              }}
              name={question.item.id.toString()}
            >
              {question.item.answers.map((item) => (
                <Checkbox
                  className="text-xl items-center flex"
                  key={item.id}
                  value={item.id}
                >
                  {item.value}
                </Checkbox>
              ))}
            </CheckboxGroup>
          ) : (
            <RadioGroup
              onValueChange={(e) =>
                changeAnswers({
                  questId: question.item.id ?? 0,
                  answerId: [JSON.parse(e).id],
                  user_answer: [JSON.parse(e)],
                })
              }
              className="gap-10 mx-auto mt-10 "
            >
              {question.item.answers.map((item) => (
                <div
                  key={item.value}
                  className="flex items-center space-x-2 text-xl"
                >
                  <RadioGroupItem
                    value={JSON.stringify(item)}
                    id={item.value}
                  />
                  <Label
                    className="cursor-pointer text-wrap flex-1 leading-6"
                    htmlFor={item.value}
                  >
                    {item.value}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        </div>
      </>
    );
};
