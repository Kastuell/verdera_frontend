import { cn } from "@/lib/utils";
import Image from "next/image";

interface IAboutItem {
  img?: string;
  title?: string;
  description?: string;
  number: number;
}

export const AboutItem = (props: IAboutItem) => {
  const { img, title, description, number } = props;

  return (
    <div
      className={cn({
        ["relative bg-primary"]: true,
        ["rounded-2xl border-2 border-primary p-4"]: img == undefined,
        ["bg-secondary"]: number % 2 == 0,
        ["hidden min-[1100px]:block"]: img,
      })}
    >
      {img?.length ? (
        <Image src={`/images/webp/about/${img}.webp`} fill alt="" />
      ) : (
        <>
          <span
            className={cn({
              ["rounded-xl bg-secondary text-primary px-3 py-0.5"]: true,
              ["bg-primary text-secondary"]: number % 2 == 0,
            })}
          >
            0{number}
          </span>
          <h2
            className={cn({
              ["text-2xl text-secondary font-bold mt-2"]: true,
              [" text-primary"]: number % 2 == 0,
            })}
          >
            {title}
          </h2>
          <p
            className={cn({
              ["leading-8  text-secondary mt-2 text-wrap"]: true,
              [" text-primary"]: number % 2 == 0,
            })}
          >
            {description}
          </p>
        </>
      )}
    </div>
  );
};
