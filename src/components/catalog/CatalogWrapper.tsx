"use client";

import { ProductT } from "@/types/product.types";
import { useState } from "react";
import { CatalogBody } from "./CatalogBody";
import { CatalogNavbar } from "./CatalogNavbar";

export type SelectedT = {
  name: string;
  slug: string;
};

export const CatalogWrapper = ({ products }: { products: ProductT[] }) => {
  const [selected, setSelected] = useState<SelectedT>({
    name: "Курсы",
    slug: "kursy",
  });

  const selectedProducts = products.filter(
    (item) => item.category.name == selected.name
  );

  return (
    <>
      <CatalogNavbar selected={selected} setSelected={setSelected} />
      <CatalogBody products={selectedProducts} />
    </>
  );
};
