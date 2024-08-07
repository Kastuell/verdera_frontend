"use client";

import { useMyOrders } from "@/hooks/useMyOrders";
import { Container, Head } from "../ui";

export default function OrdersPage() {
  const { data } = useMyOrders();

  console.log(data);

  return (
    <Container>
      <Head className="hidden lg:block" center={false}>
        Мои заказы
      </Head>
      {/* <div>
        {data?.map((item) => (
          <OrdersItem item={item} />
        ))}
      </div> */}
      
    </Container>
  );
}
