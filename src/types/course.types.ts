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
  lection: null | {
    id: number,
    name: string,
    slug: string,
    materials: string[],
    source: string,
  }
  test: null | {
    id: number,
    name: string,
    slug: string,
  };
};
