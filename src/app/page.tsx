import {
  IntroCourse,
  IntroForm,
  IntroGallery,
  IntroImage,
  IntroProduct,
  IntroPromo,
  IntroQuestion,
  IntroRasrochka,
  IntroTeahers,
  IntroVideo,
} from "@/components/intro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  return (
    <main>
      <IntroImage />
      <IntroProduct />
      <IntroPromo />
      <IntroRasrochka />
      <IntroVideo />
      <IntroCourse />
      <IntroQuestion />
      <IntroTeahers />
      <IntroGallery />
      <IntroForm />
    </main>
  );
}
