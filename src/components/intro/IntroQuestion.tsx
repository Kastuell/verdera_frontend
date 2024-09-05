"use client";

import { Button } from "@/components/ui/button";
import { useSupportUnAuth } from "@/hooks/useSupport";
import { supportUnAuthSchema } from "@/types/zod/support.schema";
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
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "../ui";

export const IntroQuestion = () => {
  const form = useForm<z.infer<typeof supportUnAuthSchema>>({
    resolver: zodResolver(supportUnAuthSchema),
  });

  const { mutate, error } = useSupportUnAuth();

  function onSubmit(data: z.infer<typeof supportUnAuthSchema>) {
    mutate(data);
  }
  const mediaInputs = [
    { svg: "tg", name: "telegram" },
    { svg: "vk", name: "vkontakte" },
    { svg: "whatsapp", name: "whatsapp" },
  ];

  return (
    <div className="bg-primary p-16  text-center mt-20">
      <Form {...form}>
        <h2 className="text-secondary text-5xl py-10 font-bold">
          У вас есть вопросы?
        </h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="xl:w-1/2 mx-auto space-y-5"
        >
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    id="description"
                    placeholder="Тут можно писать..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="messenger"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите соц.сеть для общения" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mediaInputs.map((item) => (
                      <SelectItem value={item.name} key={item.name}>
                        <div className="flex gap-4">
                          <Image
                            alt=""
                            width={20}
                            height={20}
                            className="invert"
                            src={`/images/svg/media/${item.svg}.svg`}
                          />
                          <div>{item.name}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Как в Вам можно обращаться?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Номер телефона, по которому с вами можно связаться"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant={"social_black"} type="submit">
            Отправить
          </Button>
        </form>
      </Form>
    </div>
  );
};
