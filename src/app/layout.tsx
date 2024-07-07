import Footer from "@/components/ui/layout-components/footer/Footer";
import Header from "@/components/ui/layout-components/header/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verdera | Главная",
  description: "Стираем вероятность ошибки",
};

interface Ilayout {
  children: Readonly<React.ReactNode>
}

export default function RootLayout(props: Ilayout) {

  const { children } = props

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} flex flex-col justify-between bg-secondary`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
