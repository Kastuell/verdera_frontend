"use client";

import { useCatalogNavBarStore } from "@/lib/catalogNavBar-store";
import { useRouter } from "next/navigation";
import { Button, Container, Head } from "../ui";

export const IntroHello = () => {
  const { push } = useRouter();

  const { setSelected } = useCatalogNavBarStore();

  return (
    <Container>
      <Head className="font-normal">
        Мы — команда молодых энтузиастов,
        <br /> наивно полагающих, что сможем изменить мир к лучшему!
      </Head>
      <div className="mt-10 text-lg">
        <div className="flex flex-col justify-between items-center gap-6 mt-10 lg:flex-row">
          <Button
            onClick={() => {
              push("/catalog/trenazher_'kishka_s_bryzheykoy'");
              setSelected({ name: "Тренажёры", slug: "trenazhery" });
            }}
            className="bg-nabor bg-cover font-bold bg-opacity-20 relative hover:scale-105"
            size={"square"}
          >
            <div className="absolute top-0 bg-black opacity-40 size-full rounded-2xl z-10" />
            <p className="z-50 cursor-pointer">
              Хирургический
              <br /> набор
            </p>
          </Button>
          <Button
            onClick={() => {
              push("/catalog/trenazher_s_polnocennoy_imitaciey_gub_pro");
              setSelected({ name: "Тренажёры", slug: "trenazhery" });
            }}
            className="bg-lips bg-cover font-bold bg-opacity-20 relative hover:scale-105"
            size={"square"}
          >
            <div className="absolute top-0 bg-black opacity-40 size-full rounded-2xl z-10" />
            <p className="z-50 cursor-pointer">
              Тренажёр губы
              <br /> PRO
            </p>
          </Button>
          <Button
            onClick={() => {
              push("/catalog/konturnaya_plastika_gub");
              setSelected({ name: "Курсы", slug: "kursy" });
            }}
            className="bg-course bg-cover font-bold bg-opacity-20 relative hover:scale-105"
            size={"square"}
          >
            <div className="absolute top-0 bg-black opacity-15 size-full rounded-2xl z-10" />
            <p className="z-50 cursor-pointer">
              Обучающий курс
              <br /> КП
            </p>
          </Button>
        </div>
      </div>
    </Container>
  );
};
