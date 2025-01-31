import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const IntroProduct = () => {
  return (
    <div className="container lg:mt-10">
      <div className="grid grid-cols-1 2xl:grid-cols-2 text-center 2xl:text-start 2xl:gap-10">
        <h3 className="2xl:hidden font-bold text-lg py-5 md:py-7 min-[588px]:text-3xl">
          Тренежёр с полноценной имитацией губ
        </h3>
        <Image
          src={"/images/jpg/catalog/simulator_1.jpg"}
          alt=""
          width={514}
          height={456}
          className="rounded-2xl mx-auto"
        />
        <div className="2xl:self-center flex flex-col justify-between h-full">
          <h3 className="hidden 2xl:block font-bold text-xl">
            Тренежер с полноценной имитацией губ
          </h3>
          <p className="leading-[35px] md:text-lg py-5 md:leading-[37px] 2xl:pt-0">
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
