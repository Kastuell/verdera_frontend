import { axiosInst } from "@/api/interceptors";

import { IAuthForm, IAuthResponse } from "@/types/auth.types";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

export const authService = {
  async login(data: IAuthForm) {
    const response = await axiosInst.post<IAuthResponse>(`/auth/login`, data);

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response.data;
  },

  async register(data: IAuthForm) {
    const response = await axiosInst.post<IAuthResponse>(
      `/auth/register`,
      data
    );

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response.data;
  },

  async getNewTokens() {
    const response = await axiosInst.post<IAuthResponse>(
      "/auth/login/access-token"
    );

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response.data;
  },

  async getRole() {
    const response = await axiosInst.post<boolean>("/auth/by-accesstoken");

    if (response.data) removeFromStorage();

    return response.data;
  },

  async logout() {
    const response = await axiosInst.post<boolean>("/auth/logout");

    if (response.data) removeFromStorage();

    return response.data;
  },

  async emailConfirm(email: string, code: string) {
    const response = await axiosInst.post<boolean>(
      `/auth/email-confirm/${email}?code=${code}`
    );

    return response.data;
  },

  async resetPassword(data: { password: string; code: string; email: string }) {
    const { password, code, email } = data;
    const response = await axiosInst.post(
      `/auth/change-password?code=${code}&email=${email}`,
      {
        password,
      }
    );

    return response.data;
  },
};
