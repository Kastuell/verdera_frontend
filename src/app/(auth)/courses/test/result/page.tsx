import { Result } from "@/components";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Результаты теста",
};

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <Result />
    </Suspense>
  );
}
