import { CourseT } from "@/types/course.types";
import Image from "next/image";
import { Button, Head } from "../ui";

export const CourseIntro = ({ course }: { course: CourseT }) => {
  return (
    <div>
      <Head center={false}>{course.name}</Head>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-7 mt-10 xl:mt-20  gap-10">
        <div className="xl:col-span-4 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:border-4 border-primary rounded-2xl md:p-5">
            <h3 className="text-greenish font-bold text-lg md:text-3xl">
              {course.description.includes.title}:
            </h3>
            <ul className="flex flex-col justify-between gap-5 md:gap-0 text-sm h-auto md:h-[220px] mt-4 md:list-disc list-inside">
              {course.description.includes.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="md:border-4 border-primary rounded-2xl md:p-5">
            <h3 className="text-greenish font-bold text-lg md:text-3xl">
              {course.description.features.title}:
            </h3>
            <ul className="flex flex-col justify-between gap-5 md:gap-0 text-sm h-auto md:h-[220px] mt-4 md:list-disc list-inside">
              {course.description.features.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="xl:col-span-3 hidden xl:block">
          <div className="relative h-full">
            <Image
              src={`/images/jpg/catalog/${course.img}.jpg`}
              fill
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="xl:row-span-2 xl:col-span-4 md:col-span-2 md:border-4 border-primary rounded-2xl md:p-5 mt-10 md:mt-0">
          <h3 className="text-greenish font-bold text-lg md:text-3xl">
            {course.description.after.title}
          </h3>
          <div className="mt-4 leading-[3rem]">
            {course.description.after.items[0]}
          </div>
        </div>
        <div className="col-span-3 md:grid-cols-2 xl:grid-cols-1 md:gap-5 xl:gap-0 row-span-2 grid grid-rows-10 mt-10 md:mt-0">
          <Button className="rounded-2xl row-span-4">Начать обучение</Button>
          <ul className="list-image-[url(/images/png/marker.png)] list-inside text-sm gap-5 xl:text-xl flex flex-col justify-between row-span-6">
            {course.description.pluses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
