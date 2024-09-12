"use client";

import {
  Button,
  Container,
  DevicePc,
  DevicePhone,
  Head,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@/components";
import { useCartStore } from "@/lib/cart-store";
import { PlaceOrderT } from "@/services/order.service";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

enum DeviceEnum {
  PHONE = "PHONE",
  PC = "PC",
}

export const Opros = () => {
  const [device, setDevice] = useState<DeviceEnum>();

  const { items } = useCartStore();

  const searchParams = useSearchParams();

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

    console.log(qwe);
  }
  return (
    <Container>
      <Head>
        Перед покупкой необходимо ответить на несколько вопросов для увеличения
        качества обучения.
      </Head>
      <div className="space-y-10 mt-10">
        <div>
          <h3 className="text-lg font-semibold">
            На каком устройстве вы будете проходить обучение и заниматься по
            видеосвязи с преподавателем ?
          </h3>
          <RadioGroup
            //   @ts-ignore
            onValueChange={(e) => setDevice(e)}
            className="gap-10 mx-auto mt-10"
          >
            <div className="flex items-center space-x-2 text-xl">
              <RadioGroupItem value={DeviceEnum.PHONE} id="phone" />
              <Label
                className="cursor-pointer text-wrap flex-1 leading-6"
                htmlFor="phone"
              >
                Телефон
              </Label>
            </div>
            <div className="flex items-center space-x-2 text-xl">
              <RadioGroupItem value={DeviceEnum.PC} id="comp" />
              <Label
                className="cursor-pointer text-wrap flex-1 leading-6"
                htmlFor="comp"
              >
                Компьютер
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="mt-10">
        {device == DeviceEnum.PC ? (
          <DevicePc />
        ) : device == DeviceEnum.PHONE ? (
          <DevicePhone />
        ) : (
          ""
        )}
      </div>
      {device && (
        <Button onClick={onSubmit} className="mt-10">
          Оформить заказ
        </Button>
      )}
    </Container>
  );
};
