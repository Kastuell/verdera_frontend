import { axiosInst } from "@/api/interceptors";
import { AllOrdersT, OrderResponse, OrderT } from "@/types/order.types";

enum EnumOrderStatus {
  PENDING = "PENDING",
  PAYED = "PAYED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

export type PlaceOrderT = {
  status?: EnumOrderStatus;
  items: OrderItemDto[];
  info: {};
};

export type OrderItemDto = {
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

  async getAllOrders() {
    const response = await axiosInst.get<AllOrdersT[]>(`/order/all`);

    return response.data;
  },
};
