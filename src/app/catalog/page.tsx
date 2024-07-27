import CatalogWrapper from "@/app/catalog/_components/CatalogWrapper";
import Container from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог",
};

export default async function Page() {

  return (
    <Container>
      <CatalogWrapper />
    </Container>
  );
}
