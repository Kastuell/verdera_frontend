import {
  Opros
} from "@/components";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Опрос",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Opros />;
}
