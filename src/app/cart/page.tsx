import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import EmptyCart from "./_components/EmptyCart";

export const metadata: Metadata = {
  title: "Корзина",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div>
      <EmptyCart />
    </div>
  );
}
