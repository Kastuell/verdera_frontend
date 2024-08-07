import { Footer, Header, UpButton } from "@/components";
import { SITE_NAME } from "@/constants/seo.constants";
import { cn } from "@/lib/utils";
import { TanstackProvider } from "@/utils/TanstackProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";
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
        className={cn(
          `flex flex-col justify-between bg-secondary select-none `,
          montserrat.className
        )}
      >
        <TanstackProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TanstackProvider>
        <UpButton />
        <Toaster theme="dark" position="bottom-right" duration={1500} />
      </body>
    </html>
  );
}
