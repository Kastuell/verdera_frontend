import { CatalogWrapper, Container } from "@/components";
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
