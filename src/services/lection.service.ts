import { axiosInst } from "@/api/interceptors";
import { LectionT } from "@/types/lection.types";
import { AxiosResponse } from "axios";

export const lectionService = {
  async getBySlug(slug: string) {
    const response = await axiosInst.get<
      LectionT,
      AxiosResponse<LectionT, any>,
      any
    >(`/lection/by-slug/${slug}`);

    return response.data;
  },

  async completeLection(slug: string) {
    const response = await axiosInst.post<any>(
      `lection/complete-lection/${slug}`
    );

    return response.data;
  },
};
