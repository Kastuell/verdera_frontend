"use client"

import { useCourses } from "@/hooks/useCourses";
import { Container } from "../ui";
import { Course } from "./Course";

export const CourseWrapper = () => {
  const { data } = useCourses();

  console.log(data)
  return (
    <Container>
      {data?.map((item) => (
        <Course key={item.img} course={item} />
      ))}
    </Container>
  );
};
