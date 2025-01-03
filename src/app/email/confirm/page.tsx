import { Confirm, Container } from "@/components";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Подтверждение аккаунта",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <Container>
      <h1 className="text-center text-4xl">
        Нажмите для подтверждения аккаунта
      </h1>
      <Suspense fallback={<div></div>}>
        <Confirm />
      </Suspense>
    </Container>
  );
}
