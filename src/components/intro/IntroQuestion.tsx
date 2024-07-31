import { Button } from "@/components/ui/button";
import Image from "next/image";

export const IntroQuestion = () => {
  return (
    <div className="bg-primary md:py-20 py-10  text-secondary mt-32">
      <div className="container flex md:flex-col xl:flex-row xl:justify-between flex-wrap">
        <div className="flex flex-col xl:gap-16 gap-6 md:text-center xl:text-start xl:basis-2/3">
          <h2 className="xl:text-7xl text-2xl font-bold md:text-5xl">У вас есть вопросы?</h2>
          <p className="xl:text-2xl text-base md:text-2xl">Задавайте вопросы в нашем Telegram или VK</p>
        </div>
        <div className="flex flex-1 flex-col md:flex-row xl:flex-col xl:basis-1/3 gap-8 mt-10 xl:mt-0">
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
          {/* <IntroQuestionItem
            src="/images/svg/media/vk.svg"
            title="Vkontakte"
            className="bg-secondary text-primary border-2 border-secondary"
          />
          <IntroQuestionItem
            src="/images/svg/media/tg.svg"
            title="Telegram"
            className="border-2 border-secondary bg-primary"
          /> */}
        </div>
      </div>
    </div>
  );
}
