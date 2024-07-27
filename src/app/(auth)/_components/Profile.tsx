"use client";

import { Button, Input } from "@/components/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/Container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Head from "@/components/ui/Head";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useProfile } from "@/hooks/useProfile";
import { userService } from "@/services/user.service";
import { IProfileForm } from "@/types/auth.types";
import { profileSchema } from "@/types/zod/profile.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Profile() {
  const { data } = useProfile();
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      birthday: new Date(data !== undefined ? data?.birthday : 0),
      name: data?.name,
      phone: data?.phone,
      family: data?.family,
      surname: data?.surname,
    },
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IProfileForm) => userService.update(data),
    onSuccess() {
      toast({
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">Вы вошли!</code>
          </pre>
        ),
      });
    },
  });

  function onSubmit(data: z.infer<typeof profileSchema>) {
    mutate(data);
  }

  return (
    <Container>
      <Head center={false}>Мои данные</Head>
      <div className="mt-20">
        <div className="relative inline-block">
          <Avatar className="size-48">
            <AvatarImage
              className="z-10"
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Image
            src="/images/svg/profile/edit.svg"
            width={60}
            height={60}
            alt=""
            className="z-50 absolute bottom-2 right-2 hover:opacity-80 active:opacity-100 transition duration-300"
          />
        </div>
        <div>
          <Form {...form}>
            <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mt-20 space-y-16">
                <div className="grid grid-cols-3 gap-16">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="name">Имя</Label>
                        <FormControl>
                          <Input
                            defaultValue={data?.name}
                            id="name"
                            isProfile
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="family"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="family">Фамилия</Label>
                        <FormControl>
                          <Input
                            defaultValue={data?.family}
                            isProfile
                            id="family"
                            {...field}
                          />
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
                        <Label htmlFor="surname">Отчество</Label>
                        <FormControl>
                          <Input
                            defaultValue={data?.surname}
                            isProfile
                            id="surname"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-3 gap-16">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="phone">Телефон</Label>
                        <FormControl>
                          <Input
                            type="tel"
                            defaultValue={data?.phone}
                            isProfile
                            id="phone"
                            autoComplete="new-password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <FormField
                    control={form.control}
                    name="birthday"
                    render={({ field }) => (
                      <FormItem>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                className={cn(
                                  "pl-1 text-left font-normal border-b-2 border-primary bg-transparent text-primary",
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
                          <PopoverContent className="w-auto p-0" align="start">
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
                      </FormItem>
                    )}
                  /> */}
                </div>
                {/* <div className="grid grid-cols-3 gap-16">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="password">Пароль</Label>
                        <FormControl>
                          <Input
                            isProfile
                            id="password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> */}
                <div className="grid grid-cols-3 gap-16">
                  <Button variant={"black"} type="submit">
                    {isPending ? (
                      <Loader className="animate-spin" />
                    ) : (
                      "Сохранить данные"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div></div>
      </div>
    </Container>
  );
}
