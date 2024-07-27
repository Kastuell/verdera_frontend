"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const Back = ({ children }: { children: React.ReactNode }) => {
  const { back } = useRouter();
  return (
    <div className="flex gap-3 text-2xl">
      <MoveLeft onClick={back} />
      {children}
    </div>
  );
};
