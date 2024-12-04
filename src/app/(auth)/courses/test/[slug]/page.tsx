import { Container, TestWrapper } from "@/components";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Тест",
    ...NO_INDEX_PAGE,
  };
}

export default async function Page({ params }: Props) {
  return (
    <Container>
      <TestWrapper slug={params.slug} />
    </Container>
  );
}
