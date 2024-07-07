import IntroCourse from "@/components/ui/intro/introCourse/IntroCourse";
import IntroForm from "@/components/ui/intro/introForm/IntroForm";
import IntroImage from "@/components/ui/intro/introImage/IntroImage";
import IntroProduct from "@/components/ui/intro/IntroProduct/IntroProduct";
import IntroQuestion from "@/components/ui/intro/introQuestion/IntroQuestion";
import IntroTeahers from "@/components/ui/intro/introTeachers/IntroTeachers";
import IntroVideo from "@/components/ui/intro/introVideo/introVideo";

export default function Home() {
  return (
    <main>
      <IntroImage />
      <IntroProduct />
      <IntroCourse />
      <IntroQuestion />
      <IntroTeahers />
      <IntroVideo />
      <IntroForm />
    </main>
  );
}
