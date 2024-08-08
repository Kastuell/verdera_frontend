import { Back, Container, TestWrapper } from "@/components";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { TestT } from "@/types/test.types";
import { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";

type Props = {
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const test: TestT = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/test/by-slug/${params.slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().getAll().toString(),
      },
    }
  ).then((res) => res.json());

  return {
    title: test.name,
    ...NO_INDEX_PAGE,
  };
}

export default async function Page({ params }: Props) {
  return (
    <Container>
      <Back>Назад</Back>
      <TestWrapper slug={params.slug} />
    </Container>
  );
}
