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
    <div className="bg-greenish rounded-2xl p-5 pr-16 min-h-48">
      <div className="text-secondary text-3xl font-bold">{title}</div>
      <div
        className={clsx({
          ["flex items-center gap-6 justify-center"]:
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
            ["text-lg text-grayish font-light order-1"]: true,
          })}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
