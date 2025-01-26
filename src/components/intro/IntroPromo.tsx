"use client";

import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from "../ui";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useLogin } from "@/hooks/useLogin";

import { useProfile } from "@/hooks/useProfile";
import { loginSchema } from "@/types/zod/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInput, SendEmail } from "../auth";

export const IntroPromo = () => {
  const { push } = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, error, isSuccess } = useLogin();

  useEffect(() => {
    if (isSuccess) push("/profile");
  }, [isSuccess]);

  function onSubmit(data: z.infer<typeof loginSchema>) {
    mutate(data);
  }

  const { data } = useProfile();

  return (
    <>
      {!data && (
        <Container className="xl:mt-5">
          <Dialog>
            <DialogTrigger className="w-full rounded-2xl font-medium transition duration-300 xl:h-18 h-14 px-8 bg-greenish text-secondary text-xl xl:text-2xl hover:opacity-70 active:opacity-100">
              Активировать промокод
            </DialogTrigger>
            <DialogContent className="space-y-5">
              <DialogHeader className="space-y-5">
                <DialogTitle className="text-4xl text-center space-y-2">
                  <div className="text-greenish text-5xl">Активация</div>
                  <div>Промокода</div>
                </DialogTitle>
                <DialogDescription className="text-lg text-center mx-auto">
                  Чтобы воспользоваться вашим промокодом, авторизуйтесь ниже.
                  Далее перейдите в каталог, выберите товар, добавьте его в
                  корзину и напишите промокод при оформлении заказа
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="block">
                <div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <div className="space-y-5">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="E-mail"
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
                                <PasswordInput
                                  placeholder="Пароль"
                                  field={field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button className="mt-5" type="submit">
                        Войти
                      </Button>
                    </form>
                  </Form>
                  <div className="text-center mt-5 text-lg flex flex-col md:flex-row gap-5 justify-center">
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
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Container>
      )}
    </>
  );
};
