import { SITE_NAME } from "@/constants/seo.constants";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./_components/layout-components/footer/Footer";
import Header from "./_components/layout-components/header/Header";
import "./globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Verdera | Главная",
//   description: "Стираем вероятность ошибки",
// };

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Стираем вероятность ошибки",
};

interface Ilayout {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout(props: Ilayout) {
  const { children } = props;

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} flex flex-col justify-between bg-secondary select-none`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
