import { Button } from "@/components/ui/button";
import Image from "next/image";

export const IntroQuestion = () => {
  return (
    <div className="bg-primary py-5 md:py-10 text-center lg:text-start mt-20">
      <div className="container grid grid-cols-1 gap-5 lg:grid-cols-5">
        <div className="text-secondary space-y-3 md:space-y-5 lg:self-center lg:col-span-3 xl:space-y-10">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl xl:text-6xl">У вас есть вопросы?</h2>
          <p className="text-xs md:text-lg xl:text-xl">Задавайте вопросы в нашем Telegram или VK</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 lg:col-span-2">
          <Button variant={"social_white"}>
            <Image
              width={60}
              height={60}
              alt=""
              src={"/images/svg/media/vk.svg"}
              className="invert"
            />
            Vkontakte
          </Button>
          <Button variant={"social_black"}>
            <Image
              width={60}
              height={60}
              alt=""
              src={"/images/svg/media/tg.svg"}
            />
            Telegram
          </Button>
        </div>
      </div>
    </div>
  );
};
