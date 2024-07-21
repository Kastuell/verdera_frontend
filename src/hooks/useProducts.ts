import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'


export function useProductsByCatSlug(categorySlug: string) {

    const { data, error, isLoading } = useQuery({
        queryKey: ['productsBySlug'],
        queryFn: () => productService.getByCategorySlug(categorySlug)
    })

    return { data, error, isLoading }
}