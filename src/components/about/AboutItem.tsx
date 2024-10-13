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
        ["lg:h-[450px] h-auto  relative bg-primary"]: true,
        ["rounded-2xl border-2 border-primary p-5"]: img == undefined,
        ["bg-secondary"]: number % 2 == 0,
        ["hidden lg:block"]: img,
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
              ["text-3xl text-secondary font-bold mt-5"]: true,
              [" text-primary"]: number % 2 == 0,
            })}
          >
            {title}
          </h2>
          <p
            className={cn({
              ["lg:text-2xl text-lg leading-9 lg:leading-10 text-secondary mt-5 text-wrap"]: true,
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
