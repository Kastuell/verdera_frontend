import stiraem_img from "@/../public/images/svg/intro/stiraem.svg";
import verdera_img from "@/../public/images/svg/intro/verdera.svg";
import Image from "next/image";

export const IntroImage = () => {
  // return <div className="bg-introMobile h-full bg-cover bg-no-repeat" />
  return (
    <div className="relative">
      {/* <Image
        className="w-full hidden lg:block"
        src={"/images/jpg/intro.jpg"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      /> */}
      {/* <Image
        className="w-full md:hidden"
        src={"/images/jpg/intro_mobile.jpg"}
        alt=""
        width={375}
        height={820}
        style={{ width: "100%", height: "100%" }}
      /> */}
      {/* <Image
        className="w-full hidden md:block lg:hidden"
        src={"/images/jpg/intro_tablet.jpg"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      /> */}
      <div
        className="bg-bottom bg-cover bg-no-repeat
        bg-introDesktopTest2_mobile
          lg:bg-introDesktopTest3 h-screen"
      >
        <div className="relative h-screen">
          <Image
            src={verdera_img}
            className="absolute bottom-[50%] md:bottom-36 w-11/12 right-2 md:w-[40%] md:right-8 xl:right-10 "
            alt=""
          />
          <Image
            src={stiraem_img}
            className="absolute bottom-[45%] md:bottom-24 w-11/12 right-2 md:w-[40%] md:right-8 xl:right-10 xl:bottom-20 min-[1700px]:bottom-20 min-[2000px]:bottom-10"
            alt=""
          />
        </div>
      </div>
      {/* <div className="size-full top-0 absolute bg-black opacity-30" /> */}
      {/* <div className="bg-introMobile h-[1080px] md:hidden bg-center bg-cover bg-no-repeat"></div>
      <div className="bg-introTablet h-[1200px] hidden md:block lg:hidden bg-center bg-cover bg-no-repeat" />
      <div className="bg-introDesktop h-[1600px] hidden lg:block bg-cover bg-no-repeat" /> */}
    </div>
  );
};
