"use client";

import { useProfile } from "@/hooks/useProfile";
import { avatarSchema } from "@/types/zod/profile.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "../ui";
import { ProfileAvatarChangeIcon } from "./ProfileAvatarChangeIcon";
import { ProfileForm } from "./ProfileForm";


export const Profile = () => {
  const { data, error, isLoading } = useProfile();

  const form = useForm<z.infer<typeof avatarSchema>>({
    resolver: zodResolver(avatarSchema),
  });

  if (isLoading) return <Loader className="animate-spin" />;

  if (error) return <div>Ошибка</div>;

  if (data !== undefined)
    return (
      <div className="lg:mt-20 mt-10 flex flex-col justify-center items-center lg:block">
        <div className="relative inline-block">
          <Avatar className="size-48">
            <AvatarImage
              className="z-10"
              src={
                data.avatarId
                  ? `${process.env.NEXT_PUBLIC_API_URL}/local-file/${data.avatarId}`
                  : form.getValues().avatar !== undefined
                  ? `"${form.getValues().avatar}"`
                  : "/images/png/default_profile.png"
              }
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ProfileAvatarChangeIcon form={form} />
        </div>
        <ProfileForm data={data} />
      </div>
    );
};
