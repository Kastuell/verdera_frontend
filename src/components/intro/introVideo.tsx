export const IntroVideo = () => {
  return (
    <video autoPlay loop muted playsInline className="mt-32 w-full">
      <source src="/videos/main.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
