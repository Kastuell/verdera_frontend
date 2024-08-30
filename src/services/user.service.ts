import { axiosInst } from "@/api/interceptors";
import { IProfileForm } from "@/types/auth.types";
import { UserT } from "@/types/user.types";

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

  async createAvatar(formData: FormData) {
    const response = await axiosInst.post(`user/avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
  },
};
