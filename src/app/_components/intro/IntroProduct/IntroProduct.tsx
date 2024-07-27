import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function IntroProduct() {
  return (
    <div className="container mt-16">
      <div className="flex gap-6">
        <div className="relative basis-[45%]">
          <Image
            src={"/images/jpg/catalog/simulator_1.jpg"}
            alt=""
            width={700}
            height={561}
          />
        </div>
        <div className="basis-[55%] flex flex-col justify-between">
          <h3 className="font-bold text-5xl leading-[60px]">
            Тренежер с полноценной имитацией губ
          </h3>
          <p className="text-2xl leading-[46px] text-grayish mt-6">
            Рады представить Вам первый в мире симуляционный тренажер с
            полноценной имитацией губ и их содержимого, позволяющий проводить
            инъекционные манипуляции с введением филлера непосредственно в
            тренажер губ благодаря инновационной технологии производства
          </p>
          <Link href={"catalog/trenazher_s_polnocennoy_imitaciey_gub"}>
            <Button size={"lg"}>Подробнее о товаре</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
