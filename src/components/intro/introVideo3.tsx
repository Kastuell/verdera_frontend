"use client";

export const IntroVideo3 = () => {
  const items = [
    {
      title: "Анатомически верны",
      description:
        "Послойная структура, сосуды брыжейки, текстура, плотность, волосяной покров, тургор( без излишней эластичности как у конкурентов ) - идеально имитируется в наших тренажёрах.",
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
      <div className="xl:flex  xl:flex-row px-5 xl:px-20 py-5">
        <div className="mt-10 basis-1/2">
          <div>
            <h2 className="xl:text-4xl text-2xl font-semibold">
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
          <div className="grid grid-cols-2 gap-3 xl:gap-5 mt-5">
            {items.map((item, idx) => (
              <div key={item.description} className="bg-greenish rounded-2xl p-3 xl:pr-5 xl:min-h-48">
                <div className="text-secondary font-bold text-sm xl:text-xl">
                  {idx + 1}. {item.title}
                </div>
                <div>
                  <div className="xl:text-base text-xs leading-3 xl:leading-8 text-secondary mt-2">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-screen basis-1/2">
          <video
            autoPlay
            muted
            loop
            preload="metadata"
            playsInline
            className="mt-8 h-[90%] left-0 right-0 m-auto xl:left-auto absolute xl:right-[10%] rounded-xl"
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
