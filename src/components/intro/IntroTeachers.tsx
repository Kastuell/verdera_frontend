import { Container } from "../ui";
import { IntroHead } from "./IntroHead";
import { IntroTeacherItem } from "./IntroTeacherItem";

export const IntroTeahers = () => {
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
        <ul className="flex justify-between flex-col xl:flex-row gap-14 xl:gap-0">
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
};
