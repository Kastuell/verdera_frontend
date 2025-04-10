import { axiosInst } from "@/api/interceptors";
import { TestT } from "@/types/test.types";
import { AxiosResponse } from "axios";

export const testService = {
  async getBySlug(slug: string) {
    const response = await axiosInst.get<TestT, AxiosResponse<TestT, any>, any>(
      `/course-test/by-slug/${slug}`
    );

    return response.data;
  },

  async completeTest(data: any) {
    const response = await axiosInst.post<
      {
        isCorrect: boolean;
        curLectionSlug?: string;
        nextLectionSlug?: string;
        testSlug: boolean;
      },
      AxiosResponse<
        {
          isCorrect: boolean;
          curLectionSlug?: string;
          nextLectionSlug?: string;
          testSlug: boolean;
          wrongs: {
            questionId: number;
            answerId: number[];
            isCorrect: boolean;
            user_answer: {
              id: number;
              value: string;
            }[];
          }[];
          procent: number;
          result: {
            questionId: number;
            answerId: number[];
            isCorrect: boolean;
            user_answer: {
              answers: {
                id: number;
                value: string;
              }[];
              question: string;
            }[];
            question_options: string[]
          }[];
        },
        any
      >,
      any
    >(`/course-test/check-test`, data);

    return response.data;
  },
};
