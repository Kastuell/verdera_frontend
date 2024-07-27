import { axiosInst } from "@/api/interceptors";
import { ProductT } from "@/types/product.types";

export const productService = {
  async getAll() {
    const response = await axiosInst.get<ProductT[]>(`/product`);

    return response.data;
  },

  async getByCategorySlug(categorySlug: string) {
    const response = await axiosInst.get<ProductT[]>(
      `/product/by-category/${categorySlug}`
    );

    return response.data;
  },

  async getBySlug(slug: string) {
    const response = await axiosInst.get<ProductT>(`/product/by-slug/${slug}`);

    return response.data;
  },
};
