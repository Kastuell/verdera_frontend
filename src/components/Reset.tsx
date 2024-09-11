"use client";

import { useResetPassword } from "@/hooks/useResetPassword";
import { resetPasswordSchema } from "@/types/zod/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInput } from "./auth";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Head,
} from "./ui";

export const Reset = () => {
  const code = useSearchParams().get("code");
  const email = useSearchParams().get("email");

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      confirmPassword: "",
      password: "",
    },
  });

  const { mutate, isPending } = useResetPassword();

  function onSubmit(data: z.infer<typeof resetPasswordSchema>) {
    mutate({
      password: data.password,
      email: email ?? "",
      code: code ?? "",
    });
  }

  return (
    <Container>
      <Head>Придумайте новый пароль</Head>
      <Form {...form}>
        <form className="w-2/3 mx-auto space-y-5 mt-10" onSubmit={form.handleSubmit(onSubmit)}>
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput placeholder="Повторите пароль" field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending}>
            {isPending ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Отправить"
            )}
          </Button>
        </form>
      </Form>
      ;
    </Container>
  );
};
