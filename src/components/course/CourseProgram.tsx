import { cn } from "@/lib/utils";
import { CourseT } from "@/types/course.types";
import Link from "next/link";
import { Head } from "../ui";

export const CourseProgram = ({ course }: { course: CourseT }) => {
  return (
    <div className="mt-20">
      <Head center={false}>Программа курса</Head>
      <div className=" mt-20">
        {course.chapters.map((item, index, arr) => (
          <div
            className={cn(
              "grid grid-cols-[repeat(15,_minmax(0,_1fr))]  border-4 border-t-0 border-primary p-8 items-center",
              {
                ["rounded-t-3xl border-t-4"]: index == 0,
                ["rounded-b-3xl"]: index == arr.length - 1,
              }
            )}
          >
            <div className="col-span-1 text-4xl font-bold">{index + 1}</div>
            <div className="col-span-12 text-xl">{item.name}</div>
            <div className="col-span-1 "><Link href={`courses/lection/${item.lection?.slug}`} className="font-bold cursor-pointer">{item.lection?.name && "Лекция"}</Link></div>
            <div className="col-span-1 ">1</div>
          </div>
        ))}
      </div>
    </div>
  );
};
