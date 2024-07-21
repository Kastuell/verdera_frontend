import { axiosClassic } from "@/api/interceptors"
import { ProductT } from "@/types/product.types"

export const productService = {
    async getAll() {
        const response = await axiosClassic.get<ProductT[]>(`/product`)

        return response
    },

    async getByCategorySlug(categorySlug: string){
        const response = await axiosClassic.get<ProductT[]>(`/product/by-category/${categorySlug}`)

        return response
    }
}