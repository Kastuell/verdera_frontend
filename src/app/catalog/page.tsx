import CatalogWrapper from "@/app/catalog/_components/CatalogWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог",
};

export default function Page() {
  return (
    <div className="container">
      <CatalogWrapper />
    </div>
  );
}
