import { categoryItems } from "@/app/catalog/category-items";
import UnderlineText from "@/components/text/UnderlineText";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface ICatalogNavbar {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export default function CatalogNavbar(props: ICatalogNavbar) {
  const { selected, setSelected } = props;

  console.log(selected);

  return (
    <ul className="flex gap-16 font-thin">
      {categoryItems.map((item) => (
        <li
          onClick={() => setSelected(item.name)}
          className={clsx({
            ["text-5xl"]: true,
            ["font-medium"]: selected === item.name,
          })}
          key={item.name}
        >
          <UnderlineText color="bg-greenish" children={`${item.name}`} />
        </li>
      ))}
    </ul>
  );
}
