"use client";

import { IntroSquares } from "./introSquares";

export const IntroVideo3 = () => {
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
        "Легирование сосудов, кишечный шов, анастомозы, энтеритами, формирование резервуаров, все виды кожного шва, шва ПЖК, сосудистого шва.",
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
    <div className="bg-primary text-secondary mt-20">
      <div className="lg:flex lg:flex-row px-5 lg:px-20 py-5 gap-6">
        <div className="mt-10 basis-1/2 lg:basis-2/3">
          <div>
            <h2 className="xl:text-3xl text-xl font-semibold">
              Самый реалистичные хирургические тренажеры кожи с сосудами и кишки
              с брыжейкой!
            </h2>
            <p className="mt-5 xl:text-lg text-base ">
              Отработка навыков никогда не была настолько близка к реальности!
              Тренажеры созданы специально для хирургов и студентов медицинских
              вузов, чтобы практиковать операции в условиях,{" "}
              <b>максимально приближенных к настоящим.</b>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:gap-5 mt-5">
            {items.map((item, idx) => (
              <IntroSquares description={item.description} idx={idx} title={item.title} key={item.title} />
            ))}
          </div>
        </div>
        <div className="relative h-screen basis-1/2 lg:basis-1/3">
          <video
            autoPlay
            muted
            loop
            preload="metadata"
            playsInline
            className="mt-8 h-[90%] left-0 right-0 m-auto lg:left-auto absolute rounded-xl"
          >
            <source src="/videos/main4.mp4" type="video/mp4" />
            {/* <source src="/videos/main.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
