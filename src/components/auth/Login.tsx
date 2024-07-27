"use client";

import { Button, Container, Head, Input } from "@/components/ui";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { authService } from "@/services/auth.service";
import { IAuthForm } from "@/types/auth.types";
import { loginSchema } from "@/types/zod/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Login = () => {
  const { push } = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) => authService.login(data),
    onSuccess: () => {
      push("/profile");
    },
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log("qwe");
    mutate(data);
  }

  return (
    <Container>
      <Head>Авторизация</Head>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-1/2 mx-auto space-y-12 mt-20">
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
                    <Input type="password" placeholder="Пароль" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center">
            <Button className="mt-20 w-1/2" type="submit">
              Войти
            </Button>
          </div>
        </form>
      </Form>
      <div className="text-center mt-16 text-lg">
        <p>У вас нет аккаунта?</p>
        <p className="text-greenish mt-4">
          <Link href={"/auth/register"} scroll>
            Создать аккаунт
          </Link>
        </p>
      </div>
    </Container>
  );
};
