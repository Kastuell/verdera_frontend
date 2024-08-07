
export type OrderT = {
  id: string;
  status: string;
  amount: {
    value: string;
    currency: string;
  };
  description: string;
  recipient: {
    account_id: string;
    gateway_id: string;
  };
  payment_method: {
    type: string;
    id: string;
    saved: boolean;
  };
  created_at: string;
  confirmation: {
    type: string;
    return_url: string;
    confirmation_url: string;
  };
  test: boolean;
  paid: boolean;
  refundable: boolean;
  metadata: {};
  _instance: {
    shopId: string;
    secretKey: string;
    apiUrl: string;
    debug: boolean;
    timeout: number;
    retryDelay: number;
  };
};

export type OrderResponse = {
  id: number;
  items: OrderItem[];
  total: number;
  status: string;
  info: {
    city: string;
    name: string;
    email: string;
    phone: string;
    family: string;
    delivery: string;
  };
  userId: number;
};

export type OrderItem = {
  id: number;
  createdAt: string;
  quantity: number;
  price: number;
  orderId: number;
  product: {
    id: number,
    name: string,
    subName: string,
    img: string,
    price: number,
  };
};
