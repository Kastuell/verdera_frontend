"use client";

import { cn } from "@/lib/utils";
import { authService } from "@/services/auth.service";
import { IAuthRegisterForm } from "@/types/auth.types";
import { registerSchema } from "@/types/zod/register.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Calendar,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Head,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui";

export const Register = () => {
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthRegisterForm) => authService.register(data),
    onSuccess: () => {
      push("/profile");
    },
  });

  const mediaInputs = [
    { svg: "tg", name: "telegram" },
    { svg: "vk", name: "vkontakte" },
    { svg: "whatsapp", name: "whatsapp" },
  ];

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      surname: "",
      family: "",
      password: "",
      region: "",
      social: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof registerSchema>) {
    const { confirmPassword, ...rest } = data;

    mutate(rest);
  }

  return (
    <Container>
      <Head>Регистрация</Head>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
            <FormField
              control={form.control}
              name="family"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input id="NAME_LAST" placeholder="Фамилия" {...field} />
                  </FormControl>
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
                    <Input id="NAME_FIRST" placeholder="Имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input id="NAME_MIDDLE" placeholder="Отчетсво" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          className={cn(
                            "text-left font-normal border-2 border-primary bg-white text-primary",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", {
                              locale: ru,
                            })
                          ) : (
                            <span>Выберите дату рождения</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent  className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date >
                            new Date(
                              new Date().setDate(
                                new Date().getDate() - 18 * 365
                              )
                            ) ||
                          date <
                            new Date(
                              new Date().setDate(
                                new Date().getDate() - 100 * 365
                              )
                            )
                        }
                      />
                    </PopoverContent>
                  </Popover>
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
                    <Input type="tel" placeholder="Телефон" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="social"
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
                        <SelectItem value={item.name}>
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
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="city"
                      placeholder="Напишите город проживания"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Пароль" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Повторите пароль"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center">
            <Button className="lg:mt-20 mt-10 lg:w-1/2" type="submit">
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </Form>
      <div className="text-center lg:mt-16 mt-8 text-lg">
        <p>У вас уже есть аккаунт?</p>
        <p className="text-greenish mt-4">
          <Link href={"/auth/login"} scroll>
            Войти в аккаунт
          </Link>
        </p>
      </div>
    </Container>
  );
};
