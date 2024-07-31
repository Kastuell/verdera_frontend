"use client"
import { useProductsByCategorySlug } from "@/hooks/useProductsByCategorySlug";
import { CatalogCard } from "./CatalogCard";

interface ICatalogBody {
  slug: string;
}

export const CatalogBody = (props: ICatalogBody) => {
  const { data: products } = useProductsByCategorySlug(props.slug);

  return (
    <div className="lg:mt-20 mt-10 flex flex-col gap-20">
      {products?.map((item) => (
        <CatalogCard key={item.img} item={item} />
      ))}
    </div>
  );
};
