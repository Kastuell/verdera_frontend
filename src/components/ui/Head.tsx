import { cn } from "@/lib/utils";

interface IHead {
  children?: React.ReactNode;
  center?: boolean;
  className?: string;
}

export const Head = (props: IHead) => {
  const { children, className, center = true } = props;

  return (
    <h3
      className={cn({
        ["font-bold text-xl md:text-2xl xl:text-5xl"]: true,
        ["text-center"]: center,
        [`${className}`]: className,
      })}
    >
      {children}
    </h3>
  );
};
