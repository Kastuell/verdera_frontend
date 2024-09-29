"use client";

import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";
import { EnumUserRoles } from "@/types/user.types";
import { UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui";
import { LogOutIcon } from "./LogOutIcon";

const profileIconItems = [
  { title: "Мои курсы", href: "/courses" },
  { title: "Мои заказы", href: "/orders" },
  // { title: "Уведомления", href: "/notifications" },
  { title: "Поддержка", href: "/support" },
  { title: "Расписание", href: "/schedule" },
];

export const ProfileIcon = () => {
  const { data, error, isLoading } = useProfile();
  const path = usePathname();

  return (
    <>
      {data ? (
        <Popover>
          <PopoverTrigger asChild className="cursor-pointer">
            <Avatar className="size-16">
              <AvatarImage
                className={cn({
                  ["z-10"]: true,
                  ["invert"]: path == "/" && !data.avatarId,
                })}
                src={
                  data.avatarId
                    ? `${process.env.NEXT_PUBLIC_API_URL}/local-file/${data.avatarId}`
                    : "/images/png/default_profile.png"
                }
                alt="@shadcn"
              />
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
                {profileIconItems.map((item) =>
                  item.title == "Расписание" ? (
                    data.role == EnumUserRoles.ADMIN ||
                    data.role == EnumUserRoles.TEACHER ? (
                      <li
                        key={`${item.title} ewqeqwweq`}
                        className="border cursor-pointer border-transparent p-2 rounded-xl hover:border-grayish duration-300 transition"
                      >
                        <a href={item.href}>{item.title}</a>
                      </li>
                    ) : (
                      ""
                    )
                  ) : (
                    <li
                      key={`${item.title} ewqeqwweq`}
                      className="border cursor-pointer border-transparent p-2 rounded-xl hover:border-grayish duration-300 transition"
                    >
                      <a href={item.href}>{item.title}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <a href={"/profile"}>
          <UserRound
            size={50}
            className={cn({ ["text-primary"]: path !== "/" })}
          />
        </a>
      )}
    </>
  );
};
