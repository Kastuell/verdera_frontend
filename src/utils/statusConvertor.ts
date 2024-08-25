import { ScheduleTimeEnum, ScheduleTimeT } from "@/types/schedule.types";
import { UserT } from "@/types/user.types";

export function statusConvertor(time: ScheduleTimeT, user: UserT) {
  switch (time.status) {
    case ScheduleTimeEnum.END:
      return "Завершено";
    case ScheduleTimeEnum.FREE:
      return "Свободно";
    case ScheduleTimeEnum.PENDING:
      return user?.role == "TEACHER" || user?.role == "ADMIN"
        ? "Взять занятие"
        : time.studentId == user.id
        ? "Забронировано"
        : "Занято";
    case ScheduleTimeEnum.SELECTED:
      return "Выбранно";
    default:
      return "";
  }
}
