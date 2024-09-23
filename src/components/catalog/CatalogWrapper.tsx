"use client";

import { useCatalogNavBarStore } from "@/lib/catalogNavBar-store";
import { ProductT } from "@/types/product.types";
import { CatalogBody } from "./CatalogBody";
import { CatalogNavbar } from "./CatalogNavbar";

export const CatalogWrapper = ({ products }: { products: ProductT[] }) => {
  const { selected } = useCatalogNavBarStore();

  const selectedProducts = products.filter(
    (item) => item.category.name == selected.name
  );

  return (
    <>
      <CatalogNavbar />
      <CatalogBody products={selectedProducts} />
    </>
  );
};
