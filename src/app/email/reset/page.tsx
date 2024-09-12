import { Reset } from "@/components";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Смена пароля",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <Reset />
    </Suspense>
  );
}
