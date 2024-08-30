"use client";

import { useCreateAvatar } from "@/hooks/useCreateAvatar";
import { avatarSchema } from "@/types/zod/profile.shema";
import { Check } from "lucide-react";
import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage, Input, Label } from "../ui";

export const ProfileAvatarChangeIcon = ({
  form,
}: {
  form: UseFormReturn<{
    avatar: any;
}, any, undefined>
}) => {
  const {mutate} = useCreateAvatar({form})
  function onSubmit(data: z.infer<typeof avatarSchema>) {

    const formData = new FormData()


    formData.append("file", data.avatar);

    // console.log(formData.get("profileImage"))

    mutate(formData)

  }
    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="z-20 cursor-pointer absolute bottom-2 right-2 hover:opacity-80 active:opacity-100 transition duration-300">
          {form.getValues().avatar !== undefined ? (
            <button
              type="submit"
              className="bg-greenish rounded-full size-[60px] flex items-center justify-center"
            >
              <Check size={45} />
            </button>
          ) : (
            <FormField
              control={form.control}
              name="avatar"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <Label htmlFor="avatar" className="cursor-pointer">
                    <Image
                      src="/images/svg/profile/edit.svg"
                      width={60}
                      height={60}
                      alt=""
                    />
                  </Label>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      accept="image/png,image/jpg,image/jpeg,image/webp"
                      type="file"
                      id="avatar"
                      onChange={(event) =>
                        onChange(event.target.files && event.target.files[0])
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
      </form>
    </Form>
  );
};
