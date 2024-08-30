import { Back, Container } from "@/components";
import { LectionWrapper } from "@/components/lection/LectionWrapper";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Лекция",
    ...NO_INDEX_PAGE,
  };
}

export default async function Page({ params }: Props) {
  return (
    <Container>
      <Back href="/courses">Назад</Back>
      <LectionWrapper slug={params.slug} />
    </Container>
  );
}
