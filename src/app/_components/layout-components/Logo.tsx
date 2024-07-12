import clsx from "clsx";
import Image from "next/image";

interface ILogo {
  pathName?: string;
  isFooter?: boolean;
}

export default function Logo(props: ILogo) {
  const { pathName = "/", isFooter = false } = props;

  return (
    <Image
      className={clsx({
        ["invert"]: true,
        ["invert-0"]: pathName === "/",
      })}
      src={
        isFooter || pathName !== "/"
          ? "/images/svg/logo_long_white.svg"
          : "/images/svg/logo_short_white.svg"
      }
      alt="logo"
      width={isFooter || pathName !== "/" ? 245 : 40}
      height={100}
    />
  );
}
