"use client";

import { useCompleteLection } from "@/hooks/useCompleteLection";
import { useLectionBySlug } from "@/hooks/useLection";
import { useProfile } from "@/hooks/useProfile";
import { useRouter } from "next/navigation";
import { Button, Head } from "../ui";
import VideoPlayer from "./VideoPlayer";

export const LectionWrapper = ({ slug }: { slug: string }) => {
  const { data, isLoading, isError } = useLectionBySlug(slug);

  const { push } = useRouter();

  const { data: user } = useProfile();

  const { mutate } = useCompleteLection(slug);

  if (user !== undefined && data !== undefined)
    return (
      <div>
        <Head center={false} className="mt-10">
          {data.name}
        </Head>
        <div className="mt-10">
          <VideoPlayer
            source={{
              poster: `/images/jpg/black.jpg`,
              type: "video",
              sources: [
                {
                  src: `/videos/lection/${data.source}.mp4`,
                  type: "video/mp4",
                  size: 720,
                },
              ],
            }}
          />
        </div>

        {user.completeLection.findIndex((item) => item.lectionId == data.id) ==
        -1 ? (
          <Button onClick={() => mutate(slug)} className="mt-20">
            Завершить лекцию
          </Button>
        ) : (
          data.courseChapter.test &&
          !data.courseChapterCompleted && (
            <Button
              className="mt-20"
              onClick={() =>
                push(`/courses/test/${data.courseChapter.test?.slug}`)
              }
            >
              Перейти к тесту
            </Button>
          )
        )}
      </div>
    );
};
