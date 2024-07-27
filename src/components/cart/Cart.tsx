"use client";

import { useCartStore } from "@/lib/cart-store";
import { Container } from "../ui";
import { EmptyCart } from "./EmptyCart";
import { FullCart } from "./FullCart";

export const Cart = () => {
  const { items } = useCartStore();

  return (
    <Container>{items.length !== 0 ? <FullCart /> : <EmptyCart />}</Container>
  );
};
