"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  Input,
} from "@/components/ui";
import { useChangePass } from "@/hooks/useChangePass";
import { sendEmailSchema } from "@/types/zod/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const SendEmail = () => {
  const form = useForm<z.infer<typeof sendEmailSchema>>({
    resolver: zodResolver(sendEmailSchema),
  });
  const {mutate} = useChangePass()
  function onSubmit(data: z.infer<typeof sendEmailSchema>) {
    // mutate(data);
  }
  return (
    <Dialog>
      <DialogTrigger className="text-greenish mt-4 hover:underline">
        Восстановить
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogTitle>Ваша почта</DialogTitle>
              <DialogDescription>
                <Input />
                <Button className="lg:mt-20 mt-10 lg:w-1/2" type="submit">
                  Отправить
                </Button>
              </DialogDescription>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
