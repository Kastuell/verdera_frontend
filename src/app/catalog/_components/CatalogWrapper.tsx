"use client";

import { useState } from "react";
import CatalogNavbar from "./CatalogNavbar";

export type SelectedT = {
  name: string
  slug: string
}

interface ICatalogWrapper { }

export default function CatalogWrapper(props: ICatalogWrapper) {
  const { } = props;

  const [selected, setSelected] = useState<SelectedT>({ name: "Курсы", slug: "kursy" });

  return (
    <>
      <CatalogNavbar selected={selected} setSelected={setSelected} />
    </>
  );
}
