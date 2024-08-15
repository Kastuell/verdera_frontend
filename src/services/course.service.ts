import { axiosInst } from "@/api/interceptors";
import { CourseChapterT, CourseT } from "@/types/course.types";
import { AxiosResponse } from "axios";

export const courseService = {
  async getMyCourses() {
    const response = await axiosInst.get<
      CourseT[],
      AxiosResponse<CourseT[], any>,
      any
    >(`/course/my-courses/get`, {});

    return response.data;
  },

  async useCourseChapters(courseSlug: string) {
    const response = await axiosInst.get<
      CourseChapterT[],
      AxiosResponse<CourseChapterT[], any>,
      any
    >(`/course-chapter/course-slug/${courseSlug}`);

    return response.data;
  },
};
