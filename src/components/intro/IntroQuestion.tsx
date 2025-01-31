"use client";

import { Button } from "@/components/ui/button";
import { useSupportUnAuth } from "@/hooks/useSupport";
import { supportUnAuthSchema } from "@/types/zod/support.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import ru from "react-phone-input-2/lang/ru.json";
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
    <div className="bg-primary py-16 px-8 text-center" id="questions">
      <div className="container">
        <Form {...form}>
          <h2 className="text-secondary text-3xl xl:text-4xl py-6 font-bold">
            У вас есть вопросы?
          </h2>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="xl:w-1/3 mx-auto space-y-5"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="border-primary border-2 rounded-2xl placeholder:text-primary text-primary"
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
                      <SelectTrigger className=" rounded-2xl">
                        <SelectValue
                          className="text-start"
                          placeholder="Выберите соц.сеть для общения"
                        />
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
                      placeholder="Как к Вам можно обращаться?"
                      {...field}
                      className="rounded-2xl"
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
                    <PhoneInput
                      localization={ru}
                      disableDropdown={true}
                      showDropdown={false}
                      country="ru"
                      onlyCountries={["ru"]}
                      inputStyle={{
                        color: "#0A0908",
                        borderColor: "#0A0908",
                        borderRadius: "16px",
                        border: "2",
                        background: "#f2f4f3",
                        fontSize: "20px",
                        width: "100%",
                        height: "80px",
                      }}
                      buttonStyle={{
                        borderColor: "#0A0908",
                        borderRadius: "16px 0px 0px 16px",
                        border: "2",
                        background: "#f2f4f3",
                      }}
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      {...field}
                    />
                    {/* <Input
                    type="tel"
                    placeholder="Номер телефона, по которому с Вами можно связаться"
                    {...field}
                  /> */}
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
    </div>
  );
};
