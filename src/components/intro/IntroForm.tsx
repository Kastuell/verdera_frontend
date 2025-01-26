"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateDiscount } from "@/hooks/useCreateDiscount";
import { discountSchema } from "@/types/zod/discount.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Head,
} from "../ui";

export const IntroForm = () => {
  const { mutate } = useCreateDiscount();

  const form = useForm<z.infer<typeof discountSchema>>({
    resolver: zodResolver(discountSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof discountSchema>) {
    mutate(data);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container xl:mt-32 mt-10 flex justify-between items-end"
      >
        <div className="flex flex-col md:gap-10 gap-6 xl:basis-[70%] md:py-16">
          <Head className="text-center lg:text-start">Опа!</Head>
          <p className="text-grayish md:text-2xl text-lg text-center lg:text-start">
            Подпишитесь на рассылку и получите скидку 10% на покупку
          </p>
          <div className="flex gap-7 flex-col md:flex-row">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Ваш E-mail"
                      className="border-4 w-full rounded-2xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant={"transparent"}
              className="md:basis-2/3 border-4"
            >
              Отправить
            </Button>
          </div>
        </div>
        <div className="hidden xl:block">
          <Image
            src={"/images/svg/intro/discount.svg"}
            alt=""
            width={250}
            height={250}
          />
        </div>
      </form>
    </Form>
  );
};
