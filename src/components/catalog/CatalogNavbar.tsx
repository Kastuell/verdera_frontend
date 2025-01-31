"use client";
import { categoryItems } from "@/app/catalog/category-items";
import { useCatalogNavBarStore } from "@/lib/catalogNavBar-store";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { UnderlineText } from "../UnderlineText";

export const CatalogNavbar = () => {
  const { selected, setSelected } = useCatalogNavBarStore();

  const pathname = usePathname();

  const { push } = useRouter();

  return (
    <ul className="flex flex-col md:flex-row justify-between lg:gap-16 gap-3 font-thin">
      {categoryItems.map((item) => (
        <li
          onClick={() => {
            setSelected({
              name: item.name,
              slug: item.slug,
            });
            pathname.length !== 8 && push("/catalog");
          }}
          className={clsx({
            ["lg:text-3xl md:text-2xl text-base cursor-pointer border border-primary p-5 rounded-xl"]:
              true,
            ["font-medium"]: selected.name === item.name,
          })}
          key={item.name}
        >
          <UnderlineText color="bg-greenish">{item.name}</UnderlineText>
        </li>
      ))}
    </ul>
  );
};
