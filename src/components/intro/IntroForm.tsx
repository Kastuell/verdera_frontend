import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Head } from "../ui";

export const IntroForm = () => {
  return (
    <form className="container xl:mt-32 mt-10 flex justify-between items-end">
      <div className="flex flex-col md:gap-10 gap-6 xl:basis-[70%] md:py-16">
        <Head className="text-center lg:text-start"> Будь среди первых!</Head>
        <p className="text-grayish md:text-2xl text-lg text-center lg:text-start">
          Подпишитесь на рассылку и получите скидку 10% на покупку курса
        </p>
        <div className="flex gap-7 flex-col md:flex-row">
          <Input placeholder="Ваш E-mail" className="border-4" />
          <Button variant={"transparent"} className="md:basis-2/3 border-4">
            Отправить
          </Button>
        </div>
      </div>
      <div className="hidden xl:block">
        <Image
          src={"/images/svg/intro/discount.svg"}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </form>
  );
};
