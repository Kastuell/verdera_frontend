"use client";
import { Container, Head, Profile } from "@/components";

export default function Page() {
  return (
    <Container>
      <Head className="hidden lg:block" center={false}>
        Мои данные
      </Head>
      <Profile />
    </Container>
  );
}
