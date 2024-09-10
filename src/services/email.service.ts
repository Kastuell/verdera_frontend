import { axiosInst } from "@/api/interceptors";


export const emailService = {
  async sendResetPass(email: string) {
    const response = await axiosInst.post(`/email/change-password/${email}`);

    return response.data;
  },
};
