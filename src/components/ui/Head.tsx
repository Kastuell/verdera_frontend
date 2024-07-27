import { cn } from "@/lib/utils";

interface IHead {
  children: string | undefined;
  center?: boolean;
  className?: string;
}

export const Head = (props: IHead) => {
  const { children, className, center = true } = props;

  return (
    <h3
      className={cn({
        ["font-bold text-5xl"]: true,
        ["text-center"]: center,
        [`${className}`]: className,
      })}
    >
      {children}
    </h3>
  );
};
