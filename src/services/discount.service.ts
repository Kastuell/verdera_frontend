import { axiosInst } from "@/api/interceptors";

type DiscountT = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

export const discountService = {
  async create(data: { email: string }) {
    const res = await axiosInst.post<DiscountT>("/discount", data);

    return res.data;
  },
};
