"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, Container } from "../ui";

export const Auth = () => {
  const { refresh } = useRouter();

  useEffect(() => {
    refresh();
  }, []);
  return (
    <Container className="flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mt-10">
        <Link href={"/auth/register"}>
          <Button variant={"black"}>Создать аккаунт</Button>
        </Link>
        <Link href={"/auth/login"}>
          <Button variant={"white"}>Войти в аккаунт</Button>
        </Link>
      </div>
    </Container>
  );
};
