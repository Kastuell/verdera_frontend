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
  }) => void;
}) => {
  const [value, setValue] = useState<any>([]);
  return (
    <>
      <div className="mt-10 space-y-4">
        <div className="text-4xl text-center mb-10">{question?.item.name}</div>
        {question?.multi ? (
          <CheckboxGroup
          className=" mt-10"
            value={value}
            onChange={(value) => {
              setValue(value);
              changeAnswers({
                questId: question?.item.id ?? 0,
                // @ts-ignore
                answerId: value,
              });
            }}
            name={question.item.id.toString()}
          >
            {question.item.answers.map((item) => (
              <Checkbox key={item.id} value={item.id}>
                {item.value}
              </Checkbox>
            ))}
          </CheckboxGroup>
        ) : (
          <RadioGroup
            onValueChange={(e) =>
              changeAnswers({
                questId: question?.item.id ?? 0,
                answerId: [JSON.parse(e).id],
              })
            }
            className="space-y-10 mx-auto mt-10"
          >
            {question?.item.answers.map((item) => (
              <div
                key={item.value}
                className="flex items-center space-x-2 text-xl"
              >
                <RadioGroupItem value={JSON.stringify(item)} id={item.value} />
                <Label className="cursor-pointer" htmlFor={item.value}>
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