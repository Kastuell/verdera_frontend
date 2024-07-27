export interface IAuthForm {
  email: string;
  password: string;
}

export interface IProfileForm {
  name: string;
  family: string;
  surname: string;
  birthday: Date;
  phone: string;
}

export interface IUser {
  id: 1;
  email: "sholotun1@mail.ru";
  name: "Тимур";
  surname: "Маргубиддинович";
  family: "Кодиров";
  phone: "89243213835";
  avatar: "";
  birthday: "";
  active: true;
  role: "ADMIN";
  orders: [];
  supports: [];
  completeTests: [];
  completeCourseChapters: [];
  completeCourses: [];
  completeLection: [];
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export type TypeUserForm = Omit<IUser, "id"> & { password?: string };
