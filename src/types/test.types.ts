export type TestT = {
  id: number;
  name: string;
  slug: string;
  questions: QuestionT[];
};

export type QuestionT = {
  multi: boolean;
  item: {
    id: number;
    name: string;
    answers: AnswersT[];
  };
};

export type AnswersT = {
  id: number;
  value: string;
};
