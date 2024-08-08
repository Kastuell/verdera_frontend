import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";
import { CourseT } from "@/types/course.types";
import Link from "next/link";
import { Head } from "../ui";

export const CourseProgram = ({ course }: { course: CourseT }) => {
  const { data } = useProfile();

  return (
    <div className="mt-20">
      <Head center={false}>Программа курса</Head>
      <div className=" mt-20">
        {course.chapters.map((item, index, arr) => (
          <div
            key={item.name}
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
            <div className="col-span-1 ">
              <Link
                href={`courses/lection/${item.lection?.slug}`}
                className="font-bold cursor-pointer hover:underline"
              >
                {item.lection?.name && "Лекция"}
              </Link>
            </div>
            <div className="col-span-1 font-bold">
              {data?.completeTests.findIndex(
                (i) => i.testId == item.test?.id
              ) == -1 ? (
                <Link
                  href={`courses/test/${item.test?.slug}`}
                  className="cursor-pointer hover:underline"
                >
                  {item.test?.name && "Тест"}
                </Link>
              ) : (
                <p className="text-greenish">Тест</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
