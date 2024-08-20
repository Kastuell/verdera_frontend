"use client";

import { useSupport } from "@/hooks/useSupport";
import { supportSchema } from "@/types/zod/support.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Label,
  Textarea,
} from "../ui";

export const Support = () => {
  const { mutate } = useSupport();
  const form = useForm<z.infer<typeof supportSchema>>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof supportSchema>) {
    mutate(data);
    form.reset()
  }

  return (
    <Container>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="space-y-10">
                <Label
                  htmlFor="description"
                  className="text-2xl md:text-5xl font-bold"
                >
                  Опишите свою проблему
                </Label>
                <FormControl>
                  <Textarea
                    id="description"
                    placeholder="Тут можно писать..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-10 md:mt-20" type="submit">
            Отправить
          </Button>
        </form>
      </Form>
    </Container>
  );
};
