import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const IntroProduct = () => {
  return (
    <div className="container xl:mt-16">
      <div className="xl:flex gap-6">
        <div className="hidden xl:block relative basis-[45%]">
          <Image
            src={"/images/jpg/catalog/simulator_1.jpg"}
            alt=""
            width={700}
            height={561}
          />
        </div>
        <div className="order-1 md:basis-[55%] flex flex-col justify-between">
          <h3 className="font-bold text-center text-xl md:text-3xl xl:text-5xl xl:leading-[60px] my-10">
            Тренежер с полноценной имитацией губ
          </h3>
          <div className="block xl:hidden relative w-full h-[290px] md:h-[700px]">
            <Image src={"/images/jpg/catalog/simulator_1.jpg"} alt="" fill />
          </div>
          <p className="text-lg md:text-xl xl:text-2xl leading-[40px] md:leading-[46px] text-grayish mt-6 px-3">
            Рады представить Вам первый в мире симуляционный тренажер с
            полноценной имитацией губ и их содержимого, позволяющий проводить
            инъекционные манипуляции с введением филлера непосредственно в
            тренажер губ благодаря инновационной технологии производства
          </p>
          <div className="px-3 mt-6">
            <Link href={"catalog/trenazher_s_polnocennoy_imitaciey_gub"}>
              <Button size={"lg"}>Подробнее о товаре</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
