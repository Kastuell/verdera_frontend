import {
  IntroCourse,
  IntroForm,
  IntroGallery,
  IntroImage,
  IntroProduct,
  IntroPromo,
  IntroQuestion,
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
      <IntroVideo />
      <IntroCourse />
      <IntroQuestion />
      <IntroTeahers />
      <IntroGallery />
      <IntroForm />
    </main>
  );
}
