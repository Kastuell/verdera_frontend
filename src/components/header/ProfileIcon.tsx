"use client"

import { useProfile } from "@/hooks/useProfile";
import { useRouter } from "next/navigation";
import { Icon } from "../Icon";
import { Avatar, AvatarFallback, AvatarImage, Popover, PopoverContent, PopoverTrigger } from "../ui";
import { LogOutIcon } from "./LogOutIcon";

const profileIconItems = [
  { title: "Мои курсы", href: "/courses" },
  { title: "Мои заказы", href: "/orders" },
  { title: "Уведомления", href: "/notifications" },
  { title: "Поддержка", href: "/support" },
];

export const ProfileIcon = () => {
  const { data } = useProfile();

  const { push } = useRouter();

  return (
    <>
      {data ? (
        <Popover>
          <PopoverTrigger asChild className="cursor-pointer">
            <Avatar className="size-16">
              <AvatarImage src={data?.avatar ? data?.avatar : "/images/png/default_profile.png"} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-80 mr-40">
            <div className="grid gap-4">
              <div className="flex justify-between border-b pb-2">
                <a href={"/profile"}>
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none cursor-pointer">
                      {data?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground cursor-pointer">
                      {data?.email}
                    </p>
                  </div>
                </a>
                <LogOutIcon />
              </div>

              <ul className="grid gap-4 font-medium text-lg">
                {profileIconItems.map((item) => (
                  <li
                    key={`${item.title} ewqeqwweq`}
                    onClick={() => push(item.href)}
                    className="border cursor-pointer border-transparent p-2 rounded-xl hover:border-grayish duration-300 transition"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <a href={"/profile"}>
          <Icon
            isHeader={true}
            src={"/images/svg/header/profile.svg"}
            alt={"Профиль"}
            title={"Профиль"}
          />
        </a>
      )}
    </>
  );
};
