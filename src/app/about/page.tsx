import Container from "@/components/ui/Container";
import { Metadata } from "next";
import AboutItem from "./_components/AboutItem";
import { AboutItems } from "./about-items";

export const metadata: Metadata = {
  title: "О нас",
  description: "Стираем вероятность ошибки",
};

export default function Page() {
  return (
    <Container>
      <h1 className="font-medium text-7xl">У Verdera есть</h1>
      <div className="grid grid-cols-2 gap-10 mt-20">
        {AboutItems.map((item) => (
          <AboutItem
            number={item.number ? item.number : 0}
            description={item.description}
            img={item.img}
            title={item.title}
            key={item.description}
          />
        ))}
      </div>
    </Container>
  );
}
