import { Container, OrdersPage } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заказы",
};

export default function Page() {
  return (
    <Container>
      <OrdersPage />
    </Container>
  );
}
