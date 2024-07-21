import { categoryItems } from "@/app/catalog/category-items";
import UnderlineText from "@/components/text/UnderlineText";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { SelectedT } from "./CatalogWrapper";

interface ICatalogNavbar {
  selected: SelectedT
  setSelected: Dispatch<SetStateAction<SelectedT>>;
}

export default function CatalogNavbar(props: ICatalogNavbar) {
  const { selected, setSelected } = props;

  return (
    <ul className="flex gap-16 font-thin">
      {categoryItems.map((item) => (
        <li
          onClick={() => setSelected({
            name: item.name,
            slug: item.slug
          })}
          className={clsx({
            ["text-5xl"]: true,
            ["font-medium"]: selected.name === item.name,
          })}
          key={item.name}
        >
          <UnderlineText color="bg-greenish" children={`${item.name}`} />
        </li>
      ))}
    </ul>
  );
}
