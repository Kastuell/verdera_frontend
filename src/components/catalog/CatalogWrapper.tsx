"use client";

import { useState } from "react";
import { CatalogBody } from "./CatalogBody";
import { CatalogNavbar } from "./CatalogNavbar";

export type SelectedT = {
  name: string;
  slug: string;
};

export const CatalogWrapper = () => {
  const [selected, setSelected] = useState<SelectedT>({
    name: "Курсы",
    slug: "kursy",
  });

  return (
    <>
      <CatalogNavbar selected={selected} setSelected={setSelected} />
      <CatalogBody slug={selected.slug} />
    </>
  );
};
