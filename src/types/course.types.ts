import { LectionT } from "./lection.types";
import { TestT } from "./test.types";

export type CourseT = {
  name: string;
  slug: string;
  img: string;
  description: CourseDescriptionT;
  chapters: CourseChapterT[];
};

export type CourseDescriptionT = {
  after: {
    items: string[];
    title: string;
  };
  pluses: string[];
  features: {
    items: string[];
    title: string;
  };
  includes: {
    items: string[];
    title: string;
  };
};

export type CourseChapterT = {
  id: number;
  name: string;
  lection: LectionT | undefined;
  test: TestT | undefined;
};
