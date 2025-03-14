import { cn } from "@/lib/utils";

interface IUnderlineText {
  className?: string;
  color?: string;
  children?: React.ReactNode;
}

export const UnderlineText = (props: IUnderlineText) => {
  const { className, color = "bg-primary", children } = props;

  return (
    <div className={cn(`group transition duration-300 text-nowrap`, className)}>
      <div className="inline w-auto">{children}</div>
      <span
        className={cn(
          `block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px]`,
          color
        )}
      />
    </div>
  );
};
