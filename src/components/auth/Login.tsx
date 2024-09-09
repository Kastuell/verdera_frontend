"use client";

import {
  Button,
  Container,
  Head,
  Input
} from "@/components/ui";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useLogin } from "@/hooks/useLogin";

import { loginSchema } from "@/types/zod/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInput } from "./PasswordInput";
import { SendEmail } from "./SendEmail";

export const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, error } = useLogin();

  function onSubmit(data: z.infer<typeof loginSchema>) {
    mutate(data);
  }

  return (
    <Container>
      <Head>Авторизация</Head>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="lg:w-1/2 mx-auto space-y-12 lg:mt-20 mt-10">
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordInput placeholder="Пароль" field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center">
            <Button className="lg:mt-20 mt-10 lg:w-1/2" type="submit">
              Войти
            </Button>
          </div>
        </form>
      </Form>
      <div className="text-center lg:mt-16 mt-8 text-lg flex flex-col md:flex-row gap-8 justify-center">
        <div>
          <p>У вас нет аккаунта?</p>
          <p className="text-greenish mt-4 hover:underline">
            <Link href={"/auth/register"} scroll>
              Создать аккаунт
            </Link>
          </p>
        </div>
        <div>
          <p>Забыли пароль?</p>
          <SendEmail />
        </div>
      </div>
    </Container>
  );
};
