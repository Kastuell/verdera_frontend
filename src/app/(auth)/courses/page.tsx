import { CourseWrapper } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мои курсы",
};

export default async function Page() {
  return <CourseWrapper />;
}
