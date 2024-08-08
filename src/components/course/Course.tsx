import { CourseT } from "@/types/course.types";
import { CourseIntro } from "./CourseIntro";
import { CourseProgram } from "./CourseProgram";

export const Course = ({ course }: { course: CourseT }) => {
  return (
    <>
      <CourseIntro course={course} />
      <CourseProgram course={course} />
    </>
  );
};
