import { AboutItem, Container } from "@/components";
import { Metadata } from "next";
import { AboutItems } from "./about-items";

export const metadata: Metadata = {
  title: "О нас",
  description: "Стираем вероятность ошибки",
};

export default function Page() {
  return (
    <Container className="md:px-0">
      <h1 className="font-medium text-7xl hidden lg:block">У Verdera есть</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-20">
        {AboutItems.map((item, index) => (
          <AboutItem
            number={item.number ? item.number : 0}
            description={item.description}
            img={item.img}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
}
