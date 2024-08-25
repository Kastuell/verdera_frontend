import { OrderResponse } from "./order.types";

export type UserT = {
  id: 1;
  email: string;
  name: string;
  surname: string;
  family: string;
  phone: string;
  avatarId: string;
  birthday: string;
  active: boolean;
  role: EnumUserRoles;
  region: string;
  social: string;
  orders: OrderResponse[];
  supports: [];
  completeTests: {
    userId: number;
    testId: number;
  }[];
  completeCourseChapters: {
    userId: number;
    courseChapterId: number;
  }[];
  completeCourses: {
    userId: number;
    courseId: number;
  }[];
  completeLection: {
    userId: number;
    lectionId: number;
  }[];
};

export enum EnumUserRoles {
  "USER" = "USER",
  "STUDENT" = "STUDENT",
  "TEACHER" = "TEACHER",
  "ADMIN" = "ADMIN",
}
