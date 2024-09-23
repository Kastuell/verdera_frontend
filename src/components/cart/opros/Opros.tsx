"use client";

import { Button, Container, Head, RecomendProduct } from "@/components";
import { useCreateOrder } from "@/hooks/useCreateOrder";
import { useProductBySlug } from "@/hooks/useProduct";
import { useCartStore } from "@/lib/cart-store";
import { PlaceOrderT } from "@/services/order.service";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import opros1 from "../../../../public/images/jpg/opros/1.jpeg";

export const Opros = () => {
  const { items } = useCartStore();

  const searchParams = useSearchParams();

  const { mutate } = useCreateOrder();

  const { data } = useProductBySlug("derzhatel_nastolnyy");

  function onSubmit() {
    const searchParamsdata: any = {};
    searchParams.forEach((value, key) => {
      searchParamsdata[key] = value;
    });

    const qwe: PlaceOrderT = {
      items: items.map((item) => ({
        quantity: item.quantity,
        price: item.product.price,
        productId: item.product.id,
      })),
      info: searchParamsdata,
    };

    mutate(qwe);
  }
  return (
    <Container>
      <Head>
        Перед покупкой, рекомендуем ознакомиться со следующей информацией!
      </Head>
      <div className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="py-5">
            <h3 className="font-bold text-2xl lg:text-3xl">
              Для комфортной и продуктивной работы Вам необходимо:
            </h3>
            <ul className="list-decimal list-inside space-y-5 font-bold text-xl lg:text-2xl mt-5">
              <li>
                <span className="font-medium">Телефон с хорошей камерой;</span>
              </li>
              <li>
                <span className="font-medium">
                  Стабильный мобильный интернет или wi-fi;
                </span>
              </li>
              <li>
                <span className="font-medium">
                  Настольный держатель для телефона;
                </span>
              </li>
              <li>
                <span className="font-medium">
                  Расположить телефон паралельно столу на расстоянии 20-30см над
                  рабочей областью, чтобы преподаватель мог видеть и
                  корректировать Вашу работу, а также, чтобы Вы могли видеть,
                  что на экране.
                </span>
              </li>
            </ul>
          </div>
          <Image className="rounded-xl" src={opros1} alt="" />
          {/* <Image className="rounded-xl" src={opros2} alt="" /> */}
          {/* <Image className="rounded-xl" src={opros3} alt="" /> */}
        </div>
        <div className="font-medium mt-10  text-xl lg:text-2xl">
          Держатель для телефона вы можете приобрести в любом магазине
          электроники или на нашем сайте в разделе{" "}
          <Link href={"/catalog"} className="text-greenish underline">
            Расходники
          </Link>
          . Удачи ;)
        </div>
      </div>
      <Button onClick={onSubmit} className="mt-10">
        Оформить заказ
      </Button>
      {data && (
        <div className="mt-20">
          <h3 className="text-3xl font-bold">Рекомендуем к покупке</h3>
          <RecomendProduct item={data} />
        </div>
      )}
    </Container>
  );
};
