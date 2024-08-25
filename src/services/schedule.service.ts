import { axiosInst } from "@/api/interceptors";
import { getCurrentWeeksT, ScheduleTimeT } from "@/types/schedule.types";
import { AxiosResponse } from "axios";

export type AddTimeT = {
  dayId: number;
  time: string;
};

export const scheduleService = {
  async getCurrentWeeks() {
    const response = await axiosInst.get<
      getCurrentWeeksT,
      AxiosResponse<getCurrentWeeksT, any>,
      any
    >(`/schedule/week-current`);

    return response.data;
  },

  /// TIME

  async getTimeById(timeId: number) {
    const response = await axiosInst.get<
      ScheduleTimeT[],
      AxiosResponse<ScheduleTimeT[], any>,
      any
    >(`/schedule/time/${timeId}`);

    return response.data;
  },

  async createTime(data: AddTimeT) {
    const response = await axiosInst.post<
      ScheduleTimeT[],
      AxiosResponse<ScheduleTimeT[], any>,
      any
    >(`/schedule/time`, data);

    return response.data;
  },

  async deleteTime(timeId: number) {
    const response = await axiosInst.delete<
      ScheduleTimeT[],
      AxiosResponse<ScheduleTimeT[], any>,
      any
    >(`/schedule/time/${timeId}`);

    return response.data;
  },

  async selectTime(timeId: number) {
    const response = await axiosInst.put<
      ScheduleTimeT[],
      AxiosResponse<ScheduleTimeT[], any>,
      any
    >(`/schedule/time/select/${timeId}`);

    return response.data;
  },

  async endTime(timeId: number) {
    const response = await axiosInst.put<
      ScheduleTimeT[],
      AxiosResponse<ScheduleTimeT[], any>,
      any
    >(`/schedule/time/end/${timeId}`);

    return response.data;
  },

  async approveTime(timeId: number) {
    const response = await axiosInst.put<
      ScheduleTimeT[],
      AxiosResponse<ScheduleTimeT[], any>,
      any
    >(`/schedule/time/approve/${timeId}`);

    return response.data;
  },

  async cancelTime(timeId: number) {
    const response = await axiosInst.put<
      ScheduleTimeT[],
      AxiosResponse<ScheduleTimeT[], any>,
      any
    >(`/schedule/time/cancel/${timeId}`);

    return response.data;
  },
};
