import { CourseT } from "@/types/course.types";
import { Button, Head } from "../ui";
import Image from "next/image";

export const CourseIntro = ({ course }: { course: CourseT }) => {
  return (
    <div>
      <Head center={false}>{course.name}</Head>
      <div className="grid grid-cols-7 mt-20  gap-10">
        <div className="col-span-4 grid grid-cols-2 gap-10">
          <div className="border-4 border-primary rounded-2xl p-5">
            <h3 className="text-greenish font-bold text-3xl">
              {course.description.includes.title}:
            </h3>
            <ul className="flex flex-col justify-between h-[220px] mt-4 list-disc list-inside">
              {course.description.includes.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border-4 border-primary rounded-2xl p-5">
            <h3 className="text-greenish font-bold text-3xl">
              {course.description.features.title}
            </h3>
            <ul className="flex flex-col justify-between h-[220px] mt-4 list-disc list-inside">
              {course.description.features.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          <div className="relative h-full">
            <Image
              src={`/images/jpg/catalog/${course.img}.jpg`}
              fill
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="row-span-2 col-span-4 border-4 border-primary rounded-2xl p-5">
          <h3 className="text-greenish font-bold text-3xl">
            {course.description.after.title}
          </h3>
          <div className="mt-4 leading-[3rem]">
            {course.description.after.items[0]}
          </div>
        </div>
        <div className="col-span-3 row-span-2 grid grid-rows-10">
          <Button className="rounded-2xl row-span-4">Начать обучение</Button>
          <ul className="list-image-[url(/images/png/marker.png)] list-inside text-xl flex flex-col justify-between row-span-6">
            {course.description.pluses.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
