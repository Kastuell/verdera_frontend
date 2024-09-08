"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProfile } from "@/hooks/useProfile";
import { useBurgerMenuStore } from "@/lib/burgerMenu-store";
import { cn } from "@/lib/utils";
import { EnumUserRoles } from "@/types/user.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";

export const ProfileBurgerMenuIcon = () => {
  const { data, error, isLoading } = useProfile();
  const path = usePathname();

  const { changeOpen } = useBurgerMenuStore();

  const burgerItems = [
    { title: "Аккаунт", href: "/profile" },
    { title: "Мои курсы", href: "/courses" },
    { title: "Мои заказы", href: "/orders" },
    { title: "Уведомления", href: "/notifications" },
    { title: "Поддержка", href: "/support" },
    { title: "Расписание", href: "/schedule" },
  ];

  return (
    <>
      {data ? (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-start gap-3">
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
              <div>{data.name}</div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6 text-xl">
              {burgerItems.map((item) =>
                item.title == "Расписание" ? (
                  data.role == EnumUserRoles.ADMIN ||
                  data.role == EnumUserRoles.TEACHER ? (
                    <Link
                      key={`${item.href} wqe`}
                      onClick={changeOpen}
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    ""
                  )
                ) : (
                  <Link
                    key={`${item.href} wqe`}
                    onClick={changeOpen}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <Link onClick={changeOpen} href={"/profile"}>
          Профиль
        </Link>
      )}
    </>
  );
};
