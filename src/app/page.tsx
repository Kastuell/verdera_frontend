import {
  IntroCourse,
  IntroForm,
  IntroGallery,
  IntroHello,
  IntroImage,
  IntroProduct,
  IntroPromo,
  IntroQuestion,
  IntroRasrochka,
  IntroTeahers,
  IntroVideo,
  IntroVideo2,
  IntroVideo3,
} from "@/components/intro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  return (
    <main>
      <IntroImage />
      <IntroHello />
      <IntroVideo3 />
      <IntroProduct />
      <IntroPromo />
      <IntroRasrochka />
      <IntroVideo />
      <IntroCourse />
      <IntroPromo />
      <IntroRasrochka />
      <IntroVideo2 />
      <IntroQuestion />
      <IntroTeahers />
      <IntroGallery />
      <IntroForm />
    </main>
  );
}
