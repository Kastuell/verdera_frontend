import Link from "next/link";
import { Button, Head } from "../ui";

export const EmptyCart = () => {
  return (
    <div className="space-y-12 text-center">
      <Head>Корзина пуста</Head>
      <p>Самое время её заполнить ;)</p>
      <div>
        <Link href={"/catalog"}>
          <Button variant={"transparent"} className="lg:w-1/2">
            Перейти в каталог
          </Button>
        </Link>
      </div>
    </div>
  );
};
