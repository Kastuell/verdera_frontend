import { axiosInst } from "@/api/interceptors";
import { CourseT } from "@/types/course.types";
import { AxiosResponse } from "axios";

export const courseService = {
  async getMyCourses() {
    const response = await axiosInst.get<
      CourseT[],
      AxiosResponse<CourseT[], any>,
      any
    >(`/course/my-courses/get`, {});

    if (response.status == 401) return [];

    return response.data;
  },
};
