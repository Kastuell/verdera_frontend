"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const Back = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  const { back, push } = useRouter();
  return (
    <div
      className="text-2xl cursor-pointer inline-block group"
      onClick={href ? () => push(href) : back}
    >
      <div className="flex items-center gap-3">
        <div className="w-10">
          <MoveLeft className="translate-x-4 group-hover:translate-x-0 transition duration-300" />
        </div>
        <div className="group-hover:underline transition duration-300">
          {children}
        </div>
      </div>
    </div>
  );
};
