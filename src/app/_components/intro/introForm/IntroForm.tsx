import { Button } from "@/components/ui/button";
import Head from "@/components/ui/Head";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function IntroForm() {
  return (
    <form className="container mt-32 flex justify-between items-end">
      <div className="flex flex-col gap-10 basis-[70%] py-16">
        <Head center={false} children="Будь среди первых!" />
        <p className="text-grayish text-2xl">
          Подпишитесь на рассылку и получите скидку 10% на покупку курса
        </p>
        <div className="flex gap-7">
          <Input placeholder="Ваш E-mail" className="border-4" />
          <Button variant={"transparent"} className="basis-2/3 border-4">
            Отправить
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={"/images/svg/intro/discount.svg"}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </form>
  );
}
