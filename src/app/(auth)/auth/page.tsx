import { Button, Container } from "@/components";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Авторизация",
};

export default function Page() {
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
      <br />
      <br />
      <br />
    </Container>
  );
}
