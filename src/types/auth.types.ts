import { UserT } from "./user.types";

export interface IAuthForm {
  email: string;
  password: string;
}

export interface IAuthRegisterForm {
  name: string;
  family: string;
  surname: string;
  birthday: Date;
  phone: string;
  region: string;
  social: string;
  email: string;
  password: string;
}

export interface IProfileForm {
  name?: string;
  family?: string;
  surname?: string;
  // birthday: Date;
  phone?: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: UserT;
}

export type TypeUserForm = Omit<UserT, "id"> & { password?: string };
