import { Metadata } from "next";
import IntroCourse from "./_components/intro/introCourse/IntroCourse";
import IntroForm from "./_components/intro/introForm/IntroForm";
import IntroGallery from "./_components/intro/IntroGallery/IntroGallery";
import IntroImage from "./_components/intro/introImage/IntroImage";
import IntroProduct from "./_components/intro/IntroProduct/IntroProduct";
import IntroQuestion from "./_components/intro/introQuestion/IntroQuestion";
import IntroTeahers from "./_components/intro/introTeachers/IntroTeachers";
import IntroVideo from "./_components/intro/introVideo/introVideo";

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
