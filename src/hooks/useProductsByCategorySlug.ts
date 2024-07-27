import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'


export function useProductsByCategorySlug(categorySlug: string) {

    const { data, error, isLoading } = useQuery({
        queryKey: [`products ${categorySlug}`],
        queryFn: () => productService.getByCategorySlug(categorySlug)
    })

    return { data, error, isLoading }
}