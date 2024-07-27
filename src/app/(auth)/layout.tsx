import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...NO_INDEX_PAGE,
};

interface Ilayout {
  children: Readonly<React.ReactNode>;
}

export default function Layout(props: Ilayout) {
  const { children } = props;

  return <div>{children}</div>;
}
