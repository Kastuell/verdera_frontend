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
      <div className="grid grid-cols-1 text-center md:text-start min-[844px]:grid-cols-2 md:gap-5 xl:grid-cols-9 xl:gap-5">
        <div className="mx-auto xl:col-span-4">
          <Image
            alt={item.name}
            src={`/images/jpg/catalog/${item.img}.jpg`}
            width={514}
            height={456}
            className="rounded-2xl min-[588px]:w-[80%] mx-auto md:w-[100%]"
          />
        </div>

        <div className="flex flex-col justify-between xl:col-span-5 ">
          <div className="font-bold py-3 md:py-0 text-lg  xl:text-2xl xl:space-y-2">
            <h2 className="">{item.name}</h2>
            {item.subName && (
              <div className="text-greenish">+ {item.subName}</div>
            )}
          </div>
          <div className="leading-8 text-sm min-[1100px]:text-base min-[1100px]:leading-[2.5rem] ">
            {item.potent}
            <br
              className={clsx({
                hidden: item.potent == null,
              })}
            />
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
