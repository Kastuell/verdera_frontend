import { useCourseChapters } from "@/hooks/useCourseChapters";
import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";
import { CourseT } from "@/types/course.types";
import { Head } from "../ui";

export const CourseProgram = ({ course }: { course: CourseT }) => {
  const { data } = useProfile();

  const { data: chapters } = useCourseChapters(course.slug);

  return (
    <div className=" xl:mt-20">
      <Head center={false}>Программа курса</Head>
      <div className="mt-10 xl:mt-20">
        {chapters?.map((item, index, arr) => (
          <div
            key={item.name}
            className={cn(
              "flex flex-col gap-5 md:grid md:grid-rows-1 grid-cols-[repeat(15,_minmax(0,_1fr))]  border-4 border-t-0 border-primary p-4 md:p-8 md:items-center",
              {
                ["rounded-t-3xl border-t-4"]: index == 0,
                ["rounded-b-3xl"]: index == arr.length - 1,
                ["bg-slate-300"]: !item.unlocked,
              }
            )}
          >
            <div className="col-span-1 text-4xl font-bold">{index + 1}</div>
            <div className="col-span-12 md:col-span-10 xl:col-span-12 text-xl">
              {item.name}
            </div>
            <div className="col-span-2 md:col-span-4 xl:col-span-2 flex gap-5 font-bold md:grid grid-cols-2">
              <div className="col-span-1">
                {item.unlocked ? (
                  <a
                    href={`courses/lection/${item.lection?.slug}`}
                    className={cn("cursor-pointer hover:underline", {
                      ["text-greenish"]:
                        data?.completeLection.findIndex(
                          (i) => i.lectionId == item.lection?.id
                        ) !== -1,
                    })}
                  >
                    {item.lection?.name && "Лекция"}
                  </a>
                ) : (
                  <p>Лекция</p>
                )}
              </div>
              <div className="col-span-1">
                {item.unlocked ? (
                  <a
                    href={`courses/test/${item.test?.slug}`}
                    className={cn("cursor-pointer hover:underline", {
                      ["text-greenish"]:
                        data?.completeTests.findIndex(
                          (i) => i.testId == item.test?.id
                        ) !== -1,
                    })}
                  >
                    {item.test?.name && "Тест"}
                  </a>
                ) : (
                  <p>{item.test?.name && "Тест"}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
