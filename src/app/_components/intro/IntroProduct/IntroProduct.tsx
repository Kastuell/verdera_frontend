import CustomButton from "@/components/ui/buttons/CustomButton";
import Image from "next/image";

export default function IntroProduct() {
  return (
    <div className="container mt-16">
      <div className="flex gap-6">
        <div className="relative basis-[45%]">
          <Image
            src={"/images/jpg/simulator1.jpg"}
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
          <CustomButton children="Подробнее о товаре" />
        </div>
      </div>
    </div>
  );
}
