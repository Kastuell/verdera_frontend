"use client";

import { useProfile } from "@/hooks/useProfile";
import { confirmingSchema } from "@/types/zod/confirming.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormFieldComponent,
  FormItem,
  FormMessage,
  Head,
  Input,
} from "../ui";
import { Order } from "./Order";

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

  const { data } = useProfile();

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

  function onSubmit(data: z.infer<typeof confirmingSchema>) {}

  return (
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
                  Кто заберёт заказ?
                </h3>
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
          <Order />
        </div>
      </form>
    </Form>
  );
};
