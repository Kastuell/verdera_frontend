"use client";

import { useCatalogNavBarStore } from "@/lib/catalogNavBar-store";
import { ProductT } from "@/types/product.types";
import { useSearchParams } from "next/navigation";
import { CatalogBody } from "./CatalogBody";
import { CatalogNavbar } from "./CatalogNavbar";

export const CatalogWrapper = ({ products }: { products: ProductT[] }) => {
  const { selected } = useCatalogNavBarStore();

  const searchParams = useSearchParams()
  const simulator_category = searchParams.get('simulator_category')

  const selectedProducts = products
    .filter((item) => item.category.name == selected.name)
    .filter((item) => {
      if(simulator_category) return item.simulatorCategory?.slug.includes(simulator_category)
      return true
    });
  

  return (
    <>
      <CatalogNavbar />
      <CatalogBody products={selectedProducts} />
    </>
  );
};
