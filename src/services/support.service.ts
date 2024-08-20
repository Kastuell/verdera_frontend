import { axiosInst } from "@/api/interceptors";
import { SupportT } from "@/types/support.types";

export const supportService = {
  async send(data: SupportT) {
    const response = await axiosInst.post(`/support`, data);

    return response.data;
  },
};
