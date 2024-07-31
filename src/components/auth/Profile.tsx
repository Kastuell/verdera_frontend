"use client";

import { useProfile } from "@/hooks/useProfile";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Container,
  Head
} from "../ui";
import { ProfileForm } from "./ProfileForm";

export const Profile = () => {
  const { data } = useProfile();

  return (
    <Container>
      <Head className="hidden lg:block" center={false}>Мои данные</Head>
      <div className="lg:mt-20 mt-10 flex flex-col justify-center items-center lg:block">
        <div className="relative inline-block">
          <Avatar className="size-48">
            <AvatarImage
              className="z-10"
              src={data?.avatar ? data?.avatar : "/images/png/default_profile.png"}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Image
            src="/images/svg/profile/edit.svg"
            width={60}
            height={60}
            alt=""
            className="z-20 cursor-pointer absolute bottom-2 right-2 hover:opacity-80 active:opacity-100 transition duration-300"
          />
        </div>
        <ProfileForm data={data} />
        <div></div>
      </div>
    </Container>
  );
};
