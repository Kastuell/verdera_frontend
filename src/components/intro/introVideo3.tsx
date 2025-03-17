"use client";

import { useProductBySlug } from "@/hooks/useProduct";
import { useCartStore } from "@/lib/cart-store";
import { useRouter } from "next/navigation";
import { Button, Dialog, DialogContent, DialogTrigger } from "../ui";
import { IntroSquares } from "./introSquares";

export const IntroVideo3 = () => {
  const { push } = useRouter();
  const { addItem } = useCartStore();

  const { data } = useProductBySlug(
    "nabor_verdera_surgical_kit_(kishka_s_bryzzheykoy_+_kozha_s_sosudami_+_podstavka)"
  );

  const items = [
    {
      title: "Анатомически верны",
      description:
        "Послойная структура, сосуды брыжейки, текстура, плотность, волосяной покров, тургор (без излишней эластичности как у конкурентов) - идеально имитируется в наших тренажёрах.",
    },
    {
      title: "Кровоточащие сосуды кожи",
      description:
        "Циркулирующая кровь, сосуды с идентичной эластичностью и прочностью - всё это имитирует естественный процесс операции.",
    },
    {
      title: "Освоение навыков",
      description:
        "Легирование сосудов, кишечный шов, анастомозы, энтеротомии, формирование резервуаров, все виды кожного шва, шва ПЖК, сосудистого шва.",
    },
    {
      title: "Безопастный",
      description:
        "Гипоаллергенный материал без токсичных примесей и запаха. В отличие от реальных органокомплексов - не требует особых условий хранения.",
    },
    {
      title: "Кровоточащая ПЖК",
      description:
        "Высокая детализация структуры, имитация микрососудистого русла позволяет нашей ПЖК кровоточить.",
    },
    {
      title: "Реальные условия работы",
      description:
        "Благодаря мокрым рукам и инструментам вы столкнётесь с настоящими условиями работы, что потребует больше претенциозности концентрации.",
    },
  ];

  return (
    <div>
      <div className="bg-primary text-secondary mt-20">
        <div className="lg:flex lg:flex-row px-5 lg:px-20 py-5 gap-6 items-start content-stretch">
          <div className="mt-10 basis-1/2 lg:basis-2/3 min-[1900px]:basis-1/2">
            <div>
              <h2 className="xl:text-3xl text-xl font-semibold min-[1900px]:text-5xl">
                Самый реалистичные хирургические тренажеры кожи с сосудами и
                кишки с брыжейкой!
              </h2>
              <p className="mt-5 xl:text-lg text-base min-[1900px]:text-2xl">
                Отработка навыков никогда не была настолько близка к реальности!
                Тренажеры созданы специально для хирургов и студентов
                медицинских вузов, чтобы практиковать операции в условиях,{" "}
                <b>максимально приближенных к настоящим.</b>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:gap-5 mt-5">
              {items.map((item, idx) => (
                <IntroSquares
                  description={item.description}
                  idx={idx}
                  title={item.title}
                  key={item.title}
                />
              ))}
              <Button className="col-span-2 md:col-span-1" variant={"social_white"}>Подробнее о товаре</Button>
              <Dialog>
                <DialogTrigger className="col-span-2 md:col-span-1" asChild>
                  <Button variant={"social_white"}>Предзаказ</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md">
                  Вы оформляете предзаказ, что означает что товар будет
                  отправлен к вам в указанные сроки, непозднее 5 апреля 2025
                  года.
                  <br /> Мы вас уведомим в течении дня после оплаты
                  {data && (
                    <Button
                      onClick={() => {
                        addItem(data);
                        push("/cart");
                      }}
                    >
                      Предзаказать
                    </Button>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative flex basis-1/2 lg:basis-1/3 self-stretch min-[1900px]:basis-1/2 mt-8 lg:mt-0">
            <video
              autoPlay
              muted
              loop
              preload="metadata"
              playsInline
              className="m-auto rounded-2xl h-[90%]"
            >
              <source src="/videos/main4.mp4" type="video/mp4" />
              {/* <source src="/videos/main.mp4" type="video/mp4" /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
