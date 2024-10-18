import { ProductT } from "@/types/product.types";
import { numberFormat } from "@/utils/numberFormat";
import Image from "next/image";
import { ButtonWrapper } from "./ButtonWrapper";

interface IRecomendProduct {
  item: ProductT;
}

export const RecomendProduct = (props: IRecomendProduct) => {
  const { item } = props;

  return (
    <div className="lg:w-1/2 mt-10 text-center">
      <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-stretch">
        <Image
          alt={item.name}
          src={`/images/jpg/catalog/${item.img}.jpg`}
          width={300}
          height={300}
        />

        <div className="flex flex-col justify-between space-y-3">
          <div className="">
            <h2 className="text-3xl font-bold">{item.name}</h2>
            {item.subName && <div className="">+ {item.subName}</div>}
          </div>
          <div className="">{item.description.firstly}</div>
          <div className="">
            <div className="text-2xl font-bold">
              {numberFormat.format(item.price)}
            </div>
            <ButtonWrapper className="hidden xl:block mt-3" item={item} />
          </div>
        </div>
      </div>
      <ButtonWrapper className="xl:hidden" item={item} />
    </div>
  );
};
