export type LectionT = {
  id: number;
  name: string;
  slug: string;
  materials: string[];
  source: string;
  courseChapter: {
    test?: {
      slug: string;
    };
  };
  courseChapterCompleted: boolean;
};
