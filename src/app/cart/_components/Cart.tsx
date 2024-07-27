"use client";

import Container from "@/components/ui/Container";
import { useCartStore } from "@/lib/cart-store";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

export default function Cart() {
  const { items } = useCartStore();

  return (
    <Container>{items.length !== 0 ? <FullCart /> : <EmptyCart />}</Container>
  );
}
