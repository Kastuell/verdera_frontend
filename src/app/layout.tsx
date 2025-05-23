import {
  Footer,
  Header,
  Metrika,
  QuestionsButton,
  UpButton,
  VkMetrika,
} from "@/components";
import { SITE_NAME } from "@/constants/seo.constants";
import { cn } from "@/lib/utils";
import { TanstackProvider } from "@/utils/TanstackProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Toaster } from "sonner";
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Verdera | Главная",
//   description: "Стираем вероятность ошибки",
// };

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Стираем вероятность ошибки",
  generator: "Verdera",
  applicationName: "Verdera",
  keywords: [
    "вердера",
    "verdera",
    "владивосток",
    "контурная Пластика",
    "контурная пластика губ",
    "контурная пластика губ владивосток",
    "пластика губ владивосток",
    "пластика губ",
    "онлайн",
    "силиконовые Губы",
    "тренажёры в виде губ",
    "манипуляторы в виде губ",
    "косметология",
    "инновационная технология",
    "лучшие курсы",
    "курсы по контурной пластике губ",
    "вердера.ру",
    "губы",
    "тренажёры",
    "курсы",
    "пластика",
    "медицина",
    "специалисты",
    "врачи",
    "косметология",
    "повышение квалификации",
    "как стать косметологом",
    "лекции по контурной пластике",
    "тесты по контурной пластике",
    "видеозанятия с косметологом",
    "сертификат по контурной пластике",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
          `grid grid-cols-1 bg-secondary select-none scroll-smooth`,
          montserrat.className
        )}
      >
        <TanstackProvider>
          <div className="min-h-screen grid grid-cols-1">
            <Header />
            <main>
              <CustomProvider>{children}</CustomProvider>
            </main>
            <Footer />
          </div>
        </TanstackProvider>
        <UpButton />
        <QuestionsButton />
        <Toaster theme="dark" position="bottom-right" duration={5000} />
        <Suspense>
          <Metrika />
        </Suspense>
        <Suspense>
          <VkMetrika />
        </Suspense>
      </body>
    </html>
  );
}
