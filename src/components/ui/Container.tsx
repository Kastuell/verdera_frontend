import { cn } from "@/lib/utils";

interface IContainer {
  className?: string;
  children?: React.ReactNode;
}
export const Container = (props: IContainer) => {
  return (
    <div className={cn("container xl:mt-20 mt-10", props.className)}>
      {props.children}
    </div>
  );
};
