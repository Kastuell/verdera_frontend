import { ProductT } from "@/types/product.types";
import { numberFormat } from "@/utils/numberFormat";
import clsx from "clsx";
import Image from "next/image";
import { ButtonWrapper } from "./ButtonWrapper";

interface ICatalogCard {
  item: ProductT;
}

export const CatalogCard = (props: ICatalogCard) => {
  const { item } = props;

  return (
    <div>
      <div className="grid grid-cols-1 text-center md:text-start md:grid-cols-2 md:gap-5 xl:grid-cols-9 xl:gap-5">
        <div className="mx-auto xl:col-span-4">
          <Image
            alt={item.name}
            src={`/images/jpg/catalog/${item.img}.jpg`}
            width={1000}
            height={1000}
            className="rounded-2xl"
          />
        </div>

        <div className="flex flex-col justify-between xl:col-span-5 ">
          <div className="font-bold py-3 md:py-0 text-lg md:text-xl lg:text-3xl xl:text-4xl xl:space-y-5">
            <h2 className="">{item.name}</h2>
            {item.subName && (
              <div className="text-greenish">+ {item.subName}</div>
            )}
          </div>
          <div className="leading-8 text-sm lg:text-xl lg:leading-[2.5rem] xl:text-2xl xl:leading-[3rem] 2xl:leading-[3.5rem]">
            {item.potent}
            <br className={clsx({
              "hidden": item.potent == null
            })} />
            {item.description.firstly}
          </div>
          <div>
            <div className="font-bold text-xl xl:text-2xl">
              {numberFormat.format(item.price)}
            </div>
            <ButtonWrapper className="hidden xl:block" item={item} />
          </div>
        </div>
      </div>
      <ButtonWrapper className="xl:hidden" item={item} />
    </div>
  );
};
