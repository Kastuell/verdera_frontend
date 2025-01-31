import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const IntroProduct = () => {
  return (
    <div className="container mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start lg:gap-10">
        <h3 className="lg:hidden font-bold text-lg py-5 lg:py-7 lg:text-3xl">
          Тренежёр с полноценной имитацией губ
        </h3>
        <Image
          src={"/images/jpg/catalog/simulator_1.jpg"}
          alt=""
          width={2000}
          height={2000}
          className="rounded-2xl"
        />
        <div className="lg:self-center flex flex-col justify-between h-full">
          <h3 className="hidden lg:block font-bold text-xl">
            Тренежер с полноценной имитацией губ
          </h3>
          <p className="lg:text-xl leading-8 lg:leading-[45px]">
            Рады представить Вам первый в мире симуляционный тренажер с
            полноценной имитацией губ и их содержимого, позволяющий проводить
            инъекционные манипуляции с введением филлера непосредственно в
            тренажер губ благодаря инновационной технологии производства
          </p>
          <div>
            <Link href={"catalog/trenazher_s_polnocennoy_imitaciey_gub_pro"}>
              <Button variant={"transparent"} size={"lg"}>Подробнее о товаре</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
