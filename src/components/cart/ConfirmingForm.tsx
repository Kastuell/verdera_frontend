"use client";

import { useCreateOrder } from "@/hooks/useCreateOrder";
import { useMyDiscount } from "@/hooks/useMyDiscount";
import { usePromo } from "@/hooks/usePromo";
import { useCartStore } from "@/lib/cart-store";
import { PlaceOrderT } from "@/services/order.service";
import { UserT } from "@/types/user.types";
import { confirmingSchema } from "@/types/zod/confirming.schema";
import { numberFormat } from "@/utils/numberFormat";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

export const ComfirmingForm = ({ data }: { data: UserT }) => {
  const { push } = useRouter();

  const form = useForm<z.infer<typeof confirmingSchema>>({
    resolver: zodResolver(confirmingSchema),
    defaultValues: {
      city: "",
      delivery: "Курьерская доставка",
      name: data.name,
      family: data.family,
      phone: data.phone,
      email: data.email,
      // promo: "",
    },
  });

  const [selected, setSelected] = useState<string>("courier-delivery");

  const { items, findSum } = useCartStore();
  const [isClient, setClient] = useState<boolean>(false);

  const { mutate: mut, isSuccess } = usePromo();

  useEffect(() => {
    setClient(true);
  }, []);

  const { data: disc } = useMyDiscount();

  const confirmingFormInputs = [
    {
      control: form.control,
      name: "name",
      type: "text",
      placeholder: "Имя",
      isProfile: true,
      defaultValue: data.name,
    },
    {
      control: form.control,
      name: "family",
      type: "text",
      placeholder: "Фамилия",
      isProfile: true,
      defaultValue: data.family,
    },
    {
      control: form.control,
      name: "phone",
      type: "tel",
      placeholder: "Телефон",
      isProfile: true,
      defaultValue: data.phone,
    },
    {
      control: form.control,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      isProfile: true,
      defaultValue: data.email,
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
    const arrOfKeys = Object.keys(qwe.info);
    // let link = `form?promo=${data.promo}&`;
    let link = `form?`;
    for (let i = 0; i < arrOfKeys.length - 1; i++) {
      // @ts-ignore
      link += `${arrOfKeys[i]}=${form.getValues(arrOfKeys[i])}&`.replace(
        /\s/g,
        ""
      );
    }
    push(link);
  }

  const discount: number = isSuccess
    ? findSum() * 0.3
    : disc
    ? findSum() * 0.1
    : 0;

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
                        // defaultValue={"item.defaultValue"}
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
                    {isClient && numberFormat.format(findSum())}
                  </div>
                </div>
                {/* <div className="flex justify-between gap-3 items-center">
                  <div>Промокод</div>
                  <div className="flex">
                    <FormField
                      control={form.control}
                      name="promo"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input isProfile type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => mut(form.getValues("promo") ?? "")}
                      className="border-2 border-primary py-2 px-3 -mt-2 hover:bg-primary bg-secondary group transition duration-300"
                    >
                      <Check className="group-hover:text-secondary text-primary" />
                    </button>
                  </div>
                </div> */}
                <div className="flex justify-between">
                  <div>Скидка Verdera</div>
                  <div className="text-greenish">
                    {numberFormat.format(discount)}
                  </div>
                </div>
                <div className="hidden h-0.5 border-t border-primary lg:block " />
                <div className="flex justify-between">
                  <div className="font-bold">Итого</div>
                  <div className="text-greenish">
                    {isClient && numberFormat.format(findSum() - discount)}
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
