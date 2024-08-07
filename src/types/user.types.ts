import { OrderResponse } from "./order.types";

export type UserT = {
  id: 1;
  email: string;
  name: string;
  surname: string;
  family: string;
  phone: string;
  avatar: string;
  birthday: string;
  active: boolean;
  role: string;
  region: string;
  social: string;
  orders: OrderResponse[];
  supports: [];
  completeTests: [];
  completeCourseChapters: [];
  completeCourses: [];
  completeLection: [];
};
