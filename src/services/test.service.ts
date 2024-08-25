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
        },
        any
      >,
      any
    >(`/course-test/check-test`, data);

    return response.data;
  },
};
