"use client";

import { useCartStore } from "@/lib/cart-store";
import { useEffect } from "react";
import { Container } from "./ui";

export const Thanks = () => {
  const { clear } = useCartStore();
  useEffect(() => {
    clear();
  }, []);

  return (
    <Container className="mx-auto text-center w-full space-y-5">
      <div className="text-3xl md:text-5xl">
        Благодарим за покупку.
        <br /> Менеджер свяжется с Вами в течении суток!
      </div>
      {/* <Link
        href="/courses"
        className="border-b-2 text-3xl inline-block border-greenish text-greenish"
      >
        Курсы
      </Link> */}
    </Container>
  );
};
