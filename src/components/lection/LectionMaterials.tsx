import Image from "next/image";
import { Head } from "../ui";

export const LectionMeterials = ({ materials }: { materials?: string[] }) => {
  return (
    <div className="mt-20">
      <Head center={false}>Материалы к лекции</Head>
      <div className="mt-10">
        {materials?.map((item, index) => (
          <div key={index} className="inline-flex gap-5 hover:underline cursor-pointer">
            <div className="">
              {index} {item}
            </div>
            <Image
              src={"/images/svg/lection/download.svg"}
              alt=""
              width={18}
              height={18}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
