import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import Cart from "./_components/Cart";

export const metadata: Metadata = {
  title: "Корзина",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Cart />;
}
