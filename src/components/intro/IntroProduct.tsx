import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const IntroProduct = () => {
  return (
    <div className="container lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start lg:gap-10">
        <h3 className="lg:hidden font-bold text-sm py-5 md:py-7 md:text-3xl">
          Тренежёр с полноценной имитацией губ
        </h3>
        <Image
          src={"/images/jpg/catalog/simulator_1.jpg"}
          alt=""
          width={2000}
          height={2000}
        />
        <div className="lg:self-center flex flex-col justify-between h-full">
          <h3 className="hidden lg:block font-bold text-3xl xl:text-4xl 2xl:text-5xl">
            Тренежер с полноценной имитацией губ
          </h3>
          <p className="leading-9 py-5 xl:text-2xl xl:leading-10 xl:py-7 2xl:leading-[3.5rem] ">
            Рады представить Вам первый в мире симуляционный тренажер с
            полноценной имитацией губ и их содержимого, позволяющий проводить
            инъекционные манипуляции с введением филлера непосредственно в
            тренажер губ благодаря инновационной технологии производства
          </p>
          <div>
            <Link href={"catalog/trenazher_s_polnocennoy_imitaciey_gub"}>
              <Button size={"lg"}>Подробнее о товаре</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
