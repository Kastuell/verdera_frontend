import OrdersPage from "@/components/orders/OrdersPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заказы",
};

export default function Page() {
  return <OrdersPage />;
}
