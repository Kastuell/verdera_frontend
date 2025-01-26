"use client";

export const IntroVideo2 = () => {
  return (
    <>
      {/* <VideoPlayer
        source={{
          type: "video",
          sources: [
            {
              src: `/videos/main.mp4`,
              type: "video/mp4",
              size: 720,
            },
          ],
        }}
      /> */}
      <video
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        className="mt-16 w-full"
      >
        <source src="/videos/main2.mp4" type="video/mp4" />
        {/* <source src="/videos/main.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
    </>
  );
};
