import { axiosInst } from "@/api/interceptors";
import { OrderResponse, OrderT } from "@/types/order.types";

enum EnumOrderStatus {
  PENDING = "PENDING",
  PAYED = "PAYED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

export type PlaceOrderT = {
  status?: EnumOrderStatus;
  items: OrdetItemDto[];
  info: {};
};

export type OrdetItemDto = {
  quantity: number;
  price: number;
  productId: number;
};

export const orderService = {
  async placeOrder(data: PlaceOrderT) {
    const response = await axiosInst.post<OrderT>(`/order`, data);

    return response.data;
  },

  async getMyOrders() {
    const response = await axiosInst.get<OrderResponse[]>(`/order/my-orders`);

    return response.data;
  },
};
