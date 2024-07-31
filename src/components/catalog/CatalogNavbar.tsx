"use client"
import { categoryItems } from "@/app/catalog/category-items";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { UnderlineText } from "../UnderlineText";
import { SelectedT } from "./CatalogWrapper";

interface ICatalogNavbar {
  selected: SelectedT;
  setSelected: Dispatch<SetStateAction<SelectedT>>;
}

export const CatalogNavbar = (props: ICatalogNavbar) => {
  const { selected, setSelected } = props;

  return (
    <ul className="flex justify-between lg:gap-16 gap-3 font-thin">
      {categoryItems.map((item) => (
        <li
          onClick={() =>
            setSelected({
              name: item.name,
              slug: item.slug,
            })
          }
          className={clsx({
            ["lg:text-5xl md:text-3xl text-base cursor-pointer"]: true,
            ["font-medium"]: selected.name === item.name,
          })}
          key={item.name}
        >
          <UnderlineText color="bg-greenish" children={`${item.name}`} />
        </li>
      ))}
    </ul>
  );
};
