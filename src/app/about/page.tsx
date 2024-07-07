import AboutItem from "@/components/ui/about/AboutItem";
import { Metadata } from "next";
import { AboutItems } from "./about-items";

export const metadata: Metadata = {
    title: "Verdera | О нас",
    description: "Стираем вероятность ошибки",
};


export default function Page() {

    return (
        <div className="container flex flex-wrap justify-between mt-32">
            {/* <div className="basis-[49.5%] text-primary text-6xl font-medium flex justify-center items-center">
                У Verdera есть
            </div> */}
            {AboutItems.map((item, index) => <AboutItem
                title={item.title}
                description={item.description}
                className={item.className}
                key={index}
                number={item.number}
                numberCn={item.numberCn}
                titleCn={item.titleCn}
                src={item.src} />)}
        </div>
    )
}