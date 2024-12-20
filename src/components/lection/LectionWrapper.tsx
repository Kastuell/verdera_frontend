"use client";

import { useCompleteLection } from "@/hooks/useCompleteLection";
import { useLectionBySlug } from "@/hooks/useLection";
import { useProfile } from "@/hooks/useProfile";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Button, Head } from "../ui";
import { LectionMaterials } from "./LectionMaterials";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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
          <ReactPlayer
            config={{
              file: {
                attributes: {
                  poster: `/images/jpg/black.jpg`,
                  controlsList: "nodownload noplaybackrate",
                  onContextMenu: (e: any) => e.preventDefault(),
                },
              },
            }}
            url={[
              { src: `/videos/lection/${data.source}.mp4`, type: "video/mp4" },
            ]}
            width="100%"
            height="100%"
            controls={true}
            className="react-player fixed-bottom"
            // source={{
            //   poster: `/images/jpg/black.jpg`,
            //   type: "video",
            //   sources: [
            //     {
            //       src: `/videos/lection/${data.source}.mp4`,
            //       type: "video/mp4",
            //       size: 720,
            //     },
            //   ],

            // }}
          />
        </div>
        <LectionMaterials />
        {user.completeLection.findIndex((item) => item.lectionId == data.id) ==
        -1 ? (
          <Button
            onClick={() => {
              mutate(slug);
              if (!data.courseChapter.test) push("/courses");
            }}
            className="mt-20"
          >
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
