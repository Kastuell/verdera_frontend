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
        <br /> искренне верящих, что их идеи смогут изменить мир к лучшему!
      </Head>
      <div className="mt-10 text-lg">
        <div className="flex flex-col justify-between items-center gap-6 mt-10 lg:flex-row">
          <Button
            onClick={() => {
              push("/catalog/nabor_verdera_surgical_kit_(kishka_s_bryzzheykoy_+_kozha_s_sosudami_+_podstavka)");
              setSelected({ name: "Тренажёры", slug: "trenazhery" });
            }}
            className="bg-nabor bg-cover font-bold hover:scale-105"
            size={"square"}
          >
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
            className="bg-lips bg-cover font-bold hover:scale-105"
            size={"square"}
          >
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
            className="bg-course bg-cover font-bold  hover:scale-105"
            size={"square"}
          >
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
