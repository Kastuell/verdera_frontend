import { axiosInst } from "@/api/interceptors";
import { IProfileForm } from "@/types/auth.types";
import { UserT } from "@/types/user.types";
import { File } from "buffer";

export const userService = {
  async getProfile() {
    const response = await axiosInst.get<UserT>("user");

    return response.data;
  },

  async checkEmail(email: string) {
    const response = await axiosInst.get<string>(`user/check-email/${email}`);

    return response.data;
  },

  async update(data: IProfileForm) {
    const response = await axiosInst.put<UserT>("user", data);

    return response.data;
  },

  async createAvatar(avatar: File) {
    const response = await axiosInst.post(`user/avatar`, avatar);

    console.log(response.data);
  },
};
