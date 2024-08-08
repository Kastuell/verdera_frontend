"use client";

import { useLectionBySlug } from "@/hooks/useLection";
import { Head } from "../ui";
import { LectionMeterials } from "./LectionMaterials";
import { VideoPlayer } from "./VideoPlayer";

export const LectionWrapper = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useLectionBySlug(slug);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Head center={false} className="mt-10">
        {data?.name}
      </Head>
      <div className="mt-10">
        <VideoPlayer
          source={{
            type: "video",
            sources: [
              {
                src: "/videos/main.mp4",
                type: "video/mp4",
                size: 720,
              },
            ],
          }}
        />
      </div>
      <LectionMeterials materials={data?.materials} />
    </div>
  );
};
