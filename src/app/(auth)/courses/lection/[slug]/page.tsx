import { Back, Container } from "@/components";
import { LectionWrapper } from "@/components/lection/LectionWrapper";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { LectionT } from "@/types/lection.types";
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
  const lection: LectionT = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/lection/by-slug/${params.slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().getAll().toString(),
      },
    }
  ).then((res) => res.json());

  return {
    title: lection.name,
    ...NO_INDEX_PAGE,
  };
}

export default async function Page({ params }: Props) {
  return (
    <Container>
      <Back>Назад</Back>
      <LectionWrapper slug={params.slug} />
    </Container>
  );
}
