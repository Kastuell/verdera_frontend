"use client";

import { Button, Input } from "@/components/ui";
import Container from "@/components/ui/Container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Head from "@/components/ui/Head";
import { authService } from "@/services/auth.service";
import { IAuthForm } from "@/types/auth.types";
import { loginSchema } from "@/types/zod/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Login() {
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
      push('/profile')
    }
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
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
}
