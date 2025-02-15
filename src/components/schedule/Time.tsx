"use client";

import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";
import { ScheduleTimeEnum, ScheduleTimeT } from "@/types/schedule.types";
import { statusConvertor } from "@/utils/statusConvertor";
import moment from "moment";

import { useApproveTime } from "@/hooks/useApproveTime";
import { useCancelTime } from "@/hooks/useCancelTime";
import { useEndTime } from "@/hooks/useEndTime";
import { useSelectTime } from "@/hooks/useSelectTime";
import { EnumUserRoles } from "@/types/user.types";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Card,
  ContextMenu,
  ContextMenuTrigger,
} from "../ui";

export const Time = ({ time }: { time: ScheduleTimeT }) => {
  const { status, time: dayTime, studentId, teacherId, sheduleDay, id } = time;
  const { data: user } = useProfile();
  const { mutate: mutateSelectTime } = useSelectTime();
  const { mutate: mutateEndTime } = useEndTime();
  const { mutate: mutateCancelTime } = useCancelTime();
  const { mutate: mutateApproveTime } = useApproveTime();

  if (user)
    return (
      <>
        <AlertDialog>
          <AlertDialogTrigger
            disabled={
              (status !== ScheduleTimeEnum.FREE &&
                user.id !== studentId &&
                user.id !== teacherId) ||
          
              status == ScheduleTimeEnum.END
            }
            className="w-full"
          >
            <ContextMenu>
              <ContextMenuTrigger
                disabled={
                  user.role !== EnumUserRoles.ADMIN &&
                  user.role !== EnumUserRoles.TEACHER
                }
              >
                <Card
                  className={cn({
                    ["rounded-lg flex justify-between py-3 px-2 border-2 border-primary hover:scale-105 duration-300 transition-all cursor-pointer"]:
                      true,
                    ["bg-orangeish border-orangeish"]:
                      status == ScheduleTimeEnum.PENDING &&
                      (user.id == studentId || user.id == teacherId),
                    ["bg-reddish border-reddish hover:scale-100 cursor-not-allowed"]:
                      status !== ScheduleTimeEnum.FREE &&
                      user.id !== studentId &&
                      user.id !== teacherId,
                    ["bg-greenish border-greenish"]:
                      status == ScheduleTimeEnum.SELECTED &&
                      (user.id == studentId || user.id == teacherId),
                    ["bg-grayish border-grayish"]:
                      status == ScheduleTimeEnum.END,
                  })}
                >
                  <div className="font-bold">{dayTime}</div>
                  <div>{statusConvertor(time, user)}</div>
                </Card>
              </ContextMenuTrigger>
            </ContextMenu>
          </AlertDialogTrigger>
          <AlertDialogContent className="space-y-10">
            <>
              {!(status == ScheduleTimeEnum.FREE) && user.id == studentId && user.id !== teacherId  ? (
                <>
                  <AlertDialogHeader className="space-y-10">
                    <AlertDialogTitle className="text-4xl text-center space-y-5">
                      Вы хотите отменить занятие{" "}
                      <span className="text-reddish">
                        {moment(sheduleDay.date).format("DD.MM.YYYY")}
                      </span>{" "}
                      на <span className="text-reddish">{dayTime} </span>?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-lg text-center">
                      Пожалуйства, подтвердите отмену
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Закрыть</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-reddish"
                      onClick={() => mutateCancelTime(id)}
                    >
                      Подтвердить
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </>
              ) : status == ScheduleTimeEnum.PENDING && user.id == teacherId ? (
                <>
                  <AlertDialogHeader>
                    <div className="grid grid-cols-5 items-center">
                      <div className="col-span-1"></div>
                      <AlertDialogTitle className="text-4xl text-center space-y-5 col-span-3">
                        Что вы хотите ?
                      </AlertDialogTitle>
                      <AlertDialogCancel className="p-0 size-min xl:size-min col-span-1 justify-self-end group hover:border-reddish transition-all duration-300">
                        <X className="group-hover:text-reddish transition-all duration-300" />
                      </AlertDialogCancel>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex flex-col gap-5">
                    <AlertDialogCancel onClick={() => mutateCancelTime(id)}>
                      Отменить
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={() => mutateApproveTime(id)}>
                      Подтвердить
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </>
              ) : status == ScheduleTimeEnum.SELECTED &&
                user.id == teacherId ? (
                <>
                  <AlertDialogHeader>
                    <div className="grid grid-cols-5 items-center">
                      <div className="col-span-1"></div>
                      <AlertDialogTitle className="text-4xl text-center space-y-5 col-span-3">
                        Пометить как завершённое?
                      </AlertDialogTitle>
                      <AlertDialogCancel className="p-0 size-min xl:size-min col-span-1 justify-self-end group hover:border-reddish transition-all duration-300">
                        <X className="group-hover:text-reddish transition-all duration-300" />
                      </AlertDialogCancel>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex flex-col gap-5">
                    <AlertDialogCancel onClick={() => mutateCancelTime(id)}>
                      Отменить занятие
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={() => mutateEndTime(id)}>
                      Подтвердить
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </>
              ) : (
                <>
                  <AlertDialogHeader className="space-y-10">
                    <AlertDialogTitle className="text-4xl text-center space-y-5">
                      Вы хотите забронировать{" "}
                      <span className="text-greenish">
                        {moment(sheduleDay.date).format("DD.MM.YYYY")}
                      </span>{" "}
                      на <span className="text-greenish">{dayTime} </span>?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-lg text-center">
                      Пожалуйства, подтвердите запись
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Закрыть</AlertDialogCancel>
                    <AlertDialogAction onClick={() => mutateSelectTime(id)}>
                      Подтвердить
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </>
              )}
            </>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
};
