import { Container } from "../ui";
import { IntroHead } from "./IntroHead";
import { IntroTeacherItem } from "./IntroTeacherItem";

export const IntroTeahers = () => {
  const IntroTeacherItems = [
    {
      src: "/images/png/teacher1.png",
      name: "Анастасия Лютер",
      description: "Врач-косметолог “Косметик-Сервис”",
      description1: "Образование: ФГБОУ ВО ТГМУ Минздрава России",
      description2:
        "Ординатура: Российский университет дружбы народов (Москва)",
    },
    {
      src: "/images/png/teacher2.png",
      name: "Зулейха Сурхаева",
      description: "Врач-косметолог “Косметик-Сервис”",
      description1: "Образование: ФГБОУ ВО ТГМУ Минздрава России",
      description2:
        "Ординатура: Российский университет дружбы народов (Москва)",
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
              description1={item.description1}
              description2={item.description2}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
};
