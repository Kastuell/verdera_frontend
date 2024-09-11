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
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@/components/ui";
import { useSendResetPassword } from "@/hooks/useSendResetPassword";
import { sendEmailSchema } from "@/types/zod/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const SendEmail = () => {
  const form = useForm<z.infer<typeof sendEmailSchema>>({
    resolver: zodResolver(sendEmailSchema),
  });
  const { mutate, isSuccess, isPending } = useSendResetPassword();
  function onSubmit(data: z.infer<typeof sendEmailSchema>) {
    mutate(data.email);
  }
  
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [isSuccess]);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="text-greenish mt-4 hover:underline">
        Восстановить
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogTitle>Ваша почта</DialogTitle>
              <DialogDescription className="mt-10">
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
                <Button className="mt-10" disabled={isPending} type="submit">
                  {isPending ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Отправить"
                  )}
                </Button>
              </DialogDescription>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
