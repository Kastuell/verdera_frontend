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

export const IntroRasrochka = () => {
  const { push } = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, error, isSuccess } = useLogin();

  const { data } = useProfile();

  useEffect(() => {
    if (isSuccess) push("/profile");
  }, [isSuccess]);

  function onSubmit(data: z.infer<typeof loginSchema>) {
    mutate(data);
  }

  //  Оформить рассрочку

  // Чтобы оформить рассрочку авторизуйтесь ниже, далее перейдите в каталог вбыерите товар, добавиьте в корзину, и нажмите оформить заказ.

  return (
    <Container className="mt-5 xl:mt-5">
      <Dialog>
        <DialogTrigger className="w-full rounded-2xl font-medium transition duration-300 xl:h-18 h-14 px-8 bg-violet text-secondary text-xl xl:text-2xl hover:opacity-70 active:opacity-100">
          Оформить рассрочку
        </DialogTrigger>
        <DialogContent className="space-y-5">
          <DialogHeader className="space-y-5">
            <DialogTitle className="text-4xl text-center space-y-2">
              <div className="text-greenish text-5xl">Оформление</div>
              <div>Рассрочки</div>
            </DialogTitle>
            <DialogDescription className="text-lg text-center mx-auto">
              {data ? (
                <span>
                  Чтобы оформить рассрочку перейдите в каталог, выберите товар,
                  добавьте в корзину и нажмите кнопку ”оформить заказ”.
                </span>
              ) : (
                <span>
                  Чтобы оформить рассрочку авторизуйтесь ниже, далее перейдите в
                  каталог, выберите товар, добавьте в корзину и нажмите кнопку
                  ”оформить заказ”.
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          {data ? (
            ""
          ) : (
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
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};
