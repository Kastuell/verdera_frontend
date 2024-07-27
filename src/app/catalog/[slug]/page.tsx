import IntroHead from "@/app/_components/intro/IntroHead";
import Container from "@/components/ui/Container";
import { productService } from "@/services/product.service";
import Image from "next/image";
import CatalogCard from "../_components/CatalogCard";
import ProductTile from "./_components/ProductTile";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await productService.getBySlug(params.slug);

  return (
    <div>
      <Container>
        <CatalogCard item={product} />
      </Container>
      <div className="mt-20">
        <IntroHead title={product.description.about?.title} />
        <Container className="grid grid-cols-3 gap-10">
          <div className="col-span-2 grid grid-cols-2 gap-10">
            {product.description.about?.items.map((item, index) => (
              <ProductTile
                title={item.title}
                description={item.description}
                number={index + 1}
                key={item.description}
              />
            ))}
          </div>
          <div className="relative">
            <Image
              className="rounded-2xl"
              alt=""
              src={
                product.description.about?.img !== undefined
                  ? `/images/jpg/catalog/${product.description.about?.img}.jpg`
                  : ""
              }
              fill
            />
          </div>
        </Container>
      </div>
      <div className="mt-20">
        <IntroHead title={product.description.structure?.title} />
        <Container>
          {product.description.structure?.items[0].quantity == undefined ? (
            <div className="flex flex-col gap-16">
              {product.description.structure?.items.map((item, index) => (
                <div
                  key={item.description}
                  className="flex gap-20 items-center hover:bg-grayish p-3 rounded-2xl group transition duration-300"
                >
                  <div className="text-8xl basis-40 group-hover:invert">
                    0{index + 1}
                  </div>
                  <p className="text-4xl group-hover:invert">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {product.description.structure.items.map((item) => (
                <div className="text-center">
                  <div
                    key={item.description}
                    className="inline-flex items-center justify-center gap-4 hover:bg-greenish p-3 rounded-2xl group transition duration-300"
                  >
                    <p className="font-medium text-2xl">{item.description}</p>
                    <div className="py-1 px-4 text-xs bg-greenish text-secondary rounded-2xl group-hover:bg-secondary group-hover:text-greenish">
                      {item.quantity} шт
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
