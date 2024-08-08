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
};
