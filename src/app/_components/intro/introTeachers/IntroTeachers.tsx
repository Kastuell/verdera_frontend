import Container from "@/components/ui/Container";
import IntroHead from "../IntroHead";
import IntroTeacherItem from "./IntroTeacherItem";

export default function IntroTeahers() {
  const IntroTeacherItems = [
    {
      src: "/images/png/teacher1.png",
      name: "Анастасия Лютер",
      description: "Врач-косметолог “Cosmetic Service”",
    },
    {
      src: "/images/png/teacher2.png",
      name: "Зулейха Сурхаева",
      description: "Врач-косметолог “Cosmetic Service”",
    },
  ];

  return (
    <div className="mt-20">
      <IntroHead title="Преподаватели" />
      <Container>
        <ul className="flex justify-between">
          {IntroTeacherItems.map((item) => (
            <IntroTeacherItem
              key={item.src}
              src={item.src}
              name={item.name}
              description={item.description}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
}
