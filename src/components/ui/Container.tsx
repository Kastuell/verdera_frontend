import { cn } from "@/lib/utils";

interface IContainer {
  className?: string;
  children?: React.ReactNode;
}
export const Container = (props: IContainer) => {
  return (
    <div className={cn("container mt-20", props.className)}>
      {props.children}
    </div>
  );
};
