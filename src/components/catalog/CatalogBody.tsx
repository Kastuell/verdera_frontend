"use client";

import { ProductT } from "@/types/product.types";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui";
import { CatalogCard } from "./CatalogCard";

interface ICatalogBody {
  products: ProductT[];
}

export const CatalogBody = (props: ICatalogBody) => {
  const { push } = useRouter();
  const searchParams = useSearchParams()
  return (
    <div className="lg:mt-20 mt-10 flex flex-col gap-12 px-5">
      {props.products[0]?.category?.name === "Тренажёры" ? (
        <div className="flex flex-row justify-center gap-5 sm:gap-20">
          <Button
            onClick={() => {
              push("?simulator_category=hirurgiya");
            }}
            className="bg-nabor bg-cover font-bold hover:scale-105 size-[140px] sm:size-[200px] lg:size-[280px]"
          >
            <p className="z-50 cursor-pointer text-sm sm:text-xl">
              Тренажёры для
              <br /> хирургов
            </p>
          </Button>
          <Button
            onClick={() => {
              push("?simulator_category=kosmetologiya");
            }}
            className="bg-lips bg-cover font-bold hover:scale-105 size-[140px] sm:size-[200px] lg:size-[280px]"
          >
            <p className="z-50 cursor-pointer text-sm sm:text-xl">
              Тренажёры для
              <br /> косметологов
            </p>
          </Button>
        </div>
      ) : null}
      {searchParams.get("simulator_category") ? null : <h2 className="text-2xl font-bold">Весь ассортимент</h2>}

      {props.products?.map((item) => (
        <CatalogCard key={item.img} item={item} />
      ))}
    </div>
  );
};
