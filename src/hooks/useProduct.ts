import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'


export function useProductBySlug(slug: string) {

    const { data, error, isLoading } = useQuery({
        queryKey: [`product ${slug}`],
        queryFn: () => productService.getBySlug(slug)
    })

    return { data, error, isLoading }
}