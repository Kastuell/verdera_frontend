"use client"
import clsx from "clsx";

interface IProductTile {
  number?: number;
  description?: string;
  title?: string;
}

export const ProductTile = (props: IProductTile) => {
  const { description, number, title } = props;

  return (
    <div className="bg-greenish rounded-2xl xl:p-5 p-3 xl:pr-16 xl:min-h-48">
      <div className="text-secondary xl:text-3xl font-bold text-2xl">{title}</div>
      <div
        className={clsx({
          ["flex items-center gap-6 justify-center mt-6 xl:mt-0"]:
            title?.length !== undefined && title.length > 1,
        })}
      >
        <div
          className={clsx({
            ["text-secondary text-4xl font-bold order-2"]: true,
          })}
        >
          {number}
        </div>
        <div
          className={clsx({
            ["xl:text-lg text-sm leading-8 text-secondary font-light order-1"]: true,
          })}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
