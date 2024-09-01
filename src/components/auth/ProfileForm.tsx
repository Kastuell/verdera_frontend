"use client";

import { useProfileUpdate } from "@/hooks/useProfileUpdate";
import { UserT } from "@/types/user.types";
import { profileSchema } from "@/types/zod/profile.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { z } from "zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
} from "../ui";

export const ProfileForm = ({ data }: { data: UserT }) => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      surname: data.surname ?? null,
      family: data.family ?? null,
      name: data.name ?? null,
      phone: data.phone ?? null,
    },
  });

  const { mutate, isPending } = useProfileUpdate();

  function onSubmit(dat: z.infer<typeof profileSchema>) {
    mutate(dat);
  }

  return (
    <Form {...form}>
      <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-20 space-y-16x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="name">Имя</Label>
                  <FormControl>
                    <Input
                      defaultValue={data.name}
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
                      defaultValue={data.family}
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
                      defaultValue={data.surname}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="phone">Телефон</Label>
                  <FormControl>
                    {/* <PhoneInput
                      defaultValue={data.phone}
                      autoComplete="new-password"
                      id="phone"
                      className="border-0"
                      {...field}
                    /> */}
                    <PhoneInput
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                      {...field}
                      inputClass=".phone-input"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
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
  );
};
