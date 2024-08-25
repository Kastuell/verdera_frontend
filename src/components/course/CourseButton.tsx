"use client";

import { useCourseChapters } from "@/hooks/useCourseChapters";
import { useProfile } from "@/hooks/useProfile";
import { CourseT } from "@/types/course.types";
import { useRouter } from "next/navigation";
import { Button } from "../ui";
import { CourseDoneModal } from "./CourseDoneModal";

export const CourseButton = ({ course }: { course: CourseT }) => {
  const { push } = useRouter();

  const { data: chapters } = useCourseChapters(course.slug);

  const curChapter = chapters?.findLastIndex((item) => item.unlocked == true);

  const { data: user } = useProfile();

  if (user !== undefined && chapters !== undefined)
    return (
      <>
        {curChapter !== undefined && curChapter !== -1 ? (
          curChapter == 0 ? (
            <Button
              onClick={() =>
                push(`courses/lection/${chapters[0].lection?.slug}`)
              }
              className="rounded-2xl row-span-4"
            >
              Начать обучение
            </Button>
          ) : (
            <Button
              onClick={() =>
                push(`courses/lection/${chapters[curChapter].lection?.slug}`)
              }
              className="rounded-2xl row-span-4"
            >
              Продолжить обучение
            </Button>
          )
        ) : (
          //     <Button
          //     onClick={() =>
          //       push(`courses/lection/${chapters[0].lection?.slug}`)
          //     }
          //     className="rounded-2xl row-span-4"
          //   >
          //     Перейти к практике
          //   </Button>
          <CourseDoneModal />
        )}
      </>
    );
};
