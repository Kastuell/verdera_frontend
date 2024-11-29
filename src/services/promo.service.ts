import { axiosInst } from "@/api/interceptors";

export const promoService = {
  async getByName(name: string) {
    const response = await axiosInst.post<{ name: string; value: number }>(
      `/promo/${name}`
    );

    return response.data;
  },
};
