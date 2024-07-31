import { cn } from "@/lib/utils";
import Image from "next/image";

interface ILogo {
  pathName?: string;
  className?: string;
  long?: boolean;
  sizes?: string;
}

export const Logo = (props: ILogo) => {
  const { pathName = "/", className, long = false, sizes } = props;

  return (
    <div className={cn("relative", sizes)}>
      <Image
        className={cn({
          [`invert ${className}`]: true,
          ["invert-0"]: pathName === "/",
        })}
        src={
          long
            ? "/images/svg/logo_long_white.svg"
            : "/images/svg/logo_short_white.svg"
        }
        alt="logo"
        fill
      />
    </div>
  );
};
