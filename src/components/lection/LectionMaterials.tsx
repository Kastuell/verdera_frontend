"use client";

import Link from "next/link";

export const LectionMaterials = () => {
  return (
    <div className="mt-10 text-xl">
      Материалы к лекции находятся в нашем{" "}
      <Link className="text-greenish underline font-medium" target="_blank" href={"https://t.me/Verdera_bot"}>телеграмм боте</Link>
    </div>
  );
};
