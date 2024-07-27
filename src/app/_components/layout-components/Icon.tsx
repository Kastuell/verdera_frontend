"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface IIcon {
  isHeader?: boolean;
  src: string;
  alt?: string;
  title?: string;
  size?: number;
}

export default function Icon(props: IIcon) {
  const { isHeader, alt = "", src, size = 40, title = "" } = props;

  const pathName = usePathname();

  return (
    <Image
      className={clsx({
        ["invert"]: isHeader,
        ["invert-0"]: pathName === "/" && isHeader,
      })}
      src={src}
      width={size}
      height={size}
      alt={alt}
      title={title}
    />
  );
}
