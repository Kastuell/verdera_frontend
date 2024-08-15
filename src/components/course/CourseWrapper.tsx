"use client";

import { useCourses } from "@/hooks/useCourses";
import { LoaderCircle } from "lucide-react";
import { Container } from "../ui";
import { Course } from "./Course";

export const CourseWrapper = () => {
  const { data, error, isLoading } = useCourses();

  if (isLoading)
    return (
      <Container>
        <LoaderCircle className="animate-spin mx-auto justify-center items-center flex" />
      </Container>
    );
  if (error?.response?.status == 403)
    return (
      <Container className="text-center text-2xl">
        Вы ещё не являетесь студентом Verdera
      </Container>
    );
  if (error?.response?.status ?? 0 >= 500)
    return <Container className="text-center text-2xl">Ошибка</Container>;

  return (
    <Container>
      {data?.map((item) => (
        <Course key={item.img} course={item} />
      ))}
    </Container>
  );
};
