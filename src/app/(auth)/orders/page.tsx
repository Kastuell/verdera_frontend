import { Container, Head, OrdersPage } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заказы",
};

export default function Page() {
  return (
    <Container>
      <Head className="hidden lg:block" center={false}>
        Мои заказы
      </Head>
      <OrdersPage />
    </Container>
  );
}
