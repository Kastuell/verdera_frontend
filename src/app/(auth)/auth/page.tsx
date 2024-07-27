import Logo from "@/app/_components/layout-components/Logo";
import { Button } from "@/components/ui";
import Container from "@/components/ui/Container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Авторизация",
};

export default function Page() {
  return (
    <Container className="flex flex-col justify-center items-center gap-12">
      <Logo pathName="" />
      <div className="flex gap-32 mt-10">
        <Link href={"/auth/register"}><Button variant={"black"}>Создать аккаунт</Button></Link>
        <Link href={"/auth/login"}><Button variant={"white"}>Войти в аккаунт</Button></Link>
      </div>
    </Container>
  );
}
