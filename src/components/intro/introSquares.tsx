import clsx from "clsx";
import { useState } from "react";

export const IntroSquares = (props: {
  description: string;
  idx: number;
  title: string;
}) => {
  const { description, idx, title } = props;
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      onClick={() => setShowMore(!showMore)}
      className="bg-greenish rounded-2xl p-3 px-0 cursor-pointer relative"
    >
      <div className="text-secondary font-bold text-sm xl:text-xl px-3">
        {idx + 1}. {title}
      </div>
      <div>
        <div
          className={clsx({
            ["xl:text-base text-xs leading-3 xl:leading-8 text-secondary mt-2 px-3 mb-4"]:
              true,
          })}
        >
          {showMore ? (
            description
          ) : (
            <div className="">
              {description.split(" ").map((val, idx, arr) => {
                // if (idx >= 9 && arr.length - 9 <= 3) return val;
                if (idx < 7) {
                  return val + " ";
                }
              })}
              <span className="font-bold">...показать</span>
            </div>
          )}
        </div>
      </div>
      {/* <div className="z-10 flex text-primary justify-center bg-gradient-to-b from-transparent via-secondary to-secondary absolute bottom-0 w-full  rounded-b-2xl">
        ...
      </div> */}
      {/* <div className="font-medium underline text-sm bg-secondary text-grayish absolute bottom-0 left-0 rounded-tr-lg rounded-bl-lg p-1">
        {showMore ? "спрятать" : "показать"}
      </div> */}
    </div>
  );
};
