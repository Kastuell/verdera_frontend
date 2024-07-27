import { Button } from "@/components/ui/button";
import IntroHead from "../IntroHead";
import IntroCourseItem from "./IntroCourseItem";

export default function IntroCourse() {
  const introCourseItems = [
    { title: "8", description: "Лекций" },
    { title: "30", description: "Часов обучения" },
    { title: "180+", description: "Проколов" },
    { title: "∞", description: "Полученного опыта" },
  ];

  return (
    <div className="mt-20">
      <IntroHead title="Курс по обучению контурной пластики губ" />
      <div className="container mt-32">
        <ul className="flex justify-between py-16">
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
}
