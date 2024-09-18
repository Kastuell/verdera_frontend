import { Footer, Header, UpButton } from "@/components";
import { SITE_NAME } from "@/constants/seo.constants";
import { cn } from "@/lib/utils";
import { TanstackProvider } from "@/utils/TanstackProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Стираем вероятность ошибки",
  generator: "Verdera",
  applicationName: "Verdera",
  keywords: [
    "Вердера",
    "Verdera",
    "Владивосток",
    "Контурная Пластика",
    "Онлайн",
    "Силиконовые Губы",
    "Тренажёры в виде губ",
    "анипуляторы в виде губ",
    "Косметология",
    "Инновационная технология",
    "Лучшие курсы",
    "Курсы по контурной пластике губ",
    "вердера.ру",
    "губы",
    "тренажёры",
    "курсы",
    "пластика",
    "медицина",
    "специалисты",
    "врачи",
    "косметология",
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
          `grid grid-cols-1 bg-secondary select-none`,
          montserrat.className
        )}
      >
        <TanstackProvider>
          <Header />
          <main>
            <CustomProvider>{children}</CustomProvider>
          </main>
          <Footer />
        </TanstackProvider>
        <UpButton />
        <Toaster theme="dark" position="bottom-right" duration={5000} />
      </body>
    </html>
  );
}
