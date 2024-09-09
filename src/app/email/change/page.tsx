import { Change, Container } from "@/components";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Смена пароля",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <Container>
      <h1 className="text-center text-4xl">
        Придумайте новый пароль
      </h1>
      <Change />
    </Container>
  );
}
