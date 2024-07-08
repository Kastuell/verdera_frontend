import CatalogWrapper from "@/app/catalog/_components/CatalogWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Verdera | Каталог",
    description: "Стираем вероятность ошибки",
};



export default function Page() {



    return (
        <div className="container">
            <CatalogWrapper />
        </div>
    )
}