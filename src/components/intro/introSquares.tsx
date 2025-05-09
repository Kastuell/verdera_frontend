import clsx from "clsx";

export const IntroSquares = (props: {
  description: string;
  idx: number;
  title: string;
}) => {
  const { description, idx, title } = props;
  // const [showMore, setShowMore] = useState(false);

  return (
    <div
      // onClick={() => setShowMore(!showMore)}
      className="bg-greenish rounded-2xl p-3 px-0 cursor-pointer relative"
    >
      <div className="text-secondary font-bold text-sm xl:text-xl px-3 min-[1900px]:text-3xl h-10 min-[566px]:h-auto">
        {idx + 1}. {title}
      </div>
      <div>
        <div
          className={clsx({
            ["xl:text-base text-xs min-[1900px]:text-2xl leading-[14px] xl:leading-7 text-secondary mt-2 px-3 mb-4"]:
              true,
          })}
        >
          <div className="">{description}</div>
          {/* <div className="md:hidden">
            {showMore ? (
              description
            ) : (
              <div>
                {description.split(" ").map((val, idx, arr) => {
                  // if (idx >= 9 && arr.length - 9 <= 3) return val;
                  if (idx < 7) {
                    return val + " ";
                  }
                })}
                <span className="font-light text-grayish">...показать</span>
              </div>
            )}
          </div> */}
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
