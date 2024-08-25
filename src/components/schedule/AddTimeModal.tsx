"use client";

import { useAddTime } from "@/hooks/useAddTime";
import { AddTimeT } from "@/services/schedule.service";
import { useForm } from "react-hook-form";
import {
    Button,
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    Input,
    Label,
} from "../ui";

import { timeSchema } from "@/types/zod/time.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const AddTimeModal = ({ dayId }: { dayId: number }) => {
  const { mutate } = useAddTime();

  const form = useForm<z.infer<typeof timeSchema>>({
    resolver: zodResolver(timeSchema),
    defaultValues: {
      time: "",
    },
  });

  const onSubmit = (dat: z.infer<typeof timeSchema>) => {
    const data: AddTimeT = {
      dayId: dayId,
      time: dat.time,
    };

    mutate(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-lg border text-center cursor-pointer mt hover:bg-primary hover:text-secondary duration-300 transition-all">
          Добавить время
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <Form {...form}>
          <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-center font-bold text-3xl">
                Добавление времени
              </DialogTitle>
            </DialogHeader>
            <div className="mt-10">
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="time">Имя</Label>
                    <FormControl>
                      <Input type="time" id="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="mt-16">
              <Button type="submit" variant="black">
                Добавить
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
