import {
  CatalogCard,
  CatalogNavbar,
  Container,
  ProductTile,
} from "@/components";
import { IntroHead } from "@/components/intro/IntroHead";
import { productService } from "@/services/product.service";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const product = await productService.getBySlug(params.slug);

  return {
    title: product.name,
    description: product.description.firstly,
  };
}

export default async function Page({ params }: Props) {
  const product = await productService.getBySlug(params.slug);
  return (
    <>
      <div>
        <Container className="space-y-20">
          <CatalogNavbar />

          <CatalogCard item={product} />
        </Container>
        <div className="mt-20">
          <IntroHead title={product.description.about?.title} />
          <Container className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {product.description.about?.items.map((item, index) => (
              <ProductTile
                title={item.title}
                description={item.description}
                number={index + 1}
                key={`${item.description} ${index}`}
              />
            ))}
          </Container>
        </div>
        <div className="mt-20">
          <IntroHead title={product.description.structure?.title} />
          <Container>
            {product.description.structure?.items[0].quantity == undefined ? (
              <div className="flex flex-col lg:gap-8 gap-5">
                {product.description.structure?.items.map((item, index) => (
                  <div
                    key={`${item.description} ${index + 1000}`}
                    className="flex lg:gap-10 xl:gap-20 text-center xl:text-start flex-col lg:flex-row items-center hover:bg-grayish p-3 rounded-2xl group transition duration-300"
                  >
                    <div className="xl:text-7xl lg:text-6xl text-4xl xl:basis-40 group-hover:invert">
                      0{index + 1}
                    </div>
                    <p className="xl:text-3xl lg:text-2xl text-xl group-hover:invert">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col lg:gap-8 gap-5">
                {product.description.structure.items.map((item, index) => (
                  <div
                    key={`${item.description} ${index + 100000}`}
                    className="text-center"
                  >
                    <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 hover:bg-greenish p-3 rounded-2xl group transition duration-300">
                      <p className="font-medium xl:text-2xl text-xl">
                        {item.description}
                      </p>
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
    </>
  );
}
