"use client";

import { useSearchParams } from "next/navigation";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "@/types/zod/login.shema";
import { z } from "zod";
import { PasswordInput } from "./auth";
import { useResetPassword } from "@/hooks/useResetPassword";
import { LoaderCircle } from "lucide-react";

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
        </form>
        <h1 className="text-center text-4xl">Придумайте новый пароль</h1>

        <Button disabled={isPending}>
          {isPending ? <LoaderCircle className="animate-spin" /> : "Отправить"}
        </Button>
      </Form>
      ;
    </Container>
  );
};
