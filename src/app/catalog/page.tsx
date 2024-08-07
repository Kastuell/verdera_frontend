import { CatalogWrapper, Container } from "@/components";
import { productService } from "@/services/product.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог",
};

export default async function Page() {
  const products = await productService.getAll();

  return (
    <Container>
      <CatalogWrapper products={products ?? null} />
    </Container>
  );
}
