import { courseService } from "@/services/course.service";
import { useQuery } from "@tanstack/react-query";

export function useCourseChapters(slug: string) {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: [`useCourseChapters`],
    queryFn: () => courseService.useCourseChapters(slug),
  });

  return { data, error, isLoading, isError };
}
