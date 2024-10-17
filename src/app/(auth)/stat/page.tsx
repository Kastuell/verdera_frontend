import { Stat } from "@/components/stat/Stat";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Статистика",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Stat />;
}
