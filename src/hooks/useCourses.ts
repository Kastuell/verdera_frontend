import { courseService } from '@/services/course.service'
import { useQuery } from '@tanstack/react-query'


export function useCourses() {
    const { data, error, isLoading } = useQuery({
        queryKey: [`courses`],
        queryFn: () => courseService.getMyCourses()
    })

    return { data, error, isLoading }
}