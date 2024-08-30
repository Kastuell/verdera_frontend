import { courseService } from "@/services/course.service";
import { CourseT } from "@/types/course.types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useCourses() {
  const { data, error, isLoading } = useQuery<
    CourseT[],
    AxiosError,
    CourseT[],
    string[]
  >({
    queryKey: ["courses"],
    queryFn: () => courseService.getMyCourses(),
  });

  return { data, error, isLoading };
}
