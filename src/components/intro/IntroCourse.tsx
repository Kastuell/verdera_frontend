import { Button } from "@/components/ui/button";
import Link from "next/link";
import IntroCourseItem from "./IntroCourseItem";
import { IntroHead } from "./IntroHead";

export const IntroCourse = () => {
  const introCourseItems = [
    { title: "8", description: "Лекций" },
    { title: "20+", description: "Часов обучения" },
    { title: "1000+", description: "Проколов" },
    { title: "∞", description: "Полученного опыта" },
    { title: "Видеозанятия", description: "С практикующими преподавателями" },
    { title: "Тесты", description: "После просмотра лекций" },
    { title: "Сертификат", description: "По окончанию курса" },
  ];

  return (
    <div className="mt-20">
      <IntroHead title="Курс по обучению контурной пластике губ" />
      <div className="container xl:mt-20 mt-10 ">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:py-16 gap-12 md:gap-16 xl:gap-16">
          {introCourseItems.map((item, index) => (
            <IntroCourseItem
              index={index}
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
        <Link href={"catalog/konturnaya_plastika_gub"}>
          <Button className="mt-20" variant={"transparent"} size={"lg"}>
            Подробнее о курсе
          </Button>
        </Link>
      </div>
    </div>
  );
};
