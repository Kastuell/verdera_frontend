export type getCurrentWeeksT = {
  currentWeek: ScheduleWeekT;
  nextWeek: ScheduleWeekT;
};

export type ScheduleWeekT = {
  id: number;
  days: ScheduleDayT[];
  week_start: string;
  week_end: string;
};

export type ScheduleDayT = {
  id: number;
  date: string;
  scheduleWeekId: number;
  time: ScheduleTimeT[];
  day_month: string;
  day_of_week: string;
};

export type ScheduleTimeT = {
  id: number;
  status: ScheduleTimeEnum;
  scheduleDayId: number;
  studentId: null | number;
  teacherId: null | number;
  time: string;
  sheduleDay: {
    date: string;
  };
};

export enum ScheduleTimeEnum {
  "FREE" = "FREE",
  "PENDING" = "PENDING",
  "SELECTED" = "SELECTED",
  "END" = "END",
}
