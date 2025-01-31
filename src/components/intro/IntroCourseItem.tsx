import { cn } from "@/lib/utils";

interface IIntroCourseItem {
  title: string;
  description: string;
  index: number;
}

export default function IntroCourseItem(props: IIntroCourseItem) {
  const { title, description, index } = props;

  return (
    <ul
      className={cn({
        ["flex flex-col items-center justify-center gap-2 xl:gap-5"]: true,
        ["md:col-span-2"]: index + 1 == 5 || index + 1 == 6,
        ["md:col-span-2 xl:col-span-4"]: index + 1 == 7,
      })}
    >
      <h3  className={cn({
        ["text-2xl md:text-3xl xl:text-4xl font-bold text-greenish"]: true,
        ["scale-150"]: title == "∞"
      })}>
        {title}
      </h3>
      <p className="text-2xl md:text-3xl text-center flex-none xl:text-nowrap">{description}</p>
    </ul>
  );
}
