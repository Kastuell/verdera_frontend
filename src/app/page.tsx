import {
  IntroCourse,
  IntroForm,
  IntroGallery,
  IntroImage,
  IntroProduct,
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
      <IntroVideo />
      <IntroCourse />
      <IntroQuestion />
      <IntroTeahers />
      <IntroGallery />
      <IntroForm />
    </main>
  );
}
