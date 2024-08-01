import { ProductT } from "@/types/product.types";
import { CatalogCard } from "./CatalogCard";

interface ICatalogBody {
  products: ProductT[];
}

export const CatalogBody = (props: ICatalogBody) => {
  return (
    <div className="lg:mt-20 mt-10 flex flex-col gap-20">
      {props.products?.map((item) => (
        <CatalogCard key={item.img} item={item} />
      ))}
    </div>
  );
};
