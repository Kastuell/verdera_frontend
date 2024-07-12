import CustomButton from "@/components/ui/buttons/CustomButton";
import Head from "@/components/ui/Head";

export default function EmptyCart() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Head>Корзина пуста</Head>
      <p>Самое время её запонить ;)</p>
      <CustomButton className="w-1/6">Перейти в каталог</CustomButton>
    </div>
  );
}
