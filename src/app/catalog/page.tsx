import { CatalogWrapper, Container } from "@/components";
import { ProductT } from "@/types/product.types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог",
};
// axiosInst.get<ProductT[]>(`/product`);
export default async function Page() {
  const products: ProductT[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product`,
    {
      cache: "force-cache",
    }
  ).then((res) => res.json());

  return (
    <Container>
      <CatalogWrapper products={products} />
    </Container>
  );
}
