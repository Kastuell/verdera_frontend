"use client";
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
      <div className="text-secondary xl:text-3xl font-bold text-2xl">
        {number} {title}
      </div>
      <div>
        <div
          className={clsx({
            ["xl:text-lg text-sm leading-8 text-secondary font-semibold order-1 mt-2"]:
              true,
          })}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
