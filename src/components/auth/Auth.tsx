"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useLayoutEffect } from "react";
import { Button, Container } from "../ui";

export const Auth = () => {
  const { push } = useRouter();

  const searchParams = useSearchParams();

  let search = "";

  useLayoutEffect(() => {
    searchParams.forEach((value) => {
      search = encodeURIComponent(value);
    });
  }, []);

  return (
    <Container className="flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mt-10">
        <Button
          onClick={() => push("/auth/register?from=" + search)}
          variant={"black"}
        >
          Создать аккаунт
        </Button>
        <Button
          onClick={() => push("/auth/login?from=" + search)}
          variant={"white"}
        >
          Войти в аккаунт
        </Button>
      </div>
      <br />
      <br />
      <br />
    </Container>
  );
};
