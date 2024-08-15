"use client";

import { useCreateOrder } from "@/hooks/useCreateOrder";
import { useCartStore } from "@/lib/cart-store";
import { PlaceOrderT } from "@/services/order.service";
import { confirmingSchema } from "@/types/zod/confirming.schema";
import { convertPrice } from "@/utils/convertPrice";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormFieldComponent,
  FormItem,
  FormMessage,
  Head,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "../ui";

export const ComfirmingForm = () => {
  const form = useForm<z.infer<typeof confirmingSchema>>({
    resolver: zodResolver(confirmingSchema),
    defaultValues: {
      city: "",
      delivery: "",
      name: "",
      family: "",
      phone: "",
      email: "",
    },
  });

  const [selected, setSelected] = useState<string>("courier-delivery");

  const { items, findSum } = useCartStore();
  const [isClient, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, []);

  console.log(selected);

  const confirmingFormInputs = [
    {
      control: form.control,
      name: "name",
      type: "text",
      placeholder: "Имя",
      isProfile: true,
    },
    {
      control: form.control,
      name: "family",
      type: "text",
      placeholder: "Фамилия",
      isProfile: true,
    },
    {
      control: form.control,
      name: "phone",
      type: "tel",
      placeholder: "Телефон",
      isProfile: true,
    },
    {
      control: form.control,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      isProfile: true,
    },
  ];

  const confirmingFormInputs2 = [
    {
      control: form.control,
      name: "prospect",
      type: "text",
      placeholder: "Улица",
      isProfile: true,
    },
    {
      control: form.control,
      name: "house",
      type: "text",
      placeholder: "Дом",
      isProfile: true,
    },
    {
      control: form.control,
      name: "flat",
      type: "text",
      placeholder: "Квартира",
      isProfile: true,
    },
    {
      control: form.control,
      name: "comment",
      type: "text",
      placeholder: "Комментарий курьеру",
      isProfile: true,
    },
  ];

  const deliveryTiles = [
    { value: "self-delivery", label: "Самовывоз" },
    { value: "courier-delivery", label: "Курьерская доставка" },
  ];

  const { mutate } = useCreateOrder();

  function onSubmit(data: z.infer<typeof confirmingSchema>) {
    const qwe: PlaceOrderT = {
      items: items.map((item) => ({
        quantity: item.quantity,
        price: item.product.price,
        productId: item.product.id,
      })),
      info: data,
    };

    console.log(qwe);
    mutate(qwe);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col xl:flex-row justify-between mt-12 gap-14 2xl:gap-0">
            <div>
              <Head center={false}>Оформление заказа</Head>
              <div className="mx-auto space-y-12 lg:mt-20 mt-10">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          isProfile
                          className="text-greenish placeholder:text-greenish"
                          type="text"
                          placeholder="Укажите населённый пункт"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <h3 className="font-medium lg:text-5xl text-2xl">
                    Способ доставки
                  </h3>
                  <RadioGroup
                    defaultValue="option-one"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
                    value={selected}
                    onValueChange={(item) => setSelected(item)}
                  >
                    {deliveryTiles.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center p-5 border gap-2 border-primary rounded xl"
                      >
                        <RadioGroupItem value={item.value} id={item.value} />
                        <Label htmlFor={item.value} className=" cursor-pointer">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <div className="grid lg:grid-cols-2 gap-8 mt-12">
                    {confirmingFormInputs.map((item) => (
                      <FormFieldComponent
                        className="text-greenish placeholder:text-greenish"
                        control={item.control}
                        name={item.name}
                        isProfile={item.isProfile}
                        type={item.type}
                        key={item.name}
                        placeholder={item.placeholder}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[500px]">
              <h3 className="font-semibold text-4xl">Ваш заказ</h3>

              <div className="flex flex-wrap gap-5 mt-5">
                {items.map((item) => (
                  <Image
                    key={item.product.slug}
                    alt=""
                    src={`/images/jpg/catalog/${item.product.img}.jpg`}
                    width={180}
                    height={180}
                  />
                ))}
              </div>
              <div className="space-y-8 mt-5 lg:text-3xl text-lg">
                <div className="flex justify-between">
                  <div>{items.length} товара на сумму</div>
                  <div className="text-greenish">
                    {isClient && convertPrice(findSum())} &#x20bd;
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Скидка Verdera</div>
                  <div className="text-greenish">0 &#x20bd;</div>
                </div>
                <div className="hidden h-0.5 border-t border-primary lg:block " />
                <div className="flex justify-between">
                  <div className="font-bold">Итого</div>
                  <div className="text-greenish">
                    {isClient && convertPrice(findSum())} &#x20bd;
                  </div>
                </div>
                <Button className="mt-20" type="submit" variant={"black"}>
                  Оформить заказ
                </Button>
                <p className="text-center text-sm leading-8">
                  Нажимая на кнопку «Оформить заказ», вы принимаете условия
                  <a
                    target="_blank"
                    href="/pdf/oferta.pdf"
                    className="text-greenish cursor-pointer"
                  >
                    {" "}
                    Публичной оферты
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};
