import { Button } from "@/components/ui/button";
import IntroCourseItem from "./IntroCourseItem";
import { IntroHead } from "./IntroHead";

export const IntroCourse = () => {
  const introCourseItems = [
    { title: "8", description: "Лекций" },
    { title: "30", description: "Часов обучения" },
    { title: "180+", description: "Проколов" },
    { title: "∞", description: "Полученного опыта" },
  ];

  return (
    <div className="mt-20">
      <IntroHead title="Курс по обучению контурной пластики губ" />
      <div className="container xl:mt-32 mt-20 ">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:py-16 gap-12 md:gap-32 xl:gap-0">
          {introCourseItems.map((item) => (
            <IntroCourseItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
        <Button className="mt-20" variant={"transparent"} size={"lg"}>
          Подробнее о курсе
        </Button>
      </div>
    </div>
  );
};
