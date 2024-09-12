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
import { cookies } from 'next/headers'; 
export const metadata: Metadata = {
  title: "Главная",
};

export default function Home() {
  console.log(cookies().getAll())
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
