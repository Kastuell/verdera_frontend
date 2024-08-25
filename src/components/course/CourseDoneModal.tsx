"use client"

import { useRouter } from "next/navigation";
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
} from "../ui";

export const CourseDoneModal = () => {

  const {push} = useRouter()

  return (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger>
        <button className="inline-flex items-center w-full justify-center bg-greenish text-secondary text-xl xl:text-3xl hover:opacity-70 active:opacity-100 xl:h-20 h-16 px-8 rounded-lg">
          Перейти к практике
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="space-y-10">
        <AlertDialogHeader className="space-y-10">
          <AlertDialogTitle className="text-4xl text-center space-y-5">
            <div className="text-greenish">Поздавляем! </div>
            <div>Вы закончили теоритическую часть</div>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-center">
            Теперь вы можете перейти к практике. Для этого выбирите удобное
            время в расписании.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Закрыть</AlertDialogCancel>
          <AlertDialogAction onClick={() => push("schedule")}>Выбрать время</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
