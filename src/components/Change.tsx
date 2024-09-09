"use client"

import { useSearchParams } from "next/navigation";

export const Change = () => {
  const code = useSearchParams().get("code");
  return <div></div>;
};
