import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import Confirming from "./_components/Confirming";

export const metadata: Metadata = {
  title: "Оформление заказа",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Confirming />;
}
