import Image from "next/image";

export const IntroImage = () => {
  // return <div className="bg-introDesktop h-full bg-cover bg-no-repeat" />
  return (
    <>
      <Image
        className="w-full hidden lg:block"
        src={"/images/jpg/intro.jpg"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <Image
        className="w-full lg:hidden"
        src={"/images/jpg/intro_mobile.jpg"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </>
  );
};
