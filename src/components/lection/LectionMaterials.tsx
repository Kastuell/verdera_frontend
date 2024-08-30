"use client"

import Image from "next/image";
import Link from "next/link";
import { Head } from "../ui";

export const LectionMaterials = ({ materials }: { materials?: string[] }) => {
  return (
    <div className="mt-10">
      <Head center={false}>Материалы к лекции</Head>
      <div className="mt-10 inline-flex flex-col gap-5">
        {materials?.map((item, index) => (
          <Link
            href={"/word/lection1.docx"}
            key={index}
            className="inline-flex gap-5 hover:underline cursor-pointer text-xl "
          >
            <div className="">
              {index + 1} {item}
            </div>
            <Image
              src={"/images/svg/lection/download.svg"}
              alt=""
              width={18}
              height={18}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
