import { Button } from "@/components/ui";
import Head from "@/components/ui/Head";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="space-y-12 text-center">
      <Head>Корзина пуста</Head>
      <p>Самое время её запонить ;)</p>
      <div>
        <Link href={"/catalog"}>
          <Button variant={"transparent"} className="w-1/2">
            Перейти в каталог
          </Button>
        </Link>
      </div>
    </div>
  );
}
